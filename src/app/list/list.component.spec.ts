import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let item: {};

  beforeEach(() => {
    component = new ListComponent();
    item = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    }

    spyOn(localStorage, 'setItem')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });

    it('should be able to favorite', () => {
      component.onItemClicked(item);
      expect(component.selectedProviders.length).toEqual(1);
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });

    it('should be able to be unfavorited', () => {
      // click once to favorite
      component.onItemClicked(item);
      expect(component.selectedProviders.length).toEqual(1);
      // click again to unfavorite
      component.onItemClicked(item);
      expect(component.selectedProviders.length).toEqual(0);
    });

    it('should save the list', () => {
      component.onItemClicked(item);
      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
  });
});
