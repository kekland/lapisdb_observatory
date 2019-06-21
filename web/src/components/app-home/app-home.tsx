import { Component, h, State } from '@stencil/core';
import axios from 'axios'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State() datastores: string[] = []

  async getData() {
    const response = await axios.get(`http://localhost:${parseInt(location.port) + 1}/stores`)
    this.datastores = response.data
  }

  componentDidLoad() {
    this.getData()
  }
  render() {
    return (
      <div class='app-home'>
        <h1 class='title'>
          Available datastores
        </h1>
        <div class='datastore-cards'>
          {
            this.datastores.map(store => <datastore-card name={store} />)
          }
        </div>
      </div>
    );
  }
}
