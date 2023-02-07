import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCardComponent } from './provider-card.component';

describe('ProviderCardComponent', () => {
  let component: ProviderCardComponent;
  let fixture: ComponentFixture<ProviderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderCardComponent);
    component = fixture.componentInstance;
    component.provider = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    };
    component.selected = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when clicked', () => {
    spyOn(component.itemClicked, 'emit');
    jasmine.clock().install();
    component.iconClicked();
    jasmine.clock().tick(250);

    const nativeElement = fixture.nativeElement;
    const icon = nativeElement.querySelector('i');
    icon.dispatchEvent(new Event('click'));

    expect(component.itemClicked.emit).toHaveBeenCalledWith(component.provider);
    jasmine.clock().uninstall();
  });
});
