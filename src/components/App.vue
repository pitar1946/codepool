<template>
  <div>
     <app-navbar></app-navbar>
     <app-header></app-header>
     <app-about></app-about>
     <app-work></app-work>
     <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Work from './Work'
import Footer from './Footer'

export default {
  components: {
  'app-navbar' : Navbar,
  'app-header': Header,
  'app-about' : About,
  'app-work' : Work,
  'app-footer' : Footer
 }
}
</script>

<style>

</style>
