(this["webpackJsonpsssv-website"]=this["webpackJsonpsssv-website"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(4),r=t.n(n),i=(t(10),t(2)),l=t(5),o=(t(11),t(0)),d=function(e){return Object(l.a)(e),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)("div",{className:"bar-left",children:Object(o.jsx)("div",{className:"inner",children:Object(o.jsx)("div",{className:"text comic-sans-bold",children:"SPACE STATION SILICON VALLEY"})})}),Object(o.jsx)("div",{className:"bar-right",children:Object(o.jsx)("div",{className:"inner"})})]}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("div",{className:"text comic-sans-bold",children:"DECOMPILATION PROJECT"}),Object(o.jsxs)("div",{className:"flex marker-accent-container",children:[Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent yellow",gradient:"green-yellow"}),Object(o.jsx)("div",{className:"marker-accent yellow"}),Object(o.jsx)("div",{className:"marker-accent orange",gradient:"yellow-orange"}),Object(o.jsx)("div",{className:"marker-accent red",gradient:"orange-red"}),Object(o.jsx)("div",{className:"marker-accent red"}),Object(o.jsx)("div",{className:"marker-accent magenta",gradient:"red-magenta"}),Object(o.jsx)("div",{className:"marker-accent purple",gradient:"magenta-purple"}),Object(o.jsx)("div",{className:"marker-accent blue",gradient:"purple-blue"}),Object(o.jsx)("div",{className:"marker-accent cyan",gradient:"blue-cyan"}),Object(o.jsx)("div",{className:"marker-accent cyan"}),Object(o.jsx)("div",{className:"marker-accent blue",gradient:"cyan-blue"}),Object(o.jsx)("div",{className:"marker-accent blue"}),Object(o.jsx)("div",{className:"marker-accent purple",gradient:"blue-purple"}),Object(o.jsx)("div",{className:"marker-accent magenta",gradient:"purple-magenta"}),Object(o.jsx)("div",{className:"marker-accent red",gradient:"magenta-red"}),Object(o.jsx)("div",{className:"marker-accent orange",gradient:"red-orange"}),Object(o.jsx)("div",{className:"marker-accent yellow",gradient:"orange-yellow"}),Object(o.jsx)("div",{className:"marker-accent yellow"}),Object(o.jsx)("div",{className:"marker-accent green",gradient:"yellow-green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-accent green"}),Object(o.jsx)("div",{className:"marker-end",children:Object(o.jsx)("div",{className:"glyph",children:":\u2191\u2193%"})})]})]})})]})},j=(t(13),function(e){var a=e.dataHook,t=e.selectedHook,s=Object(i.a)(a,1)[0],n=Object(i.a)(t,2),r=n[0],l=n[1],d=220,j=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(null!==s){var e=s.progress.filter((function(e){return"us"==e.version}));if(null!==e&&0!==e.length){var a=e[0].sections;if(5===a.length){var t={main:.2,lib:.2,overlay1:.15,overlay2:.45},c=Math.PI,n=[["rgb(171,38,114)","rgb(61,11,42)"],["rgb(1,126,180)","rgb(3,54,74)"],["rgb(0,167,0)","rgb(0,86,0)"],["rgb(255,255,0)","rgb(67,67,0)"]],i=j.current,o=i.getContext("2d");o.clearRect(0,0,i.width,i.height);o.lineWidth=60,o.strokeStyle="rgba(0, 0, 0, 0)";for(var b=c,m=0;m<a.length;m++){var v=a[m];if("all"!==v.section){var u=v.section,O=v.c,g=(v.c_functions,v.total),h=(v.total_functions,t[u]),f=O/g*h,x=h-f,N=220,k=220;if(u===r){var p=(b+(b+2*Math.PI*h))/2;N+=30*Math.cos(p),k+=30*Math.sin(p)}o.beginPath(),o.strokeStyle=n[m][0],o.arc(N,k,150,b,b+2*Math.PI*f),o.stroke(),b+=2*Math.PI*f,o.beginPath(),o.strokeStyle=n[m][1],o.arc(N,k,150,b,b+2*Math.PI*x),o.stroke(),b+=2*Math.PI*x}}var y=function(e){var a=e.offsetX-d,t=e.offsetY-d,s=Math.pow(a,2)+Math.pow(t,2);if(s>Math.pow(180,2)||s<Math.pow(120,2))null!==r&&l(null);else{var n=Math.atan2(t,a),i=2*Math.PI+(n-c);i<2*Math.PI*.2?"main"!==r&&l("main"):i<2*Math.PI*.4?"lib"!==r&&l("lib"):i<2*Math.PI*.55?"overlay1"!==r&&l("overlay1"):"overlay2"!==r&&l("overlay2")}};return i.addEventListener("mousemove",y),function(){return i.removeEventListener("mousemove",y)}}console.log("expected 5 sections")}else console.log("did not find requested version in data")}}),[s,r]),Object(o.jsx)("div",{id:"donut",className:"doughnut",children:Object(o.jsx)("canvas",{ref:j,width:"440",height:"440"})})}),b=(t(14),function(e){var a=e.dataHook,t=e.selectedHook,s=Object(i.a)(a,1)[0],n=Object(i.a)(t,1)[0],r=Object(c.useState)(null),l=Object(i.a)(r,2),d=l[0],j=l[1],b=Object(c.useState)(null),m=Object(i.a)(b,2),v=m[0],u=m[1];Object(c.useEffect)((function(){if(null!==s){var e=null===n?"all":n,a=s.progress.filter((function(e){return"us"==e.version}));if(null!==a&&0!==a.length){var t=a[0].sections.filter((function(a){return a.section===e}));if(null!==t&&0!==t.length){var c=t[0].c_functions,r=t[0].total_functions,i=t[0].c,l=t[0].total,d=c/r*100,b=i/l*100;j(Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"info-panel-entry",children:["Functions: ",c," / ",r," (",d.toFixed(2),"%)"]}),Object(o.jsxs)("div",{className:"info-panel-entry",children:["Bytes: ",i," / ",l,"  (",b.toFixed(2),"%)"]})]}))}else console.log("Could not find section",e)}else console.log("Did not find requested version in data")}}),[s,n]),Object(c.useEffect)((function(){u("main"===n?"Initialisation logic":"lib"===n?"Library code inc libultra":"overlay1"===n?"Introduction code":"overlay2"===n?"Core game logic":"Total decomp progress")}),[n]);var O;return Object(o.jsxs)("div",{id:"info",className:"info-panel comic-sans",children:[Object(o.jsx)("div",{className:"info-panel-heading comic-sans-bold",children:null===n?"Overview":(O=n,O&&O[0].toUpperCase()+O.slice(1))}),Object(o.jsx)("div",{className:"info-panel-description",children:v}),Object(o.jsx)("div",{className:"info-panel-data",children:d})]})}),m=(t(15),function(){var e=Object(c.useState)(null),a=Object(i.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(null),r=Object(i.a)(n,2),l=r[0],m=r[1];return Object(c.useEffect)((function(){fetch("/latest.json").then((function(e){return e.json()})).then(s)}),[s]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:"stars"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"progress",children:[Object(o.jsx)(j,{dataHook:[t],selectedHook:[l,m]}),Object(o.jsx)(b,{dataHook:[t],selectedHook:[l]})]})]})]}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("a",{href:"https://www.github.com/mkst/sssv/",target:"_blank",children:"GitHub"})})]})});t(16);var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m,{})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),u()}],[[17,1,2]]]);
//# sourceMappingURL=main.e576d4a7.chunk.js.map