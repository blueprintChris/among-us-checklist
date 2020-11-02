(this["webpackJsonpamong-us-checklist"]=this["webpackJsonpamong-us-checklist"]||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),i=t.n(a),c=t(12),s=t.n(c),o=t(16),u=Object(a.createContext)(),d=t(2),l=t(3);function f(){var e=Object(d.a)(["\n  font-size: 1rem;\n"]);return f=function(){return e},e}function m(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  height: 22px;\n  font-size: 20px;\n  color: white;\n  margin-top: 7px;\n  margin-bottom: 5px;\n"]);return m=function(){return e},e}function g(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  flex: 1;\n"]);return g=function(){return e},e}function p(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n"]);return p=function(){return e},e}function x(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n"]);return x=function(){return e},e}var b=l.c.div(x()),j=l.c.div(p()),h=l.c.div(g()),v=l.c.div(m()),O=l.c.div(f()),S=t(8),w=t(5);function y(){var e=Object(d.a)(["\n  max-height: 20px;\n  flex: 1;\n  border-radius: 5px;\n  border: 1px solid grey;\n  padding: 5px;\n  line-height: 1.2rem;\n  min-width: 200px;\n  font-family: 'Joffrey';\n  font-size: 25px;\n\n  @media only screen and (max-width: 630px) {\n    display: none;\n  }\n"]);return y=function(){return e},e}function A(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex: 1;\n  font-weight: 600;\n"]);return A=function(){return e},e}var D=l.c.div(A()),k=l.c.input(y());function C(){var e=Object(d.a)([""]);return C=function(){return e},e}function F(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding-left: 35px;\n  font-size: 25px;\n  max-height: 20px;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    height: 0;\n    width: 0;\n\n    &:disabled ~ "," {\n      background-color: grey;\n      cursor: default;\n    }\n\n    &:checked ~ "," {\n      background-color: ",";\n\n      &:after {\n        display: block;\n      }\n    }\n  }\n\n  "," {\n    &:after {\n      left: 9px;\n      top: 4px;\n      width: 5px;\n      height: 10px;\n      border: solid white;\n      border-width: 0 3px 3px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n  }\n"]);return F=function(){return e},e}function L(){var e=Object(d.a)(['\n  position: absolute;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 5px;\n  border: 1px solid black;\n  cursor: pointer;\n\n  &:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n']);return L=function(){return e},e}function z(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n"]);return z=function(){return e},e}var B=l.c.div(z()),E=l.c.span(L()),P=l.c.label(F(),E,E,(function(e){return e.colour}),E),I=l.c.input.attrs({type:"checkbox"})(C()),J=function(e){var n=e.crewmate,t=e.state,i=e.isActive,c=Object(a.useContext)(u),s=c.crewList,o=c.setCrewList;return Object(r.jsx)(B,{children:Object(r.jsxs)(P,{colour:n.states[t].colour,children:[n.states[t].name,Object(r.jsx)(I,{disabled:!i,onChange:function(e){var r=Object(w.a)({},n.states[t]);r.state=e.target.checked;var a=Object(w.a)({},n);a.states[t]=r;var i=Object(S.a)(s),c=i.indexOf(n);i.splice(c,1,a),console.log(i),o(i)}}),Object(r.jsx)(E,{})]})})},T=function(e){var n=e.isActive,t=e.crewmate;return Object(r.jsxs)(D,{children:[Object.keys(t.states).map((function(e){return Object(r.jsx)(J,{crewmate:t,state:e,isActive:n},t.states[e].name)})),Object(r.jsx)(k,{placeholder:"Notes...",disabled:!n})]})};function U(){var e=Object(d.a)(["\n  height: 100%;\n  position: absolute;\n  cursor: pointer;\n\n  ","\n\n  @media only screen and (max-width: 630px) {\n    height: 100%;\n  }\n"]);return U=function(){return e},e}function N(){var e=Object(d.a)(["\n  height: 100%;\n  width: 30px;\n  position: relative;\n  margin-right: 20px;\n\n  @media only screen and (max-width: 630px) {\n    margin-right: 30px;\n    margin-top: -5px;\n    width: 20px;\n  }\n"]);return N=function(){return e},e}function R(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid grey;\n  width: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  position: relative;\n  background-color: ",";\n\n  @media only screen and (max-width: 630px) {\n    padding: 5px 10px;\n  }\n"]);return R=function(){return e},e}var G=l.c.div(R(),(function(e){return e.isActive?"#cccccc":"grey"})),H=l.c.div(N()),M=l.c.img(U(),(function(e){return!e.isActive&&"opacity: 0.5;"})),W=function(e){var n=Object(a.useContext)(u),t=n.crewList,i=n.setCrewList,c=e.crewmate,s=c.src,o=c.deadSrc,d=c.colour;return Object(r.jsxs)(G,{colour:d,isActive:c.isActive,children:[Object(r.jsx)(H,{children:Object(r.jsx)(M,{src:c.states.isDead.state?o:s,isActive:c.isActive,onClick:function(){var e=Object(w.a)({},c);e.isActive=!e.isActive;var n=Object(S.a)(t),r=n.indexOf(c);n.splice(r,1,e),i(n)}})}),Object(r.jsx)(T,{isActive:c.isActive,crewmate:c})]})};function Y(){var e=Object(d.a)(["\n  height: 100%;\n"]);return Y=function(){return e},e}function q(){var e=Object(d.a)(["\n  height: 30px;\n  margin-right: 5px;\n\n  @media only screen and (max-width: 420px) {\n    margin-right: 5px;\n    height: 20px;\n  }\n\n  @media only screen and (max-width: 380px) {\n    margin-right: 4px;\n    height: 16px;\n  }\n"]);return q=function(){return e},e}var K=l.c.div(q()),Q=l.c.img(Y()),V=function(e){var n=e.imposter;return Object(r.jsx)(K,{children:Object(r.jsx)(Q,{src:n.src})})};function X(){var e=Object(d.a)(["\n  font-size: 20px;\n  color: white;\n  margin-right: 10px;\n"]);return X=function(){return e},e}function Z(){var e=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 10px 0;\n  align-items: center;\n  position: relative;\n"]);return Z=function(){return e},e}var $=l.c.div(Z()),_=l.c.div(X()),ee=function(){var e=Object(a.useContext)(u).crewList;return console.log(e),Object(r.jsxs)($,{children:[Object(r.jsx)(_,{children:"Potential Imposter(s): "}),e.map((function(e){return e.isActive&&!e.states.isDead.state&&!e.states.isSafe.state&&Object(r.jsx)(V,{imposter:e},e.name)}))]})},ne=function(e){var n=e.crew;return Object(r.jsx)(b,{children:Object(r.jsx)(j,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)(ee,{}),Object(r.jsxs)(v,{children:["Active Crewmates",Object(r.jsx)(O,{children:"\xa0(Tap on crewmate to add/remove from game)"})]}),n.map((function(e){return e.isActive&&Object(r.jsx)(W,{crewmate:e},e.name)})),Object(r.jsx)(v,{children:n.find((function(e){return!e.isActive}))&&"Inactive Crewmates"}),n.map((function(e){return!e.isActive&&Object(r.jsx)(W,{crewmate:e},e.name)}))]})})})};function te(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: baseline;\n  align-items: baseline;\n  height: 100%;\n  font-size: 3.5rem;\n  color: white;\n\n  @media only screen and (max-width: 630px) {\n    font-size: 2.1rem;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(d.a)(["\n  height: 100%;\n"]);return re=function(){return e},e}function ae(){var e=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  margin-bottom: 10px;\n\n  @media only screen and (max-width: 630px) {\n    height: 30px;\n  }\n"]);return ae=function(){return e},e}var ie=l.c.div(ae()),ce=l.c.img(re()),se=l.c.div(te()),oe=function(){return Object(r.jsxs)(ie,{children:[Object(r.jsx)(ce,{src:"images/logo-white.png"}),Object(r.jsx)(se,{children:"mong Us: Crewmate Checklist"})]})};function ue(){var e=Object(d.a)(["\n  width: 100%;\n  border: 1px solid black;\n  max-width: 720px;\n  display: flex;\n  flex-direction: column;\n"]);return ue=function(){return e},e}function de(){var e=Object(d.a)(["\nbackground: url('images/space-tile.gif');\n  display: flex;\n  justify-content: center;\n  min-width: 330px;\n  padding: 20px;\n  height: calc(100vh - 40px);\n"]);return de=function(){return e},e}var le=l.c.div(de()),fe=l.c.div(ue()),me=[{name:"Red",src:"images/red.png",deadSrc:"images/red-dead.png",colour:"#c51111",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Blue",src:"images/blue.png",deadSrc:"images/blue-dead.png",colour:"#132FD2",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Green",src:"images/green.png",deadSrc:"images/green-dead.png",colour:"#127F2D",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Pink",src:"images/pink.png",deadSrc:"images/pink-dead.png",colour:"#ED54BA",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Orange",src:"images/orange.png",deadSrc:"images/orange-dead.png",colour:"#f17d0e",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Yellow",src:"images/yellow.png",deadSrc:"images/yellow-dead.png",colour:"#f3f457",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Black",src:"images/black.png",deadSrc:"images/black-dead.png",colour:"#3F484E",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"White",src:"images/white.png",deadSrc:"images/white-dead.png",colour:"#D6E0F0",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Purple",src:"images/purple.png",deadSrc:"images/purple-dead.png",colour:"#6A2FB9",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Brown",src:"images/brown.png",deadSrc:"images/brown-dead.png",colour:"#72491E",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Cyan",src:"images/cyan.png",deadSrc:"images/cyan-dead.png",colour:"#38fedc",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}},{name:"Lime",src:"images/lime.png",deadSrc:"images/lime-dead.png",colour:"#51EF39",isActive:!0,states:{isSafe:{name:"Safe",colour:"green",state:!1},isSus:{name:"Sus",colour:"orange",state:!1},isDead:{name:"Dead",colour:"red",state:!1}}}];var ge=function(){var e=Object(a.useState)(me),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(r.jsx)(le,{children:Object(r.jsx)(u.Provider,{value:{crewList:t,setCrewList:i},children:Object(r.jsxs)(fe,{children:[Object(r.jsx)(oe,{}),Object(r.jsx)(ne,{crew:t})]})})})},pe=t.p+"static/media/joffrey.f37f1be1.ttf";function xe(){var e=Object(d.a)(["\n  body {\n    margin: 0;\n    font-family: Joffrey, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    height: calc(100vh - 40px);\n    min-height: calc(100vh - 40px);\n  }\n\n  ",";\n"]);return xe=function(){return e},e}function be(){var e=Object(d.a)(["\n  @font-face {\n    font-family: 'Joffrey';\n    src: url(",") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n"]);return be=function(){return e},e}var je=Object(l.b)(be(),pe),he=Object(l.a)(xe(),je),ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};s.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(he,{}),Object(r.jsx)(ge,{})]}),document.getElementById("root")),ve()}},[[24,1,2]]]);
//# sourceMappingURL=main.6bb54cf1.chunk.js.map