<template>
  <section class="hero hero-lg bg-primary">
    <div class="hero-body">
      <h1 class="text-center">Welcome to Vue Polka Todo</h1>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
};
</script>
<style lang="scss" scoped>
.hero {
  min-height: 100vh;
}

h1 {
  font-family: 'NunitoSansExtraBoldItalic';
}
</style>
