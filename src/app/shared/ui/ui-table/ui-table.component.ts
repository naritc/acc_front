import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnMeta, PageMeta, TableMeta } from '../../../model/dto/ui/TableMeta';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { COLUMN_TYPE } from '../../../shared/constant/TableConst';
import { UiInputComponent } from "../ui-input/ui-input.component";
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ui-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatPaginatorModule, MatTableModule, UiInputComponent, MatIcon, MatCardModule, MatSortModule],
  templateUrl: './ui-table.component.html',
  styleUrl: './ui-table.component.scss'
})
export class UiTableComponent implements OnInit {
  @Input() tableMeta!: TableMeta;
  @Input() datasource!: any[];

  @Output() selectRowEvent = new EventEmitter<any>();

  tableGroup = new FormGroup({
    filterTable: new FormControl(''),
  });

  tempsource: any[] = [];

  displayColumns: string[] = [];
  columns: ColumnMeta[] = [];
  page: PageMeta = {
    pageIndex: 0,
    pageSize: 10,
    pageOption: [5, 10, 20, 50]
  };

  COLUMN_TYPE = COLUMN_TYPE;

  ngOnInit(): void {
    this.columns = this.tableMeta.columns;
    this.page = this.tableMeta.page
    this.displayColumns = this.getSortedTitles();

    this.tempsource = this.datasource;
  }

  handlePageEvent(event: Event) {
    console.log(event);
  }

  getSortedTitles(): string[] {
    return this.columns
      .sort((a, b) => a.no - b.no)
      .map(item => item.def);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != "") {
      this.datasource = this.datasource.filter(item =>
        JSON.stringify(item).toLowerCase().includes(filterValue.trim().toLowerCase())
      );
    } else {
      this.datasource = this.tempsource;
    }
  }

  onRowClicked(row: any): void {
    this.selectRowEvent.emit(row);
  }

}
