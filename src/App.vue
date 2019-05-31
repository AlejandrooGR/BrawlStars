

<template>
  <v-content>
    <router-view></router-view>
    <v-footer dark height="auto" fixed>
      <v-card-text flex color="transparent" class="jumagiiiiii">
        <v-btn to="/home2" flex color="transparent">
          <v-icon color="white" size="20px">fas fa-home</v-icon>
        </v-btn>
        <v-btn to="/eventos" flex color="transparent">
          <v-icon color="white" to="/Clubs" size="20px">fas fa-gamepad</v-icon>
        </v-btn>
        <v-btn to="/test" flex color="transparent">
          <v-icon color="white" size="20px">fas fa-user-alt</v-icon>
        </v-btn>
        <v-btn to="/players" flex color="transparent">
          <v-icon color="white" size="20px">fas fa-list-ol</v-icon>
        </v-btn>
        <v-btn to="/chat" flex color="transparent">
          <v-icon color="white" size="20px">fas fa-comments</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>
    </v-footer>
  </v-content>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    icons: [
      "fab fa-accessible-icon",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style>
.jumagiiiiii {
  display: flex;
  justify-content: space-around;
}

.marginfff {
  margin-left: 10%;
  margin-right: 10%;
}

.v-btn {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 2px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 36px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 7px;
  font-weight: 500;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0px 5px;
  min-width: 70px;
  outline: 0;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  position: relative;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.v-card__text {
  padding: 6px;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>