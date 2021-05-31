<template>
  <v-row  class="main" no-gutters> 
      <v-col cols="12" >
        <v-container>
          <h3 class="title-warning">Este apartado le servirá para que pueda subir sus CSV manualmente, recuerde utilizar este apartado
            con precausion pues puede ocacionar inconsistencia en los datos de la base de datos</h3>
        </v-container>
        <br><br>
         <v-container >
            <v-row no-gutters class="justify-center">
              <v-col cols="11" xl="5" lg="7" md="8" sm="10"  v-bind:class="{ 'container-files--active':filelist.length>0 ,'container-files--deactive':filelist.length==0 }" class="container-files"  @dragover="dragover" @dragleave="dragleave" @drop="drop">
                <v-row no-gutters class="justify-center">
                  <v-col cols="2" >
                          <v-img v-if="filelist.length==0" class="container-files__image" src="../../assets/upload.png" 
                          aspect-ratio="1"></v-img>
                          <v-icon v-if="filelist.length!=0" size="100px" class="container-files__icon">mdi-file-chart</v-icon>
                  </v-col>
                </v-row>
                <v-row no-gutters  v-if="filelist.length!=0" >
                  <v-col cols="12" >
                    <h4 class="container-files__label">{{filelist[0].name}}</h4>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col>
                    <input hidden type="file" id="files" 
                    @change="onChange" ref="file" accept=".csv" />
                  </v-col>
                </v-row>
                <v-row  no-gutters  v-if="filelist.length==0" >
                  <v-col cols="12" class="d-flex justify-center pa-4">
                    <button class="container-files__label" 
                        v-on:click="edit()" ><h4>Elija un archivo o arrastrelo hasta aqui</h4></button>
                  </v-col>
                </v-row>
                <v-row  v-if="filelist.length!=0" class="justify-center pa-0" no-gutters>
                <br><br>
                      <v-icon
                          large
                          class="container-files__edit"
                        v-on:click="edit()" 
                      >
                          mdi-pencil
                      </v-icon>
                      <v-icon
                          large
                          class="container-files__remove"
                          v-on:click="remove()"
                      >
                          mdi-delete
                      </v-icon>
                </v-row>
              </v-col>
            </v-row>
         </v-container>
         <br><br>
         <v-container>
           <v-row class="justify-center"  align="center"
               justify="center" no-gutters>
                
                <v-col cols="6" xl="3" md="4">
                  <select-value 
                  :items="locations"
                  :label="'Tipo'" 
                  v-bind:value="type"
                  v-on:input="type = $event"  
                ></select-value>
                </v-col>
           </v-row>
           
           <v-row class="justify-center"  align="center" 
               justify="center" no-gutters>
              <v-col cols="6" xl="3" md="4" class="d-flex justify-space-around">
                  <v-switch
                  class="pa-0 ma-0 red--text"
                  v-model="replace"
                  color="black"
                ></v-switch>
                  <h4>Sobre Escribir: {{replace?'Si':'No'}}</h4>
              </v-col>
           </v-row>
           <br>
           <v-row class="justify-center"  align="center" 
               justify="center" no-gutters>
                  <v-col cols="10" lg="3" sm="7" md="4" xl="3" >
                    <v-btn class="button-add" v-on:click="upload">
                    <v-icon>mdi-upload</v-icon>Subir archivo</v-btn>
                  </v-col>
           </v-row>
           
         </v-container>
      
        
      </v-col>

  </v-row>
</template>

<script>
import selectValue from '../../components/inputs/selectValue.vue';
import { mapActions} from 'vuex'
import Data from '../../models/Data'
export default {
  components: { selectValue },
  data:()=> ({
    filelist: [] ,
    locations:[{name:'Paises',id:'1'},{name:'Departamentos',id:'2'},{name:'Municipios',id:'3'}],
    type:0,
    replace:false
  }),
  methods:{
    ...mapActions('data', ['uploadData']),
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove() {
      this.filelist.splice(0, 1);
    },
    dragover(event) {
      event.preventDefault();
      if (!event.currentTarget.classList.contains('container-files--active')) {
        event.currentTarget.classList.remove('container-files--deactive');
        event.currentTarget.classList.add('container-files--active');
      }
    },
    dragleave(event) {
      event.currentTarget.classList.add('container-files--deactive');
      event.currentTarget.classList.remove('container-files--active');
    },
    drop(event) {
      event.preventDefault();
      if(event.dataTransfer.files.length==1){
        this.$refs.file.files =event.dataTransfer.files;
        this.onChange();
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
      }
      else{
      event.currentTarget.classList.add('container-files--deactive');
      event.currentTarget.classList.remove('container-files--active');
      }
    },
    edit(){
        document.getElementById("files").click()
    },
    upload(){
        if(this.type!=0&&this.filelist.length==1){
            var data=new Data(this.type,this.replace,this.filelist[0]);
            this.uploadData(data);
        }
    }
  }
}
</script>

<style lang="sass">
@import "@/styles/views/_data.sass"  
</style>