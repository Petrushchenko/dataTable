(function(e){function t(t){for(var a,s,i=t[0],u=t[1],l=t[2],d=0,m=[];d<i.length;d++)s=i[d],r[s]&&m.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dataTable/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"1b12":function(e,t,n){"use strict";var a=n("337e"),r=n.n(a);r.a},"280a":function(e,t,n){},"337e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"app"},u=i,l=(n("034f"),n("2877")),c=Object(l["a"])(u,o,s,!1,null,null,null),d=c.exports,m=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"btn",attrs:{to:"/edit"}},[e._v("Add user")]),n("Table")],1)},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("caption",[e._v('To edit any data in this table click on cell, type correct text and then press "enter" key on your keyboard')]),n("thead",[n("tr",[e._l(e.labels,function(t,a){return n("th",{key:a},[e._v(e._s(t))])}),n("th")],2)]),n("tbody",e._l(e.users,function(t,a){return n("tr",{key:a+t.name+t.surname+t.phone+t.email},[e._l(t,function(r,o){return n("td",{key:t.name+a+o,attrs:{contenteditable:"true"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.editField(t,a,o))}}},[e._v(e._s(r))])}),n("td",[n("button",{attrs:{type:"button"},on:{click:function(t){return e.deleteUser(a)}}},[e._v("DELETE")])])],2)}),0)])},h=[],b={data:function(){return{labels:["name","surname","phone","email"],newText:""}},computed:{users:function(){return this.data=this.$store.getters.getUsers,this.saveUsers(),this.data}},created:function(){if(localStorage.getItem("users")){var e=JSON.parse(localStorage.getItem("users"));this.$store.dispatch("loadData",e)}},methods:{saveUsers:function(){var e=JSON.stringify(this.data);localStorage.setItem("users",e)},editField:function(e,t,n){this.newText=e.target.innerText;var a=this.newText;this.$store.dispatch("editUser",{index:t,fieldName:n,text:a})},deleteUser:function(e){this.$store.dispatch("deleteUser",e)}}},_=b,g=(n("1b12"),Object(l["a"])(_,v,h,!1,null,"fd4c34b4",null)),y=g.exports,x={name:"Data",components:{Table:y}},D=x,E=(n("c8b0"),Object(l["a"])(D,f,p,!1,null,"0e1cc012",null)),w=E.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("Edition")]),n("Table"),n("Form")],1)},j=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{novalidate:""}},[n("h3",[e._v("To add user fill all fields ")]),n("div",[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",{attrs:{for:"surname"}},[e._v("Surname")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],attrs:{type:"text",name:"surname",id:"surname"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}}),n("label",{attrs:{for:"phone"}},[e._v("Phone")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",name:"phone",id:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("label",{attrs:{for:"email"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("button",{on:{click:function(t){return t.preventDefault(),e.addUser(e.name,e.surname,e.phone,e.email)}}},[e._v(" add user")]),n("h3",[e._v("Past on this field your json data and click the button")]),n("div",{staticClass:"textarea-wrapper"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonData,expression:"jsonData"}],domProps:{value:e.jsonData},on:{input:function(t){t.target.composing||(e.jsonData=t.target.value)}}}),n("button",{on:{click:function(t){return t.preventDefault(),e.addUsers(t)}}},[e._v("Load JSON data")])])])},O=[],S={data:function(){return{name:"",surname:"",phone:"",email:"",jsonData:""}},methods:{addUser:function(e,t,n,a){""!==e&&""!==t&&""!==n&&""!==a&&(this.$store.dispatch("addUser",{name:e,surname:t,phone:n,email:a}),this.name="",this.surname="",this.phone="",this.email="")},addUsers:function(){var e=JSON.parse(this.jsonData);this.$store.dispatch("loadJson",e),this.jsonData=""}}},T=S,P=(n("7dca"),Object(l["a"])(T,k,O,!1,null,"055a9f01",null)),N=P.exports,$={name:"edit",components:{Table:y,Form:N}},A=$,J=Object(l["a"])(A,U,j,!1,null,null,null),R=J.exports;a["a"].use(m["a"]);var L=new m["a"]({routes:[{path:"/",component:w},{path:"/edit",component:R}]}),M=L;n("ac6a");a["a"].use(r["a"]);var I=new r["a"].Store({state:{users:[{name:"Bob",surname:"Marley",phone:"0981111111",email:"bm@a.b"},{name:"Mikle",surname:"Jackson",phone:"0982222222",email:"mj@a.b"}]},actions:{addUser:function(e,t){var n=e.commit;n("ADD_USER",t)},loadData:function(e,t){var n=e.commit;n("LOAD_DATA",t)},editUser:function(e,t){var n=e.commit,a=e.state,r=t.index,o=t.fieldName,s=t.text,i=a.users.filter(function(e,t){return t===r})[0];i[o]=s,n("EDIT_USER",{index:r,data:i})},deleteUser:function(e,t){var n=e.commit;n("DELETE_USER",t)},loadJson:function(e,t){var n=e.commit;t.forEach(function(e){return n("ADD_USER",e)})}},mutations:{ADD_USER:function(e,t){e.users.push(t)},LOAD_DATA:function(e,t){e.users=t},EDIT_USER:function(e,t){e.users.splice(t.index,1,t.data)},DELETE_USER:function(e,t){e.users=e.users.filter(function(e,n){return n!==t})}},getters:{getUsers:function(e){return e.users}}}),F=I;a["a"].config.productionTip=!1,new a["a"]({router:M,store:F,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,n){},"7dca":function(e,t,n){"use strict";var a=n("f55c"),r=n.n(a);r.a},c8b0:function(e,t,n){"use strict";var a=n("280a"),r=n.n(a);r.a},f55c:function(e,t,n){}});
//# sourceMappingURL=app.0d7fb517.js.map