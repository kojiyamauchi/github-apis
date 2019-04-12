<template lang="pug">
  .playground-of-get
    h1.heading
      | Playground of GET. 🚶‍
    p.description
      br
      | This Page is Require 'asyncData()' on Page Component.
      br
      | Carrying Data to Page Component <=> Children Component.
      br
      | Props, Props Emit.
    DisplayField(
      :propDataBase = 'addDataBase'
      :propKey = 'addKey'
      )
    SelectField(
      :propDataBase = 'addDataBase'
      @getKey='checkKey'
      )
    PageBack
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import DisplayField from '@/components/Common/DisplayField.vue'
import SelectField from '@/components/Common/SelectField.vue'
import PageBack from '@/components/Common/PageBack.vue'
import { VueConstructor } from 'vue'
import { Mixins } from 'vue-mixin-decorator'
import { CheckScreen } from '@/mixins/CheckScreen'

@Component({
  components: {
    DisplayField,
    SelectField,
    PageBack
  }
})
export default class PlayGroundOfGet extends Mixins<CheckScreen>(CheckScreen) {
  // Types.
  key: string

  constructor() {
    super()
    this.key = ''
  }

  async asyncData() {
    const dataBase = await axios.get('https://api.github.com/users/kojiyamauchi')
    return { addDataBase: dataBase.data }
  }

  checkKey(arg: string) {
    return (this.key = arg)
  }

  get addKey() {
    return this.key
  }
}
</script>

<style lang="stylus" scoped>
.playground-of-get
  width 100%
  height 100vh
  display flex
  flex-direction column
  justify-content center
  align-items center
  text-align center
.heading
  font-size 24px
  padding 0 10%
.description
  line-height 1.5em
  margin 0 0 30px
  padding 0 10%
</style>
