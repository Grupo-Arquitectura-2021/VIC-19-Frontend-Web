<template>
    <v-col>
        <v-row no-gutters>
        <v-col
        class="card-back-blur"
          cols="12"
          xl="6"
          md="6"
          sm="12"
        >      
        </v-col>
        
        <v-col class="card-back"
          cols="12"
          xl="6"
          md="6"
          sm="12"
        >      
                <v-row  no-gutters class="header"></v-row>
                <v-row  no-gutters>
                    <v-col  cols="4" lg="5" md="5" sm="5"></v-col>
                    <v-col  cols="4" lg="2" md="2" sm="2">
                        <v-img src="@/assets/logo.png"></v-img>
                    </v-col>
                </v-row>
                <br><br>
                <v-row no-gutters>
                  <v-col  cols="3"></v-col>
                    <v-col  cols="6">                      
                        <h1 class="title-login">Iniciar Sesión</h1>
                    </v-col>
                </v-row>
                <br><br>
                <v-row  no-gutters>
                    <v-col  cols="2" sm="4" md="3" lg="4"></v-col>
                    <v-col  cols="8" sm="4" md="6" lg="4">
                        <input-login :label="'Correo Electrónico'" :icon="'mdi-account'"></input-login>
                    </v-col>
                </v-row>
                <br><br>
                <v-row no-gutters>
                    <v-col  cols="2" sm="4" md="3" lg="4"></v-col>
                    <v-col  cols="8" sm="4" md="6" lg="4">
                        <input-login :label="'Contraseña'" :icon="'mdi-lock'"></input-login>
                    </v-col>
                </v-row>
                <br><br>
                <v-row no-gutters>
                    <v-col  cols="4" sm="5" md="4" lg="5"></v-col>
                    <v-col  cols="4" sm="2" md="4" lg="2">
                        <button-login :name="'Acceder'"></button-login>
                    </v-col>
                </v-row>

        </v-col>
      </v-row>
    </v-col>

</template>

<script>
import ButtonLogin from './ButtonLogin.vue'
import InputLogin from './InputLogin.vue'
export default {
    components:{
        InputLogin,
        ButtonLogin}
    }

</script>

<style scoped lang="sass">
@import "@/assets/sass/Login/_cardLogin.sass"   
</style>
