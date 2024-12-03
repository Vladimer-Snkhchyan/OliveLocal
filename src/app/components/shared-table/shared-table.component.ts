import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SharedTableColumn } from '../../interfaces/shared-table-column';


@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatMenuModule,],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss'
})
export class SharedTableComponent {

  @Input()
  tableColumns: Array<SharedTableColumn> = [];

  @Input()
  tableData: Array<any> = [];

  @Input()
  itemClickDestination : string = '**';

  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  list_length!: number;
  current_page: number = 0;
  page_size: number = 10;
  paginatedItems: any[] =[];

  constructor(private router: Router,) {}

  ngOnInit(): void {
    //console.log(this.tableColumns)
    //console.log(this.tableData)

    this.list_length = this.tableData.length;
    this.updatePaginatedItems();

    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.paginatedItems);

  }

  onActionEdit () {
    console.log('onActionEdit')
  };
  onActionDeactivate () {
    console.log('onActionDeactivate')
  };

  onActionAuditTrial(id: any, route: any) {
    console.log(`onActionAuditTrial: id: ${id}`)
    if (route.includes('NotImplemented')) {this.router.navigate(['NotImplemented'])} 
    else { 
      this.router.navigate([route, id]) 
    }
  };

  preventRowClicking(event: any) {
    event.stopPropagation();

  }


  navigate(item: any) {
    console.log(`Navigated from  SharedList to ${this.itemClickDestination}`);

    if(this.itemClickDestination.includes('rules-engine/leave-types')) {
      console.log(item.country)
      this.router.navigate([this.itemClickDestination, item.country])
    }
    else if(this.itemClickDestination.includes('Accounts/')) {
      //console.log(`Account with id ${item.id} was selected`)
      this.router.navigate([this.itemClickDestination, item.id])
    }
  }

  updatePaginatedItems() {
    const start = this.current_page * this.page_size;
    const end = start + this.page_size;
    this.paginatedItems = this.tableData.slice(start, end);
    this.dataSource = new MatTableDataSource(this.paginatedItems);
  };

  handlePageEvent(pageEvent: PageEvent) {
    this.current_page = pageEvent.pageIndex;
    this.page_size = pageEvent.pageSize;
    this.updatePaginatedItems();
  };

}
