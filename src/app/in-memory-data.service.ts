import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const mock_heroes: Hero[] = [
      { id: 1, name: 'IronMan' },
      { id: 2, name: 'Dr. Strange' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Captain America' },
      { id: 5, name: 'Saktimaan' },
      { id: 6, name: 'Thor' },
      { id: 7, name: 'Black Panther' },
      { id: 8, name: 'SpiderMan' },
      { id: 9, name: 'Chota Bheem' }
    ];

    return {mock_heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
