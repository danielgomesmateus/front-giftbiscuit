<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          Páginas
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="pages"
          :search="search"
          loading 
          loading-text="Carregando..."
        ></v-data-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        search: '',
        loading: true,
        pages: [],
        headers: [
          {
            text: 'Título',
            sortable: true,
            value: 'title',            
          },
          {
            text: 'Identificador',
            sortable: true,
            value: 'slug',            
          },
          {
            text: 'Status',
            sortable: true,
            value: 'status',            
          }
        ]
      }
    },
    created() {
      axios
        .get(`${ process.env.VUE_APP_BASE_URL_API }/pages/`)
        .then(response => {
          this.pages = response.data.results
          this.loading = false
        })
        .catch(e => {
          console.error(e.message)
        })      
    }
  }
</script>