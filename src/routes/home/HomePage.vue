<script setup lang="ts">
import Chip from '@/components/chip/Chip.vue'
import ImageCard from '@/components/imageCard/ImageCard.vue'
import { services } from '@/data/services'
import { industry } from '@/data/trendingSkills'
import { useRouter } from 'vue-router'

const router = useRouter()
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
          <button
            class="cta__sec"
            @click="
              () => {
                router.push('/about-us')
              }
            "
          >
            Learn More
          </button>
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
              Blue Draft Engineering Solutions Pvt. Ltd. is a trusted provider of contract and
              permanent staffing for both IT and Non-IT sectors. We specialize in connecting
              businesses with highly skilled professionals— ranging from software engineers to oil &
              gas field experts. Our mission is simple: provide fast, reliable, and high-quality
              staffing that empowers your business to stay productive, competitive, and
              future-ready.
            </p>
          </div>

          <RouterLink to="/about-us">Read More...</RouterLink>
        </div>
      </div>

      <div class="about__mobile">
        <h1 class="content__title">About Us</h1>
        <div class="about__content">
          <p class="content__text">
            Blue Draft Engineering Solutions Pvt. Ltd. is a trusted provider of contract and
            permanent staffing for both IT and Non-IT sectors. We specialize in connecting
            businesses with highly skilled professionals— ranging from software engineers to oil &
            gas field experts. Our mission is simple: provide fast, reliable, and high-quality
            staffing that empowers your business to stay productive, competitive, and future-ready.
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
          We are your trusted partner for specialized <strong>industrial solutions</strong> and
          skilled manpower. Our expertise spans three critical areas:
          <strong>Technical Maintenance</strong> to ensure equipment reliability and minimize
          downtime; <strong>HSE & Plant Operations</strong> to guarantee safety and compliance; and
          comprehensive <strong>Workforce Staffing</strong> to scale your team with qualified
          contract or permanent professionals. We empower your operations to run safely,
          efficiently, and at peak performance, allowing you to focus on your core business goals.
        </p>
        <div class="services__lists">
          <ImageCard class="image_card" v-for="service in services" :image="service.image">
            <p style="text-align: center">{{ service.title }}</p>
            <p>
              <RouterLink :to="`services/${service.slug}`">click here to learn more</RouterLink>
            </p>
          </ImageCard>
        </div>
      </div>
    </section>

    <section class="trending__skills">
      <h1 class="trending__skills__title title__embelish">Trending skills</h1>
      <div class="trending__skills__content">
        <p class="content__text">
          The most in-demand professionals today are those who can blend core enterprise skills with
          forward-looking technologies. This means expertise in Cloud Computing across major
          platforms (AWS, Azure, GCP) coupled with strong DevOps/SRE and Cloud Security practices is
          foundational. Within the enterprise application sphere, the primary focus is on SAP
          S/4HANA migration and leveraging its in-built AI/Data Analytics capabilities, while in the
          Customer Relationship Management (CRM) domain, demand is surging for Salesforce experts
          skilled in Generative AI (Einstein GPT), Flow Automation (low-code), and seamless
          API/MuleSoft integration. Ultimately, the trending skills across all sectors of the "New
          Tech" landscape—from AI and Data Science to Automation—revolve around utilizing these core
          cloud and platform environments to drive intelligent, secure, and automated business
          processes.
        </p>
        <div class="trending__skillsets">
          <div class="skillList" v-for="ind in industry">
            <h3>{{ ind.title }}</h3>
            <div v-for="skill in ind.skillSets" :key="skill.id" class="skills">
              <Chip>{{ skill.name }}</Chip>
            </div>
          </div>
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
@use './styles/trendingSkills.scss' as *;
</style>
