<template>
  <div style="background-color: ">
    <section style="padding-top: 200px">
      <form class="form-signin" @submit.prevent="register">
        <div id="form-container">
          <h1 class="h5 mb-3 font-weight-normal" style="text-align:left">Please fill the field</h1>
          <label for="inputEmail" class="sr-only">Full Name</label>
          <input
            type="name"
            id="inputName"
            class="form-control"
            placeholder="Username"
            required
            autofocus
            v-model="form.username"
          />
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email-register"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="form.email"
          />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="form.password"
            style="margin-bottom: 0px"
          />
          <div style="margin-bottom: 20px; text-align:left">
            <a href="#" @click.prevent="clickLogin">
              <small>Already have account?</small>
            </a>
          </div>
          <button
          class="btn btn-lg btn-block"
          type="submit"
          style="background-color: #1C1C1C; color: #fff"
          >
          <p
            class="d-flex justify-content-center align-self-center"
            style="margin: 0px; padding-bottom: 3px"
          >Sign up</p>
        </button>
        </div>
        <div id="choose-color" >
          <p>Choose color for your cards : </p>
          <swatches 
            v-model="form.color" 
            colors="material-dark"
            popover-to="right" 
            shapes="circles" 
            row-length="10"
            show-border
            :wrapper-style="wrapper"
            :swatch-style="swatch"
            :trigger-style="{border: '1px solid rgba(0, 0, 0, 0.2)'}"
             />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import Swatches from 'vue-swatches'
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        color: '#374E87'
      },
      wrapper: {
        marginTop : '10px',
        padding: '10px',
        paddingTop: '30px',
        width: '20em',
        border: '2px solid rgba(0, 0, 0, 0.2)'
      },
      swatch : {
        margin: '1.5px',
        border : '0.5px solid rgba(0, 0, 0, 0.2)'
      },
      exceptions : []
    }
  },
  methods: {
    register() {
        this.$store.dispatch('loginRegister', {
          type : 'register',
          data : this.form
        })
        .then(({data}) => {
          console.log(data)
          this.$toasted.success('Account created !', {duration : 1500})
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err.response)
          this.$toasted.error(err.response.data.errors[0], {duration : 1000, closeOnSwipe : true})
        })
    },
    clickLogin() {
      this.$router.push('/login')
    }
  },
  components : {
    Swatches
  }
};
</script>
<style scoped>
body {
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  justify-content: center;
  background-color: #E5E6E7;
}
.form-signin {
  width: 90vh;
  /* margin: 0 auto; */
  /* max-width: 100vh; */
  padding: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="name"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="email-register"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#choose-color {
  display: flex;
  margin: 1em;
  margin-left: 10em;
  flex-direction: column;
  align-items: center;
}

#form-container {
  width: 30vw;
}
</style>
