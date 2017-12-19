
import {Component, ViewEncapsulation, OnInit,Input,Output} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare const google: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})
export class ModalComponent {
  @Output() closeResult: string;
  pasar:any;
  @Input()Destino:String;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
this.pasar=this.Destino;
    console.log("consola:",this.Destino)
  }

  ngOnInit() {
   
}
}