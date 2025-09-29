<script setup lang="ts">
import { placeHolderImage } from '@/data/services'
import aboutUsImage from '../../../assets/images/about-us/about-us.png'
</script>

<template>
  <div class="about_page">
    <header class="about__header">
      <h1 class="header__title">About Us</h1>
    </header>
    <div class="about__content">
      <img :src="aboutUsImage ?? placeHolderImage" alt="placeholder" class="content__image" />

      <p>
        Blue Draft Engineering Solutions Pvt. Ltd. is built on a strong foundation of trust,
        expertise, and an unwavering commitment to excellence in staffing solutions. Over the years,
        we have grown into a reliable partner for organizations across industries, providing both
        contract and permanent staffing services that truly make a difference. Our strength lies in
        our ability to bridge the gap between business needs and professional talent, ensuring that
        every placement delivers long-term value. From sourcing skilled software engineers who fuel
        innovation to connecting companies with oil and gas field experts who thrive in high-demand
        environments, we pride ourselves on creating perfect matches that empower businesses to
        perform at their best.
        <br />
        Our expertise spans both IT and Non-IT sectors, giving us the flexibility to cater to a wide
        range of industries and workforce requirements. We understand that every organization faces
        unique challenges when it comes to talent acquisition, and that no two roles are ever
        exactly the same. That’s why our approach goes beyond simply filling vacancies—we take the
        time to understand not only the technical skills required but also the culture, values, and
        goals of the businesses we work with. This holistic approach allows us to deliver staffing
        solutions that fit seamlessly, helping companies maintain productivity while giving
        professionals the chance to grow in careers that align with their strengths.
        <br />
        At Blue Draft, our mission is simple yet impactful: to provide staffing solutions that are
        fast, reliable, and of the highest quality. We believe people are at the core of every
        successful organization, and our goal is to connect businesses with individuals who have
        both the expertise and the passion to make a difference. By streamlining the recruitment
        process, we save businesses valuable time and resources, enabling them to focus on growth
        and innovation. At the same time, we create opportunities for candidates to build meaningful
        careers, making the process beneficial for all parties involved.
        <br />
        Looking ahead, our vision is to continue empowering businesses to stay productive,
        competitive, and future-ready in an ever-changing world. As industries evolve and the demand
        for adaptable, skilled talent grows, we are committed to being at the forefront of staffing
        solutions. Blue Draft Engineering Solutions Pvt. Ltd. is more than a service provider—we are
        a trusted partner dedicated to shaping the future of work. With our unwavering focus on
        quality, speed, and trust, we aim to help businesses not only meet today’s challenges but
        also prepare for tomorrow’s opportunities with confidence.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

.about_page {
  padding-inline: $padding-body;
  .about__header {
    padding: $padding-body;
    background: $color-primary-300;
    text-align: center;
    border-radius: $border-radius-md;

    .header__title {
      color: $color-white;
    }
  }

  .about__content {
    .content__image {
      width: 100%;
      aspect-ratio: 9/3;
      @include max-screen(mobile) {
        aspect-ratio: 3/2;
        object-position: top;
      }
      object-fit: cover;
      object-position: center;
      border-radius: $border-radius-sm;
      margin-block: calc($padding-body / 2);
    }

    p {
      br {
        margin-bottom: 1rem;
      }

      margin-bottom: 2rem;
    }
  }
}
</style>
