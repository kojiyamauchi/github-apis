<template lang="pug">
  .children
    .props-data
      h2.heading2
        | Props AsyncData
      span.prop-data-detail(
        v-for='(addPropDataBase, index) in addPropDataBases'
        :key='addPropDataBase.ID'
        )
        | {{ addPropDataBase.API }}
    .store-data
      h2.heading2
        | Fetch Store Data
      span.store-data-detail(
        v-for='(addStateDataBase, index) in addStateDataBases'
        :key='addStateDataBase.ID'
        )
        | {{ addStateDataBase.API }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({})
export default class Children extends Vue {
  @Prop({ type: Object, default: undefined }) propDataBase?: { [key: string]: string }
  // Types.

  constructor() {
    super()
  }

  // Page Component's Require AsyncData() Props Data.
  get addPropDataBases() {
    const propDataBaseAry = Object.keys(this.propDataBase!).map((info, index) => {
      const createObj = {
        ID: index + 1,
        API: info + ':' + this.propDataBase![info]
      }
      return createObj
    })
    return propDataBaseAry
  }

  // Page Component's Require fetch() Store Data.
  get addStateDataBases() {
    const stateDataBaseAry = Object.keys(this.$store.state.stateDataBase!).map((info, index) => {
      const createObj = {
        ID: index + 1,
        API: info + ':' + this.$store.state.stateDataBase![info]
      }
      return createObj
    })
    return stateDataBaseAry
  }

  // Don't Work.
  async asyncData() {
    const dataBase = await axios.get('https://api.github.com/users/kojiyamauchi')
    console.log(dataBase.data)
  }
}
</script>

<style lang="stylus" scoped>
.children
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
.heading2
  font-size 20px
  color red
  margin 0 0 12px 0
.props-data,
.store-data
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  padding 20px 0
.prop-data-detail,
.store-data-detail
  margin 0 0 10px 0
</style>
