import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class='app-home'>
        <h1 class='title'>
          Available datastores
        </h1>
        <div class='datastore-cards'>
          <datastore-card name="humans"></datastore-card>
          <datastore-card name="dogs"></datastore-card>
          <datastore-card name="cats"></datastore-card>
          <datastore-card name="accounts"></datastore-card>
          <datastore-card name="cargo"></datastore-card>
          <datastore-card name="vehicles"></datastore-card>
        </div>
      </div>
    );
  }
}
