import { Component } from '@angular/core';
import { onMainContentChange } from '../animations/animations';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ],
  animations: [ onMainContentChange ],
  providers: [SidenavService]
})
export class NavigationComponent  {
  name = 'Angular';
  public onSideNavChange!: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( (res: any) => {
      console.log(res);
      this.onSideNavChange = res;
    })
  }

}