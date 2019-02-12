<template lang="pug">
  h1.heading
    | Method Comparison.
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({})
export default class Heading extends Vue {
  // Types.

  constructor() {
    super()
  }

  // Don't Work.
  async asyncData() {
    const dataBase = await axios.get('https://api.github.com/users/kojiyamauchi')
    console.log(dataBase.data)
  }
}
</script>

<style lang="stylus" scoped>
.heading
  display inline-block
  font-size 36px
  letter-spacing 0.02em
  padding 40px 0 0 0
</style>
