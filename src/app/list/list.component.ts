import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  static readonly SelectedKey = 'selectedProviders';
  static readonly UnselectedKey = 'unselectedProviders';

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {}

  ngOnInit() {
    const selectedProviders = JSON.parse(
      localStorage.getItem(ListComponent.SelectedKey)
    );
    const unselectedProviders = JSON.parse(
      localStorage.getItem(ListComponent.UnselectedKey)
    );
    if(selectedProviders && unselectedProviders){
      this.selectedProviders = selectedProviders;
      this.unselectedProviders = unselectedProviders;
    } else {
      localStorage.removeItem(ListComponent.SelectedKey);
      localStorage.removeItem(ListComponent.UnselectedKey);
    }
  }

  onItemClicked(item: any): void {
    const unselectedProviderIndex = this.unselectedProviders.indexOf(item);
    if(unselectedProviderIndex > -1){
      this.unselectedProviders.splice(unselectedProviderIndex, 1);
      this.selectedProviders.push(item)
    } else {
      const selectedProviderIndex = this.selectedProviders.indexOf(item);
      if(selectedProviderIndex > -1){
        this.selectedProviders.splice(selectedProviderIndex, 1);
        this.unselectedProviders.push(item)
      }
    }

    this.saveLists();
  }

  private saveLists(): void {
    localStorage.setItem(
      ListComponent.SelectedKey,
      JSON.stringify(this.selectedProviders)
    );
    localStorage.setItem(
      ListComponent.UnselectedKey,
      JSON.stringify(this.unselectedProviders)
    );
  }

}
