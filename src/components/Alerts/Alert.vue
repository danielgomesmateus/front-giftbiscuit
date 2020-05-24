<template>
  <v-row>
    <v-col cols="12" md="12">    
      <v-alert
        dense
        dismissible
        border="left"
        :type="alert.type"
      >
        {{ alert.message }}
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>  
  export default {
    name: 'Alert',
    props: ['alert']
  }
</script>