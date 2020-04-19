import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TulistaPage } from './tulista.page';

describe('TulistaPage', () => {
  let component: TulistaPage;
  let fixture: ComponentFixture<TulistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TulistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
