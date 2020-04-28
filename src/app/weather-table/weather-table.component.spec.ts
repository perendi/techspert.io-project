import { MockService } from './../services/mockservice';
import { WeatherService } from './../services/weather.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { WeatherTableComponent } from './weather-table.component';

describe('WeatherTableComponent', () => {
  let component: WeatherTableComponent;
  let fixture: ComponentFixture<WeatherTableComponent>;
  let service: MockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ],
      providers: [MockService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should show 5 entries per page when the paginator is set to 5', () => {
    let paginator = component.paginator;
    paginator._changePageSize(5)
    expect(component.table._getRenderedRows.length).toBe(5);
  })
});
