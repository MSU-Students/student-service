<template>
  <q-layout view="lHh lpr fff">
    <q-page-container class="bg-black">
      <q-header class="header">
        <div :class="$q.screen.lt.md ? '' : 'row'">
          <div class="col">
            <div
              :class="
                $q.screen.lt.md
                  ? 'font3 text-center text-h5 text-white text-weight-bolder q-mt-md'
                  : 'font3 text-left text-h5 text-white text-weight-bolder q-pl-md q-pt-md'
              "
            >
      <q-avatar square size="50px">
        <q-img
          src="~/assets/cicslogo.png"
          style="width: 1 100p x q-pa-md">
          </q-img> 
      </q-avatar>
      <q-avatar square size="50px">
        <q-img src="~/assets/logo2.gif"></q-img>
      </q-avatar>
              STUDENT SERVICE MANAGEMENT SYSTEM
            </div>
          </div>
          <div>
            <q-toolbar
              :class="$q.screen.lt.md ? 'q-pt-xs flex flex-center' : 'q-pt-xs'"
            >
              <div :class="$q.screen.lt.md ? '' : 'row'">
                <div>  
                </div>
                <div class="q-pa-sm q-gutter-sm on-right">
                  <q-btn
                    stretch flat
                    :class="
                      $q.screen.lt.md
                        ? 'text-primary q-mb-md full-width'
                        : 'q-mr-md text-primary'
                         
                    "
                    size="25px"
                    color="white"
                    icon="account_circle"
                    to="Login"
                  >
                   <q-tooltip class="bg-primary text-h7">SIGNIN</q-tooltip>
                  </q-btn>
                </div>
              </div>
            </q-toolbar>
          </div>
        </div>
      </q-header>

      <div class="q-pa-xs">
        <q-card class="my-card">
          <q-card-section>
            <q-carousel
              class="bg-grey shadow-10"
              swipeablepictureList
              animated
              navigation
              :height="$q.screen.lt.md ? '210px' : '850px'"
              v-model="slide"
              infinite
              :autoplay="autoplay"
              arrows
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            >
            <q-carousel-slide :name="1" img-src="~/assets/carousel_4.jpg" />
            <q-carousel-slide :name="2" img-src="~/assets/carousel_5.jpg" />
            <q-carousel-slide :name="3" img-src="~/assets/22.jpg" />
            <q-carousel-slide :name="1" img-src="~/assets/carousel_4.jpg" />
            </q-carousel>
          </q-card-section>
        </q-card>
      </div>
      <div class="text-grey-10">
        <q-card class="q-ma-xs shadow-10">
          <q-card-section>
            <div class="font3 text-h4 text-center text-weight-bolder">
              College of Information and Computing Sciences
            </div>
          </q-card-section>
          <q-card-section class="font1 text-h4 text-weight-bold text-center">
            MISSION
          </q-card-section>
          <q-card-section class="text-center text-weight-medium text-h6">
            <div>
              1. To develop and offer relevant IT degree progrmas and trainings
              response to the multicultural and multi-sectional needs of the
              MINSUPALA and the ASEAN Region
            </div>
            <div>
              2.To create and produce innovative knowledge and technologies in
              Information Technology
            </div>
            <div>
              3. To provide services relevant to the IT entrepreneural needs of
              the MINSUPALA clientele and the rest of the country
            </div>
            <div>
              4. To serve as converging point of the Information Technology in
              MINSUPALA and the rest of the world
            </div>
            <div>
              5. To support the goal of MSU towards teaching and learning
              excellence through optimum utilization of Information Technology
              and
            </div>
            <div>
              6. To cultivate a morally upright, socially and environmentally
              responsible, and globally competitive IT professional
            </div>
          </q-card-section>
          <q-card-section class="font1 text-h4 text-weight-bold text-center">
            VISION
          </q-card-section>
          <q-card-section class="text-center text-weight-medium text-h6">
            The College envisions being the leading, innovative, entrepreneural
            knowledge, and IT hub in the MINSUPALA, the ASEAN region and the
            rest of the world.
          </q-card-section>
            <q-card-actions vertical align="center">
                <q-btn
                  color="grey-10"
                  flat
                  dense
                  label="See more"
                  :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                  @click="expanded = !expanded"
                />
            </q-card-actions>
            <q-slide-transition>
                <div v-show="expanded">
                  <q-card-section class="font1 text-h4 text-weight-bold text-center">
                    College Objectives
                  </q-card-section>
                  <q-card-section class="text-center text-weight-medium text-h6">
            <div>
              1. To produce graduates who can fill the manpower needs of the IT industry and the academe;
            </div>
            <div>
              2.To bridge the digital gap within the academe;
            </div>
            <div>
              3. To establish linkages for collaborative research and extension projects and developments;
            </div>
            <div>
              4. To promote a learner-centered unit that will continue to improve itself;
            </div>
            <div>
              5. To nurture learners on the principle of computing in order to enrich their appreciation of ITE as a discipline
            </div>
            <div>
              6. To educate the community on environmental, social and economic impact in the utilization of ICT in order to 
                achieve a more socio-economic and ergonomically friendly environment;
            </div>
            <div>
              7. To provide learners with foundation on research and graduate work; and
            </div>
            <div>
              8. To develop a culturally appropriate ICT practices for peace and development
            </div>
          </q-card-section>
                </div>
              </q-slide-transition>
        </q-card>
      </div>
      <div>
      </div>
      <div>
        <q-footer elevated class="bg-grey-10 text-white">
          <div>
            <q-toolbar>
              <q-toolbar-title
                :class="
                  $q.screen.lt.md ? 'text-center text-h4' : 'q-pa-lg text-h3'
                "
              >
              </q-toolbar-title>
            </q-toolbar>
          </div>
          <div class="flex flex-center">
            <q-icon class="q-pr-md" size="30px" name="facebook" />
            <q-icon class="q-pr-md" size="30px" name="mail" />
            <q-icon size="30px" name="phone" />
          </div>
          <div class="flex flex-center q-mt-md">jawiees19@gmail.com</div>
          <div class="flex flex-center">jalilahmacairing@gmail.com</div>
          <div class="flex flex-center">@2021-SSMS</div>
          <div class="flex flex-center q-mt-md">Developed and Maintained by Jalilah & Jawharah</div>
        </q-footer>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true),
       expanded: ref('false'),
    }
  }
}
</script>
<style>
.bg {
  background: lightblue;
}
.header {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background: linear-gradient(to top, #3b434e23 100%, #d1e6eb9d 100%);
}
</style>