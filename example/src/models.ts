import { Datastore, Model } from 'lapisdb'

export class Human extends Model<Human> {
  age: number;
  name: string;
}

export class Dog extends Model<Dog> {
  name: string;
  breed: string;
  age: number;
}