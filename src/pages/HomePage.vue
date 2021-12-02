<template v-slot:top-left>
  <q-page>
    <q-img
    src="~/assets/23.jpg" height="500px">
    </q-img>
    <div class="absolute-top-right q-pa-xs q-gutter-md row"> 
       <q-btn-dropdown class="glossy" size="15px" color="grey-14" label="Home">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Overview</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>History</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>VGMO</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown class="glossy" size="15px" color="grey-14" label="Announcements" @click="dialog=true">
      <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-black text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card class="q-pa-md " style="width: 1000px">
          <q-card-section>
          <div class="text-h4 text-black">Latest News|Update</div>
        </q-card-section> 
        <q-card-section class="q-pt-none"></q-card-section>
        </q-card>
        
      </q-card>
    </q-dialog>
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Enrollment</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Activity</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>VGMO</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown class="glossy" size="15px" color="grey-14" label="FAQs">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Enrollment</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>History</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>VGMO</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown class="glossy" size="15px" color="grey-14" label="About Us">
    </q-btn-dropdown>
    <q-btn-dropdown class="glossy" size="15px" color="grey-14" label="Gallery"></q-btn-dropdown>
      
      <q-btn flat round color="white"  icon="search">
        <q-menu
          transition-show="scale"
          transition-hide="scale"
        >
         <q-input
        v-model="search"
        debounce="1000"
        filled
        placeholder="Search..."
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
        </q-menu>
      </q-btn>
    </div>
    <div class="row q-pa-xs" style="width: 1750px">
      <div class="col q-pa-xs">
        <div class="text-h4 text-italic">
          Overview <br> <br>
        </div>
         <div class="text-body1"> 
          - College of Information and Computing Sciences formerly named College of Information Technology, It was successfully launced last September 2021.....
         </div>
        <q-btn flat color="primary" label="Read More.." />
      </div>
      <div class="col q-pa-xs">
        <div class="text-h4 text-italic">
          History <br> <br>
        </div>
         <div class="text-body1"> 
          - In its early inception, MSU took a piecemeal view towards Information and Communication Technology. 
          It started with the offering of a degree program in Computer Science under the College of Natural Sciences and Mathematics....
         </div>
        <q-btn flat color="primary" label="Read More.."/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      onMainClick () {
        // console.log('Clicked on main button')
      },

      onItemClick () {
        // console.log('Clicked on an Item')
      },
      autoplay: ref(false),
      fullscreen: ref(false),
      slide: ref(1),
       dialog: ref(false),
      maximizedToggle: ref(true),
      
    };
  },
};
</script>


<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  
  border: 0px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 0rem
</style>

