import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  getPort(): string {
    return location.port
  }
  render() {
    return (
      <div>
        <header>
          <h1>LapisDB Observatory on port {this.getPort()}</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/datastore/:name' component='datastore-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>

      </div>
    );
  }
}
