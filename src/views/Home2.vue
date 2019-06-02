<template>
  <v-container class="bg2">
    <v-layout align-center justify-center>
      <v-flex xs8 offset-xs-2>
        <v-img
          src="https://brawlstarsdaily.files.wordpress.com/2018/12/Poco3.png?w=748"
          lazy-src="https://brawlstarsdaily.files.wordpress.com/2018/12/Poco3.png?w=748"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>
    </v-layout>
    <div class="cajabuscador">
      <input id="textInput" placeholder="Search your tag ..." v-model="tag2">
      <v-btn class="send" fab color="white" @click="send">
        <v-icon color="blue" size="25px">fas fa-search</v-icon>
      </v-btn>
    </div>
    <div>
      <v-btn :to="'/eventos/'" class="boton11">Events</v-btn>
    </div>
    <div>
      <v-btn :to="'/players/'" class="boton12">Top Players</v-btn>
    </div>
    <div>
      <v-btn :to="'/clubs/'" class="boton13">Top Clubs</v-btn>
    </div>
    <div>
      <v-btn :to="'/chat/'" class="boton14">Chat</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tag2: ""
    };
  },
  methods: {
    send() {
      this.$store.commit("setTag", this.tag2);
      this.$router.push("/Test");
    }
  },
  computed: {
    tag() {
      return this.$store.getters.getTag;
    }
  }
};
</script>

<style>
.bg {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
}

.bg2 {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
  height: 130vh;
}

.cajabuscador {
  display: flex;
  margin-bottom: 40px;
  margin-top: -100px;
}

.boton10 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  margin-bottom: 40px;
  margin-top: 250px;
  border-radius: 5px;
  opacity: 50;
  margin-left: 120px;
  width: 120px;
  height: 50px;
}

.boton11 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  margin-bottom: 40px;
  margin-top: 5px;
  border-radius: 5px;
  opacity: 50;
  margin-left: 120px;
  width: 120px;
  height: 50px;
}
.boton12 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  margin-bottom: 40px;
  margin-top: 5px;
  border-radius: 5px;
  opacity: 50;
  margin-left: 120px;
  width: 120px;
  height: 50px;
}
.boton13 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  margin-bottom: 40px;
  margin-top: 5px;
  border-radius: 5px;
  opacity: 50;
  margin-left: 120px;
  width: 120px;
  height: 50px;
}
.boton14 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  margin-bottom: 120px;
  margin-top: 5px;
  border-radius: 5px;
  opacity: 50;
  margin-left: 120px;
  width: 120px;
  height: 50px;
}

.cajabotones {
  width: 100%;
  height: 400px;
}

.a {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  background-color: blue;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 80px;
  border-radius: 5px;
  opacity: 3.12;
}

.eventos {
  background-color: rgb(251, 255, 0);
  margin-left: 70px;
  margin-right: 50px;
  margin-top: 50px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
}

.tagname {
  background-color: rgb(251, 255, 0);
  margin-left: 70px;
  margin-right: 50px;
  margin-top: -115px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
}

.tagclan {
  background-color: rgb(251, 255, 0);
  margin-left: 70px;
  margin-right: 50px;
  margin-top: 40px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
}

.topplayers {
  background-color: rgb(251, 255, 0);
  margin-left: 70px;
  margin-right: 50px;
  margin-top: 50px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
}

.topclans {
  background-color: rgb(251, 255, 0);
  margin-left: 70px;
  margin-right: 50px;
  margin-top: 50px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  margin-bottom: 50px;
  border-radius: 10px;
}

.flex {
  height: 184px;
}
</style>
