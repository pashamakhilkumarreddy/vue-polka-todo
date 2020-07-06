<template>
  <footer class="footer flex-center bg-gray">
    <div class="text-center">
      <p>
        &copy; 2020 Vue Express Todo
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  border-top: 1px solid #ddd;
  padding: 1rem;
}

p {
  margin: 0;
  font-family: 'NunitoSansBoldItalic';
}
</style>
