import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css'],
})
export class ListadoTareasComponent {
  constructor(private tareaService: TareasService) {}

  get tareas() {
    return this.tareaService.tareas;
  }

  delete(tarea: Tarea) {
    this.tareaService.deleteTarea(tarea.tarea);
  }

  complete(tarea: Tarea) {
    this.tareaService.completeTarea(tarea.tarea);
  }
}
