(this["webpackJsonpuser-details-app"]=this["webpackJsonpuser-details-app"]||[]).push([[0],{294:function(e,t){},424:function(e,t,r){},444:function(e,t,r){"use strict";r.r(t);var a=r(76),n=r.n(a),s=r(0),c=r(25),l=r(242),i=r(85),j=r(243),o=r(448),u=r(452),d=r(6),h=function(e){var t=e.title,r=(e.width,e.extra),a=e.fieldName,n=e.placeHolder,s=e.Suffix;e.Style;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:{marginBottom:"2px"},children:Object(d.jsx)("b",{children:t})}),Object(d.jsx)(o.a.Item,{extra:r,name:a,rules:[{required:!0,message:"Please input ".concat(t,"!")}],children:Object(d.jsx)(u.a,{autoComplete:"off",placeholder:n,suffix:s})})]})})},b=r(449),p=r(453),x=r(455),O=r(86),m=r(43),f=r(134),g=r(451),y=(r(424),g.a.Option),v=Object(a.connect)((function(e){return{user:e.user}}))((function(e){var t=Object(s.useState)(!1),r=Object(j.a)(t,2),a=r[0],n=r[1];console.log(e);var c=e.user.colleges,v=void 0===c?[]:c;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"userDetails",children:Object(d.jsxs)(o.a,{onFinish:function(t){var r=e.user.allUser,a=e.dispatch,n=e.history,s=Object(i.a)(Object(i.a)({},t),{},{"date-picker":t.dateOfBirth.format("YYYY-MM-DD")}),c=Object(l.a)(r);c.push(s),a({type:"user/setState",payload:{allUser:c}}).then((function(){n.push("/user-details")}))},children:[Object(d.jsx)(h,{title:"Full Name:",fieldName:"name"}),Object(d.jsx)(h,{title:"Address:",fieldName:"address"}),Object(d.jsxs)(u.a.Group,{compact:!0,children:[Object(d.jsx)(o.a.Item,{style:{width:"46%"},label:Object(d.jsx)("b",{children:"College"}),name:"collegeName",rules:[{required:!0,message:"please select College"}],children:Object(d.jsx)(g.a,{showSearch:!0,placeholder:"Select a college",optionFilterProp:"children",onSearch:function(t){console.log("hello",t),(0,e.dispatch)({type:"user/getUserCollege",payload:{searchKey:t}})},children:v.map((function(e){return Object(d.jsx)(y,{value:e.name,children:e.name},e.name)}))})}),Object(d.jsx)(o.a.Item,{style:{marginLeft:"8%",width:"46%"},name:"dateOfBirth",label:Object(d.jsx)("b",{children:"Date of Birth"}),rules:[{required:!0,message:"please enter Date of Birth"}],children:Object(d.jsx)(b.a,{style:{width:"100%"}})})]}),Object(d.jsx)(o.a.Item,{name:"Gender",label:Object(d.jsx)("b",{children:"Gender"}),rules:[{required:!0,message:"Please enter gender!"}],children:Object(d.jsxs)(p.a.Group,{children:[Object(d.jsx)(p.a,{value:"male",children:"Male"}),Object(d.jsx)(p.a,{value:"female",children:"Female"}),Object(d.jsx)(p.a,{value:"other",children:"Other"})]})}),Object(d.jsx)(o.a.Item,{name:"Hobbies",label:Object(d.jsx)("b",{children:"Hobbies"}),rules:[{required:!0,message:"Please enter Hobbies!"}],children:Object(d.jsx)(x.a.Group,{children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(m.a,{span:8,children:Object(d.jsx)(x.a,{value:"Reading",style:{lineHeight:"32px"},children:"Reading"})}),Object(d.jsx)(m.a,{span:8,children:Object(d.jsx)(x.a,{value:"Gaming",style:{lineHeight:"32px"},children:"Gaming"})}),Object(d.jsx)(m.a,{span:8,children:Object(d.jsx)(x.a,{value:"Traveling",style:{lineHeight:"32px"},children:"Traveling"})}),Object(d.jsx)(m.a,{span:8,children:Object(d.jsx)(x.a,{value:"Drawing",style:{lineHeight:"32px"},children:"Drawing"})}),Object(d.jsx)(m.a,{span:8,children:Object(d.jsx)(x.a,{onChange:function(e){n(e.target.checked)},value:"Other",style:{lineHeight:"32px"},children:"Other"})})]})})}),a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{style:{marginBottom:"2px"},children:Object(d.jsx)("b",{children:"Other Hobbies"})}),Object(d.jsx)(o.a.Item,{name:"otherHobbies",rules:[{required:!0,message:"please enter Other Hobbies"}],children:Object(d.jsx)(u.a.TextArea,{})})]}),Object(d.jsx)(f.a,{type:"primary",htmlType:"submit",children:"+\xa0ADD USER"})]})})})})),w=r(454),H=r(98),k=function(){return Object(d.jsx)(w.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(d.jsx)(f.a,{type:"primary",children:Object(d.jsx)(H.b,{to:"/",children:"Back Home"})})})},D=(r(425),r(450)),F=Object(a.connect)((function(e){return{user:e.user}}))((function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(D.a,{title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"User Deatils"})," ",Object(d.jsx)("span",{children:"Add more"})]}),children:Object(d.jsx)(D.a,{type:"inner",title:"Inner Card title",extra:Object(d.jsx)("span",{children:"Edit"}),children:"Inner Card content"})})})})),S=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",component:v}),Object(d.jsx)(c.a,{exact:!0,path:"/user-details",component:F}),Object(d.jsx)(c.a,{component:k})]})})},C=r(236),I=n()({history:Object(C.a)()});I.model(r(445).default),I.router((function(){return Object(d.jsx)(H.a,{children:Object(d.jsx)(S,{})})})),I.start("#root")},445:function(e,t,r){"use strict";r.r(t);var a=r(85),n=r(60),s=r.n(n),c=r(237),l="http://universities.hipolabs.com/search",i=r(238),j=r.n(i);function o(e){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.get("".concat(l,"?name=").concat(t.searchKey)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default={namespace:"user",state:{colleges:[],allUser:[]},effects:{setState:s.a.mark((function e(t,r){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=r.put,e.next=4,n({type:"save",payload:a});case 4:case"end":return e.stop()}}),e)})),getUserCollege:s.a.mark((function e(t,r){var a,n,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,c=r.put,console.log("hello"),e.prev=3,e.next=6,n(o,a);case 6:if(200!=(l=e.sent).status){e.next=11;break}return console.log("response of user",l),e.next=11,c({type:"save",payload:{colleges:l.data}});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error("error in user college api",e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))},reducers:{save:function(e,t){var r=t.payload;return Object(a.a)(Object(a.a)({},e),r)},clear:function(){return{colleges:[]}}}}}},[[444,1,2]]]);
//# sourceMappingURL=main.2ade769e.chunk.js.map