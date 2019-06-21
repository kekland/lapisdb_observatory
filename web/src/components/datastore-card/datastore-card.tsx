import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'datastore-card',
  styleUrl: 'datastore-card.css',
  shadow: true
})
export class DatastoreCard {
  @Prop() name: string;

  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1)
  }
  render() {
    return (
      <div>
        <div class='datastore-card'>
          <span>
            {this.getName()}
          </span>
        </div>
      </div>
    );
  }
}
