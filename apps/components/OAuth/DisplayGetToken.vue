<template lang="pug">
  .display-state-token
    | You Got Token!!!
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DisplayGetToken extends Vue {
  // Types.

  constructor() {
    super()
  }
}
</script>

<style lang="stylus" scoped>
.display-state-token
  display block
  width 80%
  height 40px
  line-height 40px
  color #fff
  background-color #555
  margin 0 0 20px 0
  padding 0 20px
  border solid 1px rgba(0,0,0,0.5)
  border-radius 4px
  box-shadow 1px 1px 1px rgba(0,0,0,0.25)
  +isDesktop()
    width auto
    min-width 462px
</style>
