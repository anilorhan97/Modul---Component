import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  data  = [
    {name: 'Anıl', age:25, job:'Yazılım Geliştirici', employed: 'Hayır'},
    {name: 'Can', age:29, job:'Yemek Geliştirici', employed: 'Hayır'},
    {name: 'Ali', age:30, job:'Sucu', employed: 'Evet'},
  ]; //Üstteki data içindeki herbir objeye header key ile ulaşılır.
  headers = [
    {key: 'employed', label: 'Aldığı ücretten memnun mu ?'},
    {key: 'name', label: 'Ad Soyad'},
    {key: 'age', label: 'Yaş'},
    {key: 'job', label: 'Meslek'}
  ];


  ngOnInit(): void {
  }

}
