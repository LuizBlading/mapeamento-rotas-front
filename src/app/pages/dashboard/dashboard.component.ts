import { Component } from '@angular/core';
import { RotasService } from '../../services/rotas.service';
import { AplicativosRotas } from '../../model/AplicativosRotas';
import { TreeModule } from 'primeng/tree';
import { Rotas } from '../../model/Rotas';
import { ListTreeComponent } from "../../components/list-tree/list-tree.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TreeModule, ListTreeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  aplicativos: Array<AplicativosRotas> | undefined;
  rotas: any;

  constructor(private rotasService: RotasService) {
    // this.pegarRotas();
    this.buscarTodosOsAplicativos();
  }

  pegarRotas() {
    this.rotasService.buscarRotasAplicativo(2).subscribe({
      next: (value) => {
        console.log(value)
        this.rotas = value;
      },
      error: (value) => console.log(value)
    });
  }

  buscarTodosOsAplicativos() {
    this.rotasService.buscarTodosOsAplicativos().subscribe({
      next: (value) => {
        this.aplicativos = value;
      },
      error: (value) => {
        console.error(value);
        throw new Error("Não foi possível buscar aplicativos")
      }
    })
  }
}