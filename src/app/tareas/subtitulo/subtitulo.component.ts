import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css'],
})
export class SubtituloComponent {
  constructor(private tareaService: TareasService) {}

  get tareas() {
    return this.tareaService.tareas.length;
  }
}
