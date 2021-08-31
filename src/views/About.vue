<template>
  <div id="container">
      <Hero />
      <Particles id="tsparticles" :options="particleConfig"/>
  </div>
</template>

<script>
  import Hero from '@/components/Hero.vue';
  import particleJson from '/src/assets/particle.json';

  export default {
    data() {
      return {
        particleConfig: particleJson,
      }
    },
    components: {
      Hero,
    }
  }

</script>

<style lang="scss">

  #tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(#0f1e35,
                              #11223c,
                              #122643,
                              #142a4a,
                              #162e51,
                              #183258,
                              #19365f,
                              #1b3b67,
                              #1d3f6e);
  // background: linear-gradient(#1d3f6e,
  //                             #1b3b67,
  //                             #19365f,
  //                             #183258,
  //                             #162e51,
  //                             #142a4a,
  //                             #122643,
  //                             #11223c,
  //                             #0f1e35);
  z-index: 1;
}
</style>