<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            link
            @click="$router.push({ path: `${ item.link }` }).catch(err => {})"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Gift Biscuit</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon title="Veja novos contatos">mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon title="Sair da sessão">mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <vue-page-transition name="zoom">
        <router-view />
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-home-variant', text: 'Início', link: '/administracao' },
      { icon: 'mdi-image-album', text: 'Álbums', link: '/administracao/albums' },
      { icon: 'mdi-contacts', text: 'Contatos', link: '/administracao/contatos' },
      { icon: 'mdi-image', text: 'Fotos', link: '/administracao/fotos' },
      { icon: 'mdi-cash-multiple', text: 'Orçamentos', link: '/administracao/orcamentos' },
      { icon: 'mdi-book-open-page-variant', text: 'Páginas', link: '/administracao/paginas' }
    ],
  }),
};
</script>
