import * as firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBnV-pnCTuluBFMYICg7pNgpoQ_4Z-k5xY',
  authDomain: 'github-apis.firebaseapp.com',
  databaseURL: 'https://github-apis.firebaseio.com',
  projectId: 'github-apis',
  storageBucket: 'github-apis.appspot.com',
  messagingSenderId: '608009972768'
}

// OAuth on GitHub.
const GitHubProvider = new firebase.auth.GithubAuthProvider()
export { GitHubProvider }

// For Hot Module Replacement.
export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app())
