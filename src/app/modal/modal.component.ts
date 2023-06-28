import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(public modal: NgbModal) {}

  open(contenido: any) {
    this.modal.open(contenido);
  }

  openBackground(contenido: any) {
    this.modal.open(contenido, { backdropClass: 'background-modal' });
  }
}
