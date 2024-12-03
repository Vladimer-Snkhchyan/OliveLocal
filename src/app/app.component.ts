import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from "./components/navigation/navigation.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Olive';

  @ViewChild('sidenav') sidenav!: SidebarComponent;

  onToggleSidenav() {
    this.sidenav.toggle();
  }
}
