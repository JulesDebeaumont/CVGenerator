<script setup lang="ts">
import { IConfiguration } from 'src/components/models';

// props
const propsComponents = defineProps<{
  configuration: IConfiguration;
}>();
</script>

<template>
  <div class="PreviewContent-sc-1qqn6ti-1 khjSes">
    <div class="Preview-sc-1qqn6ti-2 ljkwRc">
      <div
        scale="1.1687657430730478"
        class="DocumentWrapper-djzk4v-0 dMGnIh"
      >
        <section
          id="preview-template"
          scale="1.1687657430730478"
          width="950"
          class="Document-mtv77t-0 eUAUnI"
        >
          <section
            width="950"
            class="Page-sc-1bv3d3r-0 Page-fvgclz-1 hMXRcy fefVOb"
          >
            <div
              class="View-sc-8b83af-0 Header-fvgclz-2 fAlNti gWVUHA"
              :style="`background-color: ${propsComponents.configuration.colors.one}`"
            >
              <div
                class="View-sc-8b83af-0 HeaderContent-fvgclz-3 fAlNti lkKBwP"
              >
                <div
                  class="Text-sc-1men39j-0 Heading-fdlt8e-0 Name-fvgclz-7 PxDX eLhXUb fAqTNX"
                >
                  {{ propsComponents.configuration.name }}
                  {{ propsComponents.configuration.family_name }}
                </div>
                <div
                  class="View-sc-8b83af-0 TitleContainer-fvgclz-10 fAlNti gYfpB"
                >
                  <div
                    class="View-sc-8b83af-0 TitleLine-fvgclz-11 fAlNti eCCASE"
                    :style="`background-color: ${propsComponents.configuration.colors.two}`"
                  ></div>
                  <div
                    class="Text-sc-1men39j-0 Heading-fdlt8e-0 Title-fvgclz-9 PxDX eLhXUb eSoDqt"
                    :style="`color: ${propsComponents.configuration.colors.two}`"
                  >
                    {{ propsComponents.configuration.job_title }}
                  </div>
                  <div
                    class="View-sc-8b83af-0 TitleLine-fvgclz-11 fAlNti eCCASE"
                    :style="`background-color: ${propsComponents.configuration.colors.two}`"
                  ></div>
                </div>
                <div class="View-sc-8b83af-0 Details-fvgclz-4 fAlNti ibsdMc">
                  <div
                    class="View-sc-8b83af-0 DetailsItem-fvgclz-5 fAlNti gCQHbH"
                  >
                    <div
                      class="View-sc-8b83af-0 IconCont-fvgclz-25 fAlNti KYCjT"
                    >
                      <svg
                        width="20px"
                        height="26px"
                        viewBox="0 0 20 26"
                        class="SvgIcon-sc-4nubd9-0 dinupF"
                        :style="`fill: ${propsComponents.configuration.colors.two}`"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Riga-Add-Info"
                            transform="translate(-202.000000, -214.000000)"
                            class="StyledG-sc-4nubd9-1"
                          >
                            <g
                              id="Group-5"
                              transform="translate(84.000000, 214.000000)"
                            >
                              <path
                                d="M132.783,18.134 C132.606,18.432 132.222,18.755 132.021,19.077 C131.72,19.562 131.373,20.064 131.072,20.568 C129.97,22.296 128.847,24.087 127.715,25.858 C125.889,23.147 124.042,20.433 122.261,17.672 C120.61,15.101 118.395,12.363 118.043,9.789 C118.021163,9.56821652 118.006822,9.34675586 118,9.125 L118,8.022 C118.63,2.621 123.321,1.13686838e-13 127.58,1.13686838e-13 C130.765,1.13686838e-13 134.706,1.426 136.511,5.401 C136.663,5.725 136.863,6.091 136.964,6.436 C136.989,6.506 137.423,7.628 137.423,7.953 L137.423,9.17 C137.423,12.135 134.56,15.144 132.783,18.134 L132.783,18.134 Z M127.766,5.356 C126.14,5.356 124.267,6.277 124.267,8.294 L124.267,9.008 C124.267,9.055 124.259,9.56 124.36,9.814 C125.037,11.405 126.408,11.975 127.66,11.975 C129.667,11.975 131.321,10.504 131.321,8.668 C131.321,6.822 129.774,5.356 127.766,5.356 L127.766,5.356 Z"
                                id="location"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="Text-sc-1men39j-0 Text-n28ss1-0 DetailsText-fvgclz-6 PxDX gjIHaU dFFqgd"
                    >
                    {{ propsComponents.configuration.postal_code }}
                      {{ propsComponents.configuration.city }}
                    </div>
                  </div>
                  <div
                    class="View-sc-8b83af-0 DetailsItem-fvgclz-5 fAlNti gCQHbH"
                  >
                    <div
                      class="View-sc-8b83af-0 IconCont-fvgclz-25 fAlNti KYCjT"
                    >
                      <svg
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                        class="SvgIcon-b8yf1i-1 lcPmwa"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.037 21.231c-.37.359-.739.715-1.109 1.069l-4.358-5.602c.365-.355.729-.704 1.092-1.057.361-.345.601-.596.932-.53a.728.728 0 0 1 .301.12c.113.078.222.232.33.371.159.202.318.408.477.613.712.918 1.423 1.828 2.135 2.744.153.195.306.392.453.585.096.123.203.244.257.364.058.134.079.27.083.399.008.367-.24.592-.593.924zm-1.966 1.739c-.304.145-.6.22-.899.27-.925.163-1.865.009-2.761-.285-.247-.081-.477-.194-.726-.284-.198-.075-.391-.176-.585-.274-.43-.231-.857-.485-1.29-.776-.412-.279-.804-.599-1.223-.924-.353-.274-.683-.612-1.035-.921-.125-.123-.254-.245-.381-.371-.189-.201-.386-.402-.582-.605-.206-.23-.418-.467-.627-.696a8.677 8.677 0 0 0-.177-.213c-.189-.223-.374-.446-.565-.669-.045-.062-.093-.118-.14-.182l-.536-.69c-.048-.064-.096-.122-.143-.188-.193-.264-.387-.526-.58-.794l-.492-.722-.3-.458c-.238-.434-.531-.829-.749-1.257-.07-.133-.145-.26-.217-.391-.209-.426-.441-.836-.62-1.255-.229-.536-.461-1.05-.628-1.578-.243-.768-.448-1.498-.557-2.25C.091 6.282.095 5.141.427 4.002c.09-.31.214-.61.385-.916.063-.111.124-.229.22-.33 1.491 1.912 2.976 3.819 4.463 5.731-.701.659-.206 1.598.181 2.357.16.31.388.61.565.932.076.115.155.229.231.346.123.178.246.357.374.538l.431.589c.054.065.102.127.153.194.106.131.209.267.315.399l.107.137c.148.177.295.349.445.521l.416.48c.105.112.207.227.311.338.339.313.636.689.965.985.662.576 1.462 1.482 2.197.771 1.448 1.862 2.896 3.726 4.348 5.588a1.51 1.51 0 0 1-.463.308zM7.007 7.027l-1.121 1.08C4.403 6.193 2.913 4.286 1.429 2.379c.371-.359.743-.72 1.116-1.077.349-.332.575-.577.897-.513.12.024.239.064.356.155.097.078.193.221.283.336l.499.644c.731.936 1.462 1.873 2.19 2.812.157.203.313.405.474.606.077.106.18.214.234.323.08.159.105.305.108.458.008.354-.239.578-.579.904z"
                          class="StyledPath-b8yf1i-0 cvqKtH"
                          :style="`fill: ${propsComponents.configuration.colors.two}`"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="Text-sc-1men39j-0 Text-n28ss1-0 DetailsText-fvgclz-6 PxDX gjIHaU dFFqgd"
                    >
                      {{ propsComponents.configuration.phone_number }}
                    </div>
                  </div>
                  <div
                    class="View-sc-8b83af-0 DetailsItem-fvgclz-5 fAlNti gCQHbH"
                  >
                    <div
                      class="View-sc-8b83af-0 IconCont-fvgclz-25 fAlNti KYCjT"
                      :style="`fill: ${propsComponents.configuration.colors.two}`"
                    >
                      <svg
                        width="24"
                        height="19"
                        viewBox="0 0 24 19"
                        class="SvgIcon-sc-3sdvpr-1 huENIW"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.36 13.142L.861 2.402V.215h23.006v2.187L12.36 13.142zM.861 16.266V4.707L6.892 10.1.861 16.266zM23.866 4.707v11.56L17.833 10.1l6.033-5.393zM12.361 15.469l4.394-4.209 6.789 7.017H1.184l6.788-7.017 4.389 4.209z"
                          class="StyledPath-sc-3sdvpr-0"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="Text-sc-1men39j-0 Text-n28ss1-0 DetailsText-fvgclz-6 PxDX gjIHaU dFFqgd"
                    >
                      {{ propsComponents.configuration.email }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="Table-fvgclz-16 ixuQlm">
              <div
                width="950"
                data-rbd-droppable-id="left"
                data-rbd-droppable-context-id="0"
                class="LeftColumn-fvgclz-17 fhmDQj"
                :style="`background-color: ${propsComponents.configuration.colors.three}`"
              >
                <div
                  class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 iFZZvl kZOPfA"
                >
                  <div
                    class="View-sc-8b83af-0 AvatarContainer-fvgclz-12 fAlNti cpCaBF"
                  >
                    <img
                      :src="propsComponents.configuration.image"
                      class="Image-w4yy09-0 Avatar-fvgclz-13 dydvxs bPKUkA"
                    />
                  </div>
                </div>
                <!-- <div class="View-sc-8b83af-0 IconCont-fvgclz-25 aller">
                  <template
                    v-for="icon in propsComponents.configuration.icons"
                    :key="icon"
                  >
                    <img :src="icon" />
                  </template>
                </div> -->

                <div
                  data-rbd-draggable-context-id="0"
                  data-rbd-draggable-id="d75d1101-5fa5-4882-9f82-2853d0b4e5d0"
                  class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 iFZZvl kZOPfA"
                  style="
                    box-shadow: none;
                    border: 0px;
                    padding: 0px;
                    height: auto;
                    width: auto;
                  "
                >
                  <div
                    class="View-sc-8b83af-0 BlockItem-ermvs4-0 StyledBlockItem-fvgclz-22 fAlNti cQbBRy eTvWcP"
                  >
                    <div class="Text-sc-1men39j-0 Heading-fdlt8e-0 PxDX gZVFil">
                      COMPÉTENCES
                    </div>
                    <div
                      class="View-sc-8b83af-0 StyledView-fvgclz-0 fAlNti PfvnB"
                    >
                      <template
                        v-for="skill in propsComponents.configuration.skills"
                        :key="skill"
                      >
                        <div
                          class="UnbreakableView-g0hv7p-0 UnbreakableBlockInner-fvgclz-24 iFZZvl ehGdLC"
                        >
                          <div
                            class="View-sc-8b83af-0 Wrapper-nkn6y9-0 fAlNti kMzbun"
                          >
                            <div
                              class="View-sc-8b83af-0 Container-nkn6y9-1 fAlNti gCzlor"
                            >
                              <div
                                class="View-sc-8b83af-0 Decoration-nkn6y9-2 fAlNti leuCJC"
                                :style="`background-color: ${propsComponents.configuration.colors.two}`"
                              ></div>
                              <div
                                class="Text-sc-1men39j-0 Text-n28ss1-0 Text-nkn6y9-3 PxDX gjIHaU iiKwIS text-left"
                              >
                                {{ skill.name }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>

                <div
                  data-rbd-draggable-context-id="0"
                  data-rbd-draggable-id="939fc762-0314-4ccc-9daf-195d3d260432"
                  class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 gQyFmb kZOPfA"
                  style="
                    box-shadow: none;
                    border: 0px;
                    padding: 0px;
                    height: auto;
                    width: auto;
                  "
                >
                  <div
                    class="View-sc-8b83af-0 BlockItem-ermvs4-0 StyledBlockItem-fvgclz-22 fAlNti cQbBRy ingunR"
                  >
                    <div class="Text-sc-1men39j-0 Heading-fdlt8e-0 PxDX gZVFil">
                      FORMATIONS
                    </div>

                    <div
                      class="View-sc-8b83af-0 StyledView-fvgclz-0 fAlNti PfvnB"
                    >
                      <template
                        v-for="formation in propsComponents.configuration
                          .formations"
                        :key="formation"
                      >
                        <div
                          class="UnbreakableView-g0hv7p-0 UnbreakableBlockInner-fvgclz-24 gQyFmb jhwqAS"
                        >
                          <div
                            class="View-sc-8b83af-0 BlockNestedItem-d8icj2-0 NestedBlock-sc-1gpqjpb-4 fAlNti bwFrjN RnXzU"
                          >
                            <div class="BreakAvoidWrapper-sc-31vbqh-0 ctaaOO">
                              <div
                                class="Text-sc-1men39j-0 Heading-fdlt8e-0 SubHeading-sc-1a3p7dh-0 StyledSubHeading-sc-1gpqjpb-0 PxDX eLhXUb bnNFpD foJavr"
                              >
                                {{ formation.title }}
                              </div>
                              <div
                                class="Text-sc-1men39j-0 Text-n28ss1-0 Text-sc-1gpqjpb-1 School-sc-1gpqjpb-2 PxDX gjIHaU HgiFH text-left"
                                :style="`color: ${propsComponents.configuration.colors.two}`"
                              >
                                {{ formation.place }} / {{ formation.city }} /
                                {{ formation.year }}
                              </div>
                            </div>
                            <div class="Description-sc-1gpqjpb-3 kUwWgn">
                              <div class="ParsedTextContainer-sc-6nbsq0-0">
                                <div class="UnbreakableView-g0hv7p-0 gQyFmb">
                                  <div
                                    class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU"
                                  >
                                    <div
                                      class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU text-left"
                                      style="
                                        text-decoration: none;
                                        color: inherit;
                                      "
                                    >
                                      {{ formation.description }}
                                    </div>
                                  </div>
                                </div>
                                <div class="UnbreakableView-g0hv7p-0 gQyFmb">
                                  <div
                                    class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU"
                                  >
                                    <div
                                      class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU text-left"
                                      style="
                                        text-decoration: none;
                                        color: inherit;
                                      "
                                    >
                                      {{ formation.level }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>

                <div
                  data-rbd-draggable-context-id="0"
                  data-rbd-draggable-id="8469b53e-8a73-4523-acb6-b68f78010ce7"
                  class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 gQyFmb kZOPfA"
                  style="
                    box-shadow: none;
                    border: 0px;
                    padding: 0px;
                    height: auto;
                    width: auto;
                  "
                >
                  <div
                    class="View-sc-8b83af-0 BlockItem-ermvs4-0 StyledBlockItem-fvgclz-22 fAlNti bqvGCc ingunR"
                  >
                    <div
                      v-if="
                        propsComponents.configuration.driving_licence === true
                      "
                      class="Text-sc-1men39j-0 Heading-fdlt8e-0 PxDX gZVFil"
                    >
                      Permis B, Véhiculé
                    </div>
                  </div>
                </div>
              </div>
              <div
                width="950"
                data-rbd-droppable-id="right"
                data-rbd-droppable-context-id="0"
                class="RightColumn-fvgclz-18 liTozq"
              >
                <div
                  class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 iFZZvl kZOPfA"
                >
                  <div
                  v-if="(propsComponents.configuration.description?.length ?? 0) > 0"
                    class="View-sc-8b83af-0 SummaryContainer-fvgclz-14 fAlNti bHYPfM"
                  >
                    <div
                      class="Text-sc-1men39j-0 Text-n28ss1-0 Summary-fvgclz-15 PxDX gjIHaU hyPhbj"
                    >
                      <div class="ParsedTextContainer-sc-6nbsq0-0">
                        <div class="UnbreakableView-g0hv7p-0 gQyFmb">
                          <div
                            class="Text-sc-1men39j-0 Text-n28ss1-0 Summary-fvgclz-15 PxDX gjIHaU hyPhbj"
                          >
                            <div
                              class="Text-sc-1men39j-0 Text-n28ss1-0 Summary-fvgclz-15 PxDX gjIHaU hyPhbj"
                            >
                              <div
                                class="Text-sc-1men39j-0 Text-n28ss1-0 Summary-fvgclz-15 PxDX gjIHaU hyPhbj text-left"
                                style="text-decoration: none; color: inherit"
                              >
                                {{ propsComponents.configuration.description }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id="0"
                    data-rbd-draggable-id="bd736268-efea-4da1-b813-3628b6a50eae"
                    class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 gQyFmb kZOPfA"
                    style="
                      box-shadow: none;
                      border: 0px;
                      padding: 0px;
                      height: auto;
                      width: auto;
                    "
                  >
                    <div
                      class="View-sc-8b83af-0 BlockItem-ermvs4-0 StyledBlockItem-fvgclz-22 fAlNti kOTXoc ingunR"
                    >
                      <div
                        class="Text-sc-1men39j-0 Heading-fdlt8e-0 PxDX eLhXUb"
                      >
                        EXPÉRIENCES PROFESSIONNELLES
                      </div>
                      <div
                        class="View-sc-8b83af-0 StyledView-fvgclz-0 fAlNti PfvnB"
                      >
                        <template
                          v-for="experience in propsComponents.configuration
                            .experiences"
                          :key="experience.title"
                        >
                          <div
                            class="UnbreakableView-g0hv7p-0 UnbreakableBlockInner-fvgclz-24 gQyFmb jhwqAS"
                          >
                            <div
                              class="BreakAvoidWrapper-sc-31vbqh-0 Wrapper-sc-3wzo5k-5 ctaaOO hWKISx"
                            >
                              <div class="Column-sc-3wzo5k-6 dItcKI">
                                <div
                                  class="Text-sc-1men39j-0 Text-n28ss1-0 Employer-sc-3wzo5k-3 StyledText-sc-3wzo5k-7 PxDX gjIHaU jnZfmN jxCRvk text-left"
                                >
                                  {{ experience.place }}&nbsp;-&nbsp;{{
                                    experience.city
                                  }}
                                </div>
                                <div class="SpaceWrapper-sc-3wzo5k-8 iXnHaz">
                                  <div
                                    class="Text-sc-1men39j-0 Text-n28ss1-0 DateComp-sc-1hqshvs-0 PxDX gjIHaU fcBLqD text-left"
                                    :style="`color: ${propsComponents.configuration.colors.two}`"
                                  >
                                    {{ experience.start }}&nbsp;-&nbsp;{{
                                      experience.end
                                    }}
                                  </div>
                                  <div
                                    class="Text-sc-1men39j-0 Text-n28ss1-0 Employer-sc-3wzo5k-3 StyledText-sc-3wzo5k-7 Devider-sc-3wzo5k-9 PxDX gjIHaU jnZfmN fbuwqy fdbOqK"
                                    :style="`color: ${propsComponents.configuration.colors.two}`"
                                  >
                                    &nbsp;-&nbsp;
                                  </div>
                                </div>
                              </div>
                              <div
                                class="Column-sc-3wzo5k-6 kOsFsO riga-border"
                              >
                                <div
                                  class="Text-sc-1men39j-0 Heading-fdlt8e-0 SubHeading-sc-1a3p7dh-0 StyledSubHeading-sc-3wzo5k-0 PxDX eLhXUb bnNFpD fzjNZj"
                                >
                                  {{ experience.title }}
                                </div>
                                <div class="TextCont-sc-3wzo5k-1 fCKCoN">
                                  <div class="ParsedTextContainer-sc-6nbsq0-0">
                                    <div
                                      class="UnbreakableView-g0hv7p-0 gQyFmb"
                                    >
                                      <div
                                        class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU"
                                      >
                                        <div
                                          class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU text-left"
                                          style="
                                            text-decoration: none;
                                            color: inherit;
                                          "
                                        >
                                          {{ experience.description }}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div
                    data-rbd-draggable-context-id="0"
                    data-rbd-draggable-id="34eb55c6-fddc-4e41-bc60-874cd6c447bb"
                    class="UnbreakableView-g0hv7p-0 StyledUnbreakableSection-fvgclz-21 gQyFmb kZOPfA"
                    style="
                      box-shadow: none;
                      border: 0px;
                      padding: 0px;
                      height: auto;
                      width: auto;
                    "
                  >
                    <div
                      class="View-sc-8b83af-0 BlockItem-ermvs4-0 StyledBlockItem-fvgclz-22 fAlNti kOTXoc ingunR"
                    >
                      <div
                        class="Text-sc-1men39j-0 Heading-fdlt8e-0 PxDX eLhXUb"
                      >
                        Centres d'intérêt
                      </div>
                      <div
                        class="View-sc-8b83af-0 StyledView-fvgclz-0 fAlNti PfvnB"
                      >
                        <template
                          v-for="hobby in propsComponents.configuration.hobbies"
                          :key="hobby.title"
                        >
                          <div
                            class="UnbreakableView-g0hv7p-0 UnbreakableBlockInner-fvgclz-24 gQyFmb jhwqAS"
                          >
                            <div
                              class="BreakAvoidWrapper-sc-31vbqh-0 Wrapper-sc-3wzo5k-5 ctaaOO hWKISx"
                            >
                              <div>
                                <div
                                  class="Text-sc-1men39j-0 Heading-fdlt8e-0 SubHeading-sc-1a3p7dh-0 StyledSubHeading-sc-3wzo5k-0 PxDX eLhXUb bnNFpD fzjNZj"
                                >
                                  - {{ hobby.title }}
                                </div>
                                <div class="TextCont-sc-3wzo5k-1 fCKCoN">
                                  <div class="ParsedTextContainer-sc-6nbsq0-0">
                                    <div
                                      class="UnbreakableView-g0hv7p-0 gQyFmb"
                                    >
                                      <div
                                        class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU"
                                      >
                                        <div
                                          class="Text-sc-1men39j-0 Text-n28ss1-0 PxDX gjIHaU text-left"
                                          style="
                                            text-decoration: none;
                                            color: inherit;
                                          "
                                        >
                                          {{ hobby.description }}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

body::-webkit-scrollbar {
  display: none;
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

body {
  font-family: TTCommons, Roboto light, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

p {
  color: #282b32;
  font-size: 16pxpx;
}

.ijpIrg {
  color: black;
}

/*! CSS Used from: Embedded */

.fAlNti {
  display: flex;
  flex-direction: column;
  position: relative;
}

.PxDX {
  position: relative;
  margin: 0px;
  padding: 0px;
  break-inside: auto;
  white-space: normal !important;
  word-break: break-word !important;
}

.dydvxs {
  break-inside: avoid-page !important;
}

.hMXRcy {
  position: relative;
  height: inherit;
  width: 950px;
}

.eUAUnI {
  position: relative;
  opacity: 1;
}

.iFZZvl {
  display: block;
  break-inside: avoid;
}

.gQyFmb {
  display: block;
  break-inside: auto;
}

.ctaaOO {
  position: relative;
  break-inside: avoid !important;
}

body {
  margin: 0px;
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

button,
input {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0px;
}

button,
input {
  overflow: visible;
}

button {
  text-transform: none;
}

button,
[type='button'] {
  appearance: button;
}

[type='radio'] {
  box-sizing: border-box;
  padding: 0px;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  outline: none !important;
}

body {
  font-family: TTCommons, 'Roboto light', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

p {
  color: rgb(40, 43, 50);
}

.ijpIrg {
  color: black;
}

.dMGnIh {
  position: relative;
  transform-origin: left top;
  user-select: none;
}

.dVtTVd {
  background: rgb(22, 136, 254);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(22, 136, 254);
  width: auto;
  font-size: 16px;
  font-weight: 500;
  padding: 0.7em 1.7em;
  cursor: pointer;
  will-change: box-shadow;
  border-radius: 4px;
}

.dVtTVd:hover {
  background: rgb(1, 111, 224);
  border-color: rgb(1, 111, 224);
}

.dVtTVd:disabled {
  border-color: rgb(191, 197, 214);
  background-color: rgb(191, 197, 214);
}

.eNmQca {
  width: auto;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  will-change: box-shadow;
  background: transparent;
  border: 0px;
  margin: 0px;
  color: rgb(40, 43, 50);
  border-radius: 0px;
  padding: 0px;
}

.eNmQca:hover {
  background: rgb(1, 111, 224);
  border-color: rgb(1, 111, 224);
}

.eNmQca:disabled {
  border-color: rgb(191, 197, 214);
  background-color: rgb(191, 197, 214);
}

.eNmQca:hover {
  box-shadow: none;
  background: transparent;
}

.bdtAVF {
  stroke: none;
}

.cmZbqA {
  stroke: currentcolor;
}

.fuYLCv {
  stroke: none;
}

.kgZVyZ {
  stroke: none;
}

.fUQYvr {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center center;
}

.fUQYvr svg {
  width: 18px;
  height: 18px;
}

.fUQYvr svg path {
  stroke: white;
}

.flLpEt {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 55%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) scale(1);
}

.flLpEt svg {
  width: 18px;
  height: 18px;
}

.flLpEt svg path {
  stroke: white;
}

.hlEFfu {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 47%;
  transform: translate(-50%, -50%);
  color: rgb(191, 197, 214);
  font-size: 16px;
  opacity: 0;
  visibility: hidden;
}

.jwwYle {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 42px;
  border: 1px solid rgb(152, 161, 179);
  text-align: center;
  border-radius: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
}

.jwwYle::before {
  content: '';
  position: absolute;
  display: block;
  opacity: 0;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%) scale(0);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.jwwYle:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

.lUrJL {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 42px;
  border: 1px solid rgb(152, 161, 179);
  text-align: center;
  border-radius: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
}

.lUrJL::before {
  content: '';
  position: absolute;
  display: block;
  opacity: 0;
  top: 50%;
  left: 50%;
  visibility: hidden;
  transform: translate(-50%, -50%) scale(0);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.bCvjQT {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 99;
}

.fGSxJX {
  margin: 0px;
  font-size: 16px;
  font-family: 'Gilroy SemiBold';
  font-weight: normal;
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}

.joTblk {
  position: relative;
  display: inline-block;
  width: 75px;
  margin-right: 30px;
}

.htXXpl {
  position: absolute;
  left: 0px;
  top: 100%;
  background: rgb(21, 27, 37);
  width: 180px;
  border-radius: 4px 4px 3px 3px;
  font-family: 'Gilroy SemiBold';
  padding: 10px 0px 10px 10px;
  transform-origin: center top;
  transform: scaleY(0);
  opacity: 0;
  z-index: 1060;
}

.htXXpl::-webkit-scrollbar {
  width: 6px;
}

.htXXpl::-webkit-scrollbar-thumb {
  background-color: rgb(152, 161, 179);
  border: 4px solid transparent;
}

.VuKsA {
  width: 42px;
  height: 42px;
  background: rgb(40, 43, 50);
  margin-bottom: 4px;
  margin-right: 8px;
  border: 1px solid rgb(152, 161, 179);
}

.VuKsA:not(:last-of-type) {
  margin-right: 8px;
}

.mQozA {
  width: 42px;
  height: 42px;
  background: rgb(175, 150, 97);
  margin-bottom: 4px;
  margin-right: 8px;
  border: 2px solid rgb(56, 72, 97);
}

.kbpFWA {
  background: rgb(0, 153, 218);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 153, 218);
  width: auto;
  font-size: 16px;
  font-weight: 500;
  padding: 0.7em 1.7em;
  cursor: pointer;
  will-change: box-shadow;
  border-radius: 4px;
}

.kbpFWA:hover {
  background: rgb(0, 117, 167);
  border-color: rgb(0, 117, 167);
}

.kbpFWA:disabled {
  border-color: rgb(191, 197, 214);
  background-color: rgb(191, 197, 214);
}

.bIHpBm {
  font-family: 'TTCommons DemiBold', 'Arial Rounded', 'Helvetica Neue',
    sans-serif;
  background-color: rgb(33, 150, 243);
  border-color: rgb(33, 150, 243);
  text-transform: none;
  font-size: 18px;
  padding: 0px !important;
}

.bIHpBm a {
  display: block;
  padding: 14px 24px;
  line-height: 1;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  color: rgb(240, 239, 239);
  text-transform: uppercase;
}

.fgauTR {
  text-decoration: none;
}

.czSvHp {
  height: 18px;
  width: 1px;
  margin-left: 30px;
  margin-right: 15px;
  background: rgb(191, 197, 214);
}

.erpPHU {
  position: relative;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: auto;
}

.kRFmFP {
  max-height: 154px;
  border-radius: 0px 0px 3px 3px;
  overflow: auto;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: normal;
  color: rgb(61, 64, 71);
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 206;
  transform-origin: center top;
  transform: scaleY(0);
  opacity: 0;
  height: 176px;
  background-color: rgb(40, 43, 50);
  box-shadow: none;
  padding: 0px 20px 7px;
  width: 180px;
  font-family: 'Gilroy Semibold';
  top: 100%;
  border: none;
}

.kRFmFP::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

.kRFmFP::-webkit-scrollbar-thumb {
  background-color: rgb(152, 161, 179);
  border: 4px solid rgb(40, 43, 50);
  border-radius: 6px;
}

.kRFmFP::-webkit-scrollbar-thumb:hover {
  background-color: rgb(0, 153, 218);
}

.kRFmFP::-webkit-scrollbar {
  width: 6px;
}

.kRFmFP::-webkit-scrollbar-thumb {
  background-color: rgb(152, 161, 179);
  border: 4px solid transparent;
}

.kRFmFP button {
  font-size: 14px;
  color: rgb(255, 255, 255);
}

.iSrhUf {
  text-align: left;
  width: 100%;
  display: block;
  font-family: 'Gilroy Medium';
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: normal;
  background: transparent;
  border: 0px;
  font-size: 19px;
  padding: 5px 0px;
  color: rgb(152, 161, 179);
}

.iSrhUf:hover {
  font-family: 'Gilroy SemiBold';
  box-shadow: none;
  color: rgb(22, 136, 254);
  background: rgb(247, 247, 252);
  border-radius: 0px;
}

.iSrhUf:hover {
  background: none;
}

.eZesyv {
  text-align: left;
  width: 100%;
  display: block;
  font-family: 'Gilroy Medium';
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: normal;
  background: transparent;
  border: 0px;
  font-size: 19px;
  padding: 5px 0px;
  color: rgb(255, 255, 255);
}

.eZesyv:hover {
  font-family: 'Gilroy SemiBold';
  box-shadow: none;
  color: rgb(22, 136, 254);
  background: rgb(247, 247, 252);
  border-radius: 0px;
}

.eZesyv:hover {
  background: none;
}

.csMki {
  line-height: 0;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-30%);
}

.csMki svg > path {
  stroke: rgb(0, 153, 218);
}

.csMki svg > path {
  stroke: rgb(0, 153, 218) !important;
}

.lhmCBK {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0px;
  user-select: none;
  cursor: pointer;
  outline: none;
  line-height: 24px;
  letter-spacing: 0.2px;
  border-radius: 3px;
  background: transparent;
  border: 0px;
  padding: 5px 56px 5px 12px;
  min-width: 180px;
  width: 100%;
  font-family: 'Gilroy Semibold';
  font-size: 16px;
  box-shadow: rgba(15, 15, 15, 0.12) 0px 3px 4px -3px;
  color: rgb(255, 255, 255);
}

.lhmCBK::-webkit-input-placeholder {
  color: rgb(152, 161, 179);
}

.lhmCBK span {
  color: rgb(152, 161, 179);
}

.eVcvCl {
  position: relative;
}

.hnocWS {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(14, 18, 29);
  color: rgb(255, 255, 255);
  height: 70px;
  flex: 0 0 70px;
  flex-flow: row nowrap;
  padding: 0px 32px;
}

.frnByK {
  flex: 1 1 0px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}

.frnByK svg {
  fill: rgb(255, 255, 255);
}

.eEddIW {
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex: 1 1 auto;
}

.bOhjUw {
  display: flex;
  position: relative;
  z-index: 1;
  flex-flow: row nowrap;
}

.gfYfZD {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0px;
  flex-flow: row nowrap;
}

.gfYfZD p:hover {
  color: rgb(0, 153, 218);
}

.gfYfZD > div:first-child {
  color: rgb(255, 255, 255);
}

.gfYfZD > div:first-child p:hover {
  color: rgb(255, 255, 255);
}

.gfYfZD > div:first-child span {
  border: 2px solid rgb(255, 255, 255);
}

.gfYfZD > div:first-child > div,
.gfYfZD > div:last-child > div > div {
  border-radius: 3px;
  background: rgb(25, 30, 45);
}

.gfYfZD > div:last-child > div p:hover {
  color: rgb(255, 255, 255);
}

.gfYfZD > div:last-child > div svg {
  fill: transparent;
}

.gfYfZD > div:last-child > div svg > path {
  stroke: rgb(255, 255, 255);
}

.gfYfZD > div:last-child > div > div {
  padding: 10px;
  width: 200px;
}

.gfYfZD > div:last-child > div > div::-webkit-scrollbar {
  width: 13px;
}

.gfYfZD > div:last-child > div > div::-webkit-scrollbar-thumb {
  border: 5px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 7px;
  background-color: rgb(53, 66, 90);
}

.gfYfZD > div:last-child button {
  width: 175px;
  font-family: 'Gilroy Medium';
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: rgb(240, 239, 239);
  padding: 10px;
  border-radius: 3px;
}

.gfYfZD > div:last-child button:hover {
  background: rgb(34, 150, 243);
}

.eWvGEL {
  position: absolute;
  left: calc(50% - 50px);
  display: flex;
  flex-direction: row;
}

.eWvGEL > div:first-child {
  background: rgb(34, 150, 243);
}

.eWvGEL > div:first-child:hover,
.eWvGEL > div:first-child:active {
  background-color: rgb(34, 150, 243);
  border-color: rgb(34, 150, 243);
}

.lnLTQa {
  line-height: unset;
  font-weight: 600;
  text-align: center;
  z-index: 10;
  padding: 14px 24px;
  font-size: 18px;
  background-color: rgb(0, 153, 218);
  transition: background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s;
}

.lnLTQa:hover {
  background-color: rgb(0, 139, 198);
  border-color: rgb(0, 139, 198);
}

.lnLTQa:active {
  background-color: rgb(0, 124, 177);
  border-color: rgb(0, 124, 177);
}

.lPXta {
  color: rgb(255, 255, 255);
  font-size: 24px;
}

.lPXta svg {
  transform: scale(1.3);
}

.lPXta:hover {
  color: rgb(0, 153, 218);
}

.lPXta:hover svg > g > path {
  fill: rgb(0, 153, 218);
}

.dinupF {
  stroke: none;
  width: 23.3753px;
  height: 30.3879px;
}

.cQbBRy {
  margin-bottom: 58.4383px;
}

.cQbBRy:last-child {
  margin-bottom: 0px;
}

.bqvGCc {
  margin-bottom: 58.4383px;
}

.bqvGCc > div:first-child {
  margin-bottom: 35.063px;
}

.bqvGCc:last-child {
  margin-bottom: 0px;
}

.kOTXoc {
  margin-bottom: 58.4383px;
}

.kOTXoc > div:first-child {
  margin-bottom: 35.063px;
}

.kOTXoc:last-child {
  margin-bottom: 0px;
}

.bwFrjN {
  margin-bottom: 46.7506px;
}

.eLhXUb {
  font-family: 'FiraSans Bold';
  font-weight: 600;
  font-size: 18.7003px;
  color: rgb(51, 62, 80);
  text-transform: uppercase;
  margin-bottom: 35.063px;
  word-break: break-word;
  padding-top: 15.194px;
  padding-bottom: 14.0252px;
  border-bottom: 1px solid rgb(51, 62, 80);
  border-top: 1px solid rgb(51, 62, 80);
  text-align: left;
  letter-spacing: 3.5063px;
  break-inside: avoid-page;
}

.aller2 {
  display: block;
  margin-bottom: 0px;
  padding-top: 2.3753px;
  padding-bottom: 23.3753px;
  break-inside: auto !important;
}

.gZVFil {
  font-family: 'FiraSans Bold';
  font-weight: 600;
  font-size: 18.7003px;
  color: rgb(51, 62, 80);
  text-transform: uppercase;
  word-break: break-word;
  padding-top: 15.194px;
  padding-bottom: 14.0252px;
  border-bottom: 1px solid rgb(51, 62, 80);
  border-top: 1px solid rgb(51, 62, 80);
  text-align: left;
  letter-spacing: 3.5063px;
  break-inside: avoid-page;
  margin-bottom: 35.063px;
}

.bnNFpD {
  font-family: 'FiraSans SemiBold';
  font-size: 14.0252px;
  padding: 0px;
  margin-bottom: 4.67506px;
  border: none;
  text-align: left;
  letter-spacing: 2.33753px;
}

.gjIHaU {
  font-family: FiraSans;
  font-size: 16.3627px;
  line-height: 1.43;
  color: rgb(119, 120, 123);
}

.foJavr {
  font-size: 16.3627px;
  line-height: 1.43;
  letter-spacing: 1.63627px;
}

.HgiFH {
  line-height: 1.3;
}

.jFFbCp {
  font-size: 16.3627px;
  font-family: 'FiraSans Bold';
}

.kUwWgn {
  break-inside: auto;
  padding-top: 11.6877px;
}

.RnXzU {
  margin-bottom: 11.6877px;
}

.kMzbun {
  break-inside: avoid;
}

.gCzlor {
  position: relative;
  padding-left: 18.7003px;
  margin-bottom: 2.33753px;
}

.leuCJC {
  position: absolute;
  width: 7px;
  height: 7px;
  top: 5.84383px;
  left: 0px;
  border-radius: 50%;
}

.iiKwIS {
  font-size: 16.3627px;
  line-height: 1.43;
}

.fcBLqD {
  font-family: 'FiraSans SemiBold';
  font-size: 15.194px;
  line-height: normal;
  letter-spacing: normal;
}

.fzjNZj {
  font-size: 16.3627px;
  line-height: 1.43;
  letter-spacing: 1.63627px;
}

.fCKCoN {
  break-inside: auto;
  padding-top: 9.35013px;
}

.kDKdFB {
  display: flex;
  flex-flow: row wrap;
}

.jnZfmN {
  font-size: 16.3627px;
  font-family: 'FiraSans Bold';
  color: rgb(175, 150, 97);
}

.jbmIXG {
  display: block;
  margin-bottom: 11.6877px;
}

.hWKISx {
  display: flex;
  flex-direction: row;
  width: 100%;
  break-inside: auto !important;
}

.dItcKI {
  padding-right: 21.0378px;
  width: 180px;
}

.kOsFsO {
  width: 70%;
  padding-left: 14.0252px;
  padding-right: 0px;
  position: relative;
}

.kOsFsO::before {
  content: '';
  position: absolute;
  top: 14.0252px;
  bottom: -29.2191px;
  width: 1.16877px;
  background-color: rgb(188, 190, 192);
  left: 0px;
}

.kOsFsO::after {
  content: '';
  position: absolute;
  top: 5.84383px;
  height: 10.5189px;
  width: 10.5189px;
  border-radius: 50%;
  background-color: rgb(188, 190, 192);
  left: -4.67506px;
}

.jxCRvk {
  font-family: 'FiraSans SemiBold';
  line-height: 1.43;
  letter-spacing: normal;
  color: rgb(51, 49, 50);
  font-size: 16.3627px;
}

.fbuwqy {
  font-family: 'FiraSans SemiBold';
  font-size: 15.194px;
  line-height: normal;
  letter-spacing: normal;
}

.iXnHaz {
  margin-top: 4.67506px;
}

.fdbOqK {
  display: none;
}

.huENIW {
  stroke: none;
  width: 28.0504px;
  height: 22.2065px;
}

.lcPmwa {
  stroke: none;
  width: 22.2065px;
  height: 28.0504px;
}

.fefVOb {
  width: 950px;
}

.gWVUHA {
  padding: 46.7506px 46.7506px 0px;
  z-index: 2;
}

.lkKBwP {
  position: relative;
  min-height: 93.5013px;
  display: flex;
  padding-bottom: 0px;
}

.ibsdMc {
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 37.4005px;
  margin-top: 22.2065px;
  display: flex;
}

.gCQHbH {
  display: flex;
  border-right: 1px solid rgb(146, 146, 146);
  padding: 0px 35.063px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-basis: 50%;
}

.gCQHbH:last-child {
  border-right-color: transparent;
}

.dFFqgd {
  text-align: center;
  color: rgb(210, 210, 210);
  word-break: break-all;
  margin-bottom: auto;
  font-size: 17.5315px;
  white-space: pre-wrap !important;
}

.fAqTNX {
  color: rgb(255, 255, 255);
  font-size: 52.5945px;
  text-align: center;
  line-height: 1;
  letter-spacing: 10.5189px;
  border: none;
  padding: 0px;
  margin-bottom: 19.869px;
}

.kJwFCM {
  text-align: center;
  margin-bottom: 30.3879px;
  font-size: 23.3753px;
  padding: 0px;
  line-height: normal;
  border: none;
  letter-spacing: 0px;
  color: rgb(175, 150, 97);
}

.eSoDqt {
  text-align: center;
  letter-spacing: 3.27254px;
  font-size: 16.3627px;
  border: none;
  padding: 0px;
  margin: 0px 29.2191px;
}

.gYfpB {
  display: flex;
  flex-direction: row;
}

.eCCASE {
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 1.16877px;
  margin-top: 9.35013px;
}

.cpCaBF {
  height: 169.471px;
  width: 169.471px;
  margin: 0px auto 23.3753px;
}

.bPKUkA {
  border-radius: 50%;
  height: 100%;
}

.bHYPfM {
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin-bottom: 29.2191px;
}

.hyPhbj {
  font-family: FiraSans;
  font-size: 16.3627px;
  line-height: 1.5;
  color: rgb(102, 103, 102);
  white-space: pre-line;
}

.ixuQlm {
  display: flex;
  position: relative;
  width: 100%;
}

.fhmDQj {
  display: table-cell;
  width: 36%;
  padding: 46.7506px 40.9068px 46.7506px 46.7506px;
  position: relative;
  min-height: 991.524px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
  max-width: 334.08px !important;
}

.liTozq {
  display: table-cell;
  width: 65%;
  padding: 46.7506px 28.0504px;
  max-width: 100%;
  background-color: #fff;
}

.kZOPfA {
  cursor: unset !important;
}

.kZOPfA:first-child > div {
  padding-top: 0px;
}

.kZOPfA:first-child > div > div:first-child {
  border-top-color: rgb(51, 62, 80);
}

.ingunR {
  display: block;
  margin-bottom: 0px;
  padding-top: 23.3753px;
  padding-bottom: 23.3753px;
  break-inside: auto !important;
}

.ingunR > div:first-child {
  margin-bottom: 0px;
}

.ingunR > div:nth-child(2) {
  display: block;
}

.eTvWcP {
  display: block;
  margin-bottom: 0px;
  padding-top: 23.3753px;
  padding-bottom: 23.3753px;
  break-inside: avoid;
}

.eTvWcP > div:first-child {
  margin-bottom: 0px;
}

.eTvWcP > div:nth-child(2) {
  display: block;
}

.jhwqAS {
  padding-top: 23.3753px;
}

.jhwqAS:first-of-type {
  padding-top: 29.2191px;
}

.jhwqAS:last-child > div {
  margin-bottom: 0px;
}

.jhwqAS:last-child .riga-border::before {
  bottom: 0px;
}

.ehGdLC {
  padding-top: 11.6877px;
}

.ehGdLC:first-of-type {
  padding-top: 29.2191px;
}

.ehGdLC:last-child > div {
  margin-bottom: 0px;
}

.aller {
  top: 0px;
  flex-direction: row;
  justify-content: center;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}

.aller > img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-right: 5px;
}

.KYCjT {
  top: 0px;
  margin-bottom: 8.18136px;
  margin-top: auto;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}
/*! CSS Used from: Embedded */

/*! CSS Used fontfaces */

@font-face {
  font-family: 'TTCommons';
  src: url(https://resumedone.co/static/fonts/TTCommons-Regular.woff2);
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TTCommons';
  src: url(https://resumedone.co/static/fonts/TTCommons-DemiBold.woff);
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: TTCommons;
  src: url(https://resumedone.co/static/fonts/TTCommons-Regular.woff2);
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: TTCommons;
  src: url(https://resumedone.co/static/fonts/TTCommons-DemiBold.woff);
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-display: swap;
  font-family: 'Gilroy SemiBold';
  src: url(https://resumedone.co/static/fonts/Gilroy/Gilroy-SemiBold.woff2);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-display: swap;
  font-family: 'Gilroy SemiBold';
  src: url(https://resumedone.co/static/fonts/Gilroy/Gilroy-SemiBold.woff2);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'TTCommons DemiBold';
  src: url(https://resumedone.co/static/fonts/TTCommons-DemiBold.woff);
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TTCommons DemiBold';
  src: url(https://resumedone.co/static/fonts/TTCommons-DemiBold.woff);
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-display: swap;
  font-family: 'Gilroy Medium';
  src: url(https://resumedone.co/static/fonts/Gilroy/Gilroy-Medium.woff2);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-display: swap;
  font-family: 'Gilroy Medium';
  src: url(https://resumedone.co/static/fonts/Gilroy/Gilroy-Medium.woff2);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'FiraSans Bold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Bold.otf);
}

@font-face {
  font-family: 'FiraSans Bold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Bold.otf);
}

@font-face {
  font-family: 'FiraSans Bold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Bold.otf);
}

@font-face {
  font-family: 'FiraSans Bold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Bold.otf);
}

@font-face {
  font-family: 'FiraSans Bold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Bold.otf);
}

@font-face {
  font-family: 'FiraSans Bold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Bold.otf);
}

@font-face {
  font-family: 'FiraSans SemiBold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-SemiBold.otf);
}

@font-face {
  font-family: 'FiraSans SemiBold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-SemiBold.otf);
}

@font-face {
  font-family: 'FiraSans SemiBold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-SemiBold.otf);
}

@font-face {
  font-family: 'FiraSans SemiBold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-SemiBold.otf);
}

@font-face {
  font-family: 'FiraSans SemiBold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-SemiBold.otf);
}

@font-face {
  font-family: 'FiraSans SemiBold';
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-SemiBold.otf);
}

@font-face {
  font-family: FiraSans;
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Regular.otf);
}

@font-face {
  font-family: FiraSans;
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Regular.otf);
}

@font-face {
  font-family: FiraSans;
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Regular.otf);
}

@font-face {
  font-family: FiraSans;
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Regular.otf);
}

@font-face {
  font-family: FiraSans;
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Regular.otf);
}

@font-face {
  font-family: FiraSans;
  src: url(https://resumedone.co/static/fonts/FiraSans/FiraSans-Regular.otf);
}
</style>
