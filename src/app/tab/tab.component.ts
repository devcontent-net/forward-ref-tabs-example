import { Component, forwardRef, Input } from '@angular/core';
import { TAB_COMPONENT_TOKEN, TabInterface } from '../tabs.properties';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  providers: [
    {
      provide: TAB_COMPONENT_TOKEN,
      useExisting: forwardRef(() => TabComponent)
    }
  ]
})
export class TabComponent implements TabInterface {
  @Input() title!: string;
  @Input() active = false;
}
