<script setup lang="ts">
import { ref } from 'vue';

// refs
const aboutDialog = ref(false);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-dialog v-model="aboutDialog">
      <q-card class="bg-primary text-info">
        <q-card-section>
          <div class="text-h6 text-center">À propos</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Jules Debeaumont <i>OST™ {{ new Date().getFullYear() }}</i
          ><br />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Fermer" v-close-popup no-caps color="positive" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="text-info"> CV Generator </q-toolbar-title>

        <q-btn @click="aboutDialog = true" color="positive" no-caps>
          À propos
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-primary">
      <q-page class="q-pa-sm text-info q-pt-lg">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
