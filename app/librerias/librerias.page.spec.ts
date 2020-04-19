import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibreriasPage } from './librerias.page';

describe('LibreriasPage', () => {
  let component: LibreriasPage;
  let fixture: ComponentFixture<LibreriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibreriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibreriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
