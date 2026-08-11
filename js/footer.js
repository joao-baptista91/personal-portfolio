// Rodapé partilhado pelas 3 páginas do site (index.html, all-projects.html, project.html).
// Para editar o conteúdo do rodapé, basta editar o template abaixo — não é preciso repetir
// a alteração em cada ficheiro HTML.
//
// Como funciona: cada página tem um <div id="site-footer-root"></div> onde este script
// injeta o HTML completo do rodapé. Isto corre de forma síncrona (fora de DOMContentLoaded)
// para garantir que o rodapé já existe no DOM antes do i18n.js aplicar as traduções.

function renderSiteFooter() {
  const root = document.getElementById("site-footer-root");
  if (!root) return;

  root.outerHTML = `
  <footer id="contact" class="site-footer">
    <div class="container">
      <h2 class="section-title">
        <svg class="section-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>
        </svg>
        <span data-i18n="footer.title">Contacto</span>
      </h2>
      <p class="section-subtitle" data-i18n="footer.subtitle">Vamos conversar? As melhores soluções começam sempre numa boa conversa.</p>
    </div>
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-header">
          <span class="logo-mark small">JB</span>
          <div class="footer-brand-name">
            <p class="footer-name">João Baptista</p>
            <p class="footer-role" data-i18n="footer.role">Consultor TI</p>
          </div>
        </div>
        <p class="footer-tagline" data-i18n="footer.tagline">Tecnologia, eficiência e melhoria contínua para criar soluções que fazem a diferença. Sempre a aprender, sempre a evoluir.</p>
        <p class="footer-location">
          <svg class="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Leiria, Portugal
        </p>
      </div>

      <div class="footer-contact">
        <p class="footer-heading" data-i18n="footer.heading">Onde me encontrar:</p>
        <div class="social-links">
          <a class="social-icon" href="mailto:jfcb012@gmail.com" aria-label="Enviar-me um email" title="Enviar-me um email" data-i18n-title="footer.emailLabel">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
          </a>
          <a class="social-icon" href="https://www.linkedin.com/in/jo%C3%A3o-baptista-b2862414b" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a class="social-icon" href="https://github.com/joao-baptista91" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <div class="footer-bottom-tagline">
          <svg class="leaf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13.5 11 11"/>
          </svg>
          <p>Building solutions.<br>Supporting systems.<br>Protecting the <span class="highlight-green">future</span>.</p>
        </div>
        <p class="copyright" data-i18n="footer.copyright">© 2026 João Baptista. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
  `;

  if (typeof applyTranslations === "function") applyTranslations();
}

renderSiteFooter();
