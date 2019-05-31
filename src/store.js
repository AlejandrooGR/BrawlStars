import Vue from "vue";
import Vuex from "vuex";
// QQVRYOP

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://api.brawlapi.cf/v1/player?tag=",
    // key2: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiI0OTYwNjU5NzM2MTU1OTE0MjQiLCJyZWFzb24iOiJBbiBhcHAgdG8gZ2V0IGRhdGEgZnJvbSBwbGF5ZXJzIiwidmVyc2lvbiI6MSwiaWF0IjoxNTU3MzkwNjM1fQ.M4EXMSSaElB1Ot_QvB60prVUMYv2xtJ3LJflnJ7LKnQ",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiI1NzU2OTI0MDY4MzQ1OTM4MjciLCJyZWFzb24iOiJldyIsInZlcnNpb24iOjEsImlhdCI6MTU1ODUxNDU3OX0.XrwXFmvmtVw4kwKfOVbfmjqr0xRlpGQ0s-gOQt7-bT8",
    datos: [],
    datosEventos: [],
    datosPlayers: [],
    datosClubs: [],
    urlEventos: "https://brawlapi.cf/v1/events",
    urlPlayers: "https://brawlapi.cf/v1/leaderboards/players?count=200",
    urlClubs: "https://api.brawlapi.cf/v1/leaderboards/clubs?count",
    message2: "",
    tag: "",
    nameTag: "",
    datosTag: [],

  },
  mutations: {
    setDatos(state, data) {
      state.datos = data
    },
    setdatosEventos(state, data) {
      state.datosEventos = data
    },
    setMessage2(state, data) {
      state.message2 = data
    },
    setdatosPlayers(state, data) {
      state.datosPlayers = data
    },
    setdatosClubs(state, data) {
      state.datosClubs = data
    },
    setTag(state, payload) {
      state.tag = payload
    },
    setName(state, data) {
      state.datosTag = data
    },
    setNameTag(state, data) {
      state.nameTag = data
    },
  },
  actions: {
    getDatos(context) {
      fetch(((context.state.url) + (context.state.tag)), {
        "async": false,
        "crossDomain": true,

        "headers": {
          "Authorization": context.state.key
        }
      })
        .then(json => json.json())
        .then(data => {

          context.commit("setDatos", data)
        })
    },
    getDatosEventos(context) {
      fetch(context.state.urlEventos, {
        "async": false,
        "crossDomain": true,

        "headers": {
          "Authorization": context.state.key
        }
      })
        .then(json => json.json())
        .then(data => {

          context.commit("setdatosEventos", data)
        })
    },
    getDatosPlayers(context) {
      fetch(context.state.urlPlayers, {
        "async": false,
        "crossDomain": true,

        "headers": {
          "Authorization": context.state.key
        }
      })
        .then(json => json.json())
        .then(data => {

          context.commit("setdatosPlayers", data)
        })
    },
    getDatosClubs(context) {
      fetch(context.state.urlClubs, {
        "async": false,
        "crossDomain": true,

        "headers": {
          "Authorization": context.state.key
        }
      })
        .then(json => json.json())
        .then(data => {

          context.commit("setdatosClubs", data)
        })
    },

    getDatosTag(context) {
      fetch(((context.state.url) + (context.state.nameTag)), {
        "async": false,
        "crossDomain": true,

        "headers": {
          "Authorization": context.state.key
        }
      })
        .then(json => json.json())
        .then(data => {

          context.commit("setNameTag", data)
        })
    },
  },
  getters: {
    getAllEventos(state) {
      return state.datosEventos;
    },
    getAllDatos(state) {
      return state.datos;
    },
    getAllPlayers(state) {
      return state.datosPlayers;
    },
    getAllClubs(state) {
      return state.datosClubs;
    },
    getMessage2(state) {
      return state.message2;
    },
    getTag(state) {
      return state.tag;
    },
    getName(state) {
      return state.nameTag;
    },
    getNameTag(state) {
      return state.datosTag;
    },
  },
});
