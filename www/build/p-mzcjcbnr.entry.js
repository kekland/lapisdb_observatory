import{r as t,h as s}from"./p-b1a34f82.js";class e{constructor(s){t(this,s)}getName(){return this.match.params.name}render(){return s("div",{class:"json-item"},s("span",{class:"id"},this.object.meta.id),s("div",{style:{height:"8px"}}),s("json-display",{data:this.object}))}static get style(){return".json-item{background-color:#212121;border-radius:12px;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:12px}.id{color:#666;font-size:16px;font-weight:500;font-family:monospace}.json{color:#fff}"}}export{e as json_item};