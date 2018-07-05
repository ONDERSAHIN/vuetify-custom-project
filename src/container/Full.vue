<!-- App Main Structure -->
<template>
  <div>
      <v-container fluid>
      <v-layout row justify-center>
        <v-flex md11 >
        <v-breadcrumbs class="pl-0">
        <v-icon slot="divider">chevron_right</v-icon>
        <v-breadcrumbs-item>
          {{pageBreadcrumb}}
        </v-breadcrumbs-item>
        </v-breadcrumbs>
        </v-flex>
      </v-layout>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  computed: {
    // computed property to get page breadcrumbs
    pageTitle() {
      return this.$route.meta.title;
    },
    pageBreadcrumb() {
      return this.$route.meta.breadcrumb;
    }
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
