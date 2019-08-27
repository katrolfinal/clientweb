<template>
  <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <EmpForm :employee="employee" :isAdd="false" />
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmpForm from '@/components/EmpForm.vue'
export default {
 props: ['employee'],
 data() {
   return {
     
   }
 },
 components : {
   EmpForm
 },
 methods: {
   close() {
     this.$emit('closeModal')
   }
 },
 watch : {
   employee() {
     console.log(this.employee)
   }
 }
}
</script>

<style>
#modalEdit {
  background-color: #374E87;
}



</style>