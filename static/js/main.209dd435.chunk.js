(this["webpackJsonpqr-scanner"]=this["webpackJsonpqr-scanner"]||[]).push([[0],{206:function(e,t,n){e.exports=n(291)},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(107),o=n.n(c),u=n(68),i=n(36),l=n(29),f=n(37),s=n(28),m=n(49),d=n(26),p=n(46),b=n(5);function v(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tmargin-bottom: 15px;\n\toption {\n\t\theight: 20px;\n\t}\n"]);return v=function(){return e},e}function g(){var e=Object(l.a)(["\n\tpadding: 5px;\n"]);return g=function(){return e},e}function h(){var e=Object(l.a)(["\n\twidth: inherit;\n\theight: inherit;\n\tbackground-color: #f2f2f2;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return h=function(){return e},e}function E(){var e=Object(l.a)(["\n\tmax-width: 400px;\n\theight: 200px;\n\tpadding: 5px;\n"]);return E=function(){return e},e}function j(){var e=Object(l.a)(["\n\thtml,\n\tbody,\n\t#root {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n"]);return j=function(){return e},e}var O=Object(s.c)(j()),x=f.a.div(E()),k=f.a.div(h()),y=f.a.div(g()),C=f.a.select(v()),w=r.a.memo((function(){var e=r.a.useState(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=r.a.useState(d.a.none),o=Object(i.a)(c,2),l=o[0],f=o[1],v=r.a.useState(!1),g=Object(i.a)(v,2),h=g[0],E=g[1],j=r.a.useState([]),w=Object(i.a)(j,2),S=w[0],F=w[1],I=r.a.useRef(null),M=r.a.useMemo((function(){return new m.BrowserMultiFormatReader}),[]);r.a.useEffect((function(){navigator.mediaDevices.enumerateDevices().then((function(e){return e.map((function(e){return"videoinput"===e.kind?F((function(t){return[].concat(Object(u.a)(t),[e])})):F((function(e){return Object(u.a)(e)}))}))})).catch((function(e){return console.log(e)}))}),[]);var N=r.a.useCallback((function(){M.decodeFromVideoDevice(n,I.current,(function(e,t){E(!0),e&&(console.log("result",e),f(d.a.some(e))),!t||t instanceof m.NotFoundException||console.error("error 1",t)})).catch((function(e){console.log("error 2",e)}))}),[M,n]),D=r.a.useCallback((function(){M.reset(),E(!1)}),[M]),R=r.a.useMemo((function(){return Object(p.a)(l,d.a.map((function(e){return e.getText()})),d.a.fold((function(){return r.a.createElement("p",null,"No result")}),Object(b.c)(d.a.fromNullable,d.a.getOrElse((function(){return r.a.createElement("p",null,"No result")})),(function(e){return r.a.createElement("p",null,"Result: ",e)}))))}),[l]);r.a.useEffect((function(){return console.log("deviceInfo",S)}),[S]);var q=r.a.useCallback((function(e){a(e.target.value)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{styles:O}),r.a.createElement(x,null,h?"":r.a.createElement(k,null,r.a.createElement("button",{onClick:N},"Activate Camera")),r.a.createElement("video",{ref:I,autoPlay:!0,width:"100%",height:"200"})),r.a.createElement(y,null,R,r.a.createElement(C,{onChange:q},S.map((function(e){return r.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)}))),r.a.createElement("button",{onClick:D},"Turn off Camera")))}));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.209dd435.chunk.js.map