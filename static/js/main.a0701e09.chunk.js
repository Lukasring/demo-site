(this["webpackJsonpdemo-site"]=this["webpackJsonpdemo-site"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={TitleWrapper:"SectionTitle_TitleWrapper__hOqH9",SectionTitle:"SectionTitle_SectionTitle__3Eqo9",Underline:"SectionTitle_Underline__3WIsO",Dark:"SectionTitle_Dark__1-_1r",SectionSubtitle:"SectionTitle_SectionSubtitle__2my9-"}},,,function(e,t,a){e.exports={Header:"Header_Header__3iIcW",Title:"Header_Title__1AYqt",Bold:"Header_Bold__2m4yW",TopItems:"Header_TopItems__2id-C",Content:"Header_Content__IaF15"}},,,,function(e,t,a){e.exports={ContentCard:"ContentCard_ContentCard__3MA63",Content:"ContentCard_Content__2pKwT",Title:"ContentCard_Title__18RHe",ImgContainer:"ContentCard_ImgContainer__1_JzX"}},function(e,t,a){e.exports={ThumbnailCard:"ThumbnailCard_ThumbnailCard__1H_dl",ImgWrapper:"ThumbnailCard_ImgWrapper__17rsT",TitleWrapper:"ThumbnailCard_TitleWrapper__Mx9Ip",Title:"ThumbnailCard_Title__8k79f"}},,function(e,t,a){e.exports={Btn:"Button_Btn__3vFzC",Inverted:"Button_Inverted__1qAzp",fullwidth:"Button_fullwidth__368D9"}},function(e,t,a){e.exports={HeroCard:"HeroCard_HeroCard__U4MmA",Title:"HeroCard_Title__Rh9Z5",Content:"HeroCard_Content__39BnG",Control:"HeroCard_Control__39BLJ",Btn:"HeroCard_Btn__26Dga"}},function(e,t,a){e.exports={Section:"Section_Section__1NJiK",SmallLarge:"Section_SmallLarge__3jnjk",LargeSmall:"Section_LargeSmall__2C0rl"}},function(e,t,a){e.exports={Paragraph:"Paragraph_Paragraph__1ZFsb",noMargin:"Paragraph_noMargin__12xeD",largeMargin:"Paragraph_largeMargin__361PY"}},,,,function(e,t,a){e.exports={HeaderTop:"HeaderTop_HeaderTop__1x5tC",Item:"HeaderTop_Item__EpHmc"}},,,function(e,t,a){e.exports={NavItem:"NavItem_NavItem__3ZFC9",active:"NavItem_active__2HgvD"}},function(e,t,a){e.exports={NavBar:"NavBar_NavBar__11JOt",open:"NavBar_open__23qp0"}},function(e,t,a){e.exports={Footer:"Footer_Footer__3tlFM",Bold:"Footer_Bold__X57jk"}},,,,,,,,,,,,,function(e,t,a){e.exports={Hamburger:"HamburgerBtn_Hamburger__2uaMK"}},function(e,t,a){e.exports={Dropdown:"Dropdown_Dropdown__HQPIM","fade-in":"Dropdown_fade-in__ggwwW"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3oIS5"}},function(e,t,a){e.exports={Content:"Layout_Content__26VE_"}},,,function(e,t,a){e.exports={Loader:"Spinner_Loader__1tcr3",load6:"Spinner_load6__gYURt",round:"Spinner_round__3hs-7"}},function(e,t,a){e.exports={BannerCard:"BannerCard_BannerCard__3ma_y"}},function(e,t,a){e.exports={Article:"Article_Article__2ICe6"}},function(e,t,a){e.exports={ContactForm:"ContactForm_ContactForm__2Hq3V"}},function(e,t,a){e.exports={Column:"Column_Column__3uVFI"}},function(e,t,a){e.exports={ContentPageHeader:"ContentPageHeader_ContentPageHeader__3LKWp"}},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(19),i=a.n(r),c=(a(61),a(4)),s=a(3),o="TOGGLE_MOBILE_NAV",l="MOBILE_NAV_CLOSE",d=function(){return{type:l}},u=a(15),m=[{name:"Home",path:"/"},{name:"Service",path:"/service"},{name:"Works",path:"/works",dropdown:[{name:"All",path:"/works/all"},{name:"Graphic",path:"/works/graphic"},{name:"Design",path:"/works/design"},{name:"Logo",path:"/works/logo"},{name:"Website",path:"/works/website"}]},{name:"About Me",path:"/about-me",dropdown:[{name:"History",path:"/about-me/history"},{name:"Education",path:"/about-me/education"},{name:"Current work",path:"/works/current-work"}]},{name:"Contact",path:"/contact"}],j=[{name:"menu",path:"/menu"},{name:"some text",path:"/some-text"},{name:"another item",path:"/another-item"},{name:"one more",path:"/one-more"},{name:"last one",path:"/last-one"}],p=a(27),b=a.n(p),h=a(0);function _(e){var t=e.items;return Object(h.jsx)("div",{className:b.a.HeaderTop,children:null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(c.b,{to:e.path,className:b.a.Item,children:e.name})}))})}var x=a(13),O=a.n(x);function v(e){var t=e.titleBold,a=e.titleLight,n=(e.link,e.topItems),r=e.children;return Object(h.jsxs)("header",{className:O.a.Header,children:[Object(h.jsx)("div",{className:O.a.TopItems,children:n&&Object(h.jsx)(_,{items:n})}),Object(h.jsxs)("div",{className:O.a.Content,children:[Object(h.jsxs)(c.b,{to:"/",className:O.a.Title,children:[Object(h.jsx)("span",{className:O.a.Bold,children:t}),a]}),r]})]})}var g=a(45),f=a.n(g);function C(e){var t=e.clicked;return Object(h.jsxs)("div",{className:f.a.Hamburger,onClick:t,children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})}var N=a(16),k=a(46),T=a.n(k);function S(e){var t=e.items,a=e.clicked;return t?Object(h.jsx)("ul",{className:T.a.Dropdown,children:null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{onClick:a,children:Object(h.jsx)(c.b,{to:e.path,children:e.name})},e.path)}))}):null}var w=a(30),H=a.n(w);function I(e){var t=e.path,a=e.dropdownItems,r=(e.clicked,e.children),i=Object(n.useState)(!1),s=Object(N.a)(i,2),o=s[0],l=s[1];return Object(h.jsxs)("li",{onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)},children:[Object(h.jsx)(c.c,{to:t,exact:"/"===t,className:H.a.NavItem,activeClassName:H.a.active,children:r}),o&&Object(h.jsx)(S,{items:a,clicked:function(){l(!1)}})]})}var B=a(31),L=a.n(B);function E(e){var t=e.mobileOpen,a=e.clicked,n=e.links,r=[L.a.NavBar];return t&&r.push(L.a.open),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:r.join(" "),onClick:a,children:null===n||void 0===n?void 0:n.map((function(e){return Object(h.jsx)(I,{path:e.path,dropdownItems:null===e||void 0===e?void 0:e.dropdown,children:e.name},e.path)}))})})}var y=a(32),F=a.n(y);function D(){return Object(h.jsxs)("footer",{className:F.a.Footer,children:["\xa9\ufe0f ",Object(h.jsx)("span",{className:F.a.Bold,children:"DEMO"}),"SITE All rights reserved"]})}var M=a(47),q=a.n(M);function A(e){var t=e.clicked;return Object(n.useEffect)((function(){return document.body.classList.add("no-scroll"),function(){document.body.classList.remove("no-scroll")}}),[]),Object(h.jsx)("div",{className:q.a.Backdrop,onClick:t})}var W=a(48),P=a.n(W);function U(e){var t=e.children,a=Object(s.f)().pathname;Object(n.useEffect)((function(){console.log(a)}),[a]);var r=Object(u.c)((function(e){return e.mobileNavOpen})),i=Object(u.b)();return Object(h.jsxs)(h.Fragment,{children:[r&&Object(h.jsx)(A,{clicked:function(){return i(d())}}),Object(h.jsxs)(v,{titleBold:"demo",titleLight:"site",link:"./",topItems:j,children:[Object(h.jsx)(E,{links:m,mobileOpen:r,clicked:function(){return i(d())}}),Object(h.jsx)(C,{clicked:function(){return i({type:o})}})]}),Object(h.jsx)("main",{className:P.a.Content,children:t}),Object(h.jsx)(D,{})]})}var V=a(10),J=a.n(V);function X(e){var t=e.underline,a=e.dark,n=e.subtitle,r=e.children,i=J.a.SectionTitle,c=J.a.SectionSubtitle;return i=t?i+" "+J.a.Underline:i,i=a?i+" "+J.a.Dark:i,c=a?c+" "+J.a.Dark:c,Object(h.jsxs)("div",{className:J.a.TitleWrapper,children:[Object(h.jsx)("h2",{className:i,children:r}),n?Object(h.jsx)("h3",{className:c,children:n}):null]})}var G=a(20),R=a.n(G);function K(e){var t=e.link,a=e.inverted,n=e.fullwidth,r=e.children,i=e.onClick,s=R.a.Btn;return s=a?s+" "+R.a.Inverted:s,s=n?s+" "+R.a.fullwidth:s,t?Object(h.jsx)(c.b,{to:t,className:s,children:r}):Object(h.jsx)("button",{className:s,onClick:i,children:r})}var Y=a(21),z=a.n(Y);function Q(e){var t=e.title,a=e.children;return Object(h.jsxs)("div",{className:z.a.HeroCard,children:[Object(h.jsx)(X,{underline:!0,children:t}),Object(h.jsx)("div",{className:z.a.Content,children:a}),Object(h.jsx)("div",{className:z.a.Control,children:Object(h.jsx)(K,{children:"Learn more"})})]})}var Z=a(17),$=a.n(Z);function ee(e){var t=e.img,a=e.title,n=e.children;return Object(h.jsxs)("div",{className:$.a.ContentCard,children:[Object(h.jsx)("div",{className:$.a.ImgContainer,style:{backgroundImage:"url('".concat(t,"')")}}),Object(h.jsxs)("div",{className:$.a.Content,children:[Object(h.jsx)("h3",{className:$.a.Title,children:a}),n]})]})}var te=a(33),ae=a.n(te),ne=a(49),re=a(50),ie=a.n(re),ce=a(51),se=a.n(ce);function oe(){return Object(h.jsx)("div",{className:se.a.Loader})}var le=a(52),de=a.n(le),ue=a.p+"static/media/umbrella.912f9ad4.svg",me=a.p+"static/media/snowflake.4f0765e0.svg",je=a.p+"static/media/sunglasses.3e12923e.svg";function pe(){var e=Object(n.useState)(!0),t=Object(N.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(),c=Object(N.a)(i,2),s=c[0],o=c[1];function l(e){switch(e){case"clear":case"isolated-clouds":case"scattered-clouds":case"na":o(je);break;case"overcast":case"light-rain":case"moderate-rain":case"heavy-rain":case"fog":o(ue);break;case"sleet":case"light-snow":case"moderate-snow":case"heavy-snow":o(me);break;default:o(je)}}return Object(n.useEffect)((function(){(function(){var e=Object(ne.a)(ae.a.mark((function e(){var t,a,n,i,c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.a.get("/v1/places/vilnius/forecasts/long-term");case 3:t=e.sent,a=new Date,n=a.getUTCDate().toString(),i=a.getUTCHours().toString(),c=t.data.forecastTimestamps.find((function(e){return e.forecastTimeUtc.match("".concat(n," ").concat(i))})).conditionCode,console.log(c),l(c),r(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0.message),o(je),r(!1);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{className:de.a.BannerCard,children:a?Object(h.jsx)(oe,{}):Object(h.jsx)("img",{src:s,alt:"umbrella"})})}var be=a(18),he=a.n(be);function _e(e){var t=e.img,a=e.title;return Object(h.jsx)("div",{className:he.a.ThumbnailCard,children:Object(h.jsx)("div",{className:he.a.ImgWrapper,style:{backgroundImage:"url('".concat(t,"')")},children:Object(h.jsx)("div",{className:he.a.TitleWrapper,children:Object(h.jsx)("h3",{className:he.a.Title,children:a})})})})}var xe=a(53),Oe=a.n(xe);function ve(e){var t=e.children;return Object(h.jsx)("div",{className:Oe.a.Article,children:t})}var ge=a(54),fe=a.n(ge),Ce=function(e){e.preventDefault(),console.warn("Please Add submitHandler to ContactForm component!")};function Ne(e){var t=e.submitHandler,a=void 0===t?Ce:t;return Object(h.jsxs)("form",{className:fe.a.ContactForm,onSubmit:a,children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",id:"name"}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{type:"text",name:"email",id:"email"}),Object(h.jsx)("label",{htmlFor:"msg",children:"Message"}),Object(h.jsx)("textarea",{type:"text",name:"msg",id:"msg",rows:"10"}),Object(h.jsx)(K,{inverted:!0,fullwidth:!0,children:"Learn More"})]})}var ke=a(22),Te=a.n(ke),Se="small-large",we="large-small";function He(e){var t=e.children,a=e.layout,n=(e.Title,[Te.a.Section]);return a===Se&&n.push(Te.a.SmallLarge),a===we&&n.push(Te.a.LargeSmall),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{className:n.join(" "),children:t})})}var Ie=a(55),Be=a.n(Ie);function Le(e){var t=e.children;return Object(h.jsx)("div",{className:Be.a.Column,children:t})}var Ee=a(23),ye=a.n(Ee);function Fe(e){var t=e.placeholder,a=e.margin,n=e.children,r=[ye.a.Paragraph];switch(a){case"none":r.push(ye.a.noMargin);break;case"large":r.push(ye.a.largeMargin)}return t?Object(h.jsx)("p",{className:r.join(" "),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}):Object(h.jsx)("p",{className:r.join(" "),children:n})}var De=a.p+"static/media/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.0f9eb904.jpg",Me=a.p+"static/media/bruno-cervera-YH7mGnigHRs-unsplash 1 1.77fb0d7a.jpg",qe=a.p+"static/media/vandan-patel-vfiuGpL9fiU-unsplash 1 1.575c78bc.jpg";function Ae(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(He,{layout:Se,children:[Object(h.jsx)(Q,{title:"Welcome",children:Object(h.jsx)(Fe,{placeholder:!0,margin:"none"})}),Object(h.jsxs)(ee,{img:De,title:"UI/UX Design",children:[Object(h.jsx)(Fe,{placeholder:!0}),Object(h.jsx)(Fe,{placeholder:!0})]})]}),Object(h.jsx)(X,{subtitle:"offers today",dark:!0,children:"Products"}),Object(h.jsxs)(He,{children:[Object(h.jsx)(pe,{}),Object(h.jsxs)(Le,{children:[Object(h.jsx)(_e,{img:Me,title:"THE BEST COFFE"}),Object(h.jsx)(_e,{img:qe,title:"TOP 100 BOOKS"})]})]}),Object(h.jsx)(X,{underline:!0,dark:!0,children:"Contact"}),Object(h.jsxs)(He,{layout:we,children:[Object(h.jsxs)(ve,{title:"Contact",children:[Object(h.jsx)(Fe,{placeholder:!0}),Object(h.jsx)(Fe,{placeholder:!0}),Object(h.jsx)(Fe,{placeholder:!0})]}),Object(h.jsx)(Ne,{})]})]})}var We=a(56),Pe=a.n(We);function Ue(e){var t=e.children,a=e.link;return Object(h.jsxs)("div",{className:Pe.a.ContentPageHeader,children:[Object(h.jsx)(X,{dark:!0,underline:!0,children:t}),Object(h.jsx)(K,{inverted:!0,link:a,children:"\u2190 Back"})]})}function Ve(){var e=Object(s.g)(),t=e.page,a=e.subpage,n=a||t;return n=n.replaceAll("-"," "),Object(h.jsxs)("div",{children:[Object(h.jsx)(Ue,{children:n}),Object(h.jsxs)(ve,{children:[Object(h.jsx)(Fe,{margin:"large",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisi est sit amet facilisis magna etiam. Sit amet nisl purus in mollis nunc sed id semper. Cursus metus aliquam eleifend mi in nulla. Augue lacus viverra vitae congue eu. Amet luctus venenatis lectus magna fringilla. Sodales ut etiam sit amet nisl purus in mollis. Quam id leo in vitae. Laoreet id donec ultrices tincidunt. Nam libero justo laoreet sit amet cursus sit. Consequat interdum varius sit amet mattis vulputate. Justo eget magna fermentum iaculis. Sit amet nisl purus in mollis nunc sed. Ornare lectus sit amet est placerat in egestas. Ut diam quam nulla porttitor massa id neque aliquam. Et tortor consequat id porta nibh venenatis cras sed felis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus. A condimentum vitae sapien pellentesque habitant morbi."}),Object(h.jsx)(Fe,{placeholder:!0,margin:"large"}),Object(h.jsx)(Fe,{placeholder:!0,margin:"large"}),Object(h.jsx)(Fe,{placeholder:!0,margin:"large"})]})]})}var Je=function(){return Object(h.jsx)(c.a,{children:Object(h.jsx)(U,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/demo-site",children:Object(h.jsx)(Ae,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/:page/:subpage",children:Object(h.jsx)(Ve,{})}),Object(h.jsx)(s.a,{path:"/:page",children:Object(h.jsx)(Ve,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)(Ae,{})})]})})})},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return!e;case l:return!1;default:return e}},Ge=a(12),Re=Object(Ge.b)({mobileNavOpen:Xe}),Ke=Object(Ge.c)(Re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(h.jsx)(u.a,{store:Ke,children:Object(h.jsx)(Je,{})}),document.getElementById("root"))}],[[91,1,2]]]);
//# sourceMappingURL=main.a0701e09.chunk.js.map