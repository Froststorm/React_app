(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={btn:"Mybutton_btn__1dVNc"}},,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(14),n(3)),l=n(4),u=n(7),s=n(5),m=n(8),h=n(6),p=n.n(h),v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={counter:0,text:""},n.handleClick=function(){n.setState({counter:n.state.counter+1})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.warn("Did mount"),fetch("http://localhost:3000/").then((function(t){return t.text()})).then((function(e){t.setState({text:e})}))}},{key:"render",value:function(){var t=this.props,e=t.buttonTitle,n=t.valueName;return o.a.createElement("div",null,o.a.createElement("button",{className:p.a.btn,onClick:this.handleClick,style:{transform:"rotate(".concat(this.state.counter,"deg)")}},e),o.a.createElement("p",null,"Current value: ",this.state.counter," ",n),o.a.createElement("div",null))}}]),e}(o.a.Component);n(15);var d=function(){return o.a.createElement("div",null,o.a.createElement(v,{buttonTitle:"click me",valueName:"click"}),o.a.createElement(v,{buttonTitle:"my super button click",valueName:"super click"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,{buttonTitle:"Submit",valueName:"clicks"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.824c27a5.chunk.js.map