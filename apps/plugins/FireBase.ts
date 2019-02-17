import * as firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBjwAEriPEf8Td0mMN5usgGZhqhMz4pDBM',
  authDomain: 'github-apis-on-github-pages.firebaseapp.com',
  databaseURL: 'https://github-apis-on-github-pages.firebaseio.com',
  projectId: 'github-apis-on-github-pages',
  storageBucket: 'github-apis-on-github-pages.appspot.com',
  messagingSenderId: '440267000331'
}

// OAuth on GitHub.
const GitHubProvider = new firebase.auth.GithubAuthProvider()
GitHubProvider.addScope('user')
GitHubProvider.addScope('repo')
export { GitHubProvider }

// For Hot Module Replacement.
export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app())
