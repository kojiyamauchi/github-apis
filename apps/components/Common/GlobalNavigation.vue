<template lang="pug">
  .global-navigation
    nuxt-link(
      class='global-link'
      v-for='(navigationLink, index) in navigationLinks'
      :key='navigationLink.id'
      :to='navigationLink.link'
      )
      | {{ navigationLink.letter }}
    a(
      class='global-link'
      href='https://github.com/kojiyamauchi/github-apis'
      )
      | Back to GitHub.
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class GlobalNavigation extends Vue {
  // Types.
  navigationLinks: object[]

  constructor() {
    super()
    this.navigationLinks = [
      {
        id: 1,
        link: '/',
        letter: 'TODO.'
      },
      {
        id: 2,
        link: '/',
        letter: 'TODO.'
      },
      {
        id: 3,
        link: 'OAuth',
        letter: 'GitHub’s OAuth & Get Token, on FireBase.'
      },
      {
        id: 4,
        link: 'PlayGroundOfGet',
        letter: 'Playground of GET.'
      },
      {
        id: 5,
        link: 'MethodComparison',
        letter: 'Method Comparison.'
      }
    ]
  }
}
</script>

<style lang="stylus" scoped>
.global-navigation
  display: flex
  flex-direction column
  justify-content flex-start
  align-items center
.global-link
  margin 0 0 8px 0
</style>
