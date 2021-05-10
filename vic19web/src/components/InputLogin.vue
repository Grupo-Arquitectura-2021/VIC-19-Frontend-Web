<template>
      <v-row no-gutters>
            <v-col cols="2" class="icon-card">
                <v-icon class=" icon" >{{icon}}</v-icon>        
            </v-col>
            <v-col cols="10">
              <input
                class="input-in"

                
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
