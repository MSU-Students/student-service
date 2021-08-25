<template>
  <q-page class="bg-image">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-card class="absolute-center" style="width: 300px; height: 300px">
        <q-input v-model="email" filled type="email" label="Email" />
        <q-input
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
        <q-row></q-row>
          <q-btn color="white" text-color="black" label="Login" to="login" />
           <q-btn color="green" label="Forgot Password" />
          <q-btn color="primary" label="SignUp" to="signup" />
        </div>
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

