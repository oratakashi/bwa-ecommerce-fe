<script setup>
import {Carousel, Slide} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import {ref, watch} from "vue";

const emit = defineEmits([
  'onChangeImage'
]);

const props = defineProps(
  {
    images: {
      type: Array,
      required: true
    }
  }
)

// const images = [
//   "/img/mickey1.jpg",
//   "/img/mickey2.jpg",
//   "/img/mickey3.jpg",
//   "/img/mickey4.jpg"
// ];

let selectedImage = ref('');

watch(() => props.images, (newImages) => {
  if (Array.isArray(newImages) && newImages.length > 0) {
    const defaultImg = newImages.find(img => img.is_default === 1);
    selectedImage.value = defaultImg ? defaultImg.photo : newImages[0].photo;
  } else {
    selectedImage.value = '';
  }
}, { immediate: true });

function changeImage(urlImage) {
  selectedImage.value = urlImage;
  emit('onChangeImage', urlImage);
}

</script>

<template>
  <div class="product-thumbs">
    <Carousel class="product-thumbs-track ps-slider" :wrap-around="true" :transition="800"
              items-to-show="3">
      <Slide v-for="img in props.images" :key="img.id">
        <div class="pt" :style="{ backgroundImage: `url('${img.photo}')` }" @click="changeImage(img.photo)"
             v-bind:class="img.photo === selectedImage ? 'active' : '' ">
          <img :src="img.photo" alt=""/>
        </div>
      </Slide>

      <!--      <Slide>-->
      <!--        <div class="pt" style="background-image: url('/img/mickey2.jpg');">-->
      <!--          <img src="/img/mickey2.jpg" alt=""/>-->
      <!--        </div>-->
      <!--      </Slide>-->

      <!--      <Slide>-->
      <!--        <div class="pt" style="background-image: url('/img/mickey3.jpg');">-->
      <!--          <img src="/img/mickey3.jpg" alt=""/>-->
      <!--        </div>-->
      <!--      </Slide>-->

      <!--      <Slide>-->
      <!--        <div class="pt" style="background-image: url('/img/mickey4.jpg');">-->
      <!--          <img src="/img/mickey4.jpg" alt=""/>-->
      <!--        </div>-->
      <!--      </Slide>-->


    </Carousel>
  </div>
</template>

<style scoped>
.product-thumbs {
  display: flex;
  flex-direction: column;
  column-gap: 16px;
  align-content: space-between;
}

.pt {
  margin-right: 16px;
}
</style>