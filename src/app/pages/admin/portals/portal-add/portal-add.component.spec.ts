import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAddComponent } from './portal-add.component';

describe('PortalAddComponent', () => {
  let component: PortalAddComponent;
  let fixture: ComponentFixture<PortalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
