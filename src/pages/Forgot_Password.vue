<template>
  <q-page class="bg-image">
    <q-card class="q-pa-sm absolute-center bg-transparent" style="width: 400px">
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
          <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          
          </q-input>
        </q-card-section>
           <div  class="q-pa-x3 q-gutter-md flex flex-center">
            <q-card-actions vertical align="center">
            <q-btn
            class="glossy" 
             color="grey-14 text-black" 
           label="Confirm"
           to="SigningPage"
           style="width: 100px"
          >
          </q-btn>
          <q-btn
            class="glossy" 
            color="grey-14 text-black" 
            label="Cancel"
            to="SigningPage"
            style="width: 100px"
          >
          </q-btn>
        </q-card-actions> 
        </div> 
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      isPwd: ref(true),
      model: ref(null),
    };
  },
};
</script>
