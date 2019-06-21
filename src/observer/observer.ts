import { Datastore } from 'lapisdb'
import express from 'express'
import pretty from 'express-prettify'
import cors from 'cors'
import history from 'connect-history-api-fallback';

export class LapisObservatory {
  datastores: Datastore<any>[];
  server: express.Application;
  webPageServer: express.Application;

  constructor(datastores: Datastore<any>[]) {
    this.datastores = datastores
  }

  async listen(port: number) {
    console.log(`Starting LapisObservatory on port ${port}`)
    this.server = express()

    this.server.use(pretty())
    this.server.use(cors())

    for (const datastore of this.datastores) {
      const name = datastore.name
      console.log(`[Datastore ${name}] listening on route /${name} and /${name}/:id`)

      this.server.get(`/${name}`, async (req, res) => {
        const data = await datastore.get().run()
        res.json(data)
      })
      
      this.server.get(`/${name}/:id`, async (req, res) => {
        const data = await datastore.get().where(v => v.meta.id === req.params.id).run()
        res.json(data)
      })

      this.server.get(`/stores`, async (req, res) => {
        res.json(this.datastores.map(d => d.name))
      })
    }
    
    this.server.listen(port + 1, () => {
      console.log(`LapisObservatory API started on port ${port + 1}`)
    })

    this.webPageServer = express()
    const staticServer = express.static('D:/projects/current/_lapis/lapisdb_viewer/www')
    
    this.webPageServer.use(staticServer)
    this.webPageServer.use(history({index: 'D:/projects/current/_lapis/lapisdb_viewer/www/index.html'}))
    this.webPageServer.use(staticServer)

    this.webPageServer.listen(port, () => {
      console.log(`LapisObservatory web page started on port ${port}`)
    })
  }
}