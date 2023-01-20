import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter(); //close adında event oluşturduk ve üste eventemitter eklenir.

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    //console.log("Sayfadan ayrıldım.");
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit(); //OncloseClick tıklandığında üstteki close'u emit ile eventEmitter'e bağlarız.
  }

}
