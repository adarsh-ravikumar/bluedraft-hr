<script setup lang="ts">
const props = defineProps({
  height: String,
  width: String,
  image: String,
})
</script>

<template>
  <div class="image_card_container"  :style="{ '--card-height': height, '--card-width': width }">
    <img :src="props.image ? props.image : '/placeholder.png'" alt="placeholder" class="image" />
    <span class="image_card_text_container">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

.image_card_container {
  border-radius: 10px;
  height: var(--card-height);
  width: var(--card-width);
}

.image {
  height: inherit;
  width: inherit;
  border-radius: 10px;
}

.image_card_text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #e4edf6;
  padding: 10px;
}
</style>
