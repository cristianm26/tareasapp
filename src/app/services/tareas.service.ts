import { Injectable } from '@angular/core';
import { Tarea } from '../tareas/interfaces/tarea.interface';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  tareas: Array<Tarea> = [
    {
      tarea: 'Comprar pan',
      completada: false,
    },
    {
      tarea: 'Comprar leche',
      completada: false,
    },
    {
      tarea: 'Comprar huevos',
      completada: false,
    },
  ];

  deleteTarea(nombre: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.tarea !== nombre);
  }

  completeTarea(nombre: string) {
    const tarea: Tarea = this.tareas.find((tarea) => {
      return tarea.tarea === nombre;
    })!;
    tarea.completada = !tarea.completada;
  }
}
