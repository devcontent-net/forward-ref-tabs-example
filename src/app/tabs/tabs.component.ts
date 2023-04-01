import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabInterface, TAB_COMPONENT_TOKEN } from '../tabs.properties';

@Component({
  selector: 'app-tabs',
  template: `
    <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
        {{ tab.title }}
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TAB_COMPONENT_TOKEN) tabs!: QueryList<TabInterface>;

  selectTab(tab: TabInterface) {
    // ...
  }

  ngAfterContentInit() {
    console.log(this.tabs);
  }
}
