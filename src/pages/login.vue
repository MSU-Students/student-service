<template>
<<<<<<< HEAD
<q-page class="bg-image">
    <div class="q-pa-sm">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      v-model:fullscreen="fullscreen"
      :autoplay="autoplay"
      ref="carousel"

      infinite
       height="600px"
    >
      <q-carousel-slide :name="1" img-src="~/assets/23.jpg" />
      <q-carousel-slide :name="2" img-src="~/assets/ORG.png" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
        >
          <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push round dense color="orange" text-color="black" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push round dense color="orange" text-color="black" icon="arrow_right"
            @click="$refs.carousel.next()"
          />
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>

</q-page>
  
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(false),
       fullscreen: ref(false)
      
      
    }
  }
}
</script>
=======
 <q-page class="bg-image">
   <div>
     
   </div>
   </q-page>
</template>
>>>>>>> 1ef546ee77ad4f7ee4047e4d7c5070438421eeb7
