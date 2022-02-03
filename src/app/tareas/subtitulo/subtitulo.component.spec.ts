import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloComponent } from './subtitulo.component';
import { TareasService } from './../../services/tareas.service';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtituloComponent],
      providers: [TareasService],
    }).compileComponents();
    service = TestBed.inject(TareasService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia renderizar 3 elementos', () => {
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#tareas')?.textContent?.trim();
    expect(tareas).toBe('Número de Tareas: 3');
  });

  it('Deberia disminuir en 1 si elimino un elemento', () => {
    service.deleteTarea('Comprar pan');
    fixture.detectChanges();
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#tareas')?.textContent?.trim();
    expect(tareas).toEqual('Número de Tareas: 2');
  });

  it('Deberia renderizar el mensaje no hay tareas en la lista', () => {
    service.deleteTarea('Comprar pan');
    service.deleteTarea('Comprar leche');
    service.deleteTarea('Comprar huevos');
    fixture.detectChanges();
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#nontareas')!.textContent!.trim();
    expect(tareas).toEqual('No hay tareas en la lista');
  });
});
