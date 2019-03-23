<template lang="pug">
  .loading
    span.letter(
      v-for='(addLetter, index) in addLetters'
      :key='addLetter.id'
      )
      | {{ addLetter.letter }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Loading extends Vue {
  // Types.
  letter: string

  constructor() {
    super()
    this.letter = 'Check Token Now...'
  }

  get addLetters() {
    return Array.from(this.letter, (info, index) => {
      const createObj = {
        id: index + 1,
        letter: info
      }
      return createObj
    })
  }

  letterBounce() {
    Array.from(this.$el.children, async (selector, index) => {
      await this.$mixins.sleep(75 * index)
      selector.classList.add('is-active')
    })
  }

  mounted() {
    this.letterBounce()
  }
}
</script>

<style lang="stylus" scoped>
.loading
  display block
  width 80%
  height 40px
  +isDesktop()
    width auto
    min-width 462px
.letter
  display inline-block
  font-size 16px
  color #555
  line-height 40px
  will-change transform
  &.is-active
    animation bounce 0.75s ease-out infinite

@keyframes bounce
  0%
    transform scale(1) rotateZ(0deg)
  25%
    transform scale(1.125) rotateZ(-10deg)
  50%
    transform scale(1) rotateZ(0deg)
  75%
    transform scale(1.125) rotateZ(10deg)
  100%
    transform scale(1) rotateZ(0deg)
</style>
