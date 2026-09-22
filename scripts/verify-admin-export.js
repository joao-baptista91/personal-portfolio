// scripts/verify-admin-export.js
//
// Teste de segurança do admin.html: garante que exportar o data.js através do admin
// (Gestão de Projetos) NUNCA perde informação.
//
// Contexto: o admin.js lê os arrays PROJECTS / CERTIFICATIONS / CONTINUING_EDUCATION /
// RESOURCES de js/data.js para dentro de "rascunhos" (draftProjects, etc.), e o botão
// "Guardar em js/data.js" reescreve o ficheiro inteiro a partir desses rascunhos
// (buildDataJsFile(), em js/admin.js). Isto já causou, no passado, a perda silenciosa de
// campos que existiam em data.js mas que os formatadores do admin.js (formatProject,
// formatCert, etc.) não sabiam escrever de volta — por exemplo, o array RESOURCES
// desapareceu inteiro numa gravação, e os campos demoCredentials/demoNote/aiContribution/
// learning também já foram apagados silenciosamente.
//
// Este script simula esse ciclo completo (carregar data.js → passar pelos rascunhos do
// admin → gerar o novo ficheiro) e compara o resultado com o original, campo a campo.
// Se algum dado desaparecer ou mudar de forma inesperada, o script falha com um erro
// claro em vez de deixar o problema passar despercebido.
//
// Quando correr isto: sempre que acrescentares um campo novo a um projeto/certificação/
// item de formação/recurso em data.js (ex: um novo "aiContribution"), e sempre que
// alterares os formatadores em admin.js (formatProject, formatCert, formatContinuedu,
// formatResource, buildDataJsFile). Isto apanha exatamente o tipo de bug que já
// aconteceu duas vezes neste projeto.
//
// Como correr:
//   node scripts/verify-admin-export.js
//
// Não precisa de nenhuma dependência além do Node (usa só os módulos "vm" e "fs").

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA_JS_PATH = path.join(ROOT, "js", "data.js");
const ADMIN_JS_PATH = path.join(ROOT, "js", "admin.js");

// Stubs mínimos: nem data.js nem admin.js tocam mesmo no DOM só por serem carregados
// (só dentro de funções que este script nunca chama), mas ambos referenciam
// document/window/localStorage/t no corpo do ficheiro (definições de função, listener de
// DOMContentLoaded), por isso têm de existir para o vm.Script não rebentar ao avaliar.
function makeStubContext(extra) {
  const localStorageStub = {
    _data: {},
    getItem(k) { return Object.prototype.hasOwnProperty.call(this._data, k) ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  };
  const documentStub = {
    addEventListener() {},
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    createElement() { return { style: {}, classList: { add() {}, remove() {}, toggle() {} }, addEventListener() {}, appendChild() {}, removeChild() {} }; },
    body: { appendChild() {}, removeChild() {}, style: {} }
  };
  const ctx = {
    console,
    document: documentStub,
    window: {},
    localStorage: localStorageStub,
    navigator: { language: "pt-PT" },
    URL: { createObjectURL() { return ""; }, revokeObjectURL() {} },
    Blob: function Blob() {},
    t: (key) => key,
    ...extra
  };
  ctx.window = ctx;
  const context = vm.createContext(ctx);
  return context;
}

// PROJECTS/CERTIFICATIONS/etc. são declarados com "const" em data.js. Um "const" de topo
// não fica acessível como propriedade do objeto global do contexto (só "var" e funções
// ficam) — por isso, depois de avaliar o ficheiro, corremos um pequeno script extra, no
// mesmo contexto, que copia cada variável para uma propriedade do objeto global, para os
// conseguirmos ler do lado do Node.
const CAPTURE_NAMES = ["PROJECTS", "CERTIFICATIONS", "CONTINUING_EDUCATION", "RESOURCES", "CERT_ICONS"];

function captureGlobals(context) {
  const code = CAPTURE_NAMES
    .map((n) => `this.${n} = (typeof ${n} !== "undefined") ? ${n} : undefined;`)
    .join("\n");
  vm.runInContext(code, context, { filename: "(captura de variáveis)" });
}

function loadArraysFrom(jsSource, label) {
  const context = makeStubContext();
  try {
    vm.runInContext(jsSource, context, { filename: label });
    captureGlobals(context);
  } catch (e) {
    throw new Error(`Falha ao avaliar ${label}: ${e.message}`);
  }
  return context;
}

function deepEqualReport(nameLabel, a, b) {
  const jsonA = JSON.stringify(a);
  const jsonB = JSON.stringify(b);
  return jsonA === jsonB;
}

function main() {
  const originalSource = fs.readFileSync(DATA_JS_PATH, "utf8");
  const adminSource = fs.readFileSync(ADMIN_JS_PATH, "utf8");

  // 1) Carrega o data.js original tal como está no repositório.
  const originalCtx = loadArraysFrom(originalSource, "js/data.js (original)");

  // 2) Simula o admin: carrega data.js + admin.js no mesmo contexto, corre
  //    loadFromLiveData() (o que o admin faz ao abrir a página) e depois
  //    buildDataJsFile() (o que o botão "Guardar" faz).
  const adminCtx = makeStubContext();
  vm.runInContext(originalSource, adminCtx, { filename: "js/data.js (dentro do admin)" });
  vm.runInContext(adminSource, adminCtx, { filename: "js/admin.js" });
  vm.runInContext("loadFromLiveData();", adminCtx);
  const regeneratedSource = vm.runInContext("buildDataJsFile();", adminCtx);

  // 3) Carrega o ficheiro regenerado como se fosse o novo js/data.js.
  const regeneratedCtx = loadArraysFrom(regeneratedSource, "js/data.js (regenerado pelo admin)");

  const checks = [
    ["PROJECTS", "PROJECTS"],
    ["CERTIFICATIONS", "CERTIFICATIONS"],
    ["CONTINUING_EDUCATION", "CONTINUING_EDUCATION"],
    ["RESOURCES", "RESOURCES"],
    ["CERT_ICONS", "CERT_ICONS"]
  ];

  let allOk = true;
  console.log("Verificação do export do admin.js (comparação campo a campo)\n");

  for (const [label, varName] of checks) {
    const before = originalCtx[varName];
    const after = regeneratedCtx[varName];

    if (typeof before === "undefined" && typeof after === "undefined") {
      console.log(`  - ${label}: ausente nos dois lados (ok, nada a comparar)`);
      continue;
    }

    const same = deepEqualReport(label, before, after);
    if (same) {
      console.log(`  ✔ ${label}: idêntico`);
    } else {
      allOk = false;
      console.log(`  ✘ ${label}: DIFERENTE — o admin.js está a perder ou a alterar dados deste array.`);
      console.log(`    Antes:  ${JSON.stringify(before).slice(0, 300)}...`);
      console.log(`    Depois: ${JSON.stringify(after).slice(0, 300)}...`);
    }
  }

  console.log("");
  if (allOk) {
    console.log("Tudo igual — nenhum campo perdido. O admin.js está sincronizado com js/data.js.");
    process.exit(0);
  } else {
    console.log("ATENÇÃO: o export do admin.js não é fiel ao data.js atual — algum campo está a ser perdido ou alterado.");
    console.log("Normalmente isto acontece quando se acrescenta um campo novo a data.js sem atualizar o formatador correspondente em admin.js (formatProject/formatCert/formatContinuedu/formatResource).");
    process.exit(1);
  }
}

main();
