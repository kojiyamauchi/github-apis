<template lang="pug">
  section.container
    Heading
    .async-data
      h2.heading2
        | AsyncData.
      span.data-detail(
        v-for='(addDataBase, index) in processingDataBases'
        :key='addDataBase.ID'
        )
        | {{ addDataBase.API }}
    Children(
      :propDataBase = 'addDataBases'
      )
    PageBack
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Heading from '@/components/MethodComparison/Heading.vue'
import Children from '@/components/MethodComparison/Children.vue'
import PageBack from '@/components/Common/PageBack.vue'
import { VueConstructor } from 'vue'
import { Mixins } from 'vue-mixin-decorator'
import { CheckScreen } from '@/mixins/CheckScreen'

@Component({
  components: {
    Heading,
    Children,
    PageBack
  }
})
export default class MethodComparison extends Mixins<CheckScreen>(CheckScreen) {
  // Types.

  constructor() {
    super()
  }

  async asyncData() {
    const dataBase = await axios.get('https://api.github.com/users/kojiyamauchi')
    const createObjAry = Object.keys(dataBase.data).map((info, index) => {
      const createObj = {
        ID: index + 1,
        API: info + ':' + dataBase.data[info]
      }
      return createObj
    })
    return { processingDataBases: createObjAry, addDataBases: dataBase.data }
  }

  async fetch({ store }: { store: any }) {
    const dataBase = await axios.get('https://api.github.com/users/kojiyamauchi')
    store.commit('onDataBase', dataBase.data)
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100% // Setting by Per Pages.
  display flex
  flex-direction column
  justify-content center
  align-items center
  text-align center
  word-break break-word
  padding 0 20px
.heading2
  font-size 20px
  color red
  margin 0 0 12px 0
.async-data
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  padding 20px 0
.data-detail
  margin 0 0 10px 0
</style>
