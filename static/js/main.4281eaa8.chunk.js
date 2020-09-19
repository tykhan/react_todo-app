(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(7),o=n.n(l),r=(n(14),n(1)),u=n(8),i=n(2),m=(n(15),n(3)),s=n.n(m),d=function(e){var t=e.item,n=e.handleStatus,l=e.setTodos,o=Object(a.useState)(!1),u=Object(i.a)(o,2),m=u[0],d=u[1],f=Object(a.useState)(t.title),p=Object(i.a)(f,2),b=p[0],E=p[1],g=function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))},O=function(e){e||g(t.id),l((function(n){return n.map((function(n){return n.id===t.id?Object(r.a)(Object(r.a)({},n),{},{title:e}):n}))})),d(!1)};return c.a.createElement("li",{className:s()({completed:t.completed,editing:m})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return n(t.id)}}),c.a.createElement("label",{onDoubleClick:function(){return d(!0)}},t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return g(t.id)}})),m&&c.a.createElement("input",{autoFocus:!0,value:b,type:"text",className:"edit",onChange:function(e){return E(e.target.value)},onKeyDown:function(e){return function(e){var n=e.target.value,a=e.key;if("Escape"===a)return E(t.title),void d(!1);"Enter"===a&&(O(n),d(!1))}(e)},onBlur:function(e){return O(e.target.value)}}))},f=function(e){var t=e.items,n=e.setTodos,a=function(e){n((function(t){return t.map((function(t){return e!==t.id?Object(r.a)({},t):Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed})}))}))};return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(d,{item:e,key:e.id,handleStatus:a,setTodos:n})})))},p=(n(16),function(e){var t=e.handleFilter,n=e.filter,a=e.FILTERS;return c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return t(a.all)},className:s()({selected:n===a.all})},"All")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return t(a.active)},className:s()({selected:n===a.active})},"Active")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return t(a.completed)},className:s()({selected:n===a.completed})},"Completed")))}),b={all:"All",active:"Active",completed:"Completed"};var E=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),m=Object(i.a)(o,2),s=m[0],d=m[1],E=Object(a.useState)(!1),g=Object(i.a)(E,2),O=g[0],h=g[1],j=Object(a.useState)(b.all),v=Object(i.a)(j,2),N=v[0],S=v[1];Object(a.useEffect)((function(){localStorage.todos&&l(JSON.parse(localStorage.getItem("todos")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var k=Object(a.useMemo)((function(){return n.filter((function(e){switch(N){case b.completed:return e.completed;case b.active:return!e.completed;default:return e}}))}),[N,n]),y=n.filter((function(e){return e.completed})).length===n.length,C=n.filter((function(e){return!e.completed})).length===n.length,w=function(e){e.preventDefault(),s&&(l((function(e){return[].concat(Object(u.a)(e),[{id:+new Date,title:s.trim(),completed:!1}])})),d(""))};return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){return w(e)}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:s,onChange:function(e){return d(e.target.value)},onBlur:function(e){return w(e)}}))),n.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:y,onChange:function(){h(!O),l(y?n.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})})):C?n.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})})):n.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!O})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(f,{items:k,setTodos:l})),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},"".concat(n.filter((function(e){return!e.completed})).length," todos left")),c.a.createElement(p,{handleFilter:S,filter:N,FILTERS:b}),n.some((function(e){return e.completed}))&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){l((function(e){return e.filter((function(e){return!e.completed}))}))}},"Clear completed"))))};o.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4281eaa8.chunk.js.map