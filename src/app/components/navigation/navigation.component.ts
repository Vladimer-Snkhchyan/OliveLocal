import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isCollapsed: boolean = false;

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  get sidenavWidth() {
    return this.isCollapsed ? "76px" : "273px";
  }
  get sidenavIconMargin() {
    return this.isCollapsed ? "30px" : "15px";
  }


  constructor(private router: Router){};

  navigate(route: string) {
    if(route==='dashboard') {
      this.router.navigate(['/'])
    }
    else if(route==='orders') {
      this.router.navigate(['/rules-engine'])
    }
    else if(route==='accounts') {
      this.router.navigate(['/Accounts'])
    }
    else {
      this.router.navigate(['**'])
    }
  }

}
