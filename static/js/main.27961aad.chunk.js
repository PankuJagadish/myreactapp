(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){},22:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(15),r=t.n(s),l=(t(21),t(9)),o=(t(22),t(8)),i=t(0);function d(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)(o.b,{className:"nav-link",to:"/",children:["Home ",Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"custom-control custom-switch mx-3",children:[Object(i.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customSwitch1"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",onClick:e.toggleMode,style:e.getStyle,children:e.modeName})]}),Object(i.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(i.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})}function b(e){var a=Object(c.useState)(""),t=Object(l.a)(a,2),n=t[0],s=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:e.heading}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"myBox",value:n,placeholder:"Enter your text here",rows:"8",onChange:function(e){s(e.target.value)}})}),Object(i.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){s(n.toUpperCase())},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){s(n.toLowerCase())},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){s("")},children:"Clear text"}),Object(i.jsx)("button",{className:"btn btn-success mx-3",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Your Text Summary:"}),Object(i.jsxs)("p",{children:["No of Words are:",n.split(" ").filter((function(e){return 0!==e.length})).length," ","and no of characters are:",n.length]})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h3",{children:"PREVIEW"}),Object(i.jsx)("p",{children:n.length>0?n:"enter something in the textbox to preview"})]})]})}function h(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",id:"headingOne",children:Object(i.jsx)("h2",{className:"mb-0",children:Object(i.jsx)("button",{className:"btn btn-link btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Collapsible Group Item #1"})})}),Object(i.jsx)("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"card-body",children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."})})]}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",id:"headingTwo",children:Object(i.jsx)("h2",{className:"mb-0",children:Object(i.jsx)("button",{className:"btn btn-link btn-block text-left collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Collapsible Group Item #2"})})}),Object(i.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"card-body",children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."})})]}),Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",id:"headingThree",children:Object(i.jsx)("h2",{className:"mb-0",children:Object(i.jsx)("button",{className:"btn btn-link btn-block text-left collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Collapsible Group Item #3"})})}),Object(i.jsx)("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"card-body",children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."})})]})]})})}d.defaultProps={title:"hai",aboutText:"whatsapp"};var u=t(2);var m=function(){var e=Object(c.useState)("light"),a=Object(l.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)("Dark Mode"),r=Object(l.a)(s,2),m=r[0],j=r[1],p=Object(c.useState)({color:"black"}),x=Object(l.a)(p,2),g=x[0],O=x[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{basename:"/myreactapp",children:[Object(i.jsx)(d,{title:"TextUtils",aboutText:"about",mode:t,toggleMode:function(){"light"===t?(j("Light Mode"),n("dark"),O({color:"white"})):(n("light"),j("Dark Mode"),O({color:"black"}))},modeName:m,getStyle:g}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"/about",children:Object(i.jsx)(h,{})}),Object(i.jsx)(u.a,{path:"/",children:Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(b,{heading:"Enter Yout Text here..."})})})]})]})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),j()}},[[32,1,2]]]);
//# sourceMappingURL=main.27961aad.chunk.js.map