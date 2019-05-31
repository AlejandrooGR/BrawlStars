import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";





// var db = firebase.firestore();
// window.db = db;
// db.settings({
//   timestampsInSnapshots: true
// });

Vue.config.productionTip = false;

new Vue({

  router,
  store,
  render: h => h(App),
  created() {

    var firebaseConfig = {
      apiKey: "AIzaSyC9LtEQxRL6kC3XIunyvC-M0emIXo2qqnM",
      authDomain: "chat01-ebdfa.firebaseapp.com",
      databaseURL: "https://chat01-ebdfa.firebaseio.com",
      projectId: "chat01-ebdfa",
      storageBucket: "chat01-ebdfa.appspot.com",
      messagingSenderId: "74817948214",
      appId: "1:74817948214:web:d6cd621b259e24b4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}).$mount("#app");
