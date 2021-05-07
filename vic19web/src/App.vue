<template>
  <v-app>
    <v-app-bar
      app
      color="primary"   
      
    >
      <div class="d-flex align-center">
        <h1 >Vic 19</h1>
      </div>
    
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <br>
        <router-view />
      <br>
      <br>
      <br>
      <!-- <card-login title="Vic19" @dataVerified="ChangeRoute"></card-login> -->
      <!-- <login-page></login-page> -->
  
    </v-main>
  </v-app>
</template>

<script>
// import CardLogin from './components/Login/CardLogin.vue';
// import LoginPage from './views/LoginPage.vue';


export default {
  name: 'App',

  components: {
    // LoginPage,
    // CardLogin    
  },

  data: () => ({
    //
  }),
  methods:{ChangeRoute(){
    this.$route.push("/Home")
  }}
};
</script>
