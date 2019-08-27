<template>
    <div style="position: fixed; width: 250px; border: 1px solid #DDE2E6; border-radius: 13px; width: auto; box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.12); background-color: #DFE2C9">
      <div class="d-flex justify-content-center" style="margin: 70px;
            margin-bottom: 0;
            margin-top: 40px;">
        <div style="border: 3px solid #584F6E; border-radius: 500em; padding: 5px; width: 115px">
          <img src="https://semantic-ui.com/images/avatar2/small/rachel.png"
            style="border-radius: 500em; width: 100px"
          >
        </div>
      </div>
      <div style="margin-top: 5px">
        <p style="letter-spacing: 2px; font-size: 18px; text-align: center"><b>{{employee.name}}</b></p>
      </div>
      <div style="margin-bottom: 55px">
        <p style="letter-spacing: 2px; font-size: 14px; text-align: center">{{employee.position}}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center" 
      style="background-color: #584F6E; 
            padding: 7px;
            padding-left: 30px;
            padding-right: 30px">
        <div class="d-flex justify-content-center align-items-center"
        style="font-size: 1.25em; background-color: #fff; border-radius: 500em; height: 35px; width: 35px">
          <div class="d-flex">
            <i class="far fa-address-book" style="color: #584F6E; margin-top: 1px; margin-left: 1px"></i>
          </div>
        </div>
        <div>
          <p style="color: #fff; text-align: right; font-size: 12px">{{employee.phone}}</p>
          <p style="color: #fff; text-align: right; font-size: 12px">{{employee.email}}</p>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center" style="padding: 7px;
            padding-left: 30px;
            padding-right: 30px">
        <div class="d-flex justify-content-center align-items-center"
        style="
        font-size: 1.25em; 
        background-color: #584F6E; 
        border-radius: 500em; 
        height: 35px; width: 35px">
          <div class="d-flex">
            <i class="fas fa-map-marker-alt" style="color: #fff; margin-top: 1px"></i>
          </div>
        </div>
        <div>
          <div><p style="text-align: right; font-size: 12px">{{employee.address}}</p></div>
          <div><p style="text-align: right; font-size: 12px"></p></div> 
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center" 
      style="background-color: #584F6E; 
            padding: 7px;
            padding-left: 30px;
            padding-right: 30px;
            border-bottom-left-radius: 13px; 
            border-bottom-right-radius: 13px;">
        <div class="d-flex justify-content-center align-items-center"
        style="
        font-size: 1.10em; 
        background-color: #fff; 
        border-radius: 500em; 
        height: 35px; width: 35px">
          <div class="d-flex">
            <i class="fas fa-mouse-pointer" style="color: #584F6E; margin-left: 3px"></i>
          </div>
        </div>
        <div>
          <div><p style="color: #fff; text-align: right; font-size: 12px">{{`hacktiv.com`}}</p></div>
          <div><p style="color: #fff; text-align: right; font-size: 12px">hacktiv.com</p></div> 
        </div>
      </div>
      <p id="close-btn" @click="$emit('closeShowCard')" >close</p>
    </div>
</template>

<script>
export default {
  props : ['employee']
}
</script>

<style scoped>

#close-btn:hover {
  cursor: pointer
}

</style>