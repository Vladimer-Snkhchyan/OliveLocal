import { Component, Input } from '@angular/core';
import { BreadcrumbLink } from '../../interfaces/breadcrumb-link';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
@Input()
allRoutes: BreadcrumbLink[] = [];

}
