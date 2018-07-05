<template>
  <div>
    <transition appear name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'definition',
    data () {
      return {
        items: [
          {
            text: 'Definitions',
            disabled: true
          },
          {
            text: 'Job Info',
            disabled: false
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>
