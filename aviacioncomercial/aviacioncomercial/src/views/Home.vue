<template>
 <v-container>
   <v-carousel cycle :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <v-row justify="center">
     <v-btn v-for="avi in aviones" :key="avi._id" color="#424242"
      dark
      @click.stop="dialog = true"
      @click="getAvion(avi._id)"
    >
      {{avi.referencia}}
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card>
         <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Caracteristicas Descriptivas
        </v-card-title >
          <v-card-text v-if="avion.length!=0">
              Referencia: {{avion[0].referencia}}<br>
              Capacidad de pasajeros: {{avion[0].capacidad_de_pasajeros}} <br>
              Tripulación técnica: {{avion[0].tripulacion_tecnica}}<br>
              Envergadura: {{avion[0].envergadura}}<br>
              Velocidad máxima: {{avion[0].velocidad_maxima}}<br>
              Longitud: {{avion[0].longitud}}<br>
              Altura: {{avion[0].altura}}<br>
              Peso máximo de despegue: {{avion[0].peso_maximo_de_despegue}}<br>
              Alcance máxima: {{avion[0].alcance_maximo}}<br>
              Altitud máxima de vuelo {{avion[0].altitud_maxima_de_vuelo}}<br>
              Pista mínima para despegue: {{avion[0].pista_minima_para_despegue}}<br>
              Aerolíneas que lo usan: {{avion[0].aerolíneas_que_lo_usan}}<br>
              Motores usados: {{avion[0].motores_usados}}<br>
              Fecha de introducido: {{avion[0].fecha_de_introducido}}<br>
              Fecha primer vuelo: {{avion[0].fecha_primer_vuelo}}<br>
              Fabricante: {{avion[0].fabricante}}<br>
              Geometría descriptiva: {{avion[0].geometría_descriptiva}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>


          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</v-container>
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        dialog: false,
        aviones: [ ],
        avion:[],
        items: [
          {
            src: 'https://images.wallpaperscraft.com/image/plane_bottom_view_buildings_134717_1280x720.jpg',
          },
          {
            src: 'https://images.wallpaperscraft.com/image/plane_sky_traffic_night_91323_1280x720.jpg',
          },
          {
            src: 'https://images.wallpaperscraft.com/image/plane_sky_clouds_flight_106910_1600x900.jpg',
          }
         
        ],
      }
    },
     mounted(){
       this.getAviones()
     },
    methods: {


      getAviones(){
        axios.get(`http://localhost:3000/aviones/`)
        .then((response) => {
          this.aviones = response.data
        
        })
        .catch((err) => {
          console.log(err)
        })
      },

     getAvion(id){
       
        axios.get(`http://localhost:3000/aviones/${id}`)

        .then((response) => {
          this.avion = response.data
       })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
