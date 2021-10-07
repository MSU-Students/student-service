<template>
  <q-page class="bg-image">
    <div class="q-pa-lg" >
      <q-card class="absolute-center" style="width: 350px; height: 270px">
        <q-card-section class="q-pa-md">
          <q-input color="blue-grey-10" v-model="email" filled type="email" label="Email" />
           <template v-slot:prepend>
            <q-icon name="people" />
            </template>
        <q-input
          color="blue-grey-10"
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
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
        <div
          class="q-gutter-y-md column flex flex-center"
          style="max-width: 300px"
        >
          <q-card-actions vertical align="center">
           <q-row> </q-row>
           <q-btn color="cyan-5" glossy text-color="white" label="Login" to="login" />
           <q-btn color="cyan-5" glossy text-color="white" label="Forgot Password" to="Forgot_Password" />
           <q-btn color="cyan-5" glossy text-color="white" label="SignUp" to="signup" />
           </q-card-actions>

        </div>

        </q-card-section>
        
      </q-card>
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

