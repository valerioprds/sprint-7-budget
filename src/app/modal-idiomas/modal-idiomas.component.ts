import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-idiomas',
  templateUrl: './modal-idiomas.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-idiomas.component.css'],
})
export class ModalIdiomasComponent {
  constructor(public modal: NgbModal) {}

  open(contenido: any) {
    this.modal.open(contenido);
  }

  openIdiomas(contenidoIdiomas: any) {
    this.modal.open(contenidoIdiomas);
  }

  openBackground(contenido: any) {
    this.modal.open(contenido, { backdropClass: 'background-modal' });
  }
}
