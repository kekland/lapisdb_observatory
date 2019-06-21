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
  @Prop() object: Object;

  getName() {
    return this.match.params.name;
  }
  render() {
    return (
      <div class='json-item'>
        <span class='id'>{(this.object as any).meta.id}</span>
        <div style={{height: "8px"}} />
        <json-display data={this.object} />
      </div>
    );
  }
}
