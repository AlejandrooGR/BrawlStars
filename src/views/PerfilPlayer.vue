<template>
  <v-container class="principal bg">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="aaa">
          <p class="font profile">Profile</p>
          <div>
            <v-img class="img2 espacio" :src="datos.avatarUrl"></v-img>
            <p class="font espacio">#{{datos.tag}}</p>
            <p class="font name">{{datos.name}}</p>
          </div>
          <div>
            <p class="par1 font">HIGHEST TROPHIES</p>
            <p class="par2 font">VICTORIES</p>

            <div>
              <div class="caja1">
                <img class="img1" src="copa.png" alt>
                <p class="solo">{{datos.trophies}}</p>
              </div>

              <div class="caja2">
                <p class="font victorias">{{datos.victories}}</p>
              </div>
            </div>
            <div class="pad">
              <p class="par4 font">SOLO VICTORIES</p>
              <p class="par5 font">DUO VICTORIES</p>
              <div class="caja1">
                <img class="img1" src="solo.png" alt>
                <p class="solo">{{datos.soloShowdownVictories}}</p>
              </div>

              <div class="caja2">
                <img class="img1" src="duo.png" alt>
                <p class="solo">{{datos.duoShowdownVictories}}</p>
              </div>
            </div>
            <div class="aaa pad">
              <p class="par6 font">ROBO RUMBLE TIME</p>
              <p class="par5 font">TIME AS BOSS</p>
              <div class="caja1">
                <img class="img1" src="robot.png" alt>
                <p class="solo">{{datos.bestRoboRumbleTime}}</p>
              </div>

              <div class="caja2">
                <img class="img1" src="calavera.png" alt>
                <p class="solo">{{datos.bestTimeAsBigBrawler}}</p>
              </div>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <div v-for="personaje in datos.brawlers" :key="personaje.name">
      <v-card class="margin">
        <div class="tamaño">
          <p class="font mayus">
            {{personaje.name}}
            <span class="derecha">
              trophies {{personaje.trophies}}
              <img class="copa" src="copa.png" alt>
            </span>
            <span class="power">
              power {{personaje.power}}
              <img class="powerimg" src="power.png" alt>
            </span>
          </p>
          <v-img class="tamaño2" :src="personaje.name + `.png`"></v-img>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getDatosTag");
  },

  computed: {
    name() {
      return this.$store.getters.getNameTag;
    },
    datos() {
      return this.$store.getters.getName;
    },

    // message2() {
    //   return this.$store.getters.getMessage2;
    // }
    message2: {
      get: function() {
        return this.$store.getters.getMessage2;
      },
      set: function(value) {
        console.log(value);
        this.$store.commit("setMessage2", value);
      }
    }
  }
};
</script>

<style>
.mayus {
  text-transform: uppercase;
}

.copa {
  width: 10%;
  height: 10%;
  margin-bottom: -8px;
  padding-top: 20px;
}
.pad {
  padding-top: 5%;
}

.par1 {
  font-size: 10px;
  margin-left: 45px;
  margin-bottom: -10px;
}

.par2 {
  font-size: 10px;
  margin-left: 223px;
  margin-bottom: -16px;
}

.par3 {
  font-size: 10px;
  margin-left: 223px;
  margin-bottom: -16px;
}

.par4 {
  font-size: 10px;
  margin-left: 55px;
  margin-bottom: -14px;
}

.par5 {
  font-size: 10px;
  margin-left: 218px;
  margin-bottom: -16px;
}

.par6 {
  font-size: 10px;
  margin-left: 45px;
  margin-bottom: -14px;
}

.name {
  margin-left: 150px;
  margin-top: -80px;
  margin-bottom: 80px;
  font-size: 24px;
}

.profile {
  font-size: 30px;
  text-align: center;
}

.font {
  font-family: "Lilita One", cursive;
}

.espacio {
  margin-left: 40px;
}

.victorias {
  color: aliceblue;
  text-align: center;
  padding-top: 10px;
}

.solo {
  text-align: center;
  color: aliceblue;
  margin-top: -40px;
  font-family: "Lilita One", cursive;
}

.img1 {
  width: 50px;
  height: 50px;
  margin-top: -5px;
  margin-left: -20px;
}

.aaa {
  padding-bottom: 15px;
  padding-right: 20px;
}

.caja1 {
  width: 100px;
  height: 40px;
  background-color: green;
  margin-left: 40px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.caja2 {
  width: 100px;
  height: 40px;
  background-color: green;
  margin-left: 200px;
  border-radius: 5px;
  margin-top: -60px;
}

.img2 {
  width: 20%;
  height: 20%;
}
.tamaño {
  width: 80%;
  height: 80%;
  margin: auto;
}

.margin {
  margin-top: 5%;
  padding-bottom: 30px;
}

.tamaño2 {
  width: 100%;
  height: 100%;
}
.derecha {
  margin-left: 16px;
  font-size: 12px;
}

.power {
  font-size: 12px;
}

.powerimg {
  width: 8%;
  height: 8%;
  margin-bottom: -8px;
  padding-top: 20px;
  margin-left: 5px;
}
.theme--light.v-sheet {
  background-color: aliceblue;
  border-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}

.bg {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
}
</style>


