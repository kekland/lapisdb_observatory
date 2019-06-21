import { Datastore, Model } from 'lapisdb'

export class Human extends Model<Human> {
  age: number;
  name: string;

  constructor(age: number, name: string) {
    super()
    this.age = age
    this.name = name
  }
}

export class Dog extends Model<Dog> {
  name: string;
  breed: string;
  age: number;
}