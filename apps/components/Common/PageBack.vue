<template lang="pug">
  .page-back
    nuxt-link(
      class='page-back-link'
      to='/'
      )
      | PAGE
      br
      | BACK
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PageBack extends Vue {
  // Types.

  constructor() {
    super()
  }
}
</script>

<style lang="stylus" scoped>
.page-back
  display flex
  justify-content center
  align-items center
  width 65px
  height 65px
  background-color #555
  border-radius 32.5px
  position fixed
  right 5px
  bottom 5px
.page-back-link
  color #fff
  font-weight 300
</style>
