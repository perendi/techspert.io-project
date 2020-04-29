import { MatInputModule } from '@angular/material/input';
import { MockService } from './../services/mockservice';
import { WeatherService } from './../services/weather.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { WeatherTableComponent } from './weather-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';

describe('WeatherTableComponent', () => {
  let component: WeatherTableComponent;
  let fixture: ComponentFixture<WeatherTableComponent>;
  let event;
  let inputElement;

  let mockService;

  //Specify mock data with 19 identical and 1 unique entries
  let mockData = [
    {name: "test", temperature: 3, description: "test"}, 
    {name: "unique", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
    {name: "test", temperature: 3, description: "test"}, 
  ];

  beforeEach(() => {
    mockService = new MockService();

    TestBed.configureTestingModule({
      declarations: [WeatherTableComponent],
      imports: [MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
    });

    TestBed.overrideComponent(WeatherTableComponent, {
      set: {
        providers: [
          { provide: WeatherService, useClass: MockService }
        ]
      }
    }); 
    fixture = TestBed.createComponent(WeatherTableComponent);
    component = fixture.componentInstance;

    component.dataSource = new MatTableDataSource(mockData);
    component.dataSource.paginator = component.paginator;
    component.dataSource.sort = component.sort;
    //Specifying the column for the filter
    component.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.name.toLowerCase().includes(filter) ;
     };

    let debugElement = fixture.debugElement;
    event = new KeyboardEvent('keyup', {
      bubbles : true, cancelable : true, shiftKey : false
    });
    inputElement = debugElement.query(By.css('#search')).nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  // Paginator tests
  it('should show 10 entries per page on init', () => {
    expect(component.dataSource._pageData(component.dataSource.data).length).toBe(10);
  })

  it('should disable the previous button on init', () => {
    expect(component.paginator.hasPreviousPage()).toBeFalse();
  })

  it('should show items 11-20 on the second page', () => {
    component.dataSource.paginator.nextPage();
    fixture.detectChanges();
    let rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');
    expect(rangeElement.innerText.trim()).toBe('11 – 20 of 20');
  })

  it('should show 5 entries per page when the paginator is set to 5', () => {
    component.dataSource.paginator._changePageSize(5);
    expect(component.dataSource._pageData(component.dataSource.data).length).toBe(5);
  })

  it('should show items 6-10 on the second page when set to 5', () => {
    component.dataSource.paginator._changePageSize(5);
    component.dataSource.paginator.nextPage();
    fixture.detectChanges();
    let rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');
    expect(rangeElement.innerText.trim()).toBe('6 – 10 of 20');
  })

  it('should show items 11-15 on the third page when set to 5', () => {
    component.dataSource.paginator._changePageSize(5);
    component.dataSource.paginator.nextPage();
    component.dataSource.paginator.nextPage();
    fixture.detectChanges();
    let rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');
    expect(rangeElement.innerText.trim()).toBe('11 – 15 of 20');
  })

  it('should show items 16-20 on the last page when set to 5', () => {
    component.dataSource.paginator._changePageSize(5);
    component.dataSource.paginator.nextPage();
    component.dataSource.paginator.nextPage();
    component.dataSource.paginator.nextPage();
    fixture.detectChanges();
    let rangeElement = fixture.nativeElement.querySelector('.mat-paginator-range-label');
    expect(rangeElement.innerText.trim()).toBe('16 – 20 of 20');
  })

  it('should disable the next button on the last page when set to 5', () => {
    component.dataSource.paginator._changePageSize(5);
    component.dataSource.paginator.nextPage();
    component.dataSource.paginator.nextPage();
    component.dataSource.paginator.nextPage();
    fixture.detectChanges();
    expect(component.dataSource.paginator.hasNextPage()).toBeFalse();
  })

  it('should show 20 entries per page when the paginator is set to 20', () => {
    component.dataSource.paginator._changePageSize(20);
    expect(component.dataSource._pageData(component.dataSource.data).length).toBe(20);
  })
  //Paginator tests end

  //Filter tests
  it('should show 1 entry when \'u\' is typed into the search bar', () => {
    inputElement.value = 'u';
    inputElement.dispatchEvent(event);

    fixture.detectChanges();
    expect(component.dataSource.filteredData.length).toBe(1);
  })

  it('should show 0 entry when \'g\' is typed into the search bar', () => {
    inputElement.value = 'g';
    inputElement.dispatchEvent(event);
   
    fixture.detectChanges();
    expect(component.dataSource.filteredData.length).toBe(0);
  })

  it('should show 0 entry when \'4\' is typed into the search bar', () => {
    inputElement.value = '4';
    inputElement.dispatchEvent(event);
   
    fixture.detectChanges();
    expect(component.dataSource.filteredData.length).toBe(0);
  })

  it('should show 20 entries when \'e\' is typed into the search bar', () => {
    inputElement.value = 'e';
    inputElement.dispatchEvent(event);
   
    fixture.detectChanges();
    expect(component.dataSource.filteredData.length).toBe(20);
  })

  it('should show 19 entries when \'tes\' is typed into the search bar', () => {
    inputElement.value = 'tes';
    inputElement.dispatchEvent(event);
   
    fixture.detectChanges();
    expect(component.dataSource.filteredData.length).toBe(19);
  })
  
});
