<template>
  <v-container>
    <div class="white--text">
      Quer saber como pode nos ajudar? Clique <a href="#" @click="dialog=true">aqui</a> e saiba mais.
      <v-icon color="red accent-4">mdi-heart</v-icon>
    </div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Como você pode nos ajudar?</v-toolbar-title>
        </v-toolbar>
        <div v-if="donation">
          <v-col cols="12" md="12">
            <h1 class="title text-center">
              Escolha um valor abaixo e faça uma doação
            </h1>
          </v-col>
          <v-col cols="12" md="6" offset-md="3">
            <v-slider
              v-model="slider"
              thumb-label="always"
              step="2"
              min="0"
              max="20"
            ></v-slider>

          </v-col>
          <v-divider></v-divider>
        </div>
        <div v-if="contact">
          <v-col cols="12" md="12">
            <contact :title="title" />  
          </v-col>
        </div>
      </v-card>
    </v-dialog>     
  </v-container>
</template>

<script>
  import Contact from '../../components/Forms/Contact'

  export default {
    name: 'Help',
    components: {
      'contact': Contact
    },
    props:['donation', 'contact'],
    data() {
      return {
        dialog: false,
        slider: 0,
        title: 'Dúvidas ou elogios? Fale conosco'
      }
    }
  }
</script>