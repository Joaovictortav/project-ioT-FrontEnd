import { Component, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from 'src/app/animations/animations';
import { SidenavService } from '../../../services/sidenav.service'


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Dashboard', link:'dashboard', icon: 'dashboard'},
    {name: 'Gráficos', link:'graficos', icon: 'leaderboard'},
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    if (this.sideNavState) {
      setTimeout(() => {
        this.linkText = this.sideNavState;
      }, 300)
    } else {
      setTimeout(() => {
        this.linkText = this.sideNavState;
      }, 50)
    }
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}