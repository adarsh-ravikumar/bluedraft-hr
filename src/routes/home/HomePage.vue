<script setup lang="ts"></script>

<template>
  <div class="home_page">
    <section class="home__hero">
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

    <section class="home__about">
      <div class="about__fade_top"></div>

      <div class="about__desktop">
        <img src="/placeholder.png" alt="" class="about__image" />

        <div class="about__right">
          <div class="about__content">
            <h1 class="content__title">About Us</h1>
            <p class="content__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ad odit facere
              blanditiis labore iste quibusdam non perspiciatis rerum, ab doloremque neque possimus
              at alias, voluptatibus dolor asperiores doloribus totam. Impedit voluptatibus officiis
              vero nisi quam dolorem error, aperiam cum sapiente vel. Alias quia voluptatum
              quibusdam accusantium sunt ut sequi accusamus suscipit esse ratione, tenetur quisquam
              velit quidem error laborum?
            </p>
          </div>

          <RouterLink to="/about-us">Read More...</RouterLink>
        </div>
      </div>

      <div class="about__mobile">
        <h1 class="content__title">About Us</h1>
        <div class="about__content">
          <p class="content__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ad odit facere
            blanditiis labore iste quibusdam non perspiciatis rerum, ab doloremque neque possimus at
            alias, voluptatibus dolor asperiores doloribus totam. Impedit voluptatibus officiis vero
            nisi quam dolorem error, aperiam cum sapiente vel. Alias quia voluptatum quibusdam
            accusantium sunt ut sequi accusamus suscipit esse ratione, tenetur quisquam velit quidem
            error laborum?
          </p>
          <RouterLink to="/about-us">Read More...</RouterLink>
        </div>
        <img src="/placeholder.png" alt="placeholder" class="about__image" />
      </div>

      <div class="about__fade_btm"></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use './styles/hero.scss' as *;
@use './styles/about.scss' as *;
</style>
