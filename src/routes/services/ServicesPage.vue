<script setup lang="ts">
const test = [
  {
    image: '/placeholder.png',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis Placeholder Image
          eget sapien id dictum. Curabitur et diam odio. Nam cursus vehicula orci non porttitor. Ut
          blandit lacus lorem, at pellentesque enim tristique eu. Sed rutrum justo sed elit sodales
          congue. Vestibulum ex nisi, pellentesque quis tristique vel, lobortis a purus. Aliquam non
          felis nec dui volutpat gravida. Nulla tellus purus, ultricies eu consequat vel, porttitor
          non augue. Donec vulputate ornare pharetra. Sed condimentum enim nisl, ultrices consequat
          nulla mattis nec. Cras convallis, sem in auctor tristique, tellus augue auctor mi, vel
          egestas ex mauris vel neque. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam tincidunt ornare mi, rutrum finibus lectus
          tristique ac. Donec dictum malesuada semper. Donec molestie venenatis erat.`,
  },
  {
    image: '/placeholder.png',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis Placeholder Image
          eget sapien id dictum. Curabitur et diam odio. Nam cursus vehicula orci non porttitor. Ut
          blandit lacus lorem, at pellentesque enim tristique eu. Sed rutrum justo sed elit sodales
          congue. Vestibulum ex nisi, pellentesque quis tristique vel, lobortis a purus. Aliquam non
          felis nec dui volutpat gravida. Nulla tellus purus, ultricies eu consequat vel, porttitor
          non augue. Donec vulputate ornare pharetra. Sed condimentum enim nisl, ultrices consequat
          nulla mattis nec. Cras convallis, sem in auctor tristique, tellus augue auctor mi, vel
          egestas ex mauris vel neque. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam tincidunt ornare mi, rutrum finibus lectus
          tristique ac. Donec dictum malesuada semper. Donec molestie venenatis erat.`,
  },
  {
    image: '/placeholder.png',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis Placeholder Image
          eget sapien id dictum. Curabitur et diam odio. Nam cursus vehicula orci non porttitor. Ut
          blandit lacus lorem, at pellentesque enim tristique eu. Sed rutrum justo sed elit sodales
          congue. Vestibulum ex nisi, pellentesque quis tristique vel, lobortis a purus. Aliquam non
          felis nec dui volutpat gravida. Nulla tellus purus, ultricies eu consequat vel, porttitor
          non augue. Donec vulputate ornare pharetra. Sed condimentum enim nisl, ultrices consequat
          nulla mattis nec. Cras convallis, sem in auctor tristique, tellus augue auctor mi, vel
          egestas ex mauris vel neque. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Etiam tincidunt ornare mi, rutrum finibus lectus
          tristique ac. Donec dictum malesuada semper. Donec molestie venenatis erat.`,
  },
]
</script>

<template>
  <div class="services__page">
    <div class="services__title__container">
      <h3>services</h3>
      <h1>Dedicated recruiting experts</h1>
    </div>
    <div class="services__list" >
      <div class="services__content" v-for="content in test">
        <span>
          <img :src="content.image" alt="placeholder" class="services__image" />
        </span>
        <div class="services__text">
          {{ content.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

.services__page {
  padding: $padding-body;

  .services__title__container {
    width: 100%;
    background: $color-primary-300;
    padding: $padding-body;

    color: $color-white;
    font-family: $font-secondary;
    border-radius: 15px;
  }

  .services__list {
    margin: 5em 0em;

    .services__content {
      display: flex;

      &:nth-child(even) {
        flex-direction: row-reverse;

        .services__text {
          padding-left: 0px;
          padding-right: 30px;
        }
      }

      &:nth-child(n) {
        margin-top: 20px;
        margin-bottom: 30px;
      }

      .services__text {
        line-height: 2;
        padding-left: 30px;
        text-align: justify;
      }

      .services__image {
        height: 14em;
        width: 22em;
        border-radius: 10px;
      }
    }
  }
}
</style>
