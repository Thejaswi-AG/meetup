<template>
  <v-app>
  <div>
    <v-app-bar dark class="primary">
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up" />
      <v-toolbar-title absolute>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      </v-app-bar>
    </div>
    <v-navigation-drawer v-model="sideNav" >
    <v-list>
      <v-list-item link v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'mdi-account-multiple', title: 'View Meetup', link: '/meetups' },
        { icon: 'mdi-google-classroom', title: 'Organise Meetup', link: '/meetups/new' },
        { icon: 'mdi-account', title: 'Profile', link: '/profile' },
        { icon: 'mdi-emoticon-outline', title: 'Sign up', link: '/signup' },
        { icon: 'mdi-lock-open-check', title: 'Sign in', link: '/signin' }
      ]
    }
  }
}
</script>
