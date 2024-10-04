import { Component, Input } from '@angular/core';
import { AplicativosRotas } from '../../model/AplicativosRotas';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list-tree',
  standalone: true,
  imports: [],
  templateUrl: './list-tree.component.html',
  styleUrl: './list-tree.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          height: '0px',
          display: 'none',
        }),
      ),
      state(
        'open',
        style({
          display: 'flex',
        }),
      ),
      transition('open => closed', [animate('0.2s ease')]),
      transition('closed => open', [animate('0.5s ease')]),
    ]),
  ]
})
export class ListTreeComponent {
  @Input() aplicativos: Array<AplicativosRotas> | undefined;
  showText: boolean = false;
  clicked: boolean = false;
  idAplicativo: number | undefined;

  showRoutes(aplicativoRota: AplicativosRotas) {
    this.idAplicativo = aplicativoRota.idAplicativo;
    this.showText = !this.showText;
  }

}