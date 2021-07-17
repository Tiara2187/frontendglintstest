import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-list-karyawan',
  templateUrl: './list-karyawan.component.html',
  styleUrls: ['./list-karyawan.component.scss']
})
export class ListKaryawanComponent implements OnInit, AfterViewInit {

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
