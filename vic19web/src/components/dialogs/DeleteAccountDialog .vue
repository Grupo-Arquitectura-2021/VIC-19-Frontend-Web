<template>
    <v-col cols="6">
      <v-dialog
          persistent
          v-model="dialogEditState"
          width="unset"
        >
        <v-card
          class="dialog-container">
            <v-card-title>
              <span class="headline">Eliminar Cuenta</span>
            </v-card-title>

            <v-card-text>
              Esta segura que desea eliminar la cuenta de{{accountEdit.name}}
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="btn-cancel"
                text
                @click="cancel"
              >
                Cancelar
              </v-btn>
              <v-btn
                class="btn-save"
                text
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
          
    </v-dialog>
    </v-col>
</template>
<script>
import { mapState,mapActions} from 'vuex'
import Account from '../../models/Account'
import InputGeneral from '../inputs/InputGeneral.vue';

export default {
  components: { InputGeneral },
    props:{
    },
    data:()=>({       
        accountEdit:{},
    }),
  
    computed: {
        ...mapState('viewAccounts', ['dialogDeleteState','account'])
    },
    watch:{
      account(value){
        this.accountEdit=new Account(value.id,value.name,value.lastName,value.email);
      }
    },
    mounted(){
    },
    methods:{
    ...mapActions('viewAccounts', ['dialogEditClose','dialogDelete']),
      cancel(){
        this.dialogEditClose();
      },  
      save(){}
    }
}
</script>
<style lang="sass">
@import "@/styles/dialogs/_editAccountDialog.sass"    
</style>
