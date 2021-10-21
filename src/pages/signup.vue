<template>
  <q-page class="bg-image">
    <div class="q-pa-xs">
      <q-card class="absolute-center bg-white" style="width:500px">
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
        <div class="q-pa-sm q-gutter-sm flex flex-center">
           <q-card-actions class="flex flex-center q-gutter-sm">
            <div class="q-gutter-md">
            <q-btn label="Confirm" class="glossy"
            color="grey-14 text-black" size="15px" to="SigningPage"> </q-btn>
            <q-btn label="Cancel" class="glossy"
            color="grey-14 text-black" size="15px" to="SigningPage"> </q-btn>
            </div>

          </q-card-actions>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      Fname: '',
      em: '',
      gnd: '',
      add: '',
      CNum: '', 
      isPwd: ref(true),
      model: ref(null),

      
    };
  },
};
</script>