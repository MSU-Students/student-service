<template>
<q-page>
  
      
      <q-card style="width: 500px flex flex-center">
           <div class="q-pa-sm flex flex-center">
    <div class="q-gutter-y-sm" style="width: 200px">
    <q-cardsections class="q-gutter-sm" style="width:500px">
       <q-input color ="black" v-model="Fname" filled label="First Name" />

      <q-input color="black" filled v-model="Mname" label="Middle Name" />

      <q-input color ="black"   v-model="Lname" filled label="Last Name" />
      <q-input color ="black"  v-model="gnd" filled label="Gender" />

      <q-input color ="black"  v-model="add" filled label="Address" />

      <q-input color ="black"  v-model="eml" filled label="Email" />

      <q-input color ="black" v-model="Contact" filled label="Contact Number" style="200px" />
    </q-cardsections>
     
   <q-cardaction class="q-gutter-sm">
     <div>
 <q-btn color="black" label="Confirm" to="SigningPage" />
     </div>
    
    <q-btn color="black" label="Cancel" to="SigningPage" />
   </q-cardaction>
    
     </div>
  </div>
      </q-card>
 
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
