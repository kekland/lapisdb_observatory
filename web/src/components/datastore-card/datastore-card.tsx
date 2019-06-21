import { Component, h, Prop } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'datastore-card',
  styleUrl: 'datastore-card.css',
  shadow: true
})
export class DatastoreCard {
  @Prop() name: string;
  @Prop() history: RouterHistory;

  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }
  onClick() {
    console.log(this.name, this.history)
    this.history.push(`/datastore/${this.name}`)
  }
  render() {
    return (
      <div>
        <div class='datastore-card' onClick={() => this.onClick()}>
          <span>
            {this.getName()}
          </span>
        </div>
      </div>
    );
  }
}

injectHistory(DatastoreCard)