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
              <span class="headline">{{title}}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="6"
                  >
                    <input-general
                    v-bind:value="accountEdit.name"
                    v-on:input="accountEdit.name = $event"   
                    :icon="'mdi-account-edit'"
                    :label="'Nombre'"
                    :lim="'6'"
                    :rules="[rules.Required]"
                    ></input-general>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="6"
                  >
                  <input-general                  
                    v-bind:value="accountEdit.lastName"
                    v-on:input="accountEdit.lastName = $event"   
                    :icon="'mdi-account-edit'"
                    :label="'Apellido'"
                    :lim="'6'"
                    :rules="[rules.Required]"
                    ></input-general>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="6"
                  >
                  <input-general                  
                    v-bind:value="accountEdit.email"
                    v-on:input="accountEdit.email = $event"   
                    :icon="'mdi-email'"
                    :label="'Email'"
                    :lim="'6'"
                    :rules="[rules.Required]"
                    ></input-general>
                  </v-col>
                </v-row>
              </v-container>
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
        active:true,
        accountEdit:{},
        rules: {
            Required: (value) =>
                !!value || "Complete el campo por favor."
        }
    }),
  
    computed: {
        ...mapState('viewAccounts', ['dialogEditState','account','title'])
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
