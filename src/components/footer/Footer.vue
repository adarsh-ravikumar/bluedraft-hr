<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const links: { title: string; route: string }[] = [
  { title: 'About Us', route: '/about-us' },
  { title: 'Skills', route: '/skills' },
  { title: 'Services', route: '/services' },
  { title: 'Jobs', route: '/jobs' },
]

const services: { title: string; route: string }[] = [
  { title: 'Service 1', route: '/' },
  { title: 'Service 2', route: '/' },
  { title: 'Service 3', route: '/' },
]

const contacts: { title: string; icon: string; route: string }[] = [
  { title: '@ handle', icon: '/instagram.svg', route: '/' },
  { title: '+91 1230 456 129', icon: '/phone.svg', route: '/' },
  { title: 'mail@provider.to', icon: '/mail.svg', route: '/' },
]
</script>

<template>
  <footer>
    <div class="footer__main">
      <img src="/logo.svg" alt="logo" class="footer__logo" />
      <div class="footer__content">
        <div class="content__quicklinks">
          <p class="content__title">Quick Links</p>
          <ul class="content__ul">
            <li v-for="item in links" :key="item.title" class="content__item">
              <RouterLink :to="item.route">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="content__services">
          <p class="content__title">Services</p>
          <ul class="content__ul">
            <li v-for="item in services" :key="item.title" class="content__item">
              <RouterLink :to="item.route">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="content__contact">
          <p class="content__title">Contact</p>
          <ul class="content__ul">
            <li v-for="item in contacts" :key="item.title" class="content__item">
              <img :src="item.icon" alt="contact_icon" />
              <a :href="item.route">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__rights">
      <p>© BlueDraft 2025 - All Rights Reserved</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

footer {
  width: 100%;
  background: $color-primary-300;

  .footer__main {
    width: 100%;

    padding: $padding-body;

    .footer__content {
      display: flex;
      margin-top: $padding-body;
      align-items: start;
      gap: calc($padding-body * 3);

      .content__quicklinks,
      .content__services,
      .content__contact {
        .content__title {
          font-size: $font-l;
          color: $color-white;
          font-family: $font-secondary;
        }

        .content__ul {
          .content__item {
            list-style: none;

            display: flex;
            align-items: center;
            gap: 1rem;

            a {
              text-decoration: none;
              color: $color-white;
              font-size: $font-m;
            }

            margin-block: 1rem;
          }
        }
      }
    }

    .footer__logo {
      height: clamp(3rem, 10vw, 4rem);
      filter: saturate(0%) invert(100%) brightness(300%);
    }
  }

  .footer__rights {
    width: 100%;
    background: $color-primary-200;
    color: $color-white;
    padding-block: 0.7rem;
    display: grid;
    place-items: center;
  }

  @include max-screen(mobile) {
    .footer__main {
      .footer__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
    }
  }
}
</style>
