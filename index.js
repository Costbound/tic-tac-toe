var d=Object.defineProperty;var u=(c,s,t)=>s in c?d(c,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[s]=t;var a=(c,s,t)=>(u(c,typeof s!="symbol"?s+"":s,t),t);import{j as e,R as m,c as h}from"./assets/vendor-H9Qj9e3E.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();const i="/dictionary-web-app/assets/sprite-CKhX7d7e.svg";function f(c){return e.jsxs("div",{className:"menu-container",children:[e.jsx(x,{}),e.jsx(p,{isXSelected:c.isXSelected,onClick:s=>{c.onClick(s)}}),e.jsx(_,{})]})}function x(){return e.jsx("div",{className:"logo-container",children:e.jsx("svg",{width:"72",height:"32",children:e.jsx("use",{href:`${i}#logo`})})})}function p(c){const s=c.isXSelected?" mark-selector__btn_selected":"",t=c.isXSelected?"":" mark-selector__btn_selected";return console.log(s,t),e.jsxs("div",{className:"mark-selector__container",children:[e.jsx("h2",{className:"mark-selector__title",children:"pick players 1's mark"}),e.jsx("input",{type:"checkbox",className:"mark-selector__checkbox visually-hidden",id:"mark-selector"}),e.jsxs("label",{className:"mark-selector__label",htmlFor:"mark-selector",children:[e.jsx("div",{className:"mark-selector__selected-div"}),e.jsx("svg",{className:"mark-selector__x-icon",width:"32",height:"32",children:e.jsx("use",{href:`${i}#icon-x`})}),e.jsx("svg",{className:"mark-selector__o-icon",width:"32",height:"32",children:e.jsx("use",{href:`${i}#icon-o`})})]}),e.jsx("p",{className:"mark-selector__notice",children:"remember: x goes firt"})]})}function _(){return e.jsxs("div",{className:"enemy-selector__container",children:[e.jsx("button",{className:"enemy-selector__cpu-btn",type:"button",children:"new game (vs cpu)"}),e.jsx("button",{className:"enemy-selector__multiplayer-btn",type:"button",children:"new game (vs player)"})]})}class g extends m.Component{constructor(t){super(t);a(this,"state");this.state={isXSelected:!0,isStarted:!1,isMultiplayer:!1}}handleClick(t){console.log(t),t.selectedMark==="x"?this.setState({isXSelected:!0}):t.selectedMark==="o"&&this.setState({isXSelected:!1}),console.log(this.state)}render(){return this.state.isStarted?null:e.jsx(f,{isXSelected:this.state.isXSelected,onClick:t=>{this.handleClick(t)}})}}const j=h.createRoot(document.querySelector(".game"));j.render(e.jsx(g,{}));
//# sourceMappingURL=index.js.map
