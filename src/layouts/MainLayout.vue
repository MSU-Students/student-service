<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="font text-h3 flex flex-center">
          <q-avatar >
            <q-img src="~C:\Users\Mariano\Desktop\Projects\ssms_cics\src\assets\logo.jpg" style="width: 1 100p x q-pa-md"></q-img>>
          </q-avatar>
          Student Service Management System
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style>
.bg-image {
  background-image: url(C:\Users\Mariano\Desktop\Projects\ssms_cics\src\assets\image.jpg);
 /*background-blend-mode: overlay;*/
  background-position: center;
  background-color: rgb(207, 201, 201);
  background-size: 100%; 
}
</style>