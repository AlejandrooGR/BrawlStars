<template>
  <v-container class="bg1">
    <v-layout align-center justify-center>
      <v-flex xs8 offset-xs-2>
        <v-img
          src="https://vignette.wikia.nocookie.net/brawlstars/images/0/01/Brawl_Stars_Logo.png/revision/latest?cb=20190105214233&path-prefix=es"
          lazy-src="https://vignette.wikia.nocookie.net/brawlstars/images/0/01/Brawl_Stars_Logo.png/revision/latest?cb=20190105214233&path-prefix=es"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
        <v-img
          src="https://brawlstarss.com/wp-content/uploads/2018/12/Brawl-Stars-101-Gu%C3%ADa-para-principiantes.png"
          lazy-src="https://brawlstarss.com/wp-content/uploads/2018/12/Brawl-Stars-101-Gu%C3%ADa-para-principiantes.png"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.bg {
  background: url(https://backgroundcheckall.com/wp-content/uploads/2018/10/brawl-stars-background-5.jpg);
}
</style>
