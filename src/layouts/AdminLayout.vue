<template>
  <div class="q=pa-md">
    <q-layout view="lHh LpR fFf q-pa-xs">
       <q-footer elevated  class="bg-cyan glossy text-dark"> 
        <q-toolbar>
          <q-toolbar-title class="absolute-center">Developed and Maintained by Jalilah & Jawharah :)</q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<style>
.bg-image {
  background-image: url(C:\Users\msu-wone\Desktop\CapstoneProjects\student-service\src\assets\bg1.jpg);
  /*background-blend-mode: blurred;*/
  background-position: center;
  background-color: rgb(207, 201, 201);
  background-size: 100%;
}
</style>
