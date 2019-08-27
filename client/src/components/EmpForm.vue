<template>
  <form class="modal-body" id="form" @submit.prevent="submit">
    <div>
      <p>Name</p>
      <input class="form-control input" v-model="data.name" />
    </div>
    <div>
      <p>Position</p>
      <input class="form-control" v-model="data.position" />
    </div>
    <div>
      <p>Phone</p>
      <input class="form-control" v-model="data.phone" />
    </div>
    <div>
      <p>Email</p>
      <input class="form-control" v-model="data.email" />
    </div>
    <input type="submit" :value="type == 'POST' ? 'Create' : 'Edit'" id="submit-btn">
  </form>
</template>

<script>
export default {
  props: ['employee', 'clear', 'isAdd'],
  data() {
    return {
      data : {},
      id : ''
    }
  },
  watch : {
    employee() {
      if(this.employee) {
        const { employee } = this
        const {name, position, phone, email, _id} = employee
        this.id = _id
        this.data = {
          name,
          position,
          phone,
          email
        }
      }
    },
    isAdd() {
      if(this.isAdd) {
        this.data = {
          name : '',
          position : '',
          phone: '',
          email: ''
        }
      }
    }
  },
  methods: {
    submit() {
      const { type, id, data } = this
      this.$store.dispatch('updateCreate', {
        data,
        id,
        type
      })
      .then(({data}) => {
        this.$store.dispatch('getEmployees')
        this.$toasted.success(type == 'POST' ? 'Employee Added !' : 'Employee Updated !', {duration : 1500})
        this.data = {
          name : '',
          position : '',
          phone: '',
          email: ''
        }
      })
      .catch(err => console.log(err.response.data.errors))
    }
  },
  computed : {
    type() {
      if(this.isAdd) {
        console.log('ketrigger')
        return 'POST'
      }
      else return 'PUT'
    }
  }
}
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-evenly;
}

#submit-btn {
  margin-top: 1em;
  background-color: #374E87;
  color: white;
  width: 10vh;
  margin: auto;
  border-radius: 5px;
}


</style>