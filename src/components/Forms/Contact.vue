<template>
  <v-row>
    <v-col cols="12" md="12" v-if="alert.value">
      <alert :alert="alert" />
    </v-col>
    <v-col cols="12" md="6" offset-md="3">
      <h1 class="title text-center">
        {{ title }}
      </h1>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="contact.name"
          :rules="nameRules"
          label="Nome"
          required
          hint="Informe o seu nome completo"
        ></v-text-field>
    
        <v-text-field
          v-model="contact.email"
          :rules="emailRules"
          label="Email"
          required
          hint="Informe o email de contato"
        ></v-text-field>

        <v-text-field
          v-model="contact.phone"
          v-mask="['(##)#####-####']"
          :rules="phoneRules"
          label="Telefone"
          required
          hint="Informe o telefone de contato"
        ></v-text-field>

        <v-textarea
          v-model="contact.message"
          :rules="messageRules"
          name="input-7-1"
          label="Mensagem"
          required
          hint="Informe o motivo do seu contato"
        ></v-textarea>
    
        <v-btn
          color="success"
          class="mr-4"
          :loading="loading"
          @click="save"
        >
          Enviar contato
        </v-btn>

      </v-form>
    </v-col>
  </v-row>
</template>


<script>
  import Alert from '../../components/Alerts/Alert'
  import axios from 'axios'

  export default {
    name: 'Contact',
    components: {
      'alert': Alert
    },
    props: ['title'],
    data: () => ({
      dialog: false,
      valid: true,
      loading: false,
      alert: {
        value: false,
        message: '',
        type: ''
      },
      contact: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      nameRules: [
        v => !!v || 'Informe o seu nome completo',
        v => (v && v.length >= 3) || 'O nome informado é inválido',
      ],
      emailRules: [
        v => !!v || 'Informe um email válido',
        v => /.+@.+\..+/.test(v) || 'Email inválido',
      ],
      phoneRules: [
        v => !!v || 'Informe o seu telefone de contato',
        v => (v && v.length == 14) || 'O telefone informado é inválido',        
      ],
      messageRules: [
        v => !!v || 'Informe o motivo do contato',
        v => (v && v.length >= 10) || 'O motivo do contato é inválido',         
      ]
    }),
    methods: {
      validate () {
        return this.$refs.form.validate()
      },
      save () {
        if (this.validate()) {
          this.loading = true

          axios
            .post(`${ process.env.VUE_APP_BASE_URL_API }contacts/`, this.contact)
            .then(response => {
              if (response.status == 201) {
                this.$refs.form.reset()

                this.alert.value = true
                this.alert.message = 'Mensagem enviada com sucesso'
                this.alert.type = 'success'

                this.loading = false
              }
            })
            .catch(e => {
              this.alert.value = true
              this.alert.message = e.message
              this.alert.type = 'error'

              this.loading = false
            })
        }
      }
    }
  }
</script>