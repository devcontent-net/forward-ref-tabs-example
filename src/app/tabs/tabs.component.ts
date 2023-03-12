import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabInterface } from '../tabs.properties';

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
  @ContentChildren('TabComponent') tabs!: QueryList<TabInterface>;

  selectTab(tab: TabInterface) {
    // ...
  }

  ngAfterContentInit() {
    console.log(this.tabs);
  }
}
