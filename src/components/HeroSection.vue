<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <Carousel class="hero-items" :autoplay="2000" :wrap-around="true" :transition="800">
      <Slide>
        <div class="single-hero-items set-bg" style="background-image: url('/img/hero-1.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Bag,kids</span>
                <h1>Black friday</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div class="single-hero-items set-bg" style="background-image: url('/img/hero-2.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Bag,kids</span>
                <h1>Black friday</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div class="single-hero-items set-bg" style="background-image: url('/img/hero-3.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Bag,kids</span>
                <h1>Black friday</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
  <!-- Hero Section End -->
</template>

<style scoped>
.hero-section,
.hero-items,
.carousel__slide,
.carousel__viewport {
  width: 100%;
  min-height: 500px;
  height: 100%;
}

.hero-items {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel__slide {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.single-hero-items {
  width: 100%;
  height: 100%;
  min-height: 750px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  position: relative;
}

/* Override default opacity from owl carousel styles */
.hero-items .single-hero-items span,
.hero-items .single-hero-items h1,
.hero-items .single-hero-items p,
.hero-items .single-hero-items .primary-btn {
  opacity: 1 !important;
  top: 0 !important;
}

/* Add animation for active slides in vue3-carousel */
.carousel__slide--active .single-hero-items span {
  animation: fadeInUp 0.6s ease forwards;
}

.carousel__slide--active .single-hero-items h1 {
  animation: fadeInUp 0.8s ease forwards;
}

.carousel__slide--active .single-hero-items p {
  animation: fadeInUp 1s ease forwards;
}

.carousel__slide--active .single-hero-items .primary-btn {
  animation: fadeInUp 1.2s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>