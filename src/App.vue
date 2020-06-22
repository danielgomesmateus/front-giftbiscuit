<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
  import App from './components/Layouts/App'
  import Simple from './components/Layouts/Simple'

  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters(['layout'])
    },
    components: {
      'app-layout': App,
      'simple-layout': Simple
    }
  }
</script>