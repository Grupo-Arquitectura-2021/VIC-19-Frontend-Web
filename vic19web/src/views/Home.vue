<template >
    <v-app>
        <v-row no-gutters class="row-container">
            <v-navigation-drawer
                class="drawer"
                v-model="drawer"
                ref="drawer"
                :absolute="!$vuetify.breakpoint.mdAndUp"
                :permanent="$vuetify.breakpoint.mdAndUp">
                <v-list  nav dense>                
                    <v-toolbar class="title-nav-container">
                        <div class="title-logo-nav" ><v-img  class="title-logo-img-nav " src="@/assets/logo-white.png"></v-img></div>
                        <div   class="title-text-nav"><h1 class="title-text-child-nav ">VIC 19</h1></div>
                    </v-toolbar> 
                    <v-list-item-group
                    active-class="white--text text--accent-5"
                    class="drawer-items">
                        <v-list-item 
                        v-bind:key="index" 
                        v-for="(item, index) in menu" 
                        :class="'/home/'+item.path === $route.path ? 'item-drawer-active' : ''"
                        v-on:click="changeMenu(item.path)"
                         >
                            <v-list-item-icon >
                                <v-icon  class="item-drawer">{{item.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title   class="item-drawer-text">{{item.text}}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group >
                        <v-btn class="item-drawer-signout" v-on:click="function(){}">
                            <h5 class="item-drawer-signout-label">salir</h5>
                            <v-icon class="item-drawer-signout-icon">mdi-exit-to-app</v-icon>
                        </v-btn>
                </v-list>
            </v-navigation-drawer>
            <div class="container-side">
                <v-app-bar
                    :class="{'v-toolbar':false}"
                    class="app-bar-container"
                    ref="appbar"
                >
                    <v-app-bar-nav-icon 
                        v-if="!$vuetify.breakpoint.mdAndUp" 
                        class="icon-app-bar" 
                        @click.stop="drawer = !drawer">
                    </v-app-bar-nav-icon>                    
                    <h2 class="title-app-bar">{{title}}</h2>
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
            {text:"Administrar Noticias",icon:"mdi-newspaper",path:"news"},
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
