(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{102:function(e,t){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),o=(a(70),a(71),a(7)),i=a.n(o),u=a(11),l=a(110),d=a(111),j=a(112),b=a(64),p=a(12),m=a(21),O=a(13),h=a(38),x=a.n(h),f=a(62),g=a.n(f);function v(e){return e.results?e.results:e.data?e.data:e}function k(e){return e.data?e.data:e}var y,w="https://uxcandy.com/~shapoval/test-task-backend/v2",C="raushanmahmud",N=function(e,t){return x.a.get("".concat(w).concat(e,"?developer=").concat(C),{params:t}).then(v).catch(k)},_=function(e,t){return x.a.post("".concat(w).concat(e,"?developer=").concat(C),t).then(v).catch(k)},S=function(e,t){var a="".concat(w).concat(e,"?developer=").concat(C);return x()({method:"post",url:a,data:g.a.stringify(t),headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(v).catch(k)},M=Object(O.b)("todos/fetchTodos",function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,n=t.sort_field,r=t.sort_direction,e.next=3,N("/",{page:a,sort_field:n,sort_direction:r});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(O.b)("todos/addNewTodo",function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/create",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(O.b)("todos/updateTodo",function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("/edit/".concat(t.id),{token:t.token,text:t.text,status:t.status?t.status:null});case 2:return(a=e.sent).data={},a.data.id=t.id,a.data.text=t.text,a.data.status=t.status,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(O.c)({name:"todos",initialState:{todos:[],totalCount:0,pagesCount:1,curPage:1,status:"idle",error:null,sortField:null,sortDirection:null},reducers:{setCurPage:function(e,t){e.curPage=t.payload,e.status="idle",e.error=""},setSortField:function(e,t){e.sortField=t.payload,e.status="idle",e.error=""},setSortDirection:function(e,t){e.sortDirection=t.payload,e.status="idle",e.error=""}},extraReducers:(y={},Object(m.a)(y,M.pending,(function(e,t){e.status="loading"})),Object(m.a)(y,M.fulfilled,(function(e,t){"error"!==t.payload.status?(e.status="succeeded",e.todos=t.payload.message.tasks,e.totalCount=Number(t.payload.message.total_task_count),e.pagesCount=Math.ceil(e.totalCount/3)):(e.status="failed",e.error=JSON.stringify(t.payload.message))})),Object(m.a)(y,M.rejected,(function(e,t){e.status="failed",e.error=JSON.stringify(t.error.message)})),Object(m.a)(y,P.fulfilled,(function(e,t){"error"!==t.payload.status&&(e.todos.length<3&&e.todos.push(t.payload.message),e.totalCount=e.totalCount+1,e.pagesCount=Math.ceil(e.totalCount/3),e.curPage!==e.pagesCount&&(e.status="idle",e.curPage=e.pagesCount))})),Object(m.a)(y,B.fulfilled,(function(e,t){if("ok"===t.payload.status){var a=t.payload.data,n=a.id,r=a.text,c=a.status,s=e.todos.find((function(e){return e.id===n}));s&&(s.text=r,s.status=c)}})),y)}),z=T.actions,A=(z.todoAdded,z.todoUpdated,z.setCurPage),D=z.setSortField,I=z.setSortDirection,E=T.reducer,F=function(e){return e.todos.todos},H=function(e){return e.todos.curPage},L=function(e){return e.todos.pagesCount},Z=function(e){return e.todos.sortField},J=function(e){return e.todos.sortDirection},W=a(23),$=a(63),R=a.n($),G=a(1);function U(e){var t=[],a=e.curPage-Math.floor(e.shownElemNum/2),n=e.curPage+Math.floor(e.shownElemNum/2);a<=0?n=e.shownElemNum:n>=e.elemNumber&&(a=e.elemNumber-e.shownElemNum+1);for(var r=function(r){var c=!1;r+1===e.curPage&&(c=!0),e.shownElemNum<e.elemNumber?a<=r+1&&r+1<=n||0===r||r+1===e.elemNumber?t.push(Object(G.jsx)(W.a.Item,{active:c,onClick:function(){return e.changePage(r+1)},children:r+1},t.length)):a-1!==r+1&&n+1!==r+1||t.push(Object(G.jsx)(W.a.Item,{active:c,disabled:!0,children:"..."},t.length)):t.push(Object(G.jsx)(W.a.Item,{active:c,onClick:function(){return e.changePage(r+1)},children:r+1},t.length))},c=0;c<e.elemNumber;c++)r(c);return e.showArrows&&(1!==e.curPage&&t.unshift(Object(G.jsx)(W.a.Item,{onClick:function(){return e.changePage(e.curPage-1)},children:"<"},t.length)),e.curPage!==e.elemNumber&&0!==e.elemNumber&&t.push(Object(G.jsx)(W.a.Item,{onClick:function(){return e.changePage(e.curPage+1)},children:">"},t.length))),Object(G.jsx)(W.a,{className:"".concat(R.a.pagination," justify-content-center"),size:"sm",children:t})}var Y,q=a(9),Q=a.n(q),K=a(39),V=a(40),X=Object(O.c)({name:"modals",initialState:null,reducers:{showModal:function(e,t){var a=t.payload,n=a.type,r=a.props;return r||(r={}),{type:n,props:r}},hideModal:function(){return null}}}),ee=X.reducer,te=X.actions,ae=te.showModal,ne=te.hideModal,re=function(e){return e.modals},ce=a(25),se=a.n(ce),oe={currentUrl:"/",user:null,isLoggedIn:!1,token:se.a.get("token")?se.a.get("token"):null},ie=Object(O.b)("auth/login",function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.password,e.next=3,S("/login",{username:a,password:n});case 3:return(r=e.sent).username=a,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ue=Object(O.c)({name:"auth",initialState:oe,reducers:{logout:function(e,t){e.isLoggedIn=!1,e.token=null,se.a.remove("token"),e.user=null}},extraReducers:(Y={},Object(m.a)(Y,ie.fulfilled,(function(e,t){if("error"!==t.payload.status){e.user=t.payload.user;var a=t.payload.message.token;e.token=a,se.a.set("token",a,{expires:1}),e.isLoggedIn=!0}else e.user=null,e.token=null,se.a.remove("token"),e.isLoggedIn=!1})),Object(m.a)(Y,ie.rejected,(function(e,t){e.user=null,e.isLoggedIn=!1,e.token=null,se.a.remove("token")})),Y)}),le=ue.actions.logout,de=ue.reducer,je=function(e){return e.auth.isLoggedIn},be=function(e){return se.a.get("token")},pe=Object(G.jsx)(K.a,{icon:V.c}),me=Object(G.jsx)(K.a,{icon:V.b});function Oe(e){var t=Object(p.b)(),a=Object(p.c)(F),r=Object(p.c)((function(e){return e.todos.error})),c=Object(p.c)((function(e){return e.todos.status})),s=Object(p.c)(H),o=Object(p.c)(L),m=Object(p.c)(Z),O=Object(p.c)(J),h=Object(p.c)(je),x=Object(p.c)(be);Object(n.useEffect)((function(){"idle"===c&&t(M({page:s,sort_field:m,sort_direction:O}))}),[c,t,s,m,O,h]);var f,g=function(e,a){t(A(1)),t(D(e)),t(I(a))},v=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(A(a));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(G.jsx)(l.a,{onClick:function(){t(ae({type:"LOGIN"}))},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),y=Object(G.jsx)(l.a,{onClick:function(){return t(le())},children:"\u0412\u044b\u0439\u0442\u0438"});return"loading"===c?f=Object(G.jsx)("div",{className:"loader",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):"succeeded"===c?f=Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(d.a,{striped:!0,responsive:!0,children:[Object(G.jsx)("thead",{children:Object(G.jsxs)("tr",{children:[Object(G.jsxs)("th",{children:[Object(G.jsx)("span",{children:"#"}),Object(G.jsxs)(j.a,{style:{maxHeight:"100%",marginTop:"0px",marginBottom:"auto",display:"inline-grid"},children:[Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("id","asc")},variant:"link",size:"sm",children:pe}),Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("id","desc")},variant:"link",size:"sm",children:me})]})]}),Object(G.jsxs)("th",{children:[Object(G.jsx)("span",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(G.jsxs)(j.a,{style:{maxHeight:"100%",marginTop:"0px",marginBottom:"auto",display:"inline-grid"},children:[Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("username","asc")},variant:"link",size:"sm",children:pe}),Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("username","desc")},variant:"link",size:"sm",children:me})]})]}),Object(G.jsxs)("th",{children:[Object(G.jsx)("span",{children:"email"}),Object(G.jsxs)(j.a,{style:{maxHeight:"100%",marginTop:"0px",marginBottom:"auto",display:"inline-grid"},children:[Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("email","asc")},variant:"link",size:"sm",children:pe}),Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("email","desc")},variant:"link",size:"sm",children:me})]})]}),Object(G.jsx)("th",{style:{verticalAlign:"middle"},children:Object(G.jsx)("span",{children:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"})}),Object(G.jsxs)("th",{children:[Object(G.jsx)("span",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(G.jsxs)(j.a,{style:{maxHeight:"100%",marginTop:"0px",marginBottom:"auto",display:"inline-grid"},children:[Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("status","asc")},variant:"link",size:"sm",children:pe}),Object(G.jsx)(l.a,{className:Q.a.linkBtn,onClick:function(){return g("status","desc")},variant:"link",size:"sm",children:me})]})]})]})}),Object(G.jsx)("tbody",{children:a&&a.map((function(e,a){return Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:e.id}),Object(G.jsx)("td",{children:e.username}),Object(G.jsx)("td",{children:e.email}),Object(G.jsx)("td",{children:e.text}),Object(G.jsx)("td",{children:Object(G.jsxs)(b.a,{as:"select",disabled:!0,value:e.status,children:[Object(G.jsx)("option",{value:0,label:"\u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}),Object(G.jsx)("option",{value:1,label:"\u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c"}),Object(G.jsx)("option",{value:10,label:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}),Object(G.jsx)("option",{value:11,label:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c"})]})}),Object(G.jsx)("td",{children:Object(G.jsx)(l.a,{disabled:!h&&!x,hidden:!h&&!x,onClick:function(){return function(e){var a=e.id,n=e.username,r=e.text,c=e.email,s=e.status;t(ae({type:"ADD_TODO",props:{editing:!0,id:a,username:n,status:s,text:r,email:c}}))}(e)},children:Object(G.jsx)(K.a,{icon:V.a})})})]},a)}))})]}),Object(G.jsx)(U,{elemNumber:o,hidden:"loading"===c,curPage:s,shownElemNum:5,showArrows:!0,changePage:v})]}):"failed"===c&&(f=Object(G.jsx)("tr",{children:Object(G.jsx)("td",{children:r})})),Object(G.jsx)("div",{className:Q.a.mainContainer,children:Object(G.jsxs)("div",{className:Q.a.contentContainer,children:[Object(G.jsx)(l.a,{onClick:function(){t(ae({type:"ADD_TODO"}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),h||x?y:k,f]})})}var he=a(8),xe=a(14),fe=a(17),ge=a(114),ve=a(113);var ke={ADD_TODO:function(e){var t=Object(p.b)(),a=Object(n.useState)(!1),r=Object(xe.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(null),d=Object(xe.a)(o,2),j=d[0],m=d[1],h=Object(n.useState)(""),x=Object(xe.a)(h,2),f=(x[0],x[1]),g=Object(n.useState)(""),v=Object(xe.a)(g,2),k=v[0],y=v[1],w=Object(n.useState)(""),C=Object(xe.a)(w,2),N=C[0],_=C[1],S=Object(n.useState)(""),M=Object(xe.a)(S,2),T=M[0],z=M[1],A=Object(n.useState)([]),D=Object(xe.a)(A,2),I=D[0],E=D[1],F=Object(n.useState)(!1),H=Object(xe.a)(F,2),L=H[0],Z=H[1],J=Object(p.c)(be),W=Object(n.useState)({username:"",email:"",text:""}),$=Object(xe.a)(W,2),R=$[0],U=$[1];Object(n.useEffect)((function(){e.editing?s(!0):s(!1)}),[e.editing]),Object(n.useEffect)((function(){e.id&&(m(e.id),z(e.text),y(e.username),_(e.email),Z(e.status>=10),f(e.status))}),[e.id]);var Y=[k,N,T].every(Boolean)&&!R.username&&!R.email&&!R.text,q=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,y(a),U(a?Object(he.a)(Object(he.a)({},R),{},{username:""}):Object(he.a)(Object(he.a)({},R),{},{username:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e){return!!/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/.test(e)||!e},V=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,_(a),a?K(a)?U(Object(he.a)(Object(he.a)({},R),{},{email:""})):U(Object(he.a)(Object(he.a)({},R),{},{email:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"})):U(Object(he.a)(Object(he.a)({},R),{},{email:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,z(a),U(a?Object(he.a)(Object(he.a)({},R),{},{text:""}):Object(he.a)(Object(he.a)({},R),{},{text:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(t,a,n){return a?e.text!==n||1===e.status||11===e.status?11:10:e.text!==n||1===e.status||11===e.status?1:0},te=function(){var e=Object(u.a)(i.a.mark((function e(){var a,n,r,s,o,l,d,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},n=!1,k||(n=!0,a={username:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),N?K(N)||(n=!0,a=Object(he.a)(Object(he.a)({},a),{},{email:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"})):(n=!0,a=Object(he.a)(Object(he.a)({},a),{},{email:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})),T||(n=!0,a=Object(he.a)(Object(he.a)({},a),{},{text:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})),U(a),!Y||n){e.next=31;break}if(e.prev=7,c){e.next=21;break}return r=L?10:0,(s=new FormData).append("username",k),s.append("email",N),s.append("text",T),s.append("status",r),e.next=17,t(P(s));case 17:E([{variant:"success",text:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"}]),setTimeout(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(""),_(""),z(""),t(ne());case 4:case"end":return e.stop()}}),e)}))),1e3),e.next=26;break;case 21:return e.next=23,t(B({id:j,token:J,text:T,status:ee(0,L,T)}));case 23:if(o=e.sent,"ok"===(l=Object(O.d)(o)).status)E([{variant:"success",text:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430"}]),setTimeout(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ne());case 1:case"end":return e.stop()}}),e)}))),1e3);else{for(b in d=[],l.message)d.push({variant:"danger",text:b+":"+l.message[b]});l.message.token&&d.push({variant:"danger",text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),E(d)}case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(7),console.error("Failed to save the todo: ",e.t0);case 31:case"end":return e.stop()}}),e,null,[[7,28]])})));return function(){return e.apply(this,arguments)}}();return Object(G.jsx)("div",{className:Q.a.modalWrapper,children:Object(G.jsxs)(fe.a.Dialog,{size:"lg",style:{width:"100%"},children:[Object(G.jsx)(fe.a.Header,{children:Object(G.jsxs)(fe.a.Title,{children:[" ",c?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c "," \u0437\u0430\u0434\u0430\u0447\u0443"]})}),Object(G.jsxs)(fe.a.Body,{style:{maxHeight:"calc(100vh - 210px)",overflowY:"auto"},children:[I.map((function(e,t){return Object(G.jsx)(ge.a,{variant:e.variant,children:e.text},t)})),Object(G.jsx)("label",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(G.jsx)(b.a,{placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",disabled:c,value:k,onChange:q,className:"mb-2 ".concat(R.username?Q.a.error:""),style:{paddingTop:"10px"}}),R.username?Object(G.jsx)("small",{className:Q.a.errorMsg,children:R.username}):null,Object(G.jsx)("label",{children:"Email \u0430\u0434\u0440\u0435\u0441"}),Object(G.jsx)(b.a,{placeholder:"email \u0430\u0434\u0440\u0435\u0441",disabled:c,value:N,onChange:V,className:"mb-2 ".concat(R.email?Q.a.error:""),style:{paddingTop:"10px"}}),R.email?Object(G.jsx)("small",{className:Q.a.errorMsg,children:R.email}):null,Object(G.jsx)("label",{children:"\u0422\u0435\u043a\u0441\u0442"}),Object(G.jsx)(b.a,{placeholder:"\u0422\u0435\u043a\u0441\u0442",value:T,onChange:X,className:"mb-2 ".concat(R.text?Q.a.error:""),style:{paddingTop:"10px"}}),R.text?Object(G.jsx)("small",{className:Q.a.errorMsg,children:R.text}):null,Object(G.jsxs)("div",{hidden:!c,style:{display:"box",marginTop:"1rem",marginBottom:"1rem"},children:[Object(G.jsx)("label",{htmlFor:"show-com",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e "}),Object(G.jsx)(ve.a.Check,{style:{marginLeft:"10px"},defaultChecked:e.status>=10,value:L,type:"checkbox",onChange:function(e){Z(e.target.checked)}})]}),Object(G.jsxs)(fe.a.Footer,{children:[Object(G.jsx)(l.a,{variant:"secondary",onClick:function(){return t(ne())},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(G.jsx)(l.a,{variant:"primary",onClick:te,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})})},LOGIN:function(){var e=Object(p.b)(),t=Object(n.useState)(""),a=Object(xe.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),o=Object(xe.a)(s,2),d=o[0],j=o[1],m=Object(n.useState)([]),h=Object(xe.a)(m,2),x=h[0],f=h[1],g=Object(n.useState)({username:"",password:""}),v=Object(xe.a)(g,2),k=v[0],y=v[1],w=[r,d].every(Boolean)&&!k.username&&!k.email&&!k.text,C=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,c(a),y(a?Object(he.a)(Object(he.a)({},k),{},{username:""}):Object(he.a)(Object(he.a)({},k),{},{username:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,j(a),y(a?Object(he.a)(Object(he.a)({},k),{},{password:""}):Object(he.a)(Object(he.a)({},k),{},{password:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var t=Object(u.a)(i.a.mark((function t(){var a,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a={},n=!1,r||(n=!0,a={username:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),d||(n=!0,a=Object(he.a)(Object(he.a)({},a),{},{password:"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})),y(a),!w||n){t.next=18;break}return t.prev=6,t.next=9,e(ie({username:r,password:d}));case 9:c=t.sent,"ok"===Object(O.d)(c).status?(f([{variant:"success",text:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e"}]),setTimeout(Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(ne());case 1:case"end":return t.stop()}}),t)}))),500)):f([{variant:"danger",text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}]),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.error("Failed to login: ",t.t0),f([{variant:"danger",text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}]);case 18:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(){return t.apply(this,arguments)}}();return Object(G.jsx)("div",{className:Q.a.modalWrapper,children:Object(G.jsxs)(fe.a.Dialog,{size:"lg",style:{width:"100%"},children:[Object(G.jsx)(fe.a.Header,{children:Object(G.jsx)(fe.a.Title,{children:" \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f "})}),Object(G.jsxs)(fe.a.Body,{style:{maxHeight:"calc(100vh - 210px)",overflowY:"auto"},children:[x.map((function(e,t){return Object(G.jsx)(ge.a,{variant:e.variant,children:e.text},t)})),Object(G.jsx)("label",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(G.jsx)(b.a,{placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:r,onChange:C,className:"mb-2 ".concat(k.username?Q.a.error:""),style:{paddingTop:"10px"}}),k.username?Object(G.jsx)("small",{className:Q.a.errorMsg,children:k.username}):null,Object(G.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(G.jsx)(b.a,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:d,onChange:N,className:"mb-2 ".concat(k.password?Q.a.error:""),style:{paddingTop:"10px"}}),k.password?Object(G.jsx)("small",{className:Q.a.errorMsg,children:k.password}):null,Object(G.jsxs)(fe.a.Footer,{children:[Object(G.jsx)(l.a,{variant:"secondary",onClick:function(){return e(ne())},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(G.jsx)(l.a,{variant:"primary",onClick:_,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})}};function ye(){var e=Object(p.c)(re);if(!e)return null;var t=ke[e.type];return Object(G.jsx)(t,Object(he.a)({},e.props))}var we=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)("header",{className:"App-header",children:[Object(G.jsx)(ye,{}),Object(G.jsx)(Oe,{})]})})},Ce=Object(O.a)({reducer:{auth:de,todos:E,modals:ee}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(p.a,{store:Ce,children:Object(G.jsx)(we,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){e.exports={pagination:"Pagination_pagination__2JrlQ"}},70:function(e,t,a){},9:function(e,t,a){e.exports={modalWrapper:"Modal_modalWrapper__1PESq",mainContainer:"Modal_mainContainer__3yfz7",contentContainer:"Modal_contentContainer__H3J4N",errorMsg:"Modal_errorMsg__38cZi",error:"Modal_error__1xlRp",linkBtn:"Modal_linkBtn__1R743"}}},[[108,1,2]]]);
//# sourceMappingURL=main.7fc2888d.chunk.js.map