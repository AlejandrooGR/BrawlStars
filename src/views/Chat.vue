<template>
  <v-content class="bg1">
    <div>
      <div class="caja">
        <h2>Chat</h2>
        <v-btn class="login" fab color="blue" @click="login">
          <!-- <v-icon color="blue">fas fa-gamepad</v-icon> -->
          <v-icon color="white" size="20px">fas fa-users</v-icon>
        </v-btn>
      </div>
      <v-flex class="sad">
        <div id="posts"></div>
      </v-flex>
      <input id="textInput" placeholder="Your message here..." v-model="mensaje">
      <v-btn class="send" outline fab color="blue" @click="writeNewPost">
        <v-icon color="white" size="20px">fas fa-paper-plane</v-icon>
      </v-btn>
    </div>
  </v-content>
</template>

<script >
import firebase from "firebase";
export default {
  data() {
    return {
      mensaje: null
    };
  },
  methods: {
    login() {
      // https://firebase.google.com/docs/auth/web/google-signin

      //Provider
      var provider = new firebase.auth.GoogleAuthProvider();

      //How to signin
      firebase.auth().signInWithPopup(provider);

      console.log("login");
    },

    writeNewPost() {
      // https://firebase.google.com/docs/database/web/read-and-write

      //Values from HTML
      var text = document.getElementById("textInput").value;
      var name = firebase.auth().currentUser.displayName;

      var objectToSend = {
        message: text,
        author: name
      };

      firebase
        .database()
        .ref("test")
        .push(objectToSend);

      console.log(objectToSend);
      this.mensaje = null;
      // Values
    },
    getPosts() {
      //Get messages

      firebase
        .database()
        .ref("test")
        .on("value", function(data) {
          var posts = document.getElementById("posts");
          posts.innerHTML = "";
          console.log(data.val());
          var messages = data.val();

          for (var key in messages) {
            var text = document.createElement("p");
            text.classList.add("ejemplo");

            var element = messages[key];

            // text.append(element.message + " : " + element.author);
            text.append(element.author + " : " + element.message);
            // text.append(element.author);
            posts.append(text);
          }
          document.getElementById("posts").scrollTop = document.getElementById(
            "posts"
          ).scrollHeight;
        });

      console.log("getting posts");
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style>
/* .fondo{
  background-color: blue;
} */
.caja {
  display: flex;
  margin-bottom: 40px;
  margin-top: 50px;
}

#posts .ejemplo {
  background: aliceblue;
  font-size: 18px;
  margin: 10px;
  width: 97%;
  height: 50px;
  border-radius: 10px;
}

#posts {
  height: 300px;
  overflow-y: scroll;
  width: 350px;
  margin-left: 9px;
}

.send {
  top: 0px;
}

.login {
  left: 150px;
  border-radius: 200px;
  width: 50px;
  height: 50px;
}

.bg1 {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
  height: 100vh;
}

.sad {
  height: 500px;
}

html {
  font-size: 18px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.margen {
  margin-left: 50px;
}
input#textInput {
  top: 197px;
  margin-top: 0px;
}

div[data-v-15964adc][data-v-15964adc] {
  margin: 5px;
  margin-top: 11px;
  max-height: 513px;
}
/* button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
  color: inherit;
  top: -50px;
} */
input#textInput[data-v-15964adc][data-v-15964adc][data-v-15964adc] {
  /* top: 237px; */
  margin-top: 31px;
}
.send[data-v-15964adc] {
  top: -5px;
}
/* div {
  margin: 5px;
  margin-top: 15px;
} */
input#textInput[data-v-15964adc][data-v-15964adc] {
  /* top: 237px; */
  margin-top: 0px;
}
.flex {
  height: 378px;
}
div[data-v-15964adc] {
  margin: 5px;
  margin-top: 51px;
  max-height: 360px;
}
html {
  font-size: 18px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input {
  border-radius: 0;
}

div[data-v-15964adc][data-v-15964adc] {
  margin: 5px;
  margin-top: 51px;
  height: 570x;
}

div[data-v-15964adc][data-v-15964adc] {
  margin: 5px;
  margin-top: 51px;
  max-height: 500px;
}

#textInput {
  height: 38px;
  width: 250px;
  margin-left: 20px;
  color: blanchedalmond;
  border: blue;
}

.textInput-input::placeholder {
  color: white;
  font-weight: bold;
}

#textInput::placeholder {
  color: blanchedalmond;
  padding-left: 0px;
}
</style>

