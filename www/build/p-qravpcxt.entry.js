import{r as t,h as s}from"./p-b1a34f82.js";import"./p-4bed3927.js";import{A as r}from"./p-9f198786.js";class a{constructor(s){t(this,s)}getName(){return this.name.charAt(0).toUpperCase()+this.name.slice(1)}onClick(){this.history.push(`/datastore/${this.name}`)}render(){return s("div",null,s("div",{class:"datastore-card",onClick:()=>this.onClick()},s("span",null,this.getName())))}static get style(){return".datastore-card{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;width:200px;height:200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end;border-radius:12px;background-color:#343434;color:#fff;padding:24px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:20px;font-weight:500;margin:12px}.datastore-card:hover{background-color:#454545;-webkit-transform:scale(1.035);transform:scale(1.035)}.open{color:#fff;text-decoration:none}"}}r.injectProps(a,["history","location"]);export{a as datastore_card};