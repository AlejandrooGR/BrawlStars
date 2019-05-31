<template>
  <v-container class="bg">
    <v-layout row wrap align-center justify-center>
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
    <div class="tagname">
      <input type="text" placeholder="Put your name tag..." v-model="tag2">
      <v-btn round @click="send">sadsd</v-btn>
    </div>
    <div class="eventos">
      <p>Events</p>
    </div>
    <div class="topplayers">
      <p>Top Players</p>
    </div>
    <div class="topclans">
      <p>Top Clans</p>
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
  margin-top: 70px;
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
</style>
