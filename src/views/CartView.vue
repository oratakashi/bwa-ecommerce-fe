<script setup>
import { useCart } from '@/composables/useCart';
const { cartItems, getCart, saveToCart, removeFromCart, updateQty } = useCart();

function formatRupiah(price) {
  if (typeof price !== 'number') return price;
  return 'Rp. ' + price.toLocaleString('id-ID') + ',-';
}

function calculateTotal() {
  return cartItems.value.reduce((total, i) => total + i.item.price * i.qty, 0);
}

function calculateTotalWithTax() {
  const subtotal = calculateTotal();
  return subtotal + subtotal * 0.1;
}

function handleRemove(id) {
  removeFromCart(id);
}

function handleQtyChange(id, qty) {
  if (qty < 1) {
    removeFromCart(id);
  } else {
    updateQty(id, qty);
  }
}
</script>

<template>
  <!-- Breadcrumb Section Begin -->
  <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text product-more">
            <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
            <span>Shopping Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Section Begin -->

  <!-- Shopping Cart Section Begin -->
  <section class="shopping-cart spad">
    <div class="container">
      <div class="row">
        <div :class="(cartItems.length > 0) ? 'col-lg-8' : 'col-lg-12'">
          <div class="row">
            <div class="col-lg-12">
              <div class="cart-table">
                <table>
                  <thead>
                  <tr>
                    <th>Image</th>
                    <th class="p-name text-center">Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                  </thead>
                  <tbody>
                  <template v-if="cartItems.length === 0">
                    <tr>
                      <td colspan="4" style="text-align:center; padding: 32px 0; color: #888; font-size: 18px;">
                        <i class="fa fa-shopping-cart" style="font-size: 32px; margin-bottom: 8px;"></i><br>
                        Keranjang belanja kamu kosong
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr v-for="i in cartItems" :key="i.id">
                      <td class="cart-pic first-row">
                        <img :src="i.item.galleries[0].photo" alt="product"/>
                      </td>
                      <td class="cart-title first-row text-center">
                        <h5>{{ i.item.name }}</h5>
                      </td>
                      <td class="p-price first-row">{{ formatRupiah(i.item.price) }}</td>
                      <td class="first-row qty-cell">
                        <button @click="handleQtyChange(i.id, i.qty - 1)">
                          <i :class="i.qty > 1 ? 'fa fa-minus' : 'fa fa-trash'"></i>
                        </button>
                        <span>{{ i.qty }}</span>
                        <button @click="handleQtyChange(i.id, i.qty + 1)"><i class="fa fa-plus"></i></button>
                      </td>
                    </tr>
                  </template>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-12" v-if="cartItems.length > 0">
              <h4 class="mb-4">
                Informasi Pembeli:
              </h4>
              <div class="user-checkout">
                <form>
                  <div class="form-group">
                    <label for="namaLengkap">Nama lengkap</label>
                    <input type="text" class="form-control" id="namaLengkap" aria-describedby="namaHelp"
                           placeholder="Masukan Nama">
                  </div>
                  <div class="form-group">
                    <label for="namaLengkap">Email Address</label>
                    <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp"
                           placeholder="Masukan Email">
                  </div>
                  <div class="form-group">
                    <label for="namaLengkap">No. HP</label>
                    <input type="text" class="form-control" id="noHP" aria-describedby="noHPHelp"
                           placeholder="Masukan No. HP">
                  </div>
                  <div class="form-group">
                    <label for="alamatLengkap">Alamat Lengkap</label>
                    <textarea class="form-control" id="alamatLengkap" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4" v-if="cartItems.length > 0">
          <div class="row">
            <div class="col-lg-12">
              <div class="proceed-checkout">
                <ul>
                  <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                  <li class="subtotal mt-3">Subtotal <span>{{ formatRupiah(calculateTotal()) }}</span></li>
                  <li class="subtotal mt-3">Pajak <span>10%</span></li>
                  <li class="subtotal mt-3">Total Biaya <span>{{ formatRupiah(calculateTotalWithTax()) }}</span></li>
                  <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                  <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                  <li class="subtotal mt-3">Nama Penerima <span>Shayna</span></li>
                </ul>
                <a href="success.html" class="proceed-btn" >I ALREADY PAID</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Shopping Cart Section End -->
</template>

<style scoped>
table td {
  vertical-align: middle;
}
.qty-cell {
  text-align: center;
}
.qty-cell button {
  margin: 0 4px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  color: #333;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.qty-cell button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.qty-cell button:hover:not(:disabled) {
  background: #333;
  color: #fff;
}
.qty-cell span {
  min-width: 32px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  background: #fafafa;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #eee;
  margin: 0 4px;
}
</style>