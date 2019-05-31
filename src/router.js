import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Test from "./views/Test.vue";
import Welcome from "./views/Welcome.vue";
import Home2 from "./views/Home2.vue";
import Eventos from "./views/Eventos.vue";
import Players from "./views/Players.vue";
import Clubs from "./views/Clubs.vue";
import Chat from "./views/Chat.vue";
import PerfilPlayer from "./views/PerfilPlayer.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/welcome",
      name: "welome",
      component: Welcome
    },
    {
      path: "/home2",
      name: "home2",
      component: Home2
    },
    {
      path: "/eventos",
      name: "eventos",
      component: Eventos
    },

    {
      path: "/players",
      name: "players",
      component: Players
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },

    {
      path: "/perfilPlayer",
      name: "perfilPLayer",
      component: PerfilPlayer
    },
    {
      path: "/clubs",
      name: "clubs",
      component: Clubs
    },


    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
