<template>
  <v-container class="bg" fill-height grid-list-md text-xs-center>
    <v-layout>
      <v-expansion-panel class="gem1">
        <v-expansion-panel-content>
          <template v-slot:header>
            <img class="gem" src="https://cdn.brawlstarsup.com/images/gemgrab.png" alt>
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500007.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <img class="gem" src="https://cdn.brawlstarsup.com/images/showdown.png" alt>
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500109.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <img
              class="gem"
              src="https://gamewith-en.akamaized.net/img/e6078309fbd20489d720500d39bc8f74.jpg"
              alt
            >
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500067.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <img
              class="gem"
              src="https://gamewith-en.akamaized.net/img/decf1409e8520cb1a42d53665b6452a9.jpg"
              alt
            >
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500051.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>

        <v-expansion-panel-content>
          <template v-slot:header>
            <img
              class="gem"
              src="https://gamewith-en.akamaized.net/img/e4c975d1d410afeb79c69488fd8100f4.jpg"
              alt
            >
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500004.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <img
              class="gem"
              src="https://gamewith-en.akamaized.net/img/5e2b88c1351d5b0aa8ba9f247c7fbc41.jpg"
              alt
            >
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500068.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <img class="gem" src="https://cdn.brawlstarsup.com/images/heist.png" alt>
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500070.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
          <template v-slot:header>
            <img
              class="gem"
              src="https://gamewith-en.akamaized.net/img/46c9b0b8de169549346ebd7bc5b1e9bd.jpg"
              alt
            >
          </template>
          <v-card>
            <v-img>
              <img
                class="gem"
                src="https://media.githubusercontent.com/media/fourjr/bs-assets/master/map_images/1500099.png"
                alt
              >
            </v-img>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
  </v-container>
</template>

<script scoped>
export default {
  created() {
    this.$store.dispatch("getDatosEventos", this.id);
  },

  computed: {
    datosEventos() {
      return this.$store.getters.getAllEventos;
    }
  }
};
</script>

<style>
.bg {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
}

.top {
  font-family: "Lilita One", cursive;
  text-align: center;
  color: aliceblue;
  font-size: 30px;
  margin-top: 10px;
}

.fill-height {
  height: 105%;
}

/* img1 {
  border-style: none;
  background: lightblue;
} */

.gem {
  width: 100%;
  height: 100%;
  border-style: none;
  background: lightblue;
}
.gem1 {
  width: 100%;
  height: 10%;
  top: 50px;
}

.v-expansion-panel__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 0px 0px;
  min-height: 0px;
}
.v-icon {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  font-size: 0px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  vertical-align: text-bottom;
}

/* .img {
  width: 380%;
  height: 300%;
} */
</style>
