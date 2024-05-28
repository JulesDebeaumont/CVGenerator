<script setup lang="ts">
import { uid } from 'quasar';
import { IConfiguration, IExperience } from 'src/components/models';
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
function addExperience() {
  configurationRef.value.experiences.push(generateExperience());
}
function removeExperience(experienceId: string) {
  configurationRef.value.experiences =
    configurationRef.value.experiences.filter((experienceFilter) => {
      return experienceFilter.id !== experienceId;
    });
}
function generateExperience(): IExperience {
  return {
    id: uid(),
    place: '',
    start: '',
    end: '',
    city: '',
    title: '',
    description: '',
  };
}
</script>

<template>
  <div class="flex column q-pa-sm">
    <div class="flex row q-pb-md">
      <h6 class="no-margin">Expériences</h6>
      <q-btn
        @click="addExperience"
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
        :list="configurationRef.experiences"
        v-bind="{ animation: 150 }"
        item-key="id"
        handle=".handle"
      >
        <template #item="{ element }">
          <q-item class="q-gutter-y-md flex row items-center">
            <div class="flex row items-center no-wrap q-gutter-x-md full-width">
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
                  v-model="element.start"
                  label="Début"
                />
                <q-input
                  v-bind="inputStyle"
                  v-model="element.end"
                  label="Fin"
                />
                <q-input
                  v-bind="inputStyle"
                  v-model="element.description"
                  label="Description"
                  autogrow
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
                  @click="removeExperience(element.id)"
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
