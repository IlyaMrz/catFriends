(this.webpackJsonprobofr=this.webpackJsonprobofr||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n.n(c),o=n(3),i=n.n(o),a=n(6),h=n(2),u=n(15),d=n(16),b=(n(28),n(4)),l=n(5),j=n(8),O=n(7),p=n(17);var f=function(e){var t=e.name,n=e.email,s=e.id,o=e.city,i=Object(c.useState)(4*s),a=Object(p.a)(i,2),h=a[0],u=a[1];return Object(r.jsxs)("div",{className:"bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-3",children:[Object(r.jsx)("img",{alt:"123",src:"https://robohash.org/set_set4/".concat(h,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n}),Object(r.jsxs)("p",{children:["City: ",o]})]}),Object(r.jsxs)("p",{children:["avatar id - ",h]}),Object(r.jsx)("button",{onClick:function(){return u(h+1)},children:"increase"}),Object(r.jsx)("button",{onClick:function(){return u(h-1)},children:"decrease"})]})},g=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(f,{id:t[n].id,name:t[n].name,email:t[n].email,city:t[n].address.city},t[n].id)}));return Object(r.jsx)("div",{children:n})},v=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue ",type:"search",placeholder:"search cats",onChange:t})})},x=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"700px"},children:e.children})},y=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oops. Something went wrong.."}):this.props.children}}]),n}(c.Component),m="CHANGE_SEARCH_FIELD",C="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",E="REQUEST_ROBOTS_FAILED",S=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.onSearchChange,c=e.robots,s=e.isPending,o=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?Object(r.jsx)("h1",{children:"loading"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"Cat Friends~!"}),Object(r.jsx)(v,{searchChange:n}),Object(r.jsx)(x,{children:Object(r.jsx)(y,{children:Object(r.jsx)(g,{robots:o})})})]})}}]),n}(c.Component),w=Object(a.b)((function(e){return{searchfield:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:C}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:E,payload:t})}))}))}}}))(S),k={searchfield:""},_={isPending:!1,robots:[],error:""},P=(n(29),Object(u.createLogger)()),N=Object(h.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!1});case E:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),q=Object(h.d)(N,Object(h.a)(d.a,P));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(a.a,{store:q,children:Object(r.jsx)(w,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d521c979.chunk.js.map