import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalManageComponent } from './portal-manage.component';

describe('PortalManageComponent', () => {
  let component: PortalManageComponent;
  let fixture: ComponentFixture<PortalManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
