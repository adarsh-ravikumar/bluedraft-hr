<script setup lang="ts">

</script>

<template>
  <span class="chip__container">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

.chip__container{
   
    background-color: #E4EDF6;
    padding: 6px 20px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 17px;
}
</style>
