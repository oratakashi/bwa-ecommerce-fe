<script setup lang="ts">

import {Carousel, Slide} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <Carousel class="product-slider" :autoplay="5000" :wrap-around="true" :transition="800" items-to-show="3">
            <Slide>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="/img/mickey1.jpg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="product.html">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coat</div>
                  <router-link to="/product">
                    <h5>Mickey Baggy</h5>
                  </router-link>
                  <div class="product-price">
                    $14.00
                    <span>$35.00</span>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="/img/products/women-3.jpg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Towel</div>
                  <router-link to="/product">
                    <h5>Pure Pineapple</h5>
                  </router-link>
                  <div class="product-price">
                    $34.00
                  </div>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="/img/products/women-4.jpg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Towel</div>
                  <router-link to="/product">
                    <h5>Converse Shoes</h5>
                  </router-link>
                  <div class="product-price">
                    $34.00
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-item .pi-pic {
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.product-item .pi-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.product-slider .carousel__track {
  display: flex;
  gap: 24px;
}
.product-slider .carousel__slide {
  margin-right: 0;
  padding: 0 12px;
}
.product-slider .carousel__viewport {
  overflow: visible;
  padding: 0 12px;
  margin: 0 -12px;
}
</style>