import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenLogo: false,
    isOpenSidebar: false,
    sidebarMenu: [
      { title: "Главная", icon: "home.svg", router: "/" },
      { title: "Навыки", icon: "ninja.svg", router: "about" },
      { title: "Проекты", icon: "portfolio.svg", router: "portfolio" },
      { title: "Контакты", icon: "contacts.svg", router: "contacts" },
    ],
    cards: [
      {
        id: 0,
        title: "HTML",
        technologyPhoto: "html.png",
        icons: [
          {
            title: "Twig",
            icon: "twig.png",
            color: "#82a063",
          },
          {
            title: "EJS",
            icon: "ejs.png",
            color: "#82a063",
          },
        ],
      },
      {
        id: 1,
        title: "JavaScript",
        technologyPhoto: "javascr.png",
        icons: [
          {
            title: "Vue",
            icon: "vue.png",
            color: "#167558",
          },
          {
            title: "Nuxt",
            icon: "nuxt.png",
            color: "#167558",
          },
          {
            title: "Svelte",
            icon: "svelte.png",
            color: "#ff4100",
          },
          {
            title: "Jquery",
            icon: "jquery.png",
            color: "#1169ae",
          },
        ],
      },
      {
        id: 2,
        title: "CSS",
        technologyPhoto: "css.png",
        icons: [
          {
            title: "Sass",
            icon: "sass.png",
            color: "#be608b",
          },
          {
            title: "Bootstrap",
            icon: "bootstrap.png",
            color: "#7a11f8",
          },
        ],
      },
    ],
    portfolioCards: [
      {
        id: 0,
        img: "b2b.png",
        title: "B2B & B2C",
        description: "TC Badr",
        experience:
          "Дороботал имеющийся проект компании, разработал админку для проекта, после перенес на svelte по просьбе заказчика. Практически полностью выполнен мной",
        link: "http://b2b.debishev.net/b2b",
        fullImg: "b2bfull.png",
      },
      {
        id: 1,
        img: "minec.png",
        title: "Vote portal",
        description: "Министерство экономики",
        experience: "Исправлял старые недочеты проекта, разработал админку",
        link: "http://vote.economy-chr.ru/",
        fullImg: "minecfull.png",
      },
      {
        id: 2,
        img: "edu95.png",
        title: "Education portal",
        description: "Министерство образования",
        experience:
          "Разрабатывал отдельные компоненты. А также провел часть работы по админке данного проекта.",
        link: "https://edu95.ru/",
        fullImg: "edufull.png",
      },
    ],
    modal: { isActive: false, activeImg: "" },
    contacts: [
      {
        id: 0,
        title: "hh.ru",
        img: "hh.png",
        color: "#d30309",
        link: "https://hh.ru/applicant/resumes/view?resume=701c9f92ff08cc8bd30039ed1f75556169584b",
      },
      {
        id: 1,
        title: "LinkedIn",
        img: "linkedin.png",
        color: "#0a66c2",
        link: "https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BD%D1%81%D1%83%D1%80-%D1%86%D1%83%D0%B5%D0%B2-501596202/",
      },
      {
        id: 2,
        title: "Хабр Карьера",
        img: "habr.png",
        color: "#78a1b5",
        link: "https://career.habr.com/qari-mansur",
      },
      {
        id: 3,
        title: "Telegram",
        img: "telegram2.png",
        color: "#1e96c8",
        link: "https://t.me/justdevman",
      },
      {
        id: 4,
        title: "Whatsapp",
        img: "whatsapp.png",
        color: "#35bc48",
        link: "https://wa.me/79298955050",
      },
    ],
  },
  mutations: {
    openedLogo(state) {
      state.isOpenLogo = !state.isOpenLogo;
    },
    openedSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    openedModal(state) {
      state.modal.isActive = !state.modal.isActive;
    },
    getActiveImg(state, image) {
      state.modal.isActive = !state.modal.isActive;
      state.modal.activeImg = image;
    },
  },
  actions: {},
  modules: {},
});
