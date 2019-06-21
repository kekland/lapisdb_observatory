import { Datastore } from 'lapisdb'
import { LapisObservatory } from '../../src/index'
import { Human, Dog } from './models';

const bootstrap = async () => {
  const humanStore = new Datastore<Human>('human', './database', () => Human)
  const dogStore = new Datastore<Dog>('dog', './database', () => Dog)

  const observatory = new LapisObservatory([humanStore, dogStore])
  const humans = []
  for(let i = 0; i < 100; i++) {
    humans.push(new Human(i, 'hooman'))
  }
  await humanStore.pushBatched().items(humans).run()
  observatory.listen(3334)
}

bootstrap()