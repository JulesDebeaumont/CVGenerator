<script setup lang="ts">
import { QFileProps } from 'quasar';
import { IConfiguration } from 'src/components/models';
import { inputStyle } from 'src/utils/configuration';
import { ref, toRef } from 'vue';

// props
const propsComponent = defineProps<{
  configuration: IConfiguration;
}>();

// refs
const configurationRef = toRef(propsComponent, 'configuration');
const imageInput = ref<QFileProps['modelValue']>(null);

// functions
async function updateConfigImage() {
  if (imageInput.value instanceof File === false) {
    return '';
  }
  const buffer = await imageInput.value.arrayBuffer();
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (var i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  configurationRef.value.image =
    'data:image/jpg;base64, ' + window.btoa(binary);
}
</script>

<template>
  <div class="bg-dark flex column">
    <div class="flex row q-pb-md">
      <h6 class="no-margin">Profil</h6>
    </div>

    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.family_name"
      label="Nom"
    />
    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.name"
      label="Prénom"
    />
    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.job_title"
      label="Nom du métier"
    />
    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.description"
      label="Phrase d'accroche"
      autogrow
    />
    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.city"
      label="Ville"
    />
    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.postal_code"
      label="Code postal"
    />
    <q-input
      v-bind="inputStyle"
      mask="##.##.##.##.##"
      v-model="configurationRef.phone_number"
      label="Numéro de tel"
    />
    <q-input
      v-bind="inputStyle"
      v-model="configurationRef.email"
      label="Adresse mail"
    />

    <q-file
      v-bind="inputStyle"
      v-model="imageInput"
      label="Photo"
      accept=".jpg, image/*"
      @update:model-value="updateConfigImage"
    >
      <template v-slot:append>
        <q-icon name="help" color="positive">
          <q-tooltip>L'image doit être carré.</q-tooltip>
        </q-icon>
      </template>
    </q-file>
    <q-toggle
      v-model="configurationRef.driving_licence"
      color="secondary"
      label="Permis de conduire"
    />
  </div>
</template>
