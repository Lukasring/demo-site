(this["webpackJsonpdemo-site"]=this["webpackJsonpdemo-site"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={TitleWrapper:"SectionTitle_TitleWrapper__hOqH9",SectionTitle:"SectionTitle_SectionTitle__3Eqo9",Underline:"SectionTitle_Underline__3WIsO",Dark:"SectionTitle_Dark__1-_1r",SectionSubtitle:"SectionTitle_SectionSubtitle__2my9-"}},,function(e,t,n){e.exports={Header:"Header_Header__3iIcW",Title:"Header_Title__1AYqt",Bold:"Header_Bold__2m4yW",Content:"Header_Content__IaF15"}},function(e,t,n){e.exports={ContentCard:"ContentCard_ContentCard__3MA63",Content:"ContentCard_Content__2pKwT",Title:"ContentCard_Title__18RHe",ImgContainer:"ContentCard_ImgContainer__1_JzX"}},function(e,t,n){e.exports={ThumbnailCard:"ThumbnailCard_ThumbnailCard__1H_dl",ImgWrapper:"ThumbnailCard_ImgWrapper__17rsT",TitleWrapper:"ThumbnailCard_TitleWrapper__Mx9Ip",Title:"ThumbnailCard_Title__8k79f"}},function(e,t,n){e.exports={Btn:"Button_Btn__3vFzC",Inverted:"Button_Inverted__1qAzp",fullwidth:"Button_fullwidth__368D9"}},function(e,t,n){e.exports={HeroCard:"HeroCard_HeroCard__U4MmA",Title:"HeroCard_Title__Rh9Z5",Content:"HeroCard_Content__39BnG",Control:"HeroCard_Control__39BLJ",Btn:"HeroCard_Btn__26Dga"}},function(e,t,n){e.exports={Section:"Section_Section__1NJiK",SmallLarge:"Section_SmallLarge__3jnjk",LargeSmall:"Section_LargeSmall__2C0rl"}},,,,,function(e,t,n){e.exports={NavBar:"NavBar_NavBar__11JOt",open:"NavBar_open__23qp0"}},function(e,t,n){e.exports={Footer:"Footer_Footer__3tlFM",Bold:"Footer_Bold__X57jk"}},,function(e,t,n){e.exports={Article:"Article_Article__2ICe6",Content:"Article_Content__2jf-T"}},,,,,,,,,,function(e,t,n){e.exports={Hamburger:"HamburgerBtn_Hamburger__2uaMK"}},function(e,t,n){e.exports={Dropdown:"Dropdown_Dropdown__HQPIM","fade-in":"Dropdown_fade-in__ggwwW"}},,function(e,t,n){e.exports={NavItem:"NavItem_NavItem__3ZFC9"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3oIS5"}},function(e,t,n){e.exports={Content:"Layout_Content__26VE_"}},,,function(e,t,n){e.exports={Loader:"Spinner_Loader__1tcr3",load6:"Spinner_load6__gYURt",round:"Spinner_round__3hs-7"}},function(e,t,n){e.exports={BannerCard:"BannerCard_BannerCard__3ma_y"}},function(e,t,n){e.exports={ContactForm:"ContactForm_ContactForm__2Hq3V"}},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(35),c=n.n(r),o=(n(51),n(8)),s=n(2),l=n(9),d=n(13),u=n.n(d),m=n(0);function j(e){var t=e.titleBold,n=e.titleLight,a=(e.link,e.children);return Object(m.jsx)("header",{className:u.a.Header,children:Object(m.jsxs)("div",{className:u.a.Content,children:[Object(m.jsxs)("h2",{className:u.a.Title,children:[Object(m.jsx)("span",{className:u.a.Bold,children:t}),n]}),a]})})}var b=n(36),p=n.n(b);function h(e){var t=e.clicked;return Object(m.jsxs)("div",{className:p.a.Hamburger,onClick:t,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})}var _=n(37),x=n.n(_);function O(e){var t=e.items,n=e.clicked;return t?Object(m.jsx)("ul",{className:x.a.Dropdown,children:null===t||void 0===t?void 0:t.map((function(e){return Object(m.jsx)("li",{onClick:n,children:Object(m.jsx)(o.b,{to:e.path,children:e.name})},e.path)}))}):null}var v=n(39),f=n.n(v);function g(e){var t=e.path,n=e.dropdownItems,i=(e.clicked,e.children),r=Object(a.useState)(!1),c=Object(l.a)(r,2),s=c[0],d=c[1];return Object(m.jsxs)("li",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:[Object(m.jsx)(o.c,{to:t,className:f.a.NavItem,children:i}),s&&Object(m.jsx)(O,{items:n,clicked:function(){d(!1)}})]})}var C=n(23),k=n.n(C),N=[{name:"Home",path:"/"},{name:"Service",path:"/service"},{name:"Works",path:"/works",dropdown:[{name:"All",path:"/works/all"},{name:"Graphic",path:"/works/graphic"},{name:"Design",path:"/works/design"},{name:"Logo",path:"/works/logo"},{name:"Website",path:"/works/website"}]},{name:"About Me",path:"about-me",dropdown:[{name:"History",path:"/about-me/history"},{name:"Education",path:"/about-me/education"},{name:"Current work",path:"/works/current-work"}]},{name:"Contact",path:"contact"}];function T(e){var t=e.mobileOpen,n=e.clicked,a=[k.a.NavBar];return t&&a.push(k.a.open),Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{className:a.join(" "),onClick:n,children:N.map((function(e){return Object(m.jsx)(g,{path:e.path,dropdownItems:null===e||void 0===e?void 0:e.dropdown,children:e.name},e.path)}))})})}var S=n(24),w=n.n(S);function B(){return Object(m.jsxs)("div",{className:w.a.Footer,children:["\xa9\ufe0f ",Object(m.jsx)("span",{className:w.a.Bold,children:"DEMO"}),"SITE All rights reserved"]})}var H=n(40),q=n.n(H);function I(e){var t=e.clicked;return Object(m.jsx)("div",{className:q.a.Backdrop,onClick:t})}var L=n(41),F=n.n(L);function y(e){var t=e.children,n=Object(a.useState)(!1),i=Object(l.a)(n,2),r=i[0],c=i[1],o=function(){c(!1)};return Object(m.jsxs)(m.Fragment,{children:[r&&Object(m.jsx)(I,{clicked:o}),Object(m.jsxs)(j,{titleBold:"demo",titleLight:"site",link:"./",children:[Object(m.jsx)(T,{mobileOpen:r,clicked:o}),Object(m.jsx)(h,{clicked:function(){c((function(e){return!e}))}})]}),Object(m.jsx)("main",{className:F.a.Content,children:t}),Object(m.jsx)(B,{})]})}var D=n(11),U=n.n(D);function W(e){var t=e.underline,n=e.dark,a=e.subtitle,i=e.children,r=U.a.SectionTitle,c=U.a.SectionSubtitle;return r=t?r+" "+U.a.Underline:r,r=n?r+" "+U.a.Dark:r,c=n?c+" "+U.a.Dark:c,Object(m.jsxs)("div",{className:U.a.TitleWrapper,children:[Object(m.jsx)("h2",{className:r,children:i}),a?Object(m.jsx)("h3",{className:c,children:a}):null]})}var A=n(16),M=n.n(A);function E(e){e.link;var t=e.inverted,n=e.fullwidth,a=e.children,i=M.a.Btn;return i=t?i+" "+M.a.Inverted:i,i=n?i+" "+M.a.fullwidth:i,Object(m.jsx)("button",{className:i,children:a})}var J=n(17),G=n.n(J);function K(){return Object(m.jsxs)("div",{className:G.a.HeroCard,children:[Object(m.jsx)(W,{underline:!0,children:"Welcome"}),Object(m.jsx)("p",{className:G.a.Content,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(m.jsx)("div",{className:G.a.Control,children:Object(m.jsx)(E,{children:"Learn more"})})]})}var P=n(14),R=n.n(P);function Y(e){var t=e.img;return Object(m.jsxs)("div",{className:R.a.ContentCard,children:[Object(m.jsx)("div",{className:R.a.ImgContainer,style:{backgroundImage:"url('".concat(t,"')")}}),Object(m.jsxs)("div",{className:R.a.Content,children:[Object(m.jsx)("h3",{className:R.a.Title,children:"Ui/UX Design"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}var z=n(25),V=n.n(z),X=n(42),Q=n(43),Z=n.n(Q),$=n(44),ee=n.n($);function te(){return Object(m.jsx)("div",{className:ee.a.Loader})}var ne=n(45),ae=n.n(ne),ie=n.p+"static/media/umbrella.912f9ad4.svg",re=n.p+"static/media/snowflake.4f0765e0.svg",ce=n.p+"static/media/sunglasses.3e12923e.svg";function oe(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(),c=Object(l.a)(r,2),o=c[0],s=c[1];function d(e){switch(e){case"clear":case"isolated-clouds":case"scattered-clouds":case"na":s(ce);break;case"overcast":case"light-rain":case"moderate-rain":case"heavy-rain":case"fog":s(ie);break;case"sleet":case"light-snow":case"moderate-snow":case"heavy-snow":s(re);break;default:s(ce)}}return Object(a.useEffect)((function(){(function(){var e=Object(X.a)(V.a.mark((function e(){var t,n,a,r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("/v1/places/vilnius/forecasts/long-term");case 3:t=e.sent,n=new Date,a=n.getUTCDate().toString(),r=n.getUTCHours().toString(),c=t.data.forecastTimestamps.find((function(e){return e.forecastTimeUtc.match("".concat(a," ").concat(r))})).conditionCode,console.log(c),d(c),i(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0.message),s(ce),i(!1);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)("div",{className:ae.a.BannerCard,children:n?Object(m.jsx)(te,{}):Object(m.jsx)("img",{src:o,alt:"umbrella"})})}var se=n(15),le=n.n(se);function de(e){var t=e.img,n=e.title;return Object(m.jsx)("div",{className:le.a.ThumbnailCard,children:Object(m.jsx)("div",{className:le.a.ImgWrapper,style:{backgroundImage:"url('".concat(t,"')")},children:Object(m.jsx)("div",{className:le.a.TitleWrapper,children:Object(m.jsx)("h3",{className:le.a.Title,children:n})})})})}var ue=n(26),me=n.n(ue);function je(){return Object(m.jsx)("div",{className:me.a.Article,children:Object(m.jsxs)("div",{className:me.a.Content,children:[Object(m.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."," "]}),Object(m.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."," "]}),Object(m.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."," "]})]})})}var be=n(46),pe=n.n(be),he=function(e){e.preventDefault(),console.warn("Please Add submitHandler to ContactForm component!")};function _e(e){var t=e.submitHandler,n=void 0===t?he:t;return Object(m.jsxs)("form",{className:pe.a.ContactForm,onSubmit:n,children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",id:"name"}),Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"text",name:"email",id:"email"}),Object(m.jsx)("label",{htmlFor:"msg",children:"Message"}),Object(m.jsx)("textarea",{type:"text",name:"msg",id:"msg",rows:"10"}),Object(m.jsx)(E,{inverted:!0,fullwidth:!0,children:"Learn More"})]})}var xe=n(18),Oe=n.n(xe),ve="small-large",fe="large-small";function ge(e){var t=e.children,n=e.layout,a=[Oe.a.Section];return n===ve&&a.push(Oe.a.SmallLarge),n===fe&&a.push(Oe.a.LargeSmall),Object(m.jsx)("section",{className:a.join(" "),children:t})}var Ce=n.p+"static/media/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.0f9eb904.jpg",ke=n.p+"static/media/bruno-cervera-YH7mGnigHRs-unsplash 1 1.77fb0d7a.jpg",Ne=n.p+"static/media/vandan-patel-vfiuGpL9fiU-unsplash 1 1.575c78bc.jpg";function Te(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(ge,{layout:ve,children:[Object(m.jsx)(K,{}),Object(m.jsx)(Y,{img:Ce})]}),Object(m.jsx)(W,{subtitle:"offers today",dark:!0,children:"Products"}),Object(m.jsxs)(ge,{children:[Object(m.jsx)(oe,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)(de,{img:ke,title:"THE BEST COFFE"}),Object(m.jsx)(de,{img:Ne,title:"TOP 100 BOOKS"})]})]}),Object(m.jsx)(W,{underline:!0,dark:!0,children:"Contact"}),Object(m.jsxs)(ge,{layout:fe,children:[Object(m.jsx)(je,{title:"Contact"}),Object(m.jsx)(_e,{})]})]})}function Se(){console.log(Object(s.g)()),console.log(Object(s.f)());var e=Object(s.f)().page;return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:e})})}n(80);var we=function(){return Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(y,{children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{path:"/demo-page",children:Object(m.jsx)(Te,{})}),Object(m.jsx)(s.a,{path:"/:page",children:Object(m.jsx)(Se,{})}),Object(m.jsx)(s.a,{exact:!0,path:"/",children:Object(m.jsx)(Te,{})})]})})})})};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(we,{})}),document.getElementById("root"))}],[[81,1,2]]]);
//# sourceMappingURL=main.ba23e685.chunk.js.map