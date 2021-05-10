<template>
      <v-row
              class="input-login">
            <v-col cols="2"  class=" icon-card">
                <v-icon class=" icon-card" >{{icon}}</v-icon>        
            </v-col>
            <v-col cols="2"></v-col>

            <v-col cols="8">
              <input
                class="input-in center-card"

                
                :placeholder="label"
                :type="email"
              />
            </v-col>
      </v-row>
    
</template>

<script>
export default {


    props:{
        "label":{type:String,default:"input"},
        "icon":{type:String,default:"mdi-map-marker"},
        "type":{type:String,default:"text"},
        "lim":{type:String,default:"1"}
    },
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/Login/_inputLogin.sass"  
</style>
