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
              <v-container >
                
                <v-row>
                    <v-col cols="6" sm="12" md="6" lg="6" >
                      <v-container >
                        <img :src="newsEdit.newsImages"  class="img-fluid" style="width:100%; height: auto;">
                        <!--<button v-on:click="di('hola')">Di hola</button>
                        <button v-on:click="counter += 1">Add 1</button> -->
                      </v-container>  
                      </v-col>
                    <v-col  cols="6" sm="12" md="6" lg="6">
                      <input-general
                        v-bind:value="newsEdit.title"
                        v-on:input="newsEdit.title = $event"   
                        :icon="'mdi-pencil'"
                        :label="'Titulo'"
                        :lim="'6'"
                        :rules="[rules.Required]"
                      ></input-general>
                    <input-general                  
                    v-bind:value="newsEdit.content"
                    v-on:input="newsEdit.content = $event"   
                    :icon="'mdi-format-align-justify'"
                    :label="'Contenido'"
                    :lim="'6'"
                    :rules="[rules.Required]"
                    ></input-general>
                    <input-general                  
                    v-bind:value="newsEdit.dateNews"
                    v-on:input="newsEdit.dateNews = $event"   
                    :icon="'mdi-update'"
                    :label="'Fecha de publicacion'"
                    :lim="'6'"
                    :rules="[rules.Required]"
                    ></input-general>
                    <input-general                  
                    v-bind:value="newsEdit.newsImages"
                    v-on:input="newsEdit.newsImages = $event"   
                    :icon="'mdi-image'"
                    :label="'URL Imagen'"
                    :lim="'6'"
                    :rules="[rules.Required]"
                    ></input-general>
                     <input-general                  
                    v-bind:value="newsEdit.newsUrl"
                    v-on:input="newsEdit.newsUrl = $event"   
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
        newsEdit:{},
        rules: {
            Required: (value) =>
                !!value || "Complete el campo por favor."
        }
    }),
  
    computed: {
        ...mapState('viewNewsList', ['dialogEditState','news','title'])
    },
    watch:{
      news(value){
        this.newsEdit=new News(value.idNews,value.title,value.content,value.dateNews,value.newsImages,value.newsUrl);
        
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
