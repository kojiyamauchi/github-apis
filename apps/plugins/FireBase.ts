import * as firebase from 'firebase/app'
import 'firebase/auth'

let config

if (process.env.NODE_ENV === 'GITHUB_PAGES') {
  // For GitHub Pages.
  console.log('GitHub Pages!')
  config = {
    apiKey: 'AIzaSyBjwAEriPEf8Td0mMN5usgGZhqhMz4pDBM',
    authDomain: 'github-apis-on-github-pages.firebaseapp.com',
    databaseURL: 'https://github-apis-on-github-pages.firebaseio.com',
    projectId: 'github-apis-on-github-pages',
    storageBucket: 'github-apis-on-github-pages.appspot.com',
    messagingSenderId: '440267000331'
  }
} else {
  // For Localhost.
  console.log('Localhost!')
  config = {
    apiKey: 'AIzaSyBnV-pnCTuluBFMYICg7pNgpoQ_4Z-k5xY',
    authDomain: 'github-apis.firebaseapp.com',
    databaseURL: 'https://github-apis.firebaseio.com',
    projectId: 'github-apis',
    storageBucket: 'github-apis.appspot.com',
    messagingSenderId: '608009972768'
  }
}

// OAuth on GitHub.
const GitHubProvider = new firebase.auth.GithubAuthProvider()
GitHubProvider.addScope('user')
GitHubProvider.addScope('repo')
export { GitHubProvider }

// For Hot Module Replacement.
export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app())
