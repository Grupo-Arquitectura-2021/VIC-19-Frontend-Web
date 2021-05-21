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
                    v-bind:value="NewsEdit.name"
                    v-on:input="NewsEdit.name = $event"   
                    :icon="'mdi-pencil'"
                    :label="'Titulo'"
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
                    v-bind:value="NewsEdit.lon"
                    v-on:input="NewsEdit.lon = $event"   
                    :icon="'mdi-format-align-justify'"
                    :label="'Contenido'"
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
                    v-bind:value="NewsEdit.lat"
                    v-on:input="NewsEdit.lat = $event"   
                    :icon="'mdi-update'"
                    :label="'Fecha de publicacion'"
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
                    v-bind:value="NewsEdit.lat"
                    v-on:input="NewsEdit.lat = $event"   
                    :icon="'mdi-image'"
                    :label="'URL Imagen'"
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
                    v-bind:value="NewsEdit.lon"
                    v-on:input="NewsEdit.title = $event"   
                    :icon="'mdi-newspaper'"
                    :label="'Direccion de la noticia'"
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
import News from '../../models/News'
import InputGeneral from '../inputs/InputGeneral.vue';

export default {
  components: { InputGeneral},
    props:{
    },
    data:()=>({        
        active:true,
        NewsEdit:{},
        rules: {
            Required: (value) =>
                !!value || "Complete el campo por favor."
        }
    }),
  
    computed: {
        ...mapState('viewNewsList', ['dialogEditState','News','title'])
    },
    watch:{
      news(value){
        this.newsEdit=new News(value.idNews,value.title,value.content,value.dateNews,value.urlImage,value.source);
        
      }
    },
    mounted(){
    },
    methods:{
    ...mapActions('viewNewsList', ['dialogEditClose','dialogDelete','editNews','addNews']),
      cancel(){
        this.dialogEditClose();
      },  
      save(){
        console.log(this.title);
        switch(this.title){
          case "Editar Noticia":
            this.dialogEditClose();
            this.editNews(this.newsEdit);
            break;
          case "Agregar Noticia":
             this.dialogEditClose();   
            this.addNews(this.newsEdit);
            break;  
        }
      }
    }
}
</script>
<style lang="sass">
@import "@/styles/dialogs/_editAccountDialog.sass"    
</style>
