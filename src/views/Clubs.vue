<template class="tamaño" >
  <v-container class="bg">
    <h2 class="top">Top Clubs</h2>
    <div>
      <v-btn :to="'/players/'" class="boton1">Players</v-btn>
      <v-btn class="boton2">Clubs</v-btn>
    </div>
    <v-list three-line>
      <v-list-tile v-for="club in datosClubs" :key="club.name" avatar class="lista">
        <v-list-tile-avatar>
          <img :src="club.badgeUrl">
          <v-list-tile-title class="number">#{{club.position}}</v-list-tile-title>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title class="font" v-html="club.name"></v-list-tile-title>

          <v-list-tile-sub-title class="font" v-html="club.membersCount"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-content class="right">
          <v-list-tile-title class="font" v-html="club.trophies"></v-list-tile-title>
          <img class="copa2" src="/copa.png" alt>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-container>
</template>


<script>
export default {
  created() {
    this.$store.dispatch("getDatosClubs", this.id);
  },

  computed: {
    datosClubs() {
      return this.$store.getters.getAllClubs;
    }
  }
};
</script>

<style scoped>
.container1 {
  background: green;
  display: flex;
  width: 100%;
}

.top {
  font-family: "Lilita One", cursive;
  text-align: center;
  color: aliceblue;
  font-size: 30px;
  margin-top: 10px;
}

.tamaño {
  max-width: 80%;
}
.v-list__tile__title.font {
  color: white;
}

.v-btn:before {
  border-radius: inherit;
  color: inherit;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0.12;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
  background-color: blue;
}

.boton1 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  background-color: red;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 80px;
  border-radius: 5px;
  opacity: 1.12;
}

.boton2 {
  background: aqua;
  font-size: 14px;
  font-family: "Lilita One", cursive;
  margin-bottom: 40px;
  margin-top: 30px;
  border-radius: 5px;
}

.theme--light.v-list .v-list__tile__sub-title {
  color: rgba(0, 0, 0, 0.77);
}
.right {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: -20px;
}
.v-list__tile__content {
  text-align: left;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 92px;
  /* margin-right: 3px; */
}
.copa2 {
  height: 30px;
  width: 30px;
  margin-left: 65px;
  margin-top: -25px;
}

.v-avatar img,
.v-avatar .v-icon,
.v-avatar .v-image {
  border-radius: 0%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: inherit;
  width: inherit;
}

.theme--light.v-list {
  /* background: #fff; */
  color: rgba(0, 0, 0, 0.87);
}

.number {
  position: absolute;
  bottom: -25px;
  text-align: center;
}

.theme--light.v-list {
  background: rgb(17, 21, 71);
  color: rgba(0, 0, 0, 0.87);
  margin-top: -8px;
  padding: 12px;
}

.v-list.v-list--three-line.theme--light {
  background: rgb(17, 21, 71);
}

.lista {
  background: gray;
  margin-bottom: 13px;
}

.theme--light.v-list {
  background: rgb(143, 52, 52);
  color: rgba(0, 0, 0, 0.87);
  margin-top: -8px;
}

.trofeos {
  margin-left: 230px;
}

.div {
  width: 100%;
}

.container2 {
  background: blue;
  display: flex;
  width: 200px;
  height: 60px;
  margin-left: 100px;
}
.name1 {
  margin-left: 150px;
  margin-top: -40px;
}
.club1 {
  margin-left: 60px;
  margin-top: -5px;
}

.bg {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
}
.font {
  font-family: "Lilita One", cursive;
}
.position {
  font-size: 15px;
  margin-top: 10px;

  margin-left: 20px;
}

.tamañoIcon {
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 50px;
  margin-top: -33px;
}

.perfil {
  background: red;
  width: 400px;
  height: 60px;
}

/* .trofeos {
  margin-left: 200px;
  background: blue;
  display: flex;
} */
</style>
