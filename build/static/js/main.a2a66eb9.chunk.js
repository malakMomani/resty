(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(8),o=n.n(s),c=(n(15),n(2)),l=n(3),i=n(5),h=n(4),d=(n(16),n(17),n(0)),u=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{id:"headerTitle",children:"RESTy"})})},j=(n(19),function(){return Object(d.jsx)("footer",{id:"footer",children:Object(d.jsx)("h5",{className:"footerText",children:"\xa9 2018 Code Fellows / Malak Al-Momani"})})}),b=n(7),p=n.n(b),O=n(9),x=(n(21),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleUrlChange=function(e){var t=e.target.value;a.setState({url:t})},a.handleMethodChange=function(e){var t=e.target.value;a.setState({method:t})},a.handleBodyChange=function(e){var t=e.target.value;a.setState({body:t})},a.handleBtnSubmit=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,r,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"POST"===a.state.method){e.next=8;break}return console.log("--------get--------"),e.next=5,fetch(a.state.url,{method:a.state.method,headers:{"Content-Type":"application/json"},mode:"no-cors"});case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,fetch(a.state.url,{method:a.state.method,headers:{"Content-Type":"application/json"},mode:"no-cors",body:JSON.stringify(a.state.body)});case 10:n=e.sent;case 11:return console.log("raw >>>>>>>>>>>>>>>>>>>>: ",n),e.next=14,n.json();case 14:r=e.sent,console.log("data >>>>>>>>>>>>>>> : ",r),s=r.count,o=r.results,a.props.handler(o,s);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={method:"GET",url:"",body:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{id:"formDiv",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("label",{children:["URL:",Object(d.jsx)("input",{type:"text",name:"url",id:"url",onChange:this.handleUrlChange})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{id:"radioBtns",children:[Object(d.jsxs)("label",{htmlFor:"get",children:[Object(d.jsx)("input",{type:"radio",id:"get",name:"rest",value:"get",onChange:this.handleMethodChange,checked:"checked"}),"GET"]}),Object(d.jsxs)("label",{htmlFor:"post",children:[Object(d.jsx)("input",{type:"radio",id:"post",name:"rest",value:"post",onChange:this.handleMethodChange}),"POST"]}),Object(d.jsxs)("label",{htmlFor:"put",children:[Object(d.jsx)("input",{type:"radio",id:"put",name:"rest",value:"put",onChange:this.handleMethodChange}),"PUT"]}),Object(d.jsxs)("label",{htmlFor:"delete",children:[Object(d.jsx)("input",{type:"radio",id:"delete",name:"rest",value:"delete",onChange:this.handleMethodChange}),"DELETE"]})]}),Object(d.jsxs)("label",{children:[" body: ",Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{id:"body",onChange:this.handleBodyChange,defaultValue:"Enter your post request body here"})," "]}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"button",value:"GO!",onClick:this.handleBtnSubmit})]})})})}}]),n}(r.a.Component)),f=n(10),m=n.n(f),g=(n(22),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("props ---------",this.props),Object(d.jsx)("section",{id:"result",children:Object(d.jsx)(m.a,{src:this.props.results})})}}]),n}(r.a.Component)),v=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleForm=function(e,t){a.setState({results:e,count:t})},a.state={results:[],count:0},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(x,{handler:this.handleForm}),Object(d.jsx)(g,{results:this.state.results}),Object(d.jsx)(j,{})]})}}]),n}(r.a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a2a66eb9.chunk.js.map