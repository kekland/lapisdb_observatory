import { Component, h, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'datastore-page',
  styleUrl: 'datastore-page.css',
  shadow: true
})
export class AppHome {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  getName() {
    return this.match.params.name;
  }
  render() {
    return (
      <div class='datastore-page'>
        <div class='title'>
          <span id='info'>Datastore</span>
          <span id='name'>/{this.getName()}</span>
        </div>
        <div class='datastore'>
          
        </div>
      </div>
    );
  }
}
