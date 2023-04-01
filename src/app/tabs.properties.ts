import { InjectionToken } from '@angular/core';

export const TAB_COMPONENT_TOKEN = new InjectionToken('Avatar');

export interface TabInterface {
  title: string;
  active: boolean;
}
