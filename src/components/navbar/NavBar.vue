<script setup lang="ts">
import { defineStore } from 'pinia'
import { ref } from 'vue'

const items: string[] = ['About Us', 'Skill', 'Services', 'Jobs']

const useHamStore = defineStore('ham', () => {
  const open = ref(false)
  function toggle() {
    open.value = !open.value
  }

  return { open, toggle }
})

const hamStore = useHamStore()
</script>

<template>
  <nav class="nav">
    <img
      src="/logo.svg"
      alt="logo"
      class="nav__logo"
      :class="hamStore.open ? 'nav__logo--open' : ''"
    />

    <ul class="nav__ul" :class="hamStore.open ? 'nav__ul--open' : ''">
      <li v-for="item in items" :key="item" class="nav__item">
        {{ item }}
        <span class="item__line"></span>
      </li>
    </ul>

    <div
      class="nav__ham"
      :class="hamStore.open ? 'nav__ham--open' : ''"
      v-on:click="hamStore.toggle"
    >
      <div class="ham__line"></div>
      <div class="ham__line"></div>
      <div class="ham__line"></div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

nav {
  padding: 3rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__logo {
    height: 4rem;
  }

  .nav__ul {
    display: flex;
    gap: $spacing-xl;

    .nav__item {
      list-style: none;
      font-size: $font-l;
      font-family: $font-secondary;
      color: $color-primary-300;

      cursor: pointer;

      .item__line {
        display: block;
        width: 0%;
        height: 3px;
        background: $color-primary-300;
        border-radius: $border-radius-sm;
        margin-inline: auto;
        transition: 0.1s all ease;
      }

      &:hover {
        .item__line {
          width: 100%;
        }
      }
    }
  }

  .nav__ham {
    display: none;
  }

  @include max-screen(mobile) {
    .nav__logo--open {
      filter: saturate(0%) invert(100%) brightness(300%);
      z-index: 6;
    }

    .nav__ul {
      flex-direction: column;
      position: fixed;
      align-items: center;
      justify-content: center;
      width: 100svw;
      height: 100svh;
      top: 0;
      left: 100%;
      z-index: 5;
      background: $color-primary-400;
      transition: all 0.2s ease;

      .nav__item {
        color: $color-white;

        .item__line {
          background: $color-white !important;
        }
      }

      &.nav__ul--open {
        left: 0%;
      }
    }

    .nav__ham {
      width: 3rem;
      cursor: pointer;
      position: relative;
      display: block;
      z-index: 6;

      .ham__line {
        width: 2.5rem;
        /* height: 2px; */
        height: 0.2rem;
        background-color: $color-primary-400;
        margin-block: 0.5rem;
        border-radius: $border-radius-md;
        position: relative;
        transition: all 0.2s ease;
      }

      &.nav__ham--open {
        .ham__line {
          background: white;
        }
        .ham__line:nth-child(1) {
          transform: rotate(45deg);
          top: 0.5rem;
        }
        .ham__line:nth-child(2) {
          opacity: 0;
        }
        .ham__line:nth-child(3) {
          transform: rotate(135deg);
          bottom: 1rem;
        }
      }
    }
  }
}
</style>
