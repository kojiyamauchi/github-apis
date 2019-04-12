<template lang="pug">
  .oauth
    h1.heading
      | GitHub’s OAuth &amp; Get Token, on FireBase. 🍵
    p.description
      br
      | Sample Test Sample Test.
      br
    template(v-if='loading')
      Loading
    template(v-else-if='!inToken')
      GetToken(@click.native='getToken')
    template(v-else)
      DisplayGetToken
      DisplayField(
        :propDataBase = 'adddDataBase'
        :propKey = 'addKey'
        )
      SelectField(
        :propDataBase = 'adddDataBase'
        @getKey='checkKey'
        )
    PageBack
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import firebase, { GitHubProvider } from '@/plugins/FireBase'
import axios from 'axios'
import Loading from '@/components/OAuth/Loading.vue'
import GetToken from '@/components/OAuth/GetToken.vue'
import DisplayGetToken from '@/components/OAuth/DisplayGetToken.vue'
import DisplayField from '@/components/Common/DisplayField.vue'
import SelectField from '@/components/Common/SelectField.vue'
import PageBack from '@/components/Common/PageBack.vue'
import { VueConstructor } from 'vue'
import { Mixins } from 'vue-mixin-decorator'
import { CheckScreen } from '@/mixins/CheckScreen'

@Component({
  components: {
    Loading,
    GetToken,
    DisplayGetToken,
    DisplayField,
    SelectField,
    PageBack
  }
})
export default class OAuth extends Mixins<CheckScreen>(CheckScreen) {
  // Types.
  result: any
  inToken: string | null
  loading: boolean
  API_BASE_URL: string
  key: string
  adddDataBase: {} | null

  constructor() {
    super()
    this.result = null
    this.inToken = null
    this.loading = true
    this.API_BASE_URL = 'https://api.github.com'
    this.key = ''
    this.adddDataBase = null
  }

  async getAPI() {
    const request = axios.create({
      baseURL: this.API_BASE_URL,
      headers: { Authorization: `token ${this.inToken}` }
    })
    const dataBase = await request.get('/user')
    return (this.adddDataBase = dataBase.data)
  }

  /*
    asyncData() & fetch() Method is a Need to Complete of Before Rendering Component.
    In The Case of When a Lot of Processing to Components & When Need Access to Instance.
    It's Not Suitable. Maybe。
  */
  async checkOAuth() {
    this.result = await firebase.auth().getRedirectResult()
    if (this.result.credential) {
      this.inToken = await this.result.credential.accessToken
      await this.getAPI()
      this.loading = false
    } else {
      this.loading = false
    }
    return this.inToken
  }

  getToken() {
    firebase.auth().signInWithRedirect(GitHubProvider)
  }

  checkKey(arg: string) {
    return (this.key = arg)
  }

  get addKey() {
    return this.key
  }

  mounted() {
    this.checkOAuth()
  }

  beforeRouteEnter(to: any, from: any, next: any) {
    next()
    console.log('Call Navigation Guard')
    console.log(to)
    console.log(from)
    console.log(next)
  }
}
</script>

<style lang="stylus" scoped>
.oauth
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
