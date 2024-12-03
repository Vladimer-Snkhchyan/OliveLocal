import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";
import { BreadcrumbLink, BreadcrumbLinkType } from '../../interfaces/breadcrumb-link';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Rule } from '../../interfaces/rule';
import { SharedTableColumn } from '../../interfaces/shared-table-column';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedTableComponent } from "../../components/shared-table/shared-table.component";

@Component({
  selector: 'app-rules-engine',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatButtonModule, BreadcrumbsComponent, SharedTableComponent],
  templateUrl: './rules-engine.component.html',
  styleUrl: './rules-engine.component.scss'
})
export class RulesEngineComponent {

  allRules: Rule[] = [];
  url_to_db = './data/rules.json';
  url_to_countryicon_links = "./flags/country.json";
  countryIconMap: { [country: string]: string } = {};
  itemClickDestination = "rules-engine/leave-types";

  breadcrumbLinks: BreadcrumbLink[] =
  [
    {
      route: '**',
      route_label: 'Olive Admin',
      route_type: BreadcrumbLinkType.start
    },
    {
      route: '/rules-engine',
      route_label: 'Rules Engine',
      route_type: BreadcrumbLinkType.current
    }
  ]


  RuleTableColumns: Array<SharedTableColumn> = [
    {
      columnDef: 'rule_name',
      header: 'Rule name',
      cell: (element: Record<string, any>) => `${element['rule_name']}`
    },
    {
      columnDef: 'module',
      header: 'Module',
      cell: (element: Record<string, any>) => `${element['module']}`,
    },
    {
      columnDef: 'country',
      header: 'Country',
      cell: (element: Record<string, any>) => `${this.countryIconMap[element['country']]}`,
      isImage: true,
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      cell:  (element: Record<string, any>) => `${element}`,

      isAction: true,
      actions: {
        auditTrial: {track: 'undefined track', route: 'RulesEngine/LeaveTypes/AuditTrial'},
        cancel: true,
      }
    }
  ];

  constructor(private router: Router, private http: HttpClient) { };

  ngOnInit() {
    this.loadRules();
    this.loadCountryIconMap();
  };

  loadCountryIconMap () {
    this.http.get<any[]>(this.url_to_countryicon_links).subscribe(
      (data) => {
        this.countryIconMap = data.reduce((map, item) => {
          map[item.name] = item.flag_1x1;
          return map;
        }, {});
      },
      (error) => {
        console.error('Failed to fetch country icons:', error);
      }
    );
  };

  loadRules() {
    this.http.get<Rule[]>(this.url_to_db ).subscribe(
      data => {
        this.allRules = data;
      },
    );
  };

}
