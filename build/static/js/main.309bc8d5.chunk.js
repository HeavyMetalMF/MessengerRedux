(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(36),a=n(3),s="send-message",c={dialogs:[{id:1,name:"\u0414\u0438\u0430\u043b\u043e\u0433 1"},{id:2,name:"\u0414\u0438\u0430\u043b\u043e\u0433 2"},{id:3,name:"\u0414\u0438\u0430\u043b\u043e\u0433 3"},{id:4,name:"\u0414\u0438\u0430\u043b\u043e\u0433 4"},{id:5,name:"\u0414\u0438\u0430\u043b\u043e\u0433 5"}],messages:[{id:1,message:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 1"},{id:2,message:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 2"},{id:3,message:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 3"},{id:4,message:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 4"},{id:5,message:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 5"}]},i=function(e){return{type:s,messageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.messageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},118:function(e,t,n){"use strict";t.a=n.p+"static/media/user.aa43b272.png"},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3),a=(n(1),n(9)),s=(n(137),n(12)),c=n(0),i=function(e){return{isAuth:e.auth.isAuth}},o=function(e){return Object(s.b)(i)((function(t){return t.isAuth?Object(c.jsx)(e,Object(r.a)({},t)):Object(c.jsx)(a.a,{to:"/login"})}))}},137:function(e,t,n){"use strict";var r=n(20),a=n.n(r),s=n(0),c=function(e){return Object(s.jsx)("div",{className:a.a.message,children:e.message})},i=n(11),o=function(e){return Object(s.jsxs)("div",{className:a.a.item+" "+a.a.active,children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:a.a.minAva,src:"https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic",width:"40px",height:"40px"})}),Object(s.jsx)("div",{className:a.a.mes,children:Object(s.jsx)(i.b,{activeClassName:a.a.active,to:"/dialogs/"+e.id,children:e.name})})]})},u=n(9),l=n(130),d=n(131),j=n(34),b=n(44),f=Object(b.a)(50),p=Object(d.a)({form:"addMessage"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(l.a,{validate:[b.b,f],component:j.b,name:"messageBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(s.jsx)("div",{children:Object(s.jsx)(l.a,{component:"button",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}));t.a=function(e){var t=e.messagesPage,n=t.dialogs.map((function(e){return Object(s.jsx)(o,{name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(s.jsx)(c,{message:e.message},e.id)}));t.messageText;return e.isAuth?Object(s.jsxs)("div",{className:a.a.dialogs,children:[Object(s.jsx)("div",{className:a.a.dialogs_items,children:n}),Object(s.jsxs)("div",{className:a.a.messages,children:[Object(s.jsx)("div",{children:r}),Object(s.jsx)(p,{onSubmit:function(t){e.sendMessage(t.messageBody),t.messageBody=""}})]})]}):Object(s.jsx)(u.a,{to:"/login"})}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(133),a=(n(75),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9711c675-0590-4395-8034-4568a71705d0"}})),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u043e\u0434"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")},getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__RxrzF",item:"Navbar_item__g21C2",active:"Navbar_active__Y-qcb"}},167:function(e,t,n){},20:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3jq1C",dialogs_items:"Dialogs_dialogs_items__2cXJe",item:"Dialogs_item__s2gPa",minAva:"Dialogs_minAva__ye0yh",mes:"Dialogs_mes__2JVbY",active:"Dialogs_active__33CDc",messages:"Dialogs_messages__2nT1Z",message:"Dialogs_message__1tXGN"}},247:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return m}));var r=n(36),a=n(3),s=n(14),c="follow",i="unfollow",o="setUsers",u="setCurrentPage",l="setTotalCount",d="toggleIsFetching",j="toggleIsFollowing",b={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[2,3]},f=function(e){return{type:u,currentPage:e}},p=function(e){return{type:d,isFetching:e}},h=function(e,t){return{type:j,followingInProgress:e,userId:t}},g=function(e,t){return function(n){n(p(!0)),n(f(e)),s.c.getUsers(e,t).then((function(e){var t,r;n(p(!1)),n((t=e.items,{type:o,users:t})),n((r=e.totalCount,{type:l,totalUsersCount:r}))}))}},O=function(e){return function(t){t(h(!0,e)),s.c.follow(e).then((function(n){0===n.resultCode&&t({type:c,userId:e}),t(h(!1,e))}))}},m=function(e){return function(t){t(h(!0,e)),s.c.unfollow(e).then((function(n){0===n.resultCode&&t({type:i,userId:e}),t(h(!1,e))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(a.a)(Object(a.a)({},e),{},{followed:!0}):e}))});case i:return Object(a.a)(Object(a.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(a.a)(Object(a.a)({},e),{},{followed:!1}):e}))});case o:return Object(a.a)(Object(a.a)({},e),{},{users:Object(r.a)(t.users)});case u:return Object(a.a)(Object(a.a)({},e),{},{currentPage:t.currentPage});case l:return Object(a.a)(Object(a.a)({},e),{},{totalUsersCount:t.totalUsersCount});case d:return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case j:return Object(a.a)(Object(a.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},292:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(69),c=n.n(s),i=(n(167),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),o=n(10),u=n(75),l=n(106),d={},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return e},b=n(26),f=n(25),p=n.n(f),h=n(48),g=n(3),O=n(14),m=n(31),v="set-user-data",x="GET_CAPTCHA",_={userId:null,email:null,login:null,isFetching:!0,isAuth:!1,captchaUrl:null},P=function(e,t,n,r){return{type:v,payload:{userId:e,email:t,login:n,isAuth:r}}},w=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r,a,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(P(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,O.a.getCaptchaUrl();case 3:n=e.sent,t((r=n.data.url,{type:x,captchaUrl:r}));case 5:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(g.a)(Object(g.a)({},e),t.payload);case x:return Object(g.a)(Object(g.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},N=n(134),S=n(132),U="SET_INITIALIZED",I={initialized:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},F=Object(o.c)({profilePage:u.b,messagesPage:l.a,sidebar:j,usersPage:b.a,auth:y,form:S.a,app:k}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,A=Object(o.e)(F,z(Object(o.a)(N.a))),T=n(38),D=n(39),E=n(41),M=n(40),B=(n(247),n(16)),L=n.n(B),R=n(11),X=n(0),Z=function(){return Object(X.jsxs)("nav",{className:L.a.nav,children:[Object(X.jsx)("div",{className:L.a.item,children:Object(X.jsx)(R.b,{activeClassName:L.a.active,to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(X.jsx)("div",{className:L.a.item,children:Object(X.jsx)(R.b,{activeClassName:L.a.active,to:"/profile",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(X.jsx)("div",{className:L.a.item,children:Object(X.jsx)(R.b,{activeClassName:L.a.active,to:"/dialogs",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(X.jsx)("div",{className:L.a.item,children:Object(X.jsx)(R.b,{activeClassName:L.a.active,to:"/news",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(X.jsx)("div",{className:L.a.item,children:Object(X.jsx)(R.b,{activeClassName:L.a.active,to:"/music",children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(X.jsx)("div",{className:L.a.item,children:Object(X.jsx)(R.b,{activeClassName:L.a.active,to:"/settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})},q=n(9),G=n(12),H=n(43),J=n(59),K=n.n(J),Y=n(118),V=n(97),Q=n(136),W=n.n(Q),$=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var s=Math.ceil(t/e.portionSize),c=Object(r.useState)(1),i=Object(V.a)(c,2),o=i[0],u=i[1],l=(o-1)*e.portionSize+1,d=(e.portionSize,o*e.portionSize);return Object(X.jsxs)("div",{children:[o>1?Object(X.jsx)("button",{onClick:function(){u(o-1)},children:"\u041d\u0430\u0437\u0430\u0434"}):"",n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(X.jsx)("span",{className:W()(Object(H.a)({},K.a.selectedPage,e.currentPage===t),K.a.pageNumber),onClick:function(n){e.onPageChanged(t)},children:t})})),s>o?Object(X.jsx)("button",{onClick:function(){u(o+1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"}):""]})},ee=function(e){return Object(X.jsxs)("div",{children:[Object(X.jsx)($,Object(H.a)({onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,portionSize:10},"onPageChanged",e.onPageChanged)),e.users.map((function(t){return Object(X.jsxs)("div",{children:[Object(X.jsxs)("span",{children:[Object(X.jsx)("div",{children:Object(X.jsx)(R.b,{to:"/profile/"+t.id,children:Object(X.jsx)("img",{src:null!==t.photos.small?t.photos.small:Y.a,className:K.a.userPhoto})})}),Object(X.jsx)("div",{children:t.followed?Object(X.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(X.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(X.jsxs)("span",{children:[Object(X.jsxs)("span",{children:[Object(X.jsx)("div",{children:t.name}),Object(X.jsx)("div",{children:t.status})]}),Object(X.jsxs)("span",{children:[Object(X.jsx)("div",{children:"user.location.country"}),Object(X.jsx)("div",{children:"user.location.city"})]})]})]},t.id)}))]})},te=n(51),ne=n(119),re=function(e){return e.usersPage.users},ae=function(e){return e.usersPage.pageSize},se=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(E.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(T.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(X.jsxs)(X.Fragment,{children:[this.props.isFetching?Object(X.jsx)(te.a,{}):null,Object(X.jsx)(ee,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,setFollowingProgress:this.props.setFollowingProgress})]})}}]),n}(a.a.Component),le=(Object(ne.a)(ue),Object(o.d)(Object(G.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:se(e),currentPage:ce(e),isFetching:ie(e),followingInProgress:oe(e)}}),{follow:b.b,unfollow:b.f,setCurrentPage:b.d,setFollowingProgress:b.e,requestUsers:b.c}))(ue)),de=n(96),je=n.n(de),be=function(e){return Object(X.jsxs)("header",{className:je.a.header,children:[Object(X.jsx)("img",{src:"https://i.pinimg.com/originals/71/ff/89/71ff89fbe1987a5684aa48b453b25184.png"}),Object(X.jsx)("div",{className:je.a.loginBlock,children:e.isAuth?Object(X.jsxs)("div",{children:[" ",e.login," ",Object(X.jsx)("button",{onClick:e.logout,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(X.jsx)(R.b,{to:"/login",children:"Login"})})]})},fe=function(e){Object(E.a)(n,e);var t=Object(M.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(X.jsx)(be,Object(g.a)({},this.props))}}]),n}(a.a.Component),pe=Object(G.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){O.a.logout().then((function(t){0===t.data.resultCode&&e(P(null,null,null,!1))}))}}})(fe),he=n(130),ge=n(131),Oe=n(34),me=n(44),ve=n(53),xe=n.n(ve),_e=Object(ge.a)({form:"login"})((function(e){return Object(X.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(X.jsx)("div",{children:Object(X.jsx)(he.a,{validate:[me.b],name:"email",component:Oe.a,placeholder:"email"})}),Object(X.jsx)("div",{children:Object(X.jsx)(he.a,{validate:[me.b],name:"password",component:Oe.a,placeholder:"password"})}),Object(X.jsxs)("div",{children:[Object(X.jsx)(he.a,{name:"remember",component:Oe.a,type:"checkbox"})," remember"]}),e.captchaUrl?Object(X.jsx)("img",{src:e.captchaUrl}):"",e.captchaUrl?Object(X.jsx)(he.a,{name:"captcha",component:Oe.a}):"",e.error?Object(X.jsx)("div",{className:xe.a.summaryErrorForm,children:e.error}):"",Object(X.jsx)("div",{children:Object(X.jsx)("button",{type:"submit",children:"Login"})})]})})),Pe=Object(G.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(a){O.a.login(e,t,n,r).then((function(e){if(0===e.data.resultCode)a(w());else{10===e.data.resultCode&&a(C());var t=e.data.messages[0],n=Object(m.a)("login",{_error:t});a(n)}}))}}})((function(e){return e.isAuth?Object(X.jsx)(q.a,{to:"/profile"}):Object(X.jsxs)("div",{children:[Object(X.jsx)("h1",{children:"Login"}),Object(X.jsx)(_e,{captchaUrl:e.captchaUrl,onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe,t.captcha)}})]})})),we=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Ce=a.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),ye=function(e){Object(E.a)(n,e);var t=Object(M.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(X.jsx)(R.a,{children:Object(X.jsxs)("div",{className:"app-wrapper",children:[Object(X.jsx)(pe,{}),Object(X.jsx)(Z,{}),Object(X.jsxs)("div",{className:"app-wrapper-content",children:[Object(X.jsx)(q.b,{path:"/profile/:userID?",render:function(){return Object(X.jsx)(r.Suspense,{fallback:Object(X.jsx)("div",{children:"loading ..."}),children:Object(X.jsx)(we,{})})}}),Object(X.jsx)(q.b,{path:"/dialogs",render:function(){return Object(X.jsx)(a.a.Suspense,{fallback:Object(X.jsx)(te.a,{}),children:Object(X.jsx)(Ce,{})})}}),Object(X.jsx)(q.b,{path:"/users",render:function(){return Object(X.jsx)(le,{})}}),Object(X.jsx)(q.b,{path:"/login",render:function(){return Object(X.jsx)(Pe,{})}})]})]})}):Object(X.jsx)(te.a,{})}}]),n}(a.a.Component),Ne=Object(G.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(w()).then((function(){e({type:U})}))}}})(ye);c.a.render(Object(X.jsx)(G.a,{store:A,children:Object(X.jsx)(Ne,{})}),document.getElementById("root")),i()},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b}));var r=n(3),a=n(74),s=n(53),c=n.n(s),i=n(0),o=["input","meta","child"],u=["input","meta"],l=["input","meta"],d=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,o)),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[n.children,Object(i.jsx)("div",{children:r?Object(i.jsx)("span",{children:t.error}):""})]})},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},a=function(e){return function(t){if(t&&t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},51:function(e,t,n){"use strict";var r=n.p+"static/media/Spin-1s-200px.2cfb1e57.svg",a=(n(1),n(0));t.a=function(e){return Object(a.jsx)("img",{src:r})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__15Lm_",error:"FormsControls_error__2epMi",summaryErrorForm:"FormsControls_summaryErrorForm__Yd2hw"}},59:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1EAF0",selectedPage:"Users_selectedPage__35nDu",pageNumber:"Users_pageNumber__3cE_f"}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(25),a=n.n(r),s=n(48),c=n(36),i=n(3),o=n(14),u=(n(26),n(31)),l="add-post",d="SetUserProfile",j="SetStatus",b="SET_PHOTO",f={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043a\u0430\u043a \u0434\u0435\u043b\u0430",likes:0},{id:2,message:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u043e\u0441\u0442",likes:9}],profile:null,status:""},p=function(e){return{type:l,postText:e}},h=function(e){return{type:j,status:e}},g=function(e){return{type:b,photos:e}},O=function(e){return function(t){o.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:d,profile:n}))}))}},m=function(e){return function(t){o.b.getStatus(e).then((function(e){t(h(e.data))}))}},v=function(e){return function(t){o.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(h(e))}))}},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(g(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c,i,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(O(s)),t.next=12;break;case 8:return i=c.data.messages[0],l=Object(u.a)("edit-profile",{_error:i}),n(l),t.abrupt("return",Promise.reject(i));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.postText,likes:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},96:function(e,t,n){e.exports={header:"Header_header__1X91C",loginBlock:"Header_loginBlock___rP3G"}}},[[292,1,2]]]);
//# sourceMappingURL=main.309bc8d5.chunk.js.map