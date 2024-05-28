<script setup lang="ts">
import { IConfiguration } from 'src/components/models';
import { inputStyle } from 'src/utils/configuration';
import { toRef } from 'vue';

// props
const propsComponent = defineProps<{
  configuration: IConfiguration;
}>();

// refs
const configurationRef = toRef(propsComponent, 'configuration');
</script>

<template>
  <q-input
    v-bind="inputStyle"
    v-model="configurationRef.colors.one"
    label="Couleur 1"
  >
    <template v-slot:prepend>
      <q-icon name="circle" :style="`color: ${configurationRef.colors.one}`" />
    </template>
    <template v-slot:append>
      <q-icon name="colorize" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-color v-model="configurationRef.colors.one" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>

  <q-input
    v-bind="inputStyle"
    v-model="configurationRef.colors.two"
    label="Couleur 2"
  >
    <template v-slot:prepend>
      <q-icon name="circle" :style="`color: ${configurationRef.colors.two}`" />
    </template>
    <template v-slot:append>
      <q-icon name="colorize" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-color v-model="configurationRef.colors.two" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>

  <q-input
    v-bind="inputStyle"
    v-model="configurationRef.colors.three"
    label="Couleur 3"
  >
    <template v-slot:prepend>
      <q-icon
        name="circle"
        :style="`color: ${configurationRef.colors.three}`"
      />
    </template>

    <template v-slot:append>
      <q-icon name="colorize" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-color v-model="configurationRef.colors.three" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
