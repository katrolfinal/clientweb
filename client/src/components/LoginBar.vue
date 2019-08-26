<template>
  <div class="login-bar d-flex align-items-center justify-content-end">
      <!-- v-if="!isLoggedIn" -->
    <a href="#" v-if="!isLogin"
      @click.prevent="login"
    ><p style="color: white">SIGN IN</p></a>

      <!-- @click.prevent="goToUser(UserId)" -->
    <!-- <a href="#"
    ><p style="color: white">{{ user.name }}</p></a> -->

    <div style="margin-left: 15px; margin-right: 15px">•</div>

      <!-- v-if="!isLoggedIn" -->
    <a href="#" v-if="!isLogin"
      @click.prevent="register"
    ><p style="color: white">CREATE ACCOUNT</p></a>
      
    <a href="#" v-if="isLogin"
      @click.prevent="logout"
    ><p style="color: white">LOG OUT</p></a>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  // computed: {
  //   ...mapState(['isLoggedIn', 'user']),
  //   UserId() {
  //     return localStorage.id
  //   }
  // },
  // data() {
  //   return {
  //     name: ''
  //   }
  // },
  methods: {
    login() {
      this.$router.push('/login');
    },
    register() {
      this.$router.push('/register');
    },
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login')
      this.$emit('logout');
      this.$toasted.success('logged out', {duration : 500})
    },
    // goToUser(id) {
    //   this.$router.push(`/user/${id}`)
    // }
  },
  mounted() {
    // this.setName();
  },
  computed : {
    ...mapState(['isLogin'])
  }
};
</script>

<style scoped>
  .login-bar {
    background-color: #000;
    color: #fff;
    padding: 5px 0;
    padding-right: 200px;
    height: 30px;
    font-family: 'Raleway', sans-serif;
    font-size: 11.2px;
    position: fixed;
    width: 100%;
    z-index: 9;
  }
  p {
    margin: 0
  }
  a {
    text-decoration-color: white
  }
</style>