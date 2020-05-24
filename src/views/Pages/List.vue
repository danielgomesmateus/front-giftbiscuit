<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">   
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            :loading="loading"
            loading-text="Carregando..."
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Páginas</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Adicionar</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Adicionar nova página</span>
                    </v-card-title> 
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field v-model="editedItem.title" label="Título"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-textarea v-model="editedItem.content" label="Conteúdo"></v-textarea>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field v-model="editedItem.slug" label="Identificador"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="success"
                        class="mr-4"
                        @click="save"
                      >
                        Salvar
                      </v-btn>
                      <v-btn
                        color="warning"
                        @click="close"
                      >
                        Cancelar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="item.status | getStatusColor" dark>
                {{ item.status | getStatusName }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
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
        items: [],
        editedIndex: -1,
        editedItem: {
          title: '',
          content: '',
          slug: '',
          status: true
        },
        defaultItem: {
          title: '',
          content: '',
          slug: '',
          status: true
        },
        dialog: false,
        headers: [
          {
            text: 'Título',
            sortable: true,
            value: 'title',            
          },
          {
            text: 'Status',
            sortable: true,
            value: 'status',            
          },
          {
            text: 'Ações',
            sortable: false,
            value: 'actions',            
          }
        ]
      }
    },
    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        this.$refs.form.validate()

        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
    created() {
      axios
        .get(`${ process.env.VUE_APP_BASE_URL_API }/pages/`)
        .then(response => {
          this.items = response.data.results
          this.loading = false
        })
        .catch(e => {
          console.error(e.message)
        })      
    }
  }
</script>