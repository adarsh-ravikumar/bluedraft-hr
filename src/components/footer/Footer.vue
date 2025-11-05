<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { services } from '@/data/services'

const links: { title: string; route: string }[] = [
  { title: 'About Us', route: '/about-us' },
  { title: 'Skills', route: '/' },
  { title: 'Services', route: '/services' },
  { title: 'Jobs', route: '/' },
]

const contacts: { title: string; icon: string; route: string; isExternal: boolean }[] = [
  {
    title: 'Bluedraft Engg',
    icon: '/linkedIn.svg',
    route: 'https://www.linkedin.com/in/bluedraft-engineering-a62838383',
    isExternal: true,
  },
  { title: '+91 7075803400', icon: '/phone.svg', route: 'tel:+917075803400', isExternal: false },
  { title: '+1 443-307-0024', icon: '/phone.svg', route: 'tel:+14433070024', isExternal: false },
  {
    title: 'Info@bluedraftengineering.com',
    icon: '/mail.svg',
    route: 'mailto:Info@bluedraftengineering.com',
    isExternal: false,
  },
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
              <RouterLink :to="`services/${item.slug}`">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="content__contact">
          <p class="content__title">Contact</p>
          <ul class="content__ul">
            <li v-for="item in contacts" :key="item.title" class="content__item">
              <img :src="item.icon" alt="contact_icon" />

              <a
                :href="item.route"
                :target="item.isExternal ? '_blank' : undefined"
                :rel="item.isExternal ? 'noopener noreferrer' : undefined"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>

        <div class="content__address">
          <p class="content__title">Address</p>
          <ul class="content__ul">
            <li class="content__item"><b>United States:</b></li>
            <li class="content__item">2235 GREENCEDAR DR BEL AIR, MD 21015-6383 United States</li>
            <li class="content__item"><b> India:</b></li>
            <li class="content__item">
              Plot No.205, Lakshmi Kalyana, 2nd Floor, Flat No.201 , Vaishali Nagar, Madeenaguda,
              Hyderabad, 500084
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
      .content__contact,
      .content__address {
        .content__title {
          font-size: $font-l;
          color: $color-white;
          font-family: $font-secondary;
        }

        .content__ul {
          .content__item {
            list-style: none;
            text-decoration: none;
            color: $color-white;

            display: flex;
            align-items: center;
            gap: 1rem;
            margin-block: 1rem;

            * {
              text-decoration: none;
              color: $color-white;
              font-size: $font-m;
            }
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
        gap: 2rem;

        .content__quicklinks,
        .content__services,
        .content__contact,
        .content__address {
          .content__ul {
            .content__item {
              * {
                font-size: 14px;
              }
            }
          }
        }
      }
    }

    .footer__rights > p {
      font-size: 14px !important;
    }
  }

  @media only screen and (min-width: 850px) and (max-width: 1024px) {
    .footer__main {
      .footer__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        .content__quicklinks,
        .content__services,
        .content__contact,
        .content__address {
          .content__ul {
            .content__item {
              * {
                font-size: $font-m;
              }
            }
          }
        }
      }
    }
  }
}
</style>
