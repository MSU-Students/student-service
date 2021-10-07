<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-light-blue-14 glossy text-dark">
      <q-toolbar>
        <q-toolbar-title class="font text-h3 flex flex-center">
          <q-avatar square >
            <q-img src="~C:\Users\User\Desktop\CapstoneProjects\student-service\src\assets\logo1.jpg" style="width: 1 100p x q-pa-md"></q-img>>
          </q-avatar>
          College of Information and Computing Sciences
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
  background-image: url(C:\Users\User\Desktop\CapstoneProjects\student-service\src\assets\login2.jpg);
 /*background-blend-mode: overlay;*/
  background-position: center;
  background-color: rgb(207, 201, 201);
  background-size: 100%; 
}
</style>