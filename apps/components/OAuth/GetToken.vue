<template lang="pug">
  button.get-token
    | GET TOKEN
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class GetToken extends Vue {
  // Types.

  constructor() {
    super()
  }
}
</script>

<style lang="stylus" scoped>
.get-token
  font-size 16px
  color #555
  display block
  width 80%
  height 40px
  background-color transparent
  padding 0 20px
  border solid 1px rgba(0,0,0,0.5)
  border-radius 4px
  box-shadow 1px 1px 1px rgba(0,0,0,0.25)
  transition border 0.25s ease-in
  +isDesktop()
    width auto
    min-width 462px
  &:hover
    cursor pointer
    border solid 1px rgba(0, 241, 255, 0.5)
    transition border 0.25s ease-out
</style>
