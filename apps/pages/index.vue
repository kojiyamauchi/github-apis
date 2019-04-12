<template lang="pug">
  section.container
    Heading
    GlobalNavigation
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Heading from '@/components/Top/Heading.vue'
import GlobalNavigation from '@/components/Common/GlobalNavigation.vue'
import { VueConstructor } from 'vue'
import { Mixins } from 'vue-mixin-decorator'
import { CheckScreen } from '@/mixins/CheckScreen'

@Component({
  components: {
    Heading,
    GlobalNavigation
  }
})
export default class extends Mixins<CheckScreen>(CheckScreen) {
  // Types.

  constructor() {
    super()
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100vh // Setting by Per Pages.
  display flex
  flex-direction column
  justify-content center
  align-items center
</style>
