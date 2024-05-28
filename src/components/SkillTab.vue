<script setup lang="ts">
import { uid } from 'quasar';
import { IConfiguration, ISkill } from 'src/components/models';
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
function addSkill() {
  configurationRef.value.skills.push(generateNewSkill());
}
function removeSkill(skillId: string) {
  configurationRef.value.skills = configurationRef.value.skills.filter(
    (skillFilter) => {
      return skillFilter.id !== skillId;
    }
  );
}
function generateNewSkill(): ISkill {
  return {
    id: uid(),
    name: '',
  };
}
</script>

<template>
  <div class="flex column q-pa-sm">
    <div class="flex row q-pb-md">
      <h6 class="no-margin">Compétences</h6>
      <q-btn
        @click="addSkill"
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
        :list="configurationRef.skills"
        v-bind="{ animation: 150 }"
        item-key="id"
        handle=".handle"
      >
        <template #item="{ element }">
          <q-item class="q-gutter-x-md flex row items-center">
            <q-input v-bind="inputStyle" v-model="element.name" label="Nom" />
            <q-icon
              name="drag_indicator"
              color="negative"
              size="sm"
              class="handle"
            >
              <q-tooltip> Drag & Drop </q-tooltip>
            </q-icon>
            <q-icon
              @click="removeSkill(element.id)"
              name="delete"
              color="negative"
              size="sm"
              class="cursor-pointer"
            >
              <q-tooltip> Supprimer </q-tooltip>
            </q-icon>
          </q-item>
        </template>
      </draggable>
    </q-list>
  </div>
</template>
