import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent implements OnInit {

  numbers = [
    {value: 50, label: 'Müşteri'},
    {value: 5000, label: 'Ciro'},
    {value: 65, label: 'Yorumlar'}
  ];

  images = [
    {
      image: '/assets/images/geldi.jpg',
      title: 'Taci',
      description: 'Tacinin güzel bi fotisi'
    },
    {
      image: '/assets/images/değişim.jpg',
      title: 'Taci 2',
      description: 'Tacinin güzel bi fotisi daha'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
