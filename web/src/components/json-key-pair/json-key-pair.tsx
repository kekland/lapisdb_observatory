import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'json-key-pair',
  styleUrl: 'json-key-pair.css',
  shadow: true
})
export class JsonKeyPair {
  @Prop() index: any;
  @Prop() value: any;

  getValue(): string {
    const type = typeof this.value
    if(type === 'boolean') {
      return (this.value)? 'true' : 'false';
    }
    else if(type === 'function') {
      return 'function';
    }
    else if(type === 'bigint') {
      return this.value;
    }
    else if(type === 'number') {
      return this.value;
    }
    else if(type === 'string') {
      return `"${this.value}"`
    }
  }
  
  getValueClass(): string {
    const type = typeof this.value
    if(type === 'boolean') {
      return 'blue'
    }
    else if(type === 'function') {
      return 'green';
    }
    else if(type === 'bigint') {
      return 'blue';
    }
    else if(type === 'number') {
      return 'blue';
    }
    else if(type === 'string') {
      return 'orange'
    }
  }
  render() {
    return (
      <div class='json-key-pair'>
        <span class='key'>{this.index}: </span>
        <span class={`value ${this.getValueClass()}`}>{this.getValue()}</span>
      </div>
    );
  }
}
