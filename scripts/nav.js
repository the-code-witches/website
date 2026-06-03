;(function () {
  const isBook = window.location.pathname.split('/').pop() === 'book.html'
  const base   = isBook ? 'index.html' : ''

  const header = document.querySelector('.site-header')
  if (!header) return

  header.innerHTML = `
    <nav class="nav">
      <div class="nav__left">
        <a class="nav__logo" href="${isBook ? 'index.html' : '#hero'}">
          <img src="assets/logo.svg" alt="Home" />
        </a>
        <a class="nav__link" href="${base}#services" data-i18n="nav.services">services</a>
        <a class="nav__link" href="${base}#clients" data-i18n="nav.projects">references</a>
        <a class="nav__link" href="${base}#about" data-i18n="nav.about">about</a>
        <a class="nav__link" href="${base}#contact" data-i18n="nav.contact">contact</a>
      </div>
      <div class="nav__right">
        <a class="nav__cta${isBook ? ' nav__cta--book' : ''}" ${isBook ? '' : 'href="book.html"'} data-i18n="nav.cta">book free session</a>
        <div class="lang__toggle" id="lang-toggle" aria-label="Language selector">
          <button class="lang__toggle__option" data-lang="de">DE</button>
          <div class="lang__toggle__divider"></div>
          <button class="lang__toggle__option" data-lang="en">EN</button>
        </div>
      </div>
    </nav>
  `
})()
