import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-list-perusahaan',
  templateUrl: './list-perusahaan.component.html',
  styleUrls: ['./list-perusahaan.component.scss']
})
export class ListPerusahaanComponent implements OnInit, AfterViewInit {

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
