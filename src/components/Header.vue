<template>
<header class="header">
 <div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <app-logo></app-logo>
        <div class="heading">
          <h1>The Secret of Simplicity</h1> 
         </div>
         <div class="content">
          <p>Codepool is a company with a vision of the future. We are consisted of experienced professionals who specialise in business strategy, design and development.</p>
          <p>Working with Codepool means being a part of development, progress, sustainable solution, and expertise.</p>
        </div> 
        <div class="button">
         <a href="#">start a project</a>
         </div>
    </div>
   </div>
 </div>
</header> 
</template>

<script>

import Logo from './Logo'
export default {
  components: {
   'app-logo': Logo
 }
}

</script>

<style scoped>
.header{
    height: 800px;
    width: 100%;
    background-color: #0C0913;
}
.heading{
    height: 159px;
    color: #FFFFFF;
    line-height: 143px;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    margin-top: 90px;
    margin-bottom: 5px;
}
.heading h1{
   font-size: 120px;
   font-weight: bold;
}
.content {
  height: 157px;
  color: #FFFFFF;
  margin: 0 auto;
}
.content p{
  font-size: 24px;
  line-height: 32px;
  margin: 0 auto;
}
.button{
  height: 48px;
  width: 200px;	
  border: 1px solid #FFFFFF;
  text-align: center;
  margin: 0 auto;
}
.button a{
  height: 21px;
  width: 117px;
  color: #FFFFFF;
  font-size: 18px;
  line-height: 47px;
  text-transform: uppercase;
}
.button a:hover{
  text-decoration: none;
}


</style>