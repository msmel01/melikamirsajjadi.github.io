<template>
  <div class="container">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    components: {
      NavBar,
    }
  }
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Merriweather', serif;

  }
  .container {
    overflow-x: hidden;
  }
</style>