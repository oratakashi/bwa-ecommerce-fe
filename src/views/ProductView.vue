<script setup lang="ts">
import ProductImages from "@/components/products/ProductImages.vue";
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import { useCart } from '@/composables/useCart';

let image = ref("/img/mickey1.jpg");
const route = useRoute();
const productId = route.params.id;
const product = ref<any>(null);
const { cartItems, getCart, saveToCart } = useCart();

function handleSelectImage(img: string) {
  image.value = img;
}

async function fetchProduct() {
  try {
    const response = await fetch(`http://localhost:8000/api/products?id=${productId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    product.value = data.data;
    if (product.value.galleries && product.value.galleries.length > 0) {
      image.value = product.value.galleries[0].photo;
    }
  } catch (error) {
    console.error("Fetch product error:", error);
  }
}

function formatRupiah(price) {
  if (typeof price !== 'number') return price;
  return 'Rp. ' + price.toLocaleString('id-ID') + ',-';
}

onMounted(async () => {
  await fetchProduct();
  getCart();
});

</script>

<template>
  <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text product-more">
            <router-link to="/">
              <i class="fa fa-home"></i> Home
            </router-link>
            <span>Detail</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="product-shop spad page-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <div class="product-pic-zoom">
                <img class="product-big-img" :src="image" alt="" />
              </div>
              <ProductImages @onChangeImage="handleSelectImage"  :images="product?.galleries"/>
            </div>
            <div class="col-lg-6">
              <div class="product-details">
                <div class="pd-title">
                  <span>{{ product?.type }}</span>
                  <h3>{{ product?.name }}</h3>
                </div>
                <div class="pd-desc">
                  <div v-html="product?.description"></div>
                  <h4>{{ formatRupiah(product?.price) }}</h4>
                </div>
                <div class="quantity">
                  <button class="primary-btn pd-cart" @click="saveToCart(product)">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Related Products Section End -->
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-1.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Coat</div>
              <a href="#">
                <h5>Pure Pineapple</h5>
              </a>
              <div class="product-price">
                $14.00
                <span>$35.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-2.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Shoes</div>
              <a href="#">
                <h5>Guangzhou sweater</h5>
              </a>
              <div class="product-price">
                $13.00
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
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
              <a href="#">
                <h5>Pure Pineapple</h5>
              </a>
              <div class="product-price">
                $34.00
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-4.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <a href="#">
                <h5>Converse Shoes</h5>
              </a>
              <div class="product-price">
                $34.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Related Products Section End -->
</template>

<style scoped>

</style>