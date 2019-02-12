<template lang="pug">
  .playground-of-get
    span.todo
      | TODO.
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class PlayGroundOfGet extends Vue {
  // Types.

  constructor() {
    super()
  }
}
</script>

<style lang="stylus" scoped>
.playground-of-get
  width 100%
  height 100vh
  display flex
  justify-content center
  align-items center
.todo
  transform translateY(-60%)
</style>
