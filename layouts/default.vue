<template>
<div class="">
    <loader/>
    <TopNav/>
    <nuxt class="p-4" />
    <Footer/>
  </div>
  
</template>
<script>
import TopNav from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
  name: 'IndexPage',
  components: {
      TopNav,
      Footer
  }
}
</script>
