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
                          text-h1 text-bold text-arial text-white
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
                    :type= "isPwd ? 'password' : 'text'"
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
            <q-btn class="glossy" color="grey-10 text-white" label="Log In" size="15px" to="HomePage" @click="onSave"> </q-btn>
            <q-btn class="glossy" color="grey-10 text-white" label="signup" size="15px" @click="signup = true" > </q-btn>
            <q-dialog v-model="signup">
            <q-card class="absolute-center bg-white" style="width:500px">
            <q-card-section class="row items-center q-pb-none">
          <div class="text-h4">Sign up</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

            <div class="q-gutter-xs q-pa-sm">
              <q-input class="bg-black-3" color="blue-grey-10" filled v-model="Fname" label="FULL NAME (First Middle Last)" stack-label />
              <q-input class="bg-black-3" color="blue-grey-10" filled v-model="em" label="Email" suffix="@gmail.com"/>
              <q-input class="bg-black-3" color="blue-grey-10" filled v-model="gnd" label="Gender" />
              <q-input class="bg-black-3" color="blue-grey-10" filled v-model="add" label="Address" />
              <q-input class="bg-black-3" color="blue-grey-10" filled v-model="CNum" label="Contact Number" />
              <q-input
            class="bg-black-3"
            filled v-model="pass"
            color="blue-grey-10"
            :type="isPwd ? 'password' : 'pass'"
            label="Password"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-input
            class="bg-black-3"
            filled v-model="password"
            color="blue-grey-10"
            :type="isPwd ? 'password' : 'pass'"
            label="Confirm Password"
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

        <q-card-actions class="flex flex-center q-gutter-sm">
          <q-btn class="glossy" label="Confirm" color="grey-10" v-close-popup />
        </q-card-actions>
      </q-card>
        </q-dialog>
            </div>
 </q-card-actions>

          <q-btn flat no-caps label="Forgot Password?" color="grey-14" @click="ForgotPassword = true" />
          <q-dialog v-model="ForgotPassword">
          
          
      <q-card class="q-pa-sm absolute-center " style="width: 400px">
        
      <q-card-section class="q-pa-sm">
        <q-card-section>
          <q-input
          color="blue-grey-10"
          v-model="label"
          :type="isPwd ? 'password' : 'pass'"
          label="New password">
          <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>

          </q-input>

          <q-input
          color="blue-grey-10"
          v-model="label"
          :type="isPwd ? 'password' : 'pass'"
          label="Confirm new password"
          >

          </q-input>
        </q-card-section>
           <div  class="q-pa-x3 q-gutter-md flex flex-center">
            <q-card-actions vertical align="center">
            <q-btn
            class="glossy"
            color="grey-10"
           label="Confirm"
           to="SigningPage"
           style="width: 100px"
          >
          </q-btn>
          <q-btn
            class="glossy"
            color="grey-10"
            label="Cancel"
            to="SigningPage"
            style="width: 100px"
          >
          </q-btn>
        </q-card-actions>
        </div>
      </q-card-section>
    </q-card>
    </q-dialog>
            
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
      signup: ref('false'),
      ForgotPassword: ref(false),
      
      
    };
  },
};
</script>
