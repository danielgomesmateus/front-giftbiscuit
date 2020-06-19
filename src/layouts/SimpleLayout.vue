<template>
  <v-app id="inspire">
    <v-main>
      <vue-page-transition name="zoom">
        <router-view />
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'Simple'
  }
</script>