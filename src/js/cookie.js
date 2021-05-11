// Services subscriptions here for when cookies are enabled
function myScripts() {
  console.log('Loading...');
}

export default class CookieConsent {
  constructor({
    popup, btnConfirm, btnCancel, activeClass = '',
  } = {}) {
    this.popup = document.querySelector(popup);
    this.btnConfirm = document.querySelector(btnConfirm);
    this.btnCancel = document.querySelector(btnCancel);
    this.activeClass = activeClass;
    this.consentPropertyType = 'site_consent';
  }

  // Cookies storage get method
  getItem(key) {
    // get the cookies string and break it into an array
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      // fuse it into an object with a custom data inserted
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key.trim()]: value,
      }), {});
    // provide new data and return the cookies string
    return cookies[key];
  }

  // Cookies storage set method
  setItem(key, value) {
    document.cookie = `${key}=${value};expires=Sun, 16 Jul 3567 06:23:41 GMT`;
  }

  // Check if a user has already consented
  hasConsented() {
    return this.getItem(this.consentPropertyType) === 'true';
  }

  // Toggle property value in cookie
  changeStatus(prop) {
    this.setItem(this.consentPropertyType, prop);
    if (this.hasConsented()) {
      // Enable services subscriptions if cookies are allowed
      myScripts();
    }
  }

  // Buttons click handlers
  bindTriggers() {
    this.btnConfirm.addEventListener('click', () => {
      // if confirmed - enable cookies / scripts and hide modal
      this.changeStatus(true);
      this.popup.classList.remove(this.activeClass);
    });

    this.btnCancel.addEventListener('click', () => {
      // if canceled - hide modal
      this.changeStatus(false);
      this.popup.classList.remove(this.activeClass);
    });
  }

  init() {
    try {
      // if cookie with user's answer is already present
      if (this.hasConsented()) {
        myScripts();
      } else {
        this.popup.classList.add(this.activeClass);
      }

      this.bindTriggers();
    } catch (e) {
      console.error('Переданы не все данные');
    }
  }
}
