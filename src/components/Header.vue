<script setup lang="ts">
import {onMounted, computed} from "vue";
import { useCart } from '@/composables/useCart';

const { cartItems, getCart } = useCart();

function formatRupiah(price) {
  if (typeof price !== 'number') return price;
  return 'Rp. ' + price.toLocaleString('id-ID') + ',-';
}

function calculateTotal() {
  return cartItems.value.reduce((total, item) => total + (item.item?.price || 0) * (item.qty || 1), 0);
}

const totalQty = computed(() => cartItems.value.reduce((sum, item) => sum + (item.qty || 0), 0));

onMounted(() => {
  getCart();
});
</script>

<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="mail-service">
            <i class=" fa fa-envelope"></i> hello.shayna@gmail.com
          </div>
          <div class="phone-service">
            <i class=" fa fa-phone"></i> +628 22081996
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <router-link to="/">
                <img src="/img/logo_website_shayna.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-7 col-md-7"></div>
          <div class="col-lg-3 text-right col-md-3">
            <ul class="nav-right">
              <li class="cart-icon">
                Keranjang Belanja &nbsp;
                <a href="#">
                  <i class="icon_bag_alt"></i>
                  <span>{{ totalQty }}</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table v-if="cartItems.length > 0">
                      <tbody>
                      <tr v-for="item in cartItems.slice(0, 5)" :key="item.id">
                        <td class="si-pic">
                          <img :src="item.item?.galleries?.[0]?.photo || '/img/default.jpg'" alt="" />
                        </td>
                        <td class="si-text">
                          <div class="product-selected">
                            <p>{{ formatRupiah(item.item?.price) }}</p>
                            <h6>{{ item.item?.name }}</h6>
                            <p>{{ item.qty }} Items</p>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div v-else style="text-align:center; padding: 32px 0; color: #888; font-size: 16px;">
                      <i class="fa fa-shopping-cart" style="font-size: 28px; margin-bottom: 8px;"></i><br>
                      Keranjang belanja kamu kosong
                    </div>
                  </div>
                  <div class="select-total">
                    <span>total:</span>
                    <h5>{{ formatRupiah(calculateTotal()) }}</h5>
                  </div>
                  <div class="select-button">
                    <a href="#" class="primary-btn view-card">VIEW CARD</a>
                    <router-link to="/cart" class="primary-btn checkout-btn">CHECK OUT</router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.si-pic {
  width: 60px;
  height: 60px;
}
</style>