<template lang="pug">
  .oauth
    h1.heading
      | GitHub’s OAuth &amp; Get Token, on FireBase. 🍵
    p.description
      br
      | TODO.
      br
      | {{ inToken }}
    template(
      v-if='loading'
      )
      Loading
    template(
      v-else-if='!inToken'
      )
      GetToken(
        @click.native='getToken'
      )
    template(
      v-else
      )
      DisplayGetToken
    PageBack
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import firebase, { GitHubProvider } from '@/plugins/FireBase'
import Loading from '@/components/OAuth/Loading.vue'
import GetToken from '@/components/OAuth/GetToken.vue'
import DisplayGetToken from '@/components/OAuth/DisplayGetToken.vue'
import PageBack from '@/components/Common/PageBack.vue'

@Component({
  components: {
    Loading,
    GetToken,
    DisplayGetToken,
    PageBack
  }
})
export default class OAuth extends Vue {
  // Types.
  result: any
  inToken: string | null
  loading: boolean

  constructor() {
    super()
    this.result = null
    this.inToken = null
    this.loading = true
  }

  getToken() {
    firebase.auth().signInWithRedirect(GitHubProvider)
  }

  /*
    asyncData() & fetch() Method is a Need to Complete of Before Rendering Component.
    In The Case of When a Lot of Processing to Components & When Need Access to Instance.
    It's Not Suitable. Maybe。
  */
  async checkOAuth() {
    this.result = await firebase.auth().getRedirectResult()
    if (this.result.credential) {
      this.inToken = this.result.credential.accessToken
      this.loading = false
    } else {
      this.loading = false
    }
    return this.inToken
  }

  mounted() {
    this.checkOAuth()
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
