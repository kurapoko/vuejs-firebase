import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAkYX5e6FE58DgcbsrJBtlj0BkrhiZUIX0",
  authDomain: "my-address-pj-e521b.firebaseapp.com",
  databaseURL: "https://my-address-pj-e521b.firebaseio.com",
  projectId: "my-address-pj-e521b",
  storageBucket: "my-address-pj-e521b.appspot.com",
  messagingSenderId: "256024986187",
  appId: "1:256024986187:web:c8d912ea749d5eb35a43ce",
  measurementId: "G-B97R8WSD2P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
