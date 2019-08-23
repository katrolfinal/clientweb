<template>
  <div class="home">
    <div class="image-overlay" style="height: 350px">
      <parallax direction="down" >
        <img src="../../public/images/76442.jpg" alt="img-ovrly" style="object-fit: cover" />
      </parallax>
    </div>
    <div style="height: 380px;">&nbsp;</div>
    <div class="content-home">
      <div style="background-color: #F2F3F5">
        <div class="content-home-1">
          <p style="font-size: 4em; margin-bottom: 0"><i class="far fa-handshake"></i></p>
          <h1 style="margin-bottom: 20px"><b>Simplify Your Business</b></h1>
          <p style="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime porro reprehenderit repellat, et accusamus? Ducimus ipsum nam ipsam molestiae maxime impedit est perspiciatis fuga vel vitae, autem magni asperiores!</p>
          <button @click="clickJoinNow()" class="btn btn-primary" style="max-height: 50px; margin-top: 20px"><b>Join Now</b><i class="fas fa-chevron-right" style="margin-left: 15px"></i></button>
        </div>
      </div>
      <div class="row content-home-2">
        <div class="col" style="border-right:1px solid #dee2e6; margin-right: 45px;
    padding-right: 60px;">
          <p style="font-size: 2.5em; margin-bottom: 0"><i class="fas fa-mobile-alt"></i></p>
          <h4 style="margin-bottom: 20px; margin-top: 15px"><b>Suck My Dick Dudeeeeeeeeeee!</b></h4>
          <p style="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime porro reprehenderit repellat, et accusamus? Ducimus ipsum nam ipsam molestiae maxime impedit est perspiciatis fuga vel vitae, autem magni asperiores!</p>
        </div>
        <div class="col">
          <p style="font-size: 2.5em; margin-bottom: 0"><i class="far fa-heart"></i></p>
          <h4 style="margin-bottom: 20px; margin-top: 15px"><b>Partners with Peope You Love</b></h4>
          <p style="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime porro reprehenderit repellat, et accusamus? Ducimus ipsum nam ipsam molestiae maxime impedit est perspiciatis fuga vel vitae, autem magni asperiores!</p>
        </div>
      </div>
    </div>
    <div style="height: 1000px">

    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy';

export default {
  name: 'home',
  components: {
    Parallax
  },
  props: {
    speedFactor: 0.5
  },
}
</script>

<style scoped>
.image-overlay {
  margin-bottom: 35px;
}
h1 {
  font-size: 42px;
}

.fp {
  padding-bottom: 50px;
}

.content-home-1{
  margin-right: 325px;
  margin-left: 325px;
  padding-bottom: 100px;
  padding-top: 80px
}

.content-home-2{
  margin-right: 150px;
  margin-left: 150px;
  border-bottom:1px solid #dee2e6; 
  padding: 50px;
  padding-bottom: 100px;
  padding-top: 100px
}
</style>
