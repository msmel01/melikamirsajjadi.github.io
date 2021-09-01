<template>
  <div class="container-header">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
 
  export default {
    components: {
      NavBar,
    },
    mounted() {
        document.body.style.overflow = 'hidden';
        window.onload = init;

        function init() {
    
          document.body.addEventListener('wheel', function (event) {
            event.preventDefault();
            window.scrollBy({ 
                top: -event.deltaY, // could be negative value
                left: 0, 
                behavior: 'smooth' 
              });
           
          }, { passive: false });

          }
        }
    }

</script>

<style lang='scss'>
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  .container {
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

</style>