<template>
  <v-app>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      class="elevation-4"
      fixed
      app
    >
      <v-list>
        <template v-for="item in items">
          <v-layout
            v-if="item.header"
            :key="item.header"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.header">
                {{ item.header }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <!--:prepend-icon="item.model ? item.icon : item['icon-alt']"-->
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.icon"
            append-icon="arrow_drop_down"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
                <v-list-tile-sub-title>idenfit basics</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
              :to="child.to"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
              <v-list-tile-sub-title>idenfit home screen</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <!--<v-divider></v-divider>-->
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      app
      fixed
      dense
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3 primary--text">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" color="primary--text"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down brand">idenfit</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!--<v-toolbar-->
    <!--app-->
    <!--:clipped-left="clipped"-->
    <!--&gt;-->
    <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
    <!--<v-btn icon @click.stop="miniVariant = !miniVariant">-->
    <!--<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>-->
    <!--</v-btn>-->
    <!--<v-btn icon @click.stop="clipped = !clipped">-->
    <!--<v-icon>web</v-icon>-->
    <!--</v-btn>-->
    <!--<v-btn icon @click.stop="fixed = !fixed">-->
    <!--<v-icon>remove</v-icon>-->
    <!--</v-btn>-->
    <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
    <!--<v-spacer></v-spacer>-->
    <!--<v-btn icon @click.stop="rightDrawer = !rightDrawer">-->
    <!--<v-icon>menu</v-icon>-->
    <!--</v-btn>-->
    <!--</v-toolbar>-->
    <v-content>
      <router-view/>
    </v-content>
    <!--<v-navigation-drawer-->
    <!--temporary-->
    <!--:right="right"-->
    <!--v-model="rightDrawer"-->
    <!--fixed-->
    <!--app-->
    <!--&gt;-->
    <!--<v-list>-->
    <!--<v-list-tile @click="right = !right">-->
    <!--<v-list-tile-action>-->
    <!--<v-icon>compare_arrows</v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<v-footer :fixed="fixed" app>-->
    <!--<span>&copy; 2018</span>-->
    <!--</v-footer>-->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        mini: true,
        items: [
          { icon: 'home', text: 'Home',to:'/' },
          {
            icon: 'add',
            'icon-alt': 'arrow_drop_down',
            text: 'Definitions',
            model: true,
            children: [
              { icon: 'work', text: 'Job Info' ,to:{name:'job-info'}}
            ]
          },
        ],
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'idenfit'
      }
    },
    name: 'App'
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Paytone+One');
  .brand{
    font-family: 'Paytone One', sans-serif;
    font-size: 24px;
  }
</style>
