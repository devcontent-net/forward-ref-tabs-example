import { Component, forwardRef, Input } from '@angular/core';
import { TabInterface } from '../tabs.properties';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  providers: [
    {
      provide: 'TabComponent', // just token name
      useExisting: forwardRef(() => TabComponent)
    }
  ]
})
export class TabComponent implements TabInterface {
  @Input() title!: string;
  @Input() active = false;
}
