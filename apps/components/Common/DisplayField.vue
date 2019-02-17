<template lang="pug">
  .display-field
    | {{ value }}
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator'

@Component({})
export default class DisplayField extends Vue {
  @Prop({ type: Object, default: null }) propDataBase?: { [key: string]: string }
  @Prop({ type: String, default: null }) propKey?: string

  // Types.
  value: string | null

  constructor() {
    super()
    this.value = null
  }

  @Watch('propKey')
  addValue() {
    return (this.value = !!this.propDataBase![this.propKey!] ? this.propDataBase![this.propKey!] : 'Value is None.')
  }
}
</script>

<style lang="stylus" scoped>
.display-field
  display block
  width 80%
  height 40px
  line-height 40px
  margin 0 0 30px
  padding 0 20px
  border solid 1px rgba(0,0,0,0.5)
  border-radius 4px
  box-shadow 1px 1px 1px rgba(0,0,0,0.25)
  overflow hidden
  text-overflow ellipsis
  +isDesktop()
    width auto
    min-width 462px
</style>
