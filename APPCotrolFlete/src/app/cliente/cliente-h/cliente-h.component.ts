import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente-h',
  templateUrl: './cliente-h.component.html',
  styleUrls: ['./cliente-h.component.css']
})
export class ClienteHComponent implements OnInit {
  hoy:any = new Date();
  constructor() { }

  ngOnInit() {
  }


 
}
