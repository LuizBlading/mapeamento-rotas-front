import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { distinct, from, of, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mapeamento-rotas';
}
