<script setup lang="ts">
import { defineStore } from 'pinia'
import { ref } from 'vue'

const links: { title: string; route: string }[] = [
  { title: 'About Us', route: '/about-us' },
  { title: 'Services', route: '/services' },
]

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
  <nav class="nav" :class="hamStore.open ? 'nav--open' : ''">
    <RouterLink
      to="/"
      v-bind:onclick="
        () => {
          if (hamStore.open) hamStore.toggle()
        }
      "
    >
      <img
        src="/logo.svg"
        alt="logo"
        class="nav__logo"
        :class="hamStore.open ? 'nav__logo--open' : ''"
      />
    </RouterLink>
    <ul class="nav__ul" :class="hamStore.open ? 'nav__ul--open' : ''">
      <li v-for="item in links" :key="item.title" class="nav__item">
        <RouterLink
          :to="item.route"
          v-bind:onclick="
            () => {
              hamStore.toggle()
            }
          "
          >{{ item.title }}</RouterLink
        >
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
  padding: $padding-body;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :has(.nav__logo) {
    z-index: 7;
  }

  .nav__logo {
    height: clamp(3rem, 10vw, 4rem);
    filter: saturate(100%) invert(0%) brightness(100%);
    transition: all 0.2s ease;
  }

  .nav__ul {
    display: flex;
    gap: $spacing-xl;

    .nav__item {
      list-style: none;

      a {
        font-size: $font-l;
        font-family: $font-secondary;
        color: $color-primary-300;
        text-decoration: none;
      }

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
    :has(.nav__logo--open) .nav__logo {
      filter: saturate(0%) invert(100%) brightness(300%);
    }

    &.nav--open {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 100;
    }

    .nav__ul {
      position: fixed;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100svw;
      height: 100vh;
      top: 0;
      left: 100%;
      z-index: 5;
      background: $color-primary-300;
      transition: all 0.2s ease;

      .nav__item {
        a {
          color: $color-white;
        }

        .item__line {
          background: $color-white !important;
        }
      }

      &.nav__ul--open {
        left: 0%;
      }
    }

    .nav__ham {
      width: 2rem;
      cursor: pointer;
      position: relative;
      display: block;
      z-index: 6;

      .ham__line {
        width: 100%;
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
