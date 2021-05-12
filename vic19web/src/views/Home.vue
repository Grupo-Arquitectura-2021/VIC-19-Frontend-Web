<template >
    <v-app>
        <v-row no-gutters class="row-container">
                <v-navigation-drawer
                class="drawer"
                v-model="drawer"
                ref="drawer"
                :absolute="!$vuetify.breakpoint.mdAndUp"
                :permanent="$vuetify.breakpoint.mdAndUp"
                >
                <v-list
                    class="drawer-items"
                    nav
                    dense
                >
                    <v-list-item-group
                    active-class="white--text text--accent-5"
                    >
                    <v-list-item v-bind:key="index" v-for="(item, index) in menu" v-on:click="changeMenu(item.path)">
                        <v-list-item-icon >
                            <v-icon  class="item-drawer">{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title   class="item-drawer">{{item.text}}</v-list-item-title>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <div class="container-side">
                    <v-app-bar
                        :class="{'v-toolbar':false}"
                        class="app-bar-container"
                        ref="appbar"
                        >
                        <v-app-bar-nav-icon  v-if="$vuetify.breakpoint.mdAndUp" class="px-2">
                            <v-avatar>
                            <v-img src="@/assets/logo.png"></v-img>
                            </v-avatar>
                        </v-app-bar-nav-icon>

                  
                        <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.mdAndUp" class="icon-app-bar" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    
                        <h2 class="title-app-bar">{{title}}</h2>
                        <v-app-bar-nav-icon >
                            <v-icon  class="title-app-bar">mdi-account-circle-outline</v-icon>
                        </v-app-bar-nav-icon>
                        </v-app-bar>
                <div class="content" >
                    <router-view></router-view>
                </div>
                    
            </div>
        </v-row>
    </v-app>
</template>
<script>
import router from '../router';
export default {
    data:()=>({
        "drawer":null,
        "menu":[],
        "title":""
    }),
    mounted () {
        this.menu=[
            {text:"Administrar Cuentas",icon:"mdi-account",path:"accounts"},
            {text:"Gestionar Datos",icon:"mdi-database",path:"data"},
            {text:"Locaciones",icon:"mdi-map-marker",path:"locations"},
            {text:"Adminsitrar Noticias",icon:"mdi-newspaper",path:"news"},
            ],
            this.title=router.currentRoute.name
            
    },
    methods:{
        changeMenu(ruta){
            router.push({path:ruta}).then(()=>{
            this.title=router.currentRoute.name}).catch(()=>{});
        },
    }
    
}
</script>
<style lang="sass" scoped>
@import "@/styles/home/_home.sass"  

</style>
