// Navigation

navigation = {
  init: function () {
    this.toggleMenu();
    this.scrollTo();
    this.tellMe();
  },
  toggleMenu: function () {
    const menuBtn = document.querySelector(".btn--menu");
    menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let menu = document.querySelector(".navbar__menu");
      menu.classList.toggle("showMenu");
    });
  },
  offMenu: function () {
    let menu = document.querySelector(".navbar__menu");
    menu.classList.remove("showMenu");
  },

  sectionsList: function () {
    let wrapperChildren = document.querySelector(".wrapper").childNodes;
    let sections = Array.from(wrapperChildren).filter(function (cur) {
      return cur.nodeType === 1;
    });

    let temp = 0;
    let sectionsHeight = sections.map(function (cur) {
      cur = cur.getBoundingClientRect().height;
      temp += cur;
      return temp;
    });

    return sectionsHeight;
  },
  scrollTo: function () {
    let menuScrollBtns = document.querySelectorAll(".menu__item");

    Array.from(menuScrollBtns).forEach((cur, index, arr) => {
      if (index === menuScrollBtns.length - 1) {
        index += 1;
      }
      cur.addEventListener("click", (e) => {
        e.preventDefault();
        let sections = this.sectionsList();

        // console.log(sections[index]);
        this.offMenu();
        setTimeout(function () {
          window.scrollTo({
            top: sections[index] - 78,
            behavior: "smooth",
          });
        }, 300);
      });
    });
    // const header = document
    //   .querySelector(".section-header")
    //   .getBoundingClientRect().height;
    // const services = document
    //   .querySelector(".section-services")
    //   .getBoundingClientRect().height;
    // const portfolio = document
    //   .querySelector(".section-portfolio")
    //   .getBoundingClientRect().height;
    // const about = document
    //   .querySelector(".section-about")
    //   .getBoundingClientRect().height;
    // const team = document.querySelector(".section-team").getBoundingClientRect()
    //   .height;
    // const contact = document
    //   .querySelector(".section-contact")
    //   .getBoundingClientRect().heigconst;
  },
  tellMe: function () {
    navbar = document.querySelector(".section-header__navbar");
    logo = document.querySelector(".logo");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 78) {
        navbar.classList.add("navbar--small");
        logo.classList.add("logo--small");
      } else {
        navbar.classList.remove("navbar--small");
        logo.classList.remove("logo--small");
      }
    });

    // let tellMeBtn = document.querySelector(".btn--yellow");

    // tellMeBtn.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   navbar = document.querySelector(".section-header__navbar");
    //   logo = document.querySelector(".logo");
    //   navbar.classList.toggle("navbar--small");
    //   logo.classList.toggle("logo--small");
    // });
  },
};

// Portfolio
portfolio = {
  init: function () {
    this.showModal();
    this.hiddenModal();
  },
  showModal: function () {
    portfolioBtns = document.querySelectorAll(".btn--portfolio");
    modelBox = document.querySelector(".model__container");
    body = document.querySelector("body");
    for (portfolioBtn of portfolioBtns) {
      portfolioBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        body.classList.add("overflow-off");
        modelBox.classList.remove("hidden");
        modelBox.classList.add("overflow-on");
      });
    }
  },
  hiddenModal: function () {
    portfolioCloseBtns = document.querySelectorAll(".portfolio--close");
    modelBox = document.querySelector(".model__container");

    // Click close button

    for (portfolioCloseBtn of portfolioCloseBtns) {
      portfolioCloseBtn.addEventListener("click", function (e) {
        e.preventDefault();
        body.classList.remove("overflow-off");
        modelBox.classList.add("hidden");
        modelBox.classList.remove("overflow-on");
      });
    }

    // Click outside button

    modelContent = document.querySelector(".model__content");
    window.addEventListener("click", function (e) {
      //   e.stopPropagation();
      if (
        !modelContent.contains(e.target) &&
        modelBox.classList.contains("hidden") == false
      ) {
        body.classList.remove("overflow-off");
        modelBox.classList.add("hidden");
        modelBox.classList.remove("overflow-on");
        console.log(e);
      }
    });
  },
};

navigation.init();
portfolio.init();
