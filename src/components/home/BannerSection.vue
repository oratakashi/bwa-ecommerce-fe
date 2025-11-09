<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const products = ref([]);

async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:8000/api/products");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    products.value = data.data.data;
    console.log(products);
    console.log(data.data.data);
  } catch (error) {
    console.error("Fetch products error:", error);
  }
}

function formatRupiah(price) {
  if (typeof price !== 'number') return price;
  return 'Rp. ' + price.toLocaleString('id-ID') + ',-';
}

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <Carousel class="product-slider" :autoplay="5000" :wrap-around="true" :transition="800" items-to-show="3">
            <Slide v-for="(product, index) in products" :key="product.id || index">
              <div class="product-item">
                <div class="pi-pic">
                  <img :src="product.galleries && product.galleries.length > 0 ? product.galleries[0].photo : '/img/mickey1.jpg'" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="product.html">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name"> {{ product.type }} </div>
                  <router-link to="/product">
                    <h5>{{ product.name }}</h5>
                  </router-link>
                  <div class="product-price">
                    {{ formatRupiah(product.price) }}
                    <span>$35.00</span>
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