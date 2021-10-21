<template>
  <q-page class="bg-image">
    <div class="q-pa-sm">
      <q-avatar square size="150px">
        <q-img
          src="~/assets/cicslogo.png"
          style="width: 1 100p x q-pa-md"
        ></q-img>
      </q-avatar>
      <q-avatar square size="150px">
        <q-img src="~/assets/logo2.gif"></q-img>
      </q-avatar>
      
      <div class="q-pl-lg absolute-center">
      <div class="q-pr-xl">
        <div class="q-pr-xl">
          <div class="q-pr-xl">
            <div class="q-pr-xl">
              <div class="q-pr-xl">
                <div class="q-pr-xl">
                  <div class="q-pr-xl">
                    <div class="q-pr-xl">
                      <div
                        class="
                          text-h1 text-bold text-arial text-black
                          flex flex-left 
                        "
                      >
                        STUDENT SERVICE MANAGEMENT SYSTEM
                      </div>
                      <q-card class="bg-grey-10 text-center">
                        <div
                          class="
                            text-h5 text-bold text-arial text-white
                            flex flex-left
                          "
                        >
                          COLLEGE OF INFORMATION AND COMPUTING SCIENCES
                        </div>
                      </q-card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute-right q-pr-xl">
      <div class="q-pr-xl">
        <div class="q-pl-md q-pr-xl">
          <div class="q-pr-xl">
            <div class="q-pr-lg">
              <div class="q-pt-xl"></div>
              <div class="q-pt-xl"></div>
              <div class="q-pt-xl"></div>
              <div class="q-pt-xl"></div>
              <div class="q-pt-xl"></div>
              <div class="q-pt-xl"></div>
              <div class="q-pt-xl"></div>
              

              <q-card class="bg-white text-center q-pb-lg">
              <q-card-section style="width: 400px"></q-card-section>
              <div
                  class="
                    text-h5 text-bold text-arial text-grey-14
                    flex-flex-center
                    q-pb-xs
                    
                  "
                >
                  Log in to continue
                </div>
                <div class="q-pa-xs flex flex-center">
                  <q-input
                    filled
                    v-model="text"
                    label="Email"
                    style="width: 350px"
                    color="black"
                    bg-color="grey-4"
                    label-color="black"
                  />
                </div>
                <div class="q-pa-xs flex flex-center">
                  <q-input
                    filled
                    v-model="password"
                    label="password"
                    type="password"
                    style="width: 350px"
                    color="black"
                    bg-color="grey-4"
                    label-color="black"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>
          <div
            class="q-gutter-y-md column flex flex-center"
            style="max-width: 500px"
          >
            <q-card-actions class="flex flex-center">
            <div class="q-gutter-md">
            <q-btn 
            class="glossy"
            color="grey-14 text-black"
            label="Log In" 
            size="15px" 
            to="login"> 
            </q-btn>

            <q-btn 
            class="glossy"
            color="grey-14 text-black" 
            label="sign up" 
            size="15px" 
            to="signup"> </q-btn>
            </div>

          </q-card-actions>
            <a href="http://localhost:8080/#/Forgot_Password" class="float-right">Forgot password? </a>
          </div>
        
      </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
    };
  },
};
</script>
