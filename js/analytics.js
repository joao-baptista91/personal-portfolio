// Google Analytics (GA4) com consentimento prévio do visitante.
//
// Como funciona: o script do Google Analytics só é carregado depois de o visitante aceitar
// no aviso que aparece no fundo da página (exigido pelo RGPD, por o Analytics guardar cookies
// no browser). A escolha fica guardada neste browser e pode ser alterada a qualquer momento
// no link "Preferências de cookies" do rodapé.
//
// Para ativar: substituir o valor de GA_MEASUREMENT_ID pelo ID da propriedade GA4 (formato
// "G-XXXXXXXXXX", em Google Analytics > Administração > Streams de dados). Enquanto ficar o
// valor de exemplo, este ficheiro não faz nada: não mostra o aviso nem carrega o Analytics.
//
// A página admin.html não inclui este ficheiro, para as visitas de gestão do próprio site
// não serem contadas como visitas reais.

const GA_MEASUREMENT_ID = "G-5GEK4L2R17";
const ANALYTICS_CONSENT_KEY = "portfolio-analytics-consent";

let analyticsLoaded = false;
let cookieBannerTrigger = null;

function analyticsConfigured() {
  return /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX";
}

function readAnalyticsConsent() {
  try {
    return localStorage.getItem(ANALYTICS_CONSENT_KEY);
  } catch (e) {
    return null;
  }
}

function writeAnalyticsConsent(value) {
  try {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch (e) {
    // sem localStorage (ex: modo privado restrito): a escolha vale só para esta página
  }
}

function analyticsText(key, fallback) {
  if (typeof t === "function") {
    const value = t(key);
    if (value && value !== key) return value;
  }
  return fallback;
}

function loadAnalytics() {
  window["ga-disable-" + GA_MEASUREMENT_ID] = false;
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  // O gtag tem de receber o objeto "arguments" (e não um array), tal como no código oficial.
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(script);
}

// Usado quando o visitante recusa depois de já ter aceitado: desliga o envio de dados nesta
// página e apaga os cookies do Analytics que já tivessem sido criados.
function disableAnalytics() {
  window["ga-disable-" + GA_MEASUREMENT_ID] = true;
  const host = window.location.hostname;
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name === "_ga" || name.indexOf("_ga_") === 0) {
      ["", "; domain=" + host, "; domain=." + host].forEach((domain) => {
        document.cookie = name + "=; Max-Age=0; path=/" + domain;
      });
    }
  });
}

function hideCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.remove();
  document.documentElement.style.scrollPaddingBottom = "";
  if (cookieBannerTrigger) {
    cookieBannerTrigger.focus();
    cookieBannerTrigger = null;
  }
}

function showCookieBanner(trigger) {
  if (document.getElementById("cookie-banner")) return;
  cookieBannerTrigger = trigger || null;

  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.className = "cookie-banner";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-labelledby", "cookie-banner-title");
  banner.innerHTML = `
    <p class="cookie-banner-title" id="cookie-banner-title" data-i18n="cookies.title">${analyticsText("cookies.title", "Estatísticas de visitas")}</p>
    <p class="cookie-banner-text" data-i18n="cookies.text">${analyticsText("cookies.text", "Este site usa o Google Analytics para contar visitas de forma agregada.")}</p>
    <div class="cookie-banner-actions">
      <button type="button" class="btn btn-outline" id="cookie-reject">
        <span data-i18n="cookies.reject">${analyticsText("cookies.reject", "Recusar")}</span>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <button type="button" class="btn btn-outline" id="cookie-accept">
        <span data-i18n="cookies.accept">${analyticsText("cookies.accept", "Aceitar")}</span>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </button>
    </div>
  `;
  document.body.appendChild(banner);

  // Evita que o aviso (fixo no fundo do ecrã) tape o elemento com foco ao navegar por
  // teclado (WCAG 2.4.11, "Focus Not Obscured").
  document.documentElement.style.scrollPaddingBottom = (banner.offsetHeight + 24) + "px";

  document.getElementById("cookie-accept").addEventListener("click", () => {
    writeAnalyticsConsent("granted");
    loadAnalytics();
    hideCookieBanner();
  });

  document.getElementById("cookie-reject").addEventListener("click", () => {
    writeAnalyticsConsent("denied");
    disableAnalytics();
    hideCookieBanner();
  });

  // Só move o foco para o aviso quando foi aberto a pedido (link do rodapé); no primeiro
  // carregamento da página não rouba o foco a quem está a começar a navegar.
  if (cookieBannerTrigger) document.getElementById("cookie-reject").focus();
}

function initAnalytics() {
  if (!analyticsConfigured()) return;

  const manageLink = document.getElementById("cookie-preferences");
  if (manageLink) {
    manageLink.hidden = false;
    manageLink.addEventListener("click", () => showCookieBanner(manageLink));
  }

  const consent = readAnalyticsConsent();
  if (consent === "granted") {
    loadAnalytics();
  } else if (consent !== "denied") {
    showCookieBanner();
  }
}

document.addEventListener("DOMContentLoaded", initAnalytics);
