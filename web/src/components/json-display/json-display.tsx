import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'json-display',
  styleUrl: 'json-display.css',
  shadow: true
})
export class JsonDisplay {
  @Prop() index: string;
  @Prop() data: Object
  @Prop() depth: number = 0;

  getKeys(): string[] {
    return Object.keys(this.data)
  }

  getDepthMinusOne(): number {
    if (this.depth == 0) return 0;
    return this.depth - 1
  }

  getPadding(): string {
    return `${this.getDepthMinusOne() * 12.0}px`
  }

  getOpeningBrace(): string {
    return (Array.isArray(this.data))? '[' : '{'
  }

  getClosingBrace(): string {
    return (Array.isArray(this.data))? ']' : '}'
  }

  render() {
    return (
      <div class='json-display' style={{ 'padding-left': this.getPadding() }}>
        {(this.depth != 0) ? 
          <div class='key'>{this.index}: {this.getOpeningBrace()}</div> : 
          <div class='key'>{this.getOpeningBrace()}</div>
        }
        <div style={{ 'padding-left': '12px' }}>
          {
            this.getKeys().map((key) => {
              console.log(key)
              if (typeof this.data[key] === 'object') {
                return <json-display index={key} data={this.data[key]} depth={this.depth + 1} />
              }
              else {
                return <json-key-pair index={key} value={this.data[key]} />
              }
            })
          }
        </div>
        <div class='key'>{this.getClosingBrace()}</div>
      </div>
    );
  }
}
