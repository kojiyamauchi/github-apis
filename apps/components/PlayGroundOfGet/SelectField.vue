<template lang="pug">
  .select-field
    select.select(
      v-model='selected'
      )
      option(
        class='option'
        v-for='(option, index) in options'
        :key='option.id'
        :value='option.value'
        )
        | {{ option.letter }}
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SelectField extends Vue {
  @Prop({ type: Object, default: undefined }) propDataBase?: {}
  // Types.
  selected: string | null

  constructor() {
    super()
    this.selected = null
  }

  get options() {
    const createObjAry = Object.keys(this.propDataBase!).map((info, index) => {
      const createObj = {
        id: index + 1,
        value: info,
        letter: info.toUpperCase().replace('_', ' ')
      }
      if (createObj.id === 1) this.selected = createObj.value
      return createObj
    })
    return createObjAry
  }

  @Watch('selected')
  addKey() {
    this.$emit('getKey', this.selected)
  }
}
</script>

<style lang="stylus" scoped>
.select-field
  display block
  margin 0 0 30px
  position relative
  &:after
    content '>>'
    display block
    position absolute
    top 50%
    right 5px
    transform translateY(-50%) rotateZ(90deg)
.select
  font-size 16px
  color #555
  min-width 462px
  height 40px
  background-color transparent
  padding 0 20px
  border solid 1px rgba(0,0,0,0.5)
  border-radius 4px
  box-shadow 1px 1px 1px rgba(0,0,0,0.25)
</style>
