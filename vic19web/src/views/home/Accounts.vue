<template>
  <v-container>
    <v-row><br></v-row>
    <v-row  class="header-container">
      <v-col cols="12" lg="3" sm="4" md="4" xl="3" >
        <v-btn class="button-add" v-on:click="addAccount">
        <v-icon>mdi-plus</v-icon>Agregar Cuenta</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Table :headers="headers"
        :items="items"  
        @editValue="editAccount($event)"
        @deleteValue="deleteAccount($event)"
        >

      </Table>
      </v-col>
    </v-row>
    <edit-account-dialog :active="activeEdit"></edit-account-dialog>
  </v-container>
</template>

<script>
import Table from '../../components/views-components/Table.vue';
import { mapActions } from 'vuex'
import Account from '../../models/Account'
import EditAccountDialog from '../../components/dialogs/EditAccountDialog.vue';
export default {
  components: {
    Table,
    EditAccountDialog 
  },
  data:()=>({
    headers:[
          { text: 'Id', value: 'id',class:"item-header-left"},
          { text: 'Nombre', value: 'name' ,class:"item-header-center"},
          { text: 'Apellido', value: 'lastName' ,class:"item-header-center"},
          { text: 'Email', value: 'email' ,class:"item-header-center"},
          {text: 'Acciones', value: 'actions' ,class:"item-header-right"}
          ],
    items:[],
    activeEdit:false
  }),
  mounted(){
    this.obtainData()
  },
  methods:{
    ...mapActions('viewAccounts', ['dialogEditOpen','dialogDelete']),
    deleteAccount(account){
      console.log(account);
    },
    addAccount(){
      this.dialogEditOpen({account:new Account(),title:"Agregar Cuenta"})

    },
    editAccount(account){
      this.dialogEditOpen({account:account,title:"Editar Cuenta"})

    },
    obtainData(){
      var data=[];
      for(let i=0;i<10;i++){
        data.push(new Account(i,"Alvin Jamil","Poma Tarqui","pomaalvin@gmail.com"));
      }
      this.items=data;
    }
  }

}
</script>

<style lang="sass">
@import "@/styles/views/_accounts.sass"  
@import "@/styles/components/_table.sass"
@import "@/styles/components/_buttons.sass"

</style>