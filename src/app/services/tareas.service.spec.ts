import { TestBed } from '@angular/core/testing';

import { TareasService } from './tareas.service';

describe('TareasService', () => {
  let service: TareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasService);
  });

  it('Verificar que el servicio inicie en 3 tareas', () => {
    expect(service.tareas.length).toBe(3);
  });

  it('delete: Deberia borrar una tarea Comprar leche', () => {
    service.deleteTarea('Comprar leche');
    expect(service.tareas.length).toBe(1);
  });
  it('No delete:No Deberia borrar una tareaque no existe', () => {
    service.deleteTarea('abcdef');
    expect(service.tareas.length).toBe(3);
  });

  it('Spy: deberia llamar la funcion completa una sola vez', () => {
    const spy = jasmine.createSpyObj('TareasService', ['completeTarea']);
    spy.completeTarea();
    expect(spy.completeTarea.calls.count()).toBe(1);
  });
});
