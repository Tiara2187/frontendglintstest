import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-list-mobil',
  templateUrl: './list-mobil.component.html',
  styleUrls: ['./list-mobil.component.scss']
})
export class ListMobilComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable', {static: false}) table;
  dataTable: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();

  }

}
