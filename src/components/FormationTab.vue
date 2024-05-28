<script setup lang="ts">
import { uid } from 'quasar';
import { IConfiguration, IFormation } from 'src/components/models';
import { inputStyle } from 'src/utils/configuration';
import { toRef } from 'vue';
// vuedraggable
import draggable from 'vuedraggable';

// props
const propsComponent = defineProps<{
  configuration: IConfiguration;
}>();

// refs
const configurationRef = toRef(propsComponent, 'configuration');

// functions
function addFormation() {
  configurationRef.value.formations.push(generateNewFormation());
}
function removeformation(formationId: string) {
  configurationRef.value.formations = configurationRef.value.formations.filter(
    (formationFilter) => {
      return formationFilter.id !== formationId;
    }
  );
}
function generateNewFormation(): IFormation {
  return {
    id: uid(),
    title: '',
    place: '',
    city: '',
    year: '',
    description: '',
    level: '',
  };
}
</script>

<template>
  <div class="flex column q-pa-sm">
    <div class="flex row q-pb-md">
      <h6 class="no-margin">Formations</h6>
      <q-btn
        @click="addFormation"
        icon="add"
        color="positive"
        size="sm"
        class="q-ml-sm"
      >
        <q-tooltip>Ajouter</q-tooltip>
      </q-btn>
    </div>

    <q-list separator>
      <draggable
        :list="configurationRef.formations"
        v-bind="{ animation: 150 }"
        item-key="id"
        handle=".handle"
      >
        <template #item="{ element }">
          <q-item class="q-gutter-y-md flex row items-center">
            <div class="flex row no-wrap items-center q-gutter-x-md full-width">
              <div class="flex column col-5">
                <q-input
                  v-bind="inputStyle"
                  v-model="element.title"
                  label="Titre"
                />
                <q-input
                  v-bind="inputStyle"
                  v-model="element.city"
                  label="Ville"
                />
                <q-input
                  v-bind="inputStyle"
                  v-model="element.place"
                  label="Lieu"
                />
              </div>

              <div class="flex column col-5">
                <q-input
                  v-bind="inputStyle"
                  v-model="element.year"
                  label="Année"
                />
                <q-input
                  v-bind="inputStyle"
                  v-model="element.description"
                  label="Description"
                />
                <q-input
                  v-bind="inputStyle"
                  v-model="element.level"
                  label="Niveau"
                />
              </div>

              <div class="flew row no-wrap items-center">
                <q-icon
                  name="drag_indicator"
                  color="negative"
                  size="sm"
                  class="handle"
                >
                  <q-tooltip> Drag & Drop </q-tooltip>
                </q-icon>

                <q-icon
                  @click="removeformation(element.id)"
                  name="delete"
                  color="negative"
                  size="sm"
                  class="col cursor-pointer"
                >
                  <q-tooltip> Supprimer </q-tooltip>
                </q-icon>
              </div>
            </div>
          </q-item>
        </template>
      </draggable>
    </q-list>
  </div>
</template>
