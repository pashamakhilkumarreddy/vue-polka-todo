<template>
  <div class="columns mt-6 col-oneline">
    <div class="column col-xs-12 col-sm-12 col-md-8 col-lg-6 col-4 col-mx-auto">
      <slot name="form-content">
        <h2>No content here!</h2>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormLayout',
};
</script>
<style lang="scss" scoped>
* {
  font-family: 'NunitoSansSemiBold';
}

.form {
  padding: 1.5rem 2rem;
  margin: 0.5rem;
  border: 1px solid #ddd;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.2), 0 0 0.25rem 0 rgba(0, 0, 0, 0.2),
  0 0 0.25rem 0 rgba(0, 0, 0, 0.2), 0 0 0.25rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
</style>
