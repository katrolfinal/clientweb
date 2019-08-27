<template>
   <tr class="employee"> 
      <th scope="row">
        <!-- <img v-if="!employee.image" 
          src="data:image/jpeg;base64,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"
          style="border-radius: 500em; width: 40px"
        > -->
        <img 
          src="https://semantic-ui.com/images/avatar2/small/rachel.png"
          style="border-radius: 500em; width: 40px"
        >
      </th>
      <td @click="showCard"><p style="color: #3680C7; font-size: 16px"><b>{{employee.name}}</b></p></td>
      <td @click="showCard">
        <div class="d-flex">
          <div style="background-color: #EEECFC; padding: 5px 15px 5px 15px; border-radius: 20px;">
            <b><p style="color: #8C80BF">{{employee.position}}</p></b>
          </div>
        </div>
      </td>
      <td @click="showCard"><p>{{'0'+employee.phone}}</p></td>
      <td @click="showCard"><p>{{employee.email}}</p></td>
      <td style="text-align: left"><span data-toggle="modal" class="edit-btn" data-target="#ModalEdit" @click="$emit('openEdit', employee)">Edit</span> &nbsp; <span @click="clickDelete" class="delete-btn" >Delete</span></td>
  </tr>
</template>

<script>
import ModalEdit from '../components/ModalEdit';

export default {
  props: ['employee'],
  data() {
    return {
      open : false
    }
  },
  components: {
    ModalEdit
  },
  methods : {
    showCard () {
      this.$emit('showCard', this.employee)
    },

    clickEdit() {
      alert('edit')
    },
    deleteThis() {
      this.$store.dispatch('deleteEmployee', this.employee._id)
      .then(() => {
        this.$toasted.clear()
        this.$toasted.success('Employee deleted', {duration : 1400})
        this.$store.dispatch('getEmployees')
      })
      .catch(console.log)
    },
    clickDelete(id) {
      this.$toasted.show('Are you sure ?', {
        duration : null,
        position : 'top-center',
        className : 'confirmDlt',
        action : [{
          text: 'Delete',
          class : 'yes-delete',
          onClick: (e, toastObject) => {
            this.deleteThis()
          }
        }, {
          text: 'Cancel',
          onClick: (e, toastObject) => {
            toastObject.goAway(0)
          }
        }]
      })
    }
  }
}
</script>

<style scoped>
.employee:hover {
  cursor: pointer;
}
p {
  margin: 0;
  text-align: left;
  font-size: 14px
}

span {
  margin: 0;
  text-align: left;
  font-size: 14px
}

.avatar {
  border-radius: 50%
}

.table td {
  vertical-align: middle !important;
  padding: 8px
}

.table th {
  padding: 8px;
  border-color: #FFF
}

.table thead th {
  vertical-align: middle
}

.edit-btn {
  padding: 0 15px;
  color: white;
  background-color: #374E87;
  border-radius: 3.5px;
}

.edit-btn:hover {
  background-color: rgba(121, 135, 203, 0.377);
}

.delete-btn {
  background-color: #EF5350;
  color: white;
  padding: 0 15px;
  border-radius: 3.5px;
}

.delete-btn:hover {
  background-color: rgba(239, 83, 80, 0.301);
}


</style>