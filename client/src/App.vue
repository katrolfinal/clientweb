<template>
  <div id="page-container">
    <div id="content-wrap">
      <div id="app">
        <LoginBar></LoginBar>
        <Navbar />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBar from '../src/components/LoginBar';
import Navbar from '../src/components/Navbar';
import { mapState } from "vuex";

export default {
  components: {
    LoginBar,
    Navbar
  },
  created() {
    if(this.isLogin) {
      this.$router.push('/dashboard')
      this.$store.dispatch('getEmployees')
      this.$store.commit('storeLoggedCompany') 
    }
    else this.$router.push('/')
  },
  computed : {
    ...mapState(['isLogin'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  /* background-color: #E5E6E7; */
}

a, p, h1, h2, h3, h4, h5, h6, label {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  /* font-family: 'Raleway', sans-serif; */
}

.w-100 {
  width: 100%;
}

.cursor-pointer {
  cursor: pointer;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;
}
</style>
