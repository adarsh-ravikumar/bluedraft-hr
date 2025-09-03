<script setup lang="ts"></script>

<template>
  <div class="home_page">
    <section class="hero">
      <img src="/city.png" alt="city" class="hero__image" />
      <header class="hero__content">
        <div class="content__text">
          <h1>Come, Let's Build</h1>
          <h1><span>Your</span> Career</h1>
        </div>
        <div class="content__cta">
          <button class="cta__sec">Learn More</button>
          <button class="cta__pri">Apply for Jobs</button>
        </div>
      </header>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;
@use '../styles/mixins.scss' as *;

.hero {
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;

  .hero__image {
    height: 80vh;
    width: auto;
    min-width: 100%;
    object-fit: cover;
    object-position: top;
  }

  .hero__content {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%) translateY(-50%);

    .content__text {
      h1 {
        font-size: clamp(2.2rem, 5vw, 5rem);
        white-space: nowrap;
        font-family: 'Inter', sans-serif;
        color: $color-primary-300;
        text-align: center;

        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        line-height: clamp(3.3rem, 7vw, 6rem);

        span {
          display: block;
          font-size: clamp(3.5rem, 6vw, 6rem);
          position: relative;
          top: 5px;
          rotate: -7deg;
          font-weight: 400;
          font-family: 'Just Another Hand', sans-serif;
          color: #b72020;
        }
      }
    }

    .content__cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(1rem, 2vw, 2rem);
      margin-top: 1rem;

      .cta__pri,
      .cta__sec {
        border: none;
        font-family: $font-secondary;
        font-size: $font-l;
        white-space: nowrap;
        padding-inline: clamp(1rem, 5vw, 2rem);
        padding-block: clamp(0.5rem, 3vw, 1rem);

        border-radius: $border-radius-xs;
        outline: 0.2rem solid $color-primary-300;
        cursor: pointer;
        position: relative;
        bottom: 0;
        transition: bottom 0.2s ease;

        &:hover {
          bottom: 5px;
        }

        &:active {
          bottom: -2px;
        }
      }

      .cta__pri {
        background: $color-primary-300;
        color: $color-white;
      }

      .cta__sec {
        background: transparent;
        color: $color-primary-300;
      }
    }
  }

  @include max-screen(mobile) {
    .hero__image {
      height: 50vh;
      object-position: 60%;
    }

    .hero__content {
      top: 30%;

      .content__cta {
        .cta__pri,
        .cta__sec {
          font-size: $font-s;
          outline: 0.15rem solid $color-primary-300;

          padding-inline: clamp(1rem, 5vw, 1.5rem);
          padding-block: clamp(0.5rem, 3vw, 0.7rem);
        }
      }
    }
  }
}
</style>
