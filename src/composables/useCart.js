import { ref } from 'vue';

const cartItems = ref([]);

function getCart() {
  if (localStorage.getItem('cart')) {
    try {
      cartItems.value = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      localStorage.removeItem('cart');
      cartItems.value = [];
    }
  } else {
    cartItems.value = [];
  }
}

function saveToCart(item) {
  const idx = cartItems.value.findIndex(i => i.id === item.id);
  if (idx !== -1) {
    cartItems.value[idx].qty += 1;
  } else {
    cartItems.value.push({ id: item.id, qty: 1, item });
  }
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
}

function updateQty(id, qty) {
  const idx = cartItems.value.findIndex(i => i.id === id);
  if (idx !== -1) {
    cartItems.value[idx].qty = qty > 0 ? qty : 1;
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }
}

function removeFromCart(id) {
  cartItems.value = cartItems.value.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
}

// Inisialisasi cart saat pertama kali import
getCart();

export function useCart() {
  return {
    cartItems,
    getCart,
    saveToCart,
    removeFromCart,
    updateQty
  };
}
