(this.webpackJsonpferms=this.webpackJsonpferms||[]).push([[0],{133:function(e,t,a){e.exports=a(184)},138:function(e,t,a){},139:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),c=a.n(l),o=a(11),i=a.n(o),s=(a(138),a(139),a(22)),u=Object(l.createContext)(),m=a(9),p=a(18),d=(n={},Object(m.a)(n,"DRAWER_OPEN",(function(e){return Object(p.a)({},e,{open:!0})})),Object(m.a)(n,"DRAWER_CLOSE",(function(e){return Object(p.a)({},e,{open:!1})})),Object(m.a)(n,"DEFAULT",(function(e){return e})),n),g=function(e,t){return(d[t.type]||d.DEFAULT)(e,t)},E=function(e){var t=e.children,a=Object(l.useReducer)(g,{open:!1}),n=Object(s.a)(a,2),r=n[0],o=n[1];return c.a.createElement(u.Provider,{value:{open:function(){return o({type:"DRAWER_OPEN"})},close:function(){return o({type:"DRAWER_CLOSE"})},drawer:r}},t)},h=a(41),b=a.n(h),f=a(59),v=Object(l.createContext)(),O=(r={},Object(m.a)(r,"LOGIN",(function(e,t){return Object(p.a)({},e,{isAuth:!0,name:t.name,pass:t.pass})})),Object(m.a)(r,"LOGOUT",(function(e){return Object(p.a)({},e,{isAuth:!1,name:"",pass:""})})),Object(m.a)(r,"VALID_LOGIN",(function(e,t){return Object(p.a)({},e,{invalidLogin:t.invalid,touchLogin:t.touch})})),Object(m.a)(r,"VALID_PASS",(function(e,t){return Object(p.a)({},e,{invalidPass:t.invalid,touchPass:t.touch})})),Object(m.a)(r,"LOAD_START",(function(e){return Object(p.a)({},e,{loading:!0})})),Object(m.a)(r,"LOAD_END",(function(e){return Object(p.a)({},e,{loading:!1})})),Object(m.a)(r,"ERROR_AUTH",(function(e,t){return Object(p.a)({},e,{error:t.error})})),Object(m.a)(r,"DEFAULT",(function(e){return e})),r),y=function(e,t){return(O[t.type]||O.DEFAULT)(e,t)},j=a(60),x=a.n(j),A="http://school44.hostingerapp.com/",T=function(e){var t=e.children,a=Object(l.useReducer)(y,{isAuth:!1,name:"",pass:"",invalidLogin:!0,invalidPass:!0,touchLogin:!1,touchPass:!1,loading:!1,error:null}),n=Object(s.a)(a,2),r=n[0],o=n[1],i=function(){o({type:"LOAD_START"})},u=function(){o({type:"LOAD_END"})},m=function(e){o({type:"ERROR_AUTH",error:e})},p=function(){var e=Object(f.a)(b.a.mark((function e(){var t,a,n,r,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:null,a=l.length>1&&void 0!==l[1]?l[1]:null,i(),m(null),e.prev=4,n={login:t,password:a},e.next=8,x.a.post(A+"php/login.php",n);case 8:r=e.sent,console.log(r.data),u(),1===r.data?(localStorage.setItem("userName",t),localStorage.setItem("userPass",a),o({type:"LOGIN",name:t,pass:a})):m("\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0),u(),m("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 19:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),d=function(){localStorage.removeItem("userName"),localStorage.removeItem("usePass"),o({type:"LOGOUT"})};return c.a.createElement(v.Provider,{value:{login:p,logout:d,autoLogon:function(){localStorage.getItem("userName")&&localStorage.getItem("userPass")?(p(localStorage.getItem("userName"),localStorage.getItem("userPass")),console.log("autologon")):d()},validLogin:function(e){var t=!0;t=!(e.length>=5),o({type:"VALID_LOGIN",invalid:t,touch:!0})},validPass:function(e){var t=!0;t=!(e.length>5),o({type:"VALID_PASS",invalid:t,touch:!0})},error_auth:m,auth:r}},t)},C=Object(l.createContext)(),w=a(227),k=a(188),S=a(229),L=a(230),_=a(36),N=Object(w.a)({paper:{padding:5}}),I=function(e){var t=N();return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{style:{marginTop:10,padding:10}},c.a.createElement(S.a,{container:!0,spacing:1},c.a.createElement(S.a,{item:!0,xs:4,style:{textAlign:"center"}},c.a.createElement(k.a,{className:t.paper},e.data.date)),c.a.createElement(S.a,{item:!0,xs:4,style:{textAlign:"center"}},c.a.createElement(k.a,{className:t.paper},e.data.time+" m")),c.a.createElement(S.a,{item:!0,xs:4,style:{textAlign:"center"}},c.a.createElement(k.a,{className:t.paper,style:{backgroundColor:e.data.mhs>150?"lime":"coral"}},e.data.mhs+" Mh/s"))),c.a.createElement(S.a,{container:!0,spacing:1},c.a.createElement(S.a,{item:!0,xs:4,style:{textAlign:"center"}},c.a.createElement(k.a,{className:t.paper},e.data.client)),c.a.createElement(S.a,{item:!0,xs:4,style:{textAlign:"center"}},c.a.createElement(k.a,{className:t.paper,style:{backgroundColor:"lime"}},e.data.shares)),c.a.createElement(S.a,{item:!0,xs:4,style:{textAlign:"center"}},c.a.createElement(k.a,{className:t.paper,style:{backgroundColor:"coral"}},e.data.errors_shares))),c.a.createElement(S.a,{container:!0,spacing:1},e.data.cards_fan.map((function(e,a){return c.a.createElement(S.a,{item:!0,xs:2,style:{textAlign:"center"},key:a.toString()},c.a.createElement(k.a,{className:t.paper,style:{fontSize:12,backgroundColor:e>80?"coral":"lime"}},e+"%"))}))),c.a.createElement(S.a,{container:!0,spacing:1},e.data.cards_mhs.map((function(e,a){return c.a.createElement(S.a,{item:!0,xs:2,style:{textAlign:"center"},key:a.toString()},c.a.createElement(k.a,{className:t.paper,style:{fontSize:12,backgroundColor:e<24?"coral":"lime"}},e+""))}))),c.a.createElement(S.a,{container:!0,spacing:1},e.data.cards_temp.map((function(e,a){return c.a.createElement(S.a,{item:!0,xs:2,style:{textAlign:"center"},key:a.toString()},c.a.createElement(k.a,{className:t.paper,style:{fontSize:12,backgroundColor:e>69?"coral":"lime"}},e," ",c.a.createElement("sup",null,"o"),"C"))}))),c.a.createElement(S.a,{container:!0,spacing:3,style:{marginTop:0}},c.a.createElement(S.a,{item:!0,xs:6,style:{textAlign:"center"}},c.a.createElement(L.a,{style:{width:"100%"},variant:"contained",color:"primary"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430")),c.a.createElement(S.a,{item:!0,xs:6,style:{textAlign:"center"}},c.a.createElement(_.b,{to:"/ferm/"+e.data.id_ferm},c.a.createElement(L.a,{style:{width:"100%"},variant:"contained"},"\u0410\u0440\u0445\u0438\u0432"))))))},R=function(){var e=Object(l.useContext)(C),t=e.statistic,a=e.get_statistic;Object(l.useEffect)((function(){a();var e=setInterval(a,6e4);return function(){clearInterval(e)}}),[]);return c.a.createElement(c.a.Fragment,null,t.data.map((function(e,t){return c.a.createElement(I,{key:t.toString(),data:e})})))},D=a(71),P=a.n(D),W=P()((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(5),width:"100%",height:300},textAlign:"center",verticalAlign:"middle"}}})),G=function(){var e=W();return c.a.createElement("div",{className:e.root},c.a.createElement(k.a,null,c.a.createElement("h1",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),c.a.createElement("p",null,"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: ",c.a.createElement("strong",null,"1.0.0"))))},B=a(40),F=a(10),U=a(236),z=a(237),M=a(233),H=a(78),V=a(254),J=a(234),$=a(232),q=a(118),K=a(112),Q=a.n(K),X=a(113),Y=a.n(X),Z=a(89),ee=a.n(Z),te=a(87),ae=a.n(te),ne=a(88),re=a.n(ne),le=a(114),ce=a.n(le),oe=a(235),ie=Object(w.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(F.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(F.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(m.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(m.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function se(){var e=Object(l.useContext)(v).logout,t=Object(l.useContext)(u).open,a=Object(l.useState)(!1),n=Object(s.a)(a,2),r=n[0],o=n[1];Object(l.useEffect)((function(){return o(!0)}),[]);var i=ie(),m=c.a.useState(null),p=Object(s.a)(m,2),d=p[0],g=p[1],E=c.a.useState(null),h=Object(s.a)(E,2),b=h[0],f=h[1],O=Boolean(d),y=Boolean(b),j=function(e){g(e.currentTarget)},x=function(){f(null)},A=function(){g(null),x()},T="primary-search-account-menu",C=c.a.createElement(q.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:T,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:A},c.a.createElement($.a,{onClick:A},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement($.a,{onClick:e},"\u0412\u044b\u0439\u0442\u0438")),w=c.a.createElement(q.a,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:x},c.a.createElement($.a,null,c.a.createElement(M.a,{"aria-label":"show 4 new mails",color:"inherit"},c.a.createElement(J.a,{badgeContent:4,color:"secondary"},c.a.createElement(ae.a,null))),c.a.createElement("p",null,"Messages")),c.a.createElement($.a,null,c.a.createElement(M.a,{"aria-label":"show 11 new notifications",color:"inherit"},c.a.createElement(J.a,{badgeContent:11,color:"secondary"},c.a.createElement(re.a,null))),c.a.createElement("p",null,"Notifications")),c.a.createElement($.a,{onClick:j},c.a.createElement(M.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},c.a.createElement(ee.a,null)),c.a.createElement("p",null,"Profile")));return c.a.createElement(oe.a,{in:r},c.a.createElement("div",{className:i.grow},c.a.createElement(U.a,{position:"static"},c.a.createElement(z.a,null,c.a.createElement(M.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"open drawer",onClick:t},c.a.createElement(Q.a,null)),c.a.createElement(H.a,{className:i.title,variant:"h6",noWrap:!0},"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),c.a.createElement("div",{className:i.search},c.a.createElement("div",{className:i.searchIcon},c.a.createElement(Y.a,null)),c.a.createElement(V.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})),c.a.createElement("div",{className:i.grow}),c.a.createElement("div",{className:i.sectionDesktop},c.a.createElement(M.a,{"aria-label":"show 4 new mails",color:"inherit"},c.a.createElement(J.a,{badgeContent:4,color:"secondary"},c.a.createElement(ae.a,null))),c.a.createElement(M.a,{"aria-label":"show 17 new notifications",color:"inherit"},c.a.createElement(J.a,{badgeContent:17,color:"secondary"},c.a.createElement(re.a,null))),c.a.createElement(M.a,{edge:"end","aria-label":"account of current user","aria-controls":T,"aria-haspopup":"true",onClick:j,color:"inherit"},c.a.createElement(ee.a,null))),c.a.createElement("div",{className:i.sectionMobile},c.a.createElement(M.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit"},c.a.createElement(ce.a,null))))),w,C))}var ue,me=a(253),pe=a(189),de=a(231),ge=a(115),Ee=a.n(ge),he=a(238),be=a(239),fe=a(90),ve=a.n(fe),Oe=a(116),ye=a.n(Oe),je=function(){var e=Object(l.useContext)(u),t=e.close,a=e.drawer;return c.a.createElement(me.a,{variant:"temporary",anchor:"left",open:a.open,onClose:t},c.a.createElement(de.a,null,c.a.createElement(_.b,{to:"/",exact:!0,activeClassName:ve.a.active,onClick:t},c.a.createElement(pe.a,{button:!0,style:{marginRight:20}},c.a.createElement(he.a,null,c.a.createElement(Ee.a,null)),c.a.createElement(be.a,{primary:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}))),c.a.createElement(_.b,{to:"/about",activeClassName:ve.a.active,onClick:t},c.a.createElement(pe.a,{button:!0,style:{marginRight:20}},c.a.createElement(he.a,null,c.a.createElement(ye.a,null)),c.a.createElement(be.a,{primary:"\u041e \u0441\u0430\u0439\u0442\u0435"})))))},xe=a(250),Ae=a(251),Te=a(241),Ce=a(240),we=P()((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:10,width:"100%"},textAlign:"center",verticalAlign:"middle",marginTop:"15%"},box_input:{margin:5},input:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginBottom:e.spacing(2),width:"70%"},button:{marginBottom:20}}})),ke=function(){var e=we(),t=Object(l.useContext)(v),a=t.auth,n=t.validLogin,r=t.validPass,o=t.login,i=t.error_auth,u=Object(l.useState)(""),m=Object(s.a)(u,2),p=m[0],d=m[1],g=Object(l.useState)(""),E=Object(s.a)(g,2),h=E[0],b=E[1],f=Object(l.useState)(!1),O=Object(s.a)(f,2),y=O[0],j=O[1];Object(l.useEffect)((function(){j(!0)}),[]);return c.a.createElement(Ce.a,{in:y},c.a.createElement("div",{className:e.root},c.a.createElement(k.a,null,c.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),c.a.createElement("div",{className:e.box_input},c.a.createElement(xe.a,{error:a.invalidLogin&&a.touchLogin,className:e.input,label:"\u041b\u043e\u0433\u0438\u043d",value:p,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",helperText:a.invalidLogin&&a.touchLogin?"\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":null,variant:"outlined",onChange:function(e){e.preventDefault(),n(e.target.value),d(e.target.value)}})),c.a.createElement("div",{className:e.box_input},c.a.createElement(xe.a,{error:a.invalidPass&&a.touchPass,className:e.input,label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",value:h,helperText:a.invalidPass&&a.touchPass?"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":null,variant:"outlined",onChange:function(e){e.preventDefault(),r(e.target.value),b(e.target.value)}})),c.a.createElement("div",{className:e.button},c.a.createElement(L.a,{variant:"contained",disabled:a.invalidLogin||a.invalidPass,onClick:function(){o(p,h)}},"\u0412\u043e\u0439\u0442\u0438")),a.loading?c.a.createElement(Te.a,null):null,null==a.error?null:c.a.createElement(Ae.a,{style:{margin:15},severity:"error",onClose:function(){return i(null)}},a.error))))},Se=a(248),Le=a(243),_e=a(247),Ne=a(246),Ie=a(242),Re=a(244),De=a(245),Pe=[{id:"name",label:"\u0414\u0430\u0442\u0430",align:"center"},{id:"fan",label:"FAN",align:"center"},{id:"mhs",label:"MHS",align:"center"},{id:"temp",label:"Temp",align:"center"}],We=Object(w.a)({root:{width:"100%",marginTop:20},container:{height:window.innerWidth>380?window.innerHeight-100:window.innerHeight-120}}),Ge=function(e){var t=We(),a=Object(l.useContext)(C),n=a.statistic,r=a.get_table;return Object(l.useEffect)((function(){r("2020-05-04",e.match.params.id)}),[]),c.a.createElement(k.a,{className:t.root},n.loading?c.a.createElement(Te.a,null):c.a.createElement(Ie.a,{className:t.container},c.a.createElement(Le.a,{stickyHeader:!0,"aria-label":"sticky table"},c.a.createElement(Re.a,null,c.a.createElement(De.a,null,Pe.map((function(e){return c.a.createElement(Ne.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),c.a.createElement(_e.a,null,n.table.map((function(e,t){return c.a.createElement(De.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t.toString()},c.a.createElement(Ne.a,{align:"center"},e.date),c.a.createElement(Ne.a,{align:"center",style:{backgroundColor:e.fan>80?"coral":"lime"}},e.fan),c.a.createElement(Ne.a,{align:"center",style:{backgroundColor:e.mhs<150?"coral":"lime"}},e.mhs),c.a.createElement(Ne.a,{align:"center",style:{backgroundColor:e.fan>65?"coral":"lime"}},e.temp))}))))))},Be=function(){var e=Object(l.useContext)(v),t=e.auth,a=e.autoLogon,n=c.a.createElement(B.d,null,c.a.createElement(B.b,{path:"/login",exact:!0,component:ke}),c.a.createElement(B.a,{to:"/login"}));return Object(l.useEffect)((function(){a()}),[]),t.isAuth&&(n=c.a.createElement(B.d,null,c.a.createElement(B.b,{path:"/about",component:G}),c.a.createElement(B.b,{path:"/ferm/:id",component:Ge}),c.a.createElement(B.b,{path:"/",exact:!0,component:R}),c.a.createElement(B.a,{to:"/"}))),c.a.createElement(c.a.Fragment,null,t.isAuth?c.a.createElement(se,null):null,t.isAuth?c.a.createElement(je,null):null,c.a.createElement(Se.a,{maxWidth:"md"},n))},Fe=a(249),Ue=(ue={},Object(m.a)(ue,"LOAD_STATISTIC_START",(function(e){return Object(p.a)({},e,{loading:!0})})),Object(m.a)(ue,"LOAD_STATISTIC_END",(function(e){return Object(p.a)({},e,{loading:!1})})),Object(m.a)(ue,"ERROR_STATISTIC",(function(e,t){return Object(p.a)({},e,{error:t.error})})),Object(m.a)(ue,"GET_STATISTIC",(function(e,t){return Object(p.a)({},e,{data:t.payload})})),Object(m.a)(ue,"GET_TABLE",(function(e,t){return Object(p.a)({},e,{table:t.table})})),Object(m.a)(ue,"DEFAULT",(function(e){return e})),ue),ze=function(e,t){return(Ue[t.type]||Ue.DEFAULT)(e,t)},Me=function(e){var t=e.children,a=Object(l.useReducer)(ze,{loading:!1,error:null,data:[],table:[]}),n=Object(s.a)(a,2),r=n[0],o=n[1],i=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),d(null),e.prev=2,e.next=5,x.a.get(A+"php/get_statistic.php");case 5:t=e.sent,console.log(t.data),p(),t.data.length>0?o({type:"GET_STATISTIC",payload:t.data}):d("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),p(),d("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(f.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),d(null),n={date:t,id:a},e.prev=3,e.next=6,x.a.post(A+"php/get_table.php",n);case 6:(r=e.sent).data.status?o({type:"GET_TABLE",table:r.data.table}):d("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),p(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),p(),d("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){o({type:"LOAD_STATISTIC_START"})},p=function(){o({type:"LOAD_STATISTIC_END"})},d=function(e){o({type:"ERROR_STATISTIC",error:e})};return c.a.createElement(C.Provider,{value:{get_statistic:i,error_statistic:d,get_table:u,statistic:r}},t)};var He=function(){return c.a.createElement(_.a,null,c.a.createElement(T,null,c.a.createElement(E,null,c.a.createElement(Me,null,c.a.createElement(Fe.a,null),c.a.createElement(Be,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.6d7121d4.chunk.js.map