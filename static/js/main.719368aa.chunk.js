(this["webpackJsonpqr-scanner"]=this["webpackJsonpqr-scanner"]||[]).push([[0],{206:function(e,t,n){e.exports=n(291)},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(107),o=n.n(c),u=n(68),i=n(37),l=n(26),f=n(30),s=n(29),m=n(49),d=n(27),p=n(46),v=n(5);function b(){var e=Object(l.a)(["\n\tmax-width: 400px;\n\tmargin-top: 20px;\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tmargin-bottom: 15px;\n\toption {\n\t\theight: 20px;\n\t}\n"]);return g=function(){return e},e}function h(){var e=Object(l.a)(["\n\tpadding: 5px;\n"]);return h=function(){return e},e}function E(){var e=Object(l.a)(["\n\twidth: inherit;\n\theight: inherit;\n\tbackground-color: #f2f2f2;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return E=function(){return e},e}function j(){var e=Object(l.a)(["\n\tmax-width: 400px;\n\theight: 200px;\n\tpadding: 5px;\n"]);return j=function(){return e},e}function O(){var e=Object(l.a)(["\n\thtml,\n\tbody,\n\t#root {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n"]);return O=function(){return e},e}var x=Object(s.c)(O()),k=f.a.div(j()),w=f.a.div(E()),y=f.a.div(h()),C=f.a.select(g()),I=f.a.div(b()),M=r.a.memo((function(){var e=r.a.useState(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=r.a.useState(d.a.none),o=Object(i.a)(c,2),l=o[0],f=o[1],b=r.a.useState(!1),g=Object(i.a)(b,2),h=g[0],E=g[1],j=r.a.useState([]),O=Object(i.a)(j,2),M=O[0],S=O[1],F=r.a.useRef(null),N=r.a.useMemo((function(){return new m.BrowserMultiFormatReader}),[]);r.a.useEffect((function(){navigator.mediaDevices.enumerateDevices().then((function(e){return e.map((function(e){return"videoinput"===e.kind?S((function(t){return[].concat(Object(u.a)(t),[e])})):S((function(e){return Object(u.a)(e)}))}))})).catch((function(e){return console.log(e)}))}),[]),console.log("deviceId",n);var D=r.a.useCallback((function(){N.decodeFromVideoDevice(n,F.current,(function(e,t){E(!0),e&&(console.log("result",e),f(d.a.some(e))),!t||t instanceof m.NotFoundException||console.error("error 1",t)})).catch((function(e){console.log("error 2",e)}))}),[N,n]),R=r.a.useCallback((function(){N.reset(),E(!1)}),[N]),q=r.a.useMemo((function(){return Object(p.a)(l,d.a.map((function(e){return e.getText()})),d.a.fold((function(){return r.a.createElement("p",null,"No result")}),Object(v.c)(d.a.fromNullable,d.a.getOrElse((function(){return r.a.createElement("p",null,"No result")})),(function(e){return r.a.createElement("p",null,"Result: ",e)}))))}),[l]);r.a.useEffect((function(){console.log("deviceInfo",M)}),[M]);var B=r.a.useCallback((function(e){a(e.target.value)}),[]),J=r.a.useMemo((function(){return M.map((function(e){return"".concat(e.kind," ").concat(e.deviceId," ").concat(e.groupId," ").concat(e.label)}))}),[M]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{styles:x}),r.a.createElement(k,null,h?"":r.a.createElement(w,null,r.a.createElement("button",{onClick:D},"Activate Camera")),r.a.createElement("video",{ref:F,autoPlay:!0,width:"100%",height:"200"})),r.a.createElement(y,null,q,r.a.createElement(C,{onChange:B},M.map((function(e){return r.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)}))),r.a.createElement("button",{onClick:R},"Turn off Camera"),r.a.createElement(I,null,J)))}));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.719368aa.chunk.js.map