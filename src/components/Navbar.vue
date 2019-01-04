<template>
<nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#"><img class="navbar-logo-circle" src='../assets/CPlogo.png'/></a>
  <a class="navbar-brand" href="#"><img class="navbar-logo" src='../assets/codepool.png'/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">about</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">mission</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">contcat</a>
      </li>
    </ul>
  </div>
</nav>
    
</template>
<script>
export default {
    methods: {
    showLogo: function(){
      let logo = document.querySelector('.navbar-logo-circle');
      let yPosition = window.pageYOffset;
        if( yPosition > 700 ){
          logo.style.display = 'block'
         } 
        else{
           logo.style.display = 'none'   
         } 
       } 
    },
    created () {
      window.addEventListener('scroll', this.showLogo);
    },  
    destroyed () {
      window.removeEventListener('scroll', this.showLogo);
  }
}
</script>
<style scoped>
 #nav{
   height: 50px !important;
   width: 100%;
   background-color: #000000 !important;
 }
 .active{
     border-bottom: 3px solid #8060CC !important;
 }
 .nav-link {
   text-transform: uppercase !important;
   color: #FFFFFF !important;
   width: 80px;
   text-align: center;
 }
 .nav-link a{
   height: 18px;
   width: 41px;
   font-weight: bold;
   line-height: 20px;
 }

 .navbar-logo-circle{
     width: 30px !important;
     display: none;
 }
 .navbar-logo{
     width: 150px;
 }
</style>


