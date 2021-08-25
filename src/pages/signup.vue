<template>
<q-page class="bg-blue">
      <h2 class="flex flex-center">Student Service Management Systems</h2>
  <div class="q-pa-md flex flex-center">
    <div class="q-gutter-y-md column" style="max-width: 300px">
    
      <q-input v-model="Fname" filled label="First Name" />

      <q-input color="White" filled v-model="Mname" label="Middle Name" />

      <q-input v-model="Lname" filled label="Last Name" />
      <q-input v-model="gnd" filled label="Gender" />

      <q-input v-model="add" filled label="Address" />

      <q-input v-model="eml" filled label="Email" />

      <q-input v-model="Contact" filled label="Contact Number" />
   
    <q-btn color="primary" label="Confirm" to="SigningPage" />
    <q-btn color="primary" label="Cancel" to="SigningPage" />
   
    </div>
  </div>
    </q-page>
</template>

<script>
export default {
  data() {
    return {
      Fname: '',
      
      Mname: '',
   
      Lname: '',
     
      gnd: '',
     
      add: '',
     
      eml: '',
      
      Contact: '',
      
    };
  },
};
</script>
