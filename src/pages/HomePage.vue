<script setup lang="ts">
import { IConfiguration, ITemplate } from 'src/components/models';
import { inputStyle } from 'src/utils/configuration';
import { ref, watch } from 'vue';
import { QFileProps, uid } from 'quasar';
// components
import TemplateOne from 'src/pages/templates/TemplateOne.vue';
import ProfilTab from 'src/components/ProfilTab.vue';
import SkillTab from 'src/components/SkillTab.vue';
import FormationTab from 'src/components/FormationTab.vue';
import ExperienceTab from 'src/components/ExperienceTab.vue';
import HobbyTab from 'src/components/HobbyTab.vue';
import ColorTab from 'src/components/ColorTab.vue';

// interfaces
interface ITab {
  name: string;
  label: string;
  icon: string;
  component: any;
}

// consts
const defaultConfiguration: IConfiguration = {
  driving_licence: false,
  icons: [],
  skills: [],
  formations: [],
  experiences: [],
  hobbies: [],
  colors: {
    one: '#fff',
    two: '#ddd',
    three: '#bbb',
    four: '#444',
    five: '#000',
  },
};
const availableTabs: ITab[] = [
  {
    name: 'profil',
    label: 'Profil',
    icon: 'person',
    component: ProfilTab,
  },
  {
    name: 'skills',
    label: 'Compétences',
    icon: 'thumb_up',
    component: SkillTab,
  },
  {
    name: 'formations',
    label: 'Formations',
    icon: 'school',
    component: FormationTab,
  },
  {
    name: 'experiences',
    label: 'Experiences',
    icon: 'work',
    component: ExperienceTab,
  },
  {
    name: 'hobbies',
    label: 'Hobbys',
    icon: 'kitesurfing',
    component: HobbyTab,
  },
  {
    name: 'colors',
    label: 'Couleurs',
    icon: 'edit',
    component: ColorTab,
  },
];
const templatesAvailable: readonly ITemplate[] = Object.freeze([
  {
    name: 'Template 1',
    component: TemplateOne,
    defaultColors: {
      one: '#252e3e',
      two: '#af9661',
      three: '#efeff0',
      four: '#000',
      five: '#000',
    },
  },
]);

// refs
const templateSelected = ref<ITemplate | null>(null);
const tabSelected = ref<ITab['name']>('profil');
const dialogImport = ref(false);
const importFile = ref<QFileProps['modelValue']>(null);
const editedConfiguration = ref<IConfiguration>(
  JSON.parse(JSON.stringify(defaultConfiguration))
);

// functions
function downloadConfig() {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(editedConfiguration.value))
  );
  element.setAttribute('download', getConfigFilename());
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
async function importConfig() {
  if (importFile.value instanceof File === false) {
    dialogImport.value = false;
    return;
  }
  try {
    const buffer = await importFile.value.arrayBuffer();
    const decode = new TextDecoder();
    editedConfiguration.value = JSON.parse(
      decode.decode(buffer)
    ) as IConfiguration;
  } catch (error) {
    console.error(error);
  } finally {
    importFile.value = null;
    dialogImport.value = false;
  }
}
function downloadPdf() {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'application/pdf' + encodeURIComponent('') // TODO jspdf ?
  );
  element.setAttribute('download', getCvFilename());
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function getCvFilename() {
  return `${editedConfiguration.value.family_name}_${editedConfiguration.value.name}.pdf`
    .replaceAll(' ', '')
    .replaceAll('.', '');
}
function getConfigFilename() {
  return `${uid()}.json`;
}

// watchs
watch(templateSelected, () => {
  if (templateSelected.value === null) {
    return;
  }
  editedConfiguration.value.colors = templateSelected.value.defaultColors;
});
</script>

<template>
  <div class="q-pa-md text-center">
    <q-dialog v-model="dialogImport">
      <q-card class="bg-primary text-info q-pa-lg">
        <q-card-section>
          <div class="text-h6 text-center q-pb-md">Importer</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-file
            v-bind="inputStyle"
            v-model="importFile"
            accept=".json"
            label="Fichier de configuration"
          />
        </q-card-section>

        <q-card-actions align="between">
          <q-btn flat label="Annuler" v-close-popup no-caps color="positive" />
          <q-btn
            flat
            label="Importer"
            v-close-popup
            no-caps
            color="positive"
            @click="importConfig"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="flex row items-center full-width justify-between">
      <q-select
        v-bind="inputStyle"
        v-model="templateSelected"
        :options="templatesAvailable"
        map-options
        emit-value
        option-label="name"
        label="Template"
        style="max-width: 300px"
      />

      <div class="flex row items-center">
        <q-btn
          @click="dialogImport = true"
          label="Importer"
          no-caps
          color="positive"
          class="q-ml-md"
        />
        <q-btn
          @click="downloadConfig"
          label="Exporter"
          no-caps
          color="positive"
          class="q-ml-md"
        />
        <q-btn
          v-if="templateSelected !== null"
          @click="downloadPdf"
          label="Télécharger"
          no-caps
          color="positive"
          class="q-ml-md"
        />
      </div>
    </div>

    <div class="flex row full-width q-pt-md main-container">
      <div class="flex row no-wrap items-start q-pb-md q-pr-md col editor-container">
        <q-tabs
          v-model="tabSelected"
          vertical
          class="text-info bg-dark"
          active-color="secondary"
          no-caps
          style="height: inherit;"
        >
          <q-tab
            v-for="tab in availableTabs"
            :key="tab.name"
            :name="tab.name"
            :label="tab.label"
            :icon="tab.icon"
          />
        </q-tabs>

        <q-tab-panels v-model="tabSelected" animated class="full-width">
          <q-tab-panel
            v-for="tab in availableTabs"
            :key="tab.name"
            :name="tab.name"
            class="bg-dark"
          >
            <component
              :is="tab.component"
              :configuration="editedConfiguration"
            />
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <div class="flex preview-container">
        <template v-if="templateSelected !== null">
          <component
            :is="templateSelected.component"
            :configuration="editedConfiguration"
            style="width: 950px;"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 1600px) {
  .main-container {
    flex-direction: column;
}
}
</style>