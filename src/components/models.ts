import { Component } from 'vue';

export interface IConfiguration {
  name?: string;
  family_name?: string;
  job_title?: string;
  description?: string;
  city?: string;
  postal_code?: string;
  phone_number?: string;
  email?: string;
  image?: string;
  driving_licence: boolean;
  icons: string[];
  skills: ISkill[];
  formations: IFormation[];
  experiences: IExperience[];
  hobbies: IHobby[];
  colors: IColor;
}
export interface ISkill {
  id: string;
  name: string;
}
export interface IFormation {
  id: string;
  title?: string;
  place?: string;
  city?: string;
  year?: string;
  description?: string;
  level?: string;
}
export interface IExperience {
  id: string;
  place?: string;
  start?: string;
  end?: string;
  city?: string;
  title?: string;
  description?: string;
}
export interface IHobby {
  id: string;
  title?: string;
  description?: string;
}
export interface ITemplate {
  name: string;
  component: Component;
  defaultColors: IColor;
}
export interface IColor {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}
