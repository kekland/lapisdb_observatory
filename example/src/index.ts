import { Datastore } from 'lapisdb'
import { LapisObservatory } from '../../src/index'
import { Human, Dog } from './models';

const bootstrap = async () => {
  const humanStore = new Datastore<Human>('human', './database', () => Human)
  const dogStore = new Datastore<Dog>('dog', './database', () => Dog)

  const observatory = new LapisObservatory([humanStore, dogStore])
  observatory.listen(3334)
}

bootstrap()