<script setup lang="ts">
const services = [
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
    <div class="services__list">
      <div class="services__content" v-for="(service,i) in services" :key="i">
        <span>
          <img :src="service.image" alt="placeholder" class="services__image" />
        </span>
        <div class="services__text">
          {{ service.content }}
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
        object-fit: cover;
      }
    }
  }
}

@media only screen and (max-width: $screen-sm) {
  .services__list {
    .services__content {
      flex-direction: column;

      &:nth-child(even) {
        flex-direction: column !important;
      }

      .services__text {
        padding: 0px !important;
        padding-top:20px !important;
        font-size: 14px !important;
      }

      .services__image {
        height: 14em;
        width: 100% !important;

      }
    }
  }
}


@media only screen and (min-width: $screen-sm) and (max-width: 768px) {
  .services__list {
    .services__content {
      flex-direction: column;

      &:nth-child(even) {
        flex-direction: column !important;
      }

      .services__text {
        padding: 0px !important;
        padding-top:20px !important;
        
      }

      .services__image {
        height: 30em !important;
        width: 100% !important;
      }
    }
  }
}
</style>
