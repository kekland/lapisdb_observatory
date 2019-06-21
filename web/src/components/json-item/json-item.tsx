import { Component, h, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'json-item',
  styleUrl: 'json-item.css',
  shadow: true
})
export class JsonItem {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @Prop() object: Object = {
    a: 'b',
    b: ['1', '2', '3'],
    c: {
      d: '123',
      e: '12312312',
      f: 90012,
      g: true
    },
    d: () => {},
  }

  getName() {
    return this.match.params.name;
  }
  render() {
    return (
      <div class='json-item'>
        <span class='id'>HKLnlkmlasdKL125a</span>
        <div style={{height: "8px"}} />
        <json-display data={this.object} />
      </div>
    );
  }
}
