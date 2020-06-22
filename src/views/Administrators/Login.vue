<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <div v-if="alert.value">    
            <alert :alert="alert" />
          </div>
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Administração</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form 
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  label="Usuário"
                  name="username"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                  :rules="usernameRules"
                  v-model="data.username"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Senha"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                  :rules="passwordRules"
                  v-model="data.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" color="primary" @click="login">Acessar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Alert from '../../components/Alerts/Alert'

  export default {
    name: 'Login',
    components: {
      'alert': Alert
    },
    data: () => ({
      data: {
        username: '',
        password: ''
      },
      alert: {
        value: false,
        type: '',
        message: ''
      },
      valid: true,
      usernameRules: [
        v => !!v || 'Nome de usuário é obrigatório'
      ],
      passwordRules: [
        v => !!v || 'Senha de usuário é obrigatório',
        v => (v && v.length >= 6) || 'A senha deve ter no minímo 6 caracteres',
      ],      
    }),

    methods: {
      validate () {
        return this.$refs.form.validate()
      },
      setLayout(layout) {
        this.$store.commit('SET_LAYOUT', layout)
      },
      login() {
        if (this.validate()) {
          this.$store.dispatch('user/loginUser', this.data)
            .then((response) => {
              
            })
            .catch((e) => {
              this.alert = {
                value: true,
                type: 'warning',
                message: e.message
              }
            })
        }
      }
    },
    beforeMount() {
      this.setLayout('simple-layout')
    }
  }
</script>