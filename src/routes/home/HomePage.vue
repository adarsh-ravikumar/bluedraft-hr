<script setup lang="ts">
import ImageCard from '@/components/imageCard/ImageCard.vue'
import { services } from '@/data/services';
</script>

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
    <section class="services">
      <h1 class="services__title title__embelish">Services</h1>
      <div class="services__content">
        <p class="content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend est vel dui
          placerat condimentum. Fusce sit amet bibendum tortor. Fusce commodo dolor non sagittis
          viverra. Sed maximus, arcu id pharetra accumsan, ex ligula malesuada nulla, id tempus
          massa risus sed erat. Suspendisse lacus ligula, venenatis sit amet gravida at, eleifend id
          risus. Maecenas sit amet mauris facilisis, ullamcorper justo eget, elementum est.
          Suspendisse in tellus eget felis congue convallis ac sit amet velit.
        </p>
        <div class="services__lists">
          <ImageCard class="image_card"  v-for="service in services" :image="service.image">
            <p style="text-align: center;">{{ service.title }}</p>
            <p><RouterLink :to="`services/${service.slug}`">click here to learn more</RouterLink></p>
          </ImageCard>
        </div>
      </div>
    </section>

    

    <section class="offer">
      <h1 class="offer__title title__embelish">What We Offer</h1>
      <div class="offer__content">
        <div class="content__seekers">
          <img src="/job-seekers.svg" alt="job_seekers" class="seekers__img" />
          <h1 class="seekers__title">For Job Seekers</h1>
          <p class="content__text">
            We help you take the next step in your career by connecting you with leading companies
            in your industry. Submit your resume and let us find the perfect role for you.
          </p>
        </div>
        <div class="content__employers">
          <img src="/employers.svg" alt="employers" class="employers__img" />
          <h1 class="employers__title">For Employers</h1>
          <p class="content__text">
            Looking to hire? Share your requirements with us, and we’ll provide you with
            pre-screened, qualified candidates who are the right fit for your team.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use './styles/hero.scss' as *;
@use './styles/about.scss' as *;
@use './styles/offer.scss' as *;
@use './styles/services.scss' as *;
</style>
