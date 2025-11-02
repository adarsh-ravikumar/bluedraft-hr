<script setup lang="ts">
import { useRoute } from 'vue-router'
import { services as customServices } from '@/data/services'
const route = useRoute()
const currentRoute = route.params.slug
const currentServices = customServices.find((service) => service.slug === currentRoute);

</script>

<template>
  <div v-if="currentServices" class="services__page">
    
    <div class="services__title__container">
      <h3>{{ currentServices.title }}</h3>
      <h1>Dedicated recruiting experts</h1>
    </div>
    <div class="services__list">
      <div class="services__content" v-for="(service, i) in currentServices.subservices" :key="i">
        <span>
          <img :src="service.image ?? '/placeholder.png'" alt="placeholder" class="services__image" />
        </span>
        <div class="services__text">
          {{ service.description }}
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading Services....</p>
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
        padding-top: 20px !important;
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
        padding-top: 20px !important;
      }

      .services__image {
        height: 30em !important;
        width: 100% !important;
      }
    }
  }
}
</style>
