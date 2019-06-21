import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import axios from 'axios'

@Component({
  tag: 'datastore-page',
  styleUrl: 'datastore-page.css',
  shadow: true
})
export class AppHome {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @State() data: any[] = [];

  getName() {
    return this.match.params.name;
  }

  async getData() {
    const response = await axios.get(`http://localhost:${parseInt(location.port) + 1}/${this.getName()}/`)
    this.data = response.data
  }

  componentDidLoad() {
    this.getData()
  }

  render() {
    return (
      <div class='datastore-page'>
        <div class='title'>
          <span id='info'>Datastore</span>
          <span id='name'>/{this.getName()}</span>
        </div>
        <div class='items'>
          {
            this.data.map((data) => <json-item object={data}></json-item>)
          }
        </div>
      </div>
    );
  }
}
