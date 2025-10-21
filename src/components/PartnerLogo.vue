<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<template>
  <div class="partner-logo">
    <div class="container">
      <Carousel class="logo-carousel" :autoplay="15000" :wrap-around="true" :transition="800" items-to-show="5">
        <Slide>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="/img/logo-carousel/logo-1.png" alt="" />
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="/img/logo-carousel/logo-2.png" alt="" />
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="/img/logo-carousel/logo-3.png" alt="" />
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="/img/logo-carousel/logo-4.png" alt="" />
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="/img/logo-carousel/logo-5.png" alt="" />
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>

</style>