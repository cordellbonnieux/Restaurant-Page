!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";t.a=n.p+"c563d8fb7b3b69765c1e78589ce0ede6.png"},function(e,t,n){"use strict";t.a=n.p+"54ad82047bee82a5ecff374e18af0d4c.jpg"},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=(l=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([a]).join("\n")}var l,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var i=n(5),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};i(a,r);e.exports=a.locals||{}},function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function c(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],a=0;a<e.length;a++){var r=e[a],d=t.base?r[0]+t.base:r[0],s=n[d]||0,o="".concat(d," ").concat(s);n[d]=s+1;var u=c(o),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(l[u].references++,l[u].updater(m)):l.push({identifier:o,updater:f(m,t),references:1}),i.push(o)}return i}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var o,u=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function m(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var r=document.createTextNode(a),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var b=null,h=0;function f(e,t){var n,i,a;if(t.singleton){var r=h++;n=b||(b=s(t)),i=m.bind(null,n,r,!1),a=m.bind(null,n,r,!0)}else n=s(t),i=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=c(n[i]);l[a].references--}for(var r=d(e,t),s=0;s<n.length;s++){var o=c(n[s]);0===l[o].references&&(l[o].updater(),l.splice(o,1))}n=r}}}},function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),r=n(2),l=n.n(r),c=n(0),d=n(1),s=a()(!1),o=l()(c.a),u=l()(d.a);s.push([e.i,"/* general positioning styles */\n.left, .center, .right{\n    display: inline-block;\n    min-width:31%;\n}\n    .left{\n        text-align:left;\n    }\n    .center{\n        text-align:center;\n    }\n    .right{\n        text-align:right;\n    }\nbody{\n    background:url("+o+");\n    background-repeat: repeat;\n    color:#3E3832;\n}\n#content{\n    width:80%;\n    max-width:960px;\n    margin:0 auto;\n}\n    #menuWrapper{\n        height:50px;\n        background-color:#267E1C;\n        color:#fff;\n        padding: 10px 25px;\n    }\n    #header{\n        /*height:300px;*/\n        background:url("+u+");\n        background-size:cover;\n    }\n        /*#header #headerBanner{\n            width:100%;\n        }*/\n            #header #donMascot{\n                max-width:75%;\n                display:inline-block;\n                max-height: 600px;\n                margin-bottom:-23px;\n            }\n    #main{\n        background-color:transparent;\n        padding: 5px 25px;\n        /*position:relative;*/\n    }\n        .tabsy > .tabButton{\n           /* position: absolute;\n            top:-1px;\n            z-index:3;*/\n            height:32px;\n            background:transparent;\n            color:#fff;\n            padding:13px 10px 5px 10px;\n        }\n            .tabsy > input:checked + label{\n                color:#3E3832;\n                background-color:#fff;\n            }\n        .tabsy > .tab{\n            /*position: absolute;\n            z-index:2;\n            left:0;\n            top:0;*/\n            width:100%;\n            /*border-top:50px solid #267E1C;*/\n            background-color:transparent;\n        }\n            .content{\n                width:90%;\n                margin:20px auto;\n            }\n        .tab2Button{\n            left:125px;\n        }\n        .tab3Button{\n            left:200px;\n        }\n        .menuSection{\n            display:flex;\n            flex-wrap:wrap;\n            align-items: flex-start;\n        }\n            .menuItem{\n                display:inline-block;\n                max-width:200px;\n                margin:10px auto;\n                padding:10px;\n                background-color:#fff;\n            }\n                .menuItem h3{\n                    display:inline-block;\n                    margin-right:6px;\n                }\n                .menuItem span{\n                    display:inline-block;\n                }\n                .menuItem .menuImg{\n                    width:200px;\n                    height:200px;\n                }\n    #footer{\n        background-color:#267E1C;\n        min-height:50px;\n        color:#fff;\n        padding: 5px 25px;\n        bottom:0;\n        margin:0 auto;\n    }",""]),t.default=s},function(e,t,n){"use strict";n.r(t);n(0),n(1);var i=n.p+"81411e01202040f717d34cc61639b7d8.png",a=n.p+"e25df2102647c707ad5b130f30bac007.jpg",r=n.p+"69bc026bb4699bd7f2f421e1d2154c4c.jpg",l=n.p+"d710532331b41b1b98d1622c398ca1c9.jpg",c=n.p+"6ff0fb3bfacaf45ff28630cd00c1b2ee.jpg",d=n.p+"41e6d45ed611d8cd14007b68f8bee063.jpg",s=n.p+"10e05e0f73ee68de1fc2dc43657d39bf.jpg",o=n.p+"05eeaefa4e5b9c8af8348f49d72296fb.jpg",u=n.p+"9ff10d093e7061270ad55af4a30a568d.jpg",m=n.p+"b42778539339b6b75f2973a4744ae970.jpg";n(4);!function(e){let t=document.createElement("div");t.setAttribute("id","menuWrapper"),e.appendChild(t);let n=document.createElement("div");n.setAttribute("id","header");let i=document.createElement("div");i.setAttribute("class","left"),i.setAttribute("id","headerLeft");let a=document.createElement("div");a.setAttribute("class","right"),n.appendChild(i),n.appendChild(a),e.appendChild(n);let r=document.createElement("div");r.setAttribute("id","main"),e.appendChild(r);let l=document.createElement("div");l.setAttribute("id","footer");let c=document.createElement("div");c.setAttribute("class","left");let d=document.createElement("div");d.setAttribute("class","center");let s=document.createElement("div");s.setAttribute("class","right"),l.appendChild(c),l.appendChild(d),l.appendChild(s),e.appendChild(l)}(document.getElementById("content")),function(){let e=document.getElementById("main");e.setAttribute("class","tabsy");let t=document.createElement("input");t.type="radio",t.name="tab",t.checked=!0,t.value="checked",t.setAttribute("id","tab1"),e.appendChild(t);let n=document.createElement("label");n.setAttribute("class","tabButton tab1Button"),n.setAttribute("for","tab1"),n.innerText="About Us",e.appendChild(n);let i=document.createElement("div");i.setAttribute("class","tab"),e.appendChild(i);let a=document.createElement("div");a.setAttribute("class","content"),a.setAttribute("id","about"),i.appendChild(a);let r=document.createElement("input");r.type="radio",r.name="tab",r.value="checked",r.setAttribute("id","tab2"),e.appendChild(r);let l=document.createElement("label");l.setAttribute("class","tabButton tab2Button"),l.setAttribute("for","tab2"),l.innerText="Menu",e.appendChild(l);let c=document.createElement("div");c.setAttribute("class","tab"),e.appendChild(c);let d=document.createElement("div");d.setAttribute("class","content"),d.setAttribute("id","menu"),c.appendChild(d);let s=document.createElement("input");s.type="radio",s.name="tab",s.value="checked",s.setAttribute("id","tab3"),e.appendChild(s);let o=document.createElement("label");o.setAttribute("class","tabButton tab3Button"),o.setAttribute("for","tab3"),o.innerText="Contact",e.appendChild(o);let u=document.createElement("div");u.setAttribute("class","tab"),e.appendChild(u);let m=document.createElement("div");m.setAttribute("class","content"),m.innerText="contact, number email etc all goes here...",u.appendChild(m)}(),function(){let e=document.getElementById("about"),t=document.createElement("h3");t.textContent="Our restaurant started in 2016...";let n=document.createElement("p");n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis.\n            Nunc scelerisque mollis felis ac molestie. Praesent metus purus, pharetra sit amet varius vel, tincidunt condimentum erat. \n            Mauris mollis elementum massa, vitae efficitur urna imperdiet nec. Pellentesque convallis cursus dui eget sagittis. \n            Fusce placerat risus velit, vel ultricies dui volutpat id. Proin quis iaculis neque.\n            Aliquam erat volutpat. Etiam bibendum augue eu orci ultricies malesuada. Donec quis rhoncus erat, ut porttitor nunc.\n            Maecenas efficitur fermentum ligula, ac egestas turpis imperdiet et. Aenean et ex ante. \n            Quisque placerat mollis diam, sed interdum nisl molestie eu. In et neque eu quam consectetur gravida quis sed magna. \n            Mauris elit dui, vehicula sed nunc eu, fermentum consectetur est.";let i=document.createElement("div");i.setAttribute("id","aboutUsImg"),e.appendChild(t),e.appendChild(n),e.appendChild(i)}(),function(){const e=document.getElementById("menuWrapper");let t=document.createElement("div");t.setAttribute("class","left");let n=document.createElement("address");n.textContent="123 Fake Street, Vancouver BC";let i=document.createElement("span");i.textContent="Open 9 to 9 Everyday",t.appendChild(n),t.appendChild(i);let a=document.createElement("div");a.setAttribute("class","center");let r=document.createElement("h1");r.textContent="Don's Cafe",a.appendChild(r);let l=document.createElement("div");l.setAttribute("class","right"),l.innerHTML=" social links here ",e.appendChild(t),e.appendChild(a),e.appendChild(l)}(),function(){let e=document.getElementById("menu"),t=document.createElement("div");t.setAttribute("id","startersContainer"),e.appendChild(t);let n=document.createElement("h2");n.textContent="Starters",t.appendChild(n);let i=document.createElement("div");i.setAttribute("id","starters"),i.setAttribute("class","menuSection"),t.appendChild(i);let a=document.createElement("div");a.setAttribute("class","menuItem"),a.setAttribute("id","starter1");let r=document.createElement("h3");r.textContent="Starter 1";let l=document.createElement("span");l.textContent="12";let c=document.createElement("p");c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",i.appendChild(a),a.appendChild(r),a.appendChild(l),a.appendChild(c);let d=document.createElement("div");d.setAttribute("class","menuItem"),d.setAttribute("id","starter2");let s=document.createElement("h3");s.textContent="Starter 2";let o=document.createElement("span");o.textContent="8";let u=document.createElement("p");u.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",i.appendChild(d),d.appendChild(s),d.appendChild(o),d.appendChild(u);let m=document.createElement("div");m.setAttribute("class","menuItem"),m.setAttribute("id","starter3");let p=document.createElement("h3");p.textContent="Starter 3";let b=document.createElement("span");b.textContent="7";let h=document.createElement("p");h.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",i.appendChild(m),m.appendChild(p),m.appendChild(b),m.appendChild(h);let f=document.createElement("div");f.setAttribute("id","sandwichesContainer"),e.appendChild(f);let g=document.createElement("h2");g.textContent="Sandwiches",f.appendChild(g);let C=document.createElement("div");C.setAttribute("id","sandwiches"),C.setAttribute("class","menuSection"),f.appendChild(C);let v=document.createElement("div");v.setAttribute("class","menuItem"),v.setAttribute("id","sandwich1");let E=document.createElement("h3");E.textContent="sandwich 1";let x=document.createElement("span");x.textContent="8";let A=document.createElement("p");A.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",C.appendChild(v),v.appendChild(E),v.appendChild(x),v.appendChild(A);let y=document.createElement("div");y.setAttribute("class","menuItem"),y.setAttribute("id","sandwich2");let I=document.createElement("h3");I.textContent="sandwich 2";let w=document.createElement("span");w.textContent="8";let B=document.createElement("p");B.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",C.appendChild(y),y.appendChild(I),y.appendChild(w),y.appendChild(B);let q=document.createElement("div");q.setAttribute("class","menuItem"),q.setAttribute("id","sandwich3");let j=document.createElement("h3");j.textContent="sandwich 3";let k=document.createElement("span");k.textContent="8";let S=document.createElement("p");S.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",C.appendChild(q),q.appendChild(j),q.appendChild(k),q.appendChild(S);let M=document.createElement("div");M.setAttribute("id","bowlsContainer"),e.appendChild(M);let L=document.createElement("h2");L.textContent="Bowls",M.appendChild(L);let N=document.createElement("div");N.setAttribute("id","bowls"),N.setAttribute("class","menuSection"),M.appendChild(N);let F=document.createElement("div");F.setAttribute("class","menuItem"),F.setAttribute("id","bowl1");let T=document.createElement("h3");T.textContent="Bowl 1";let O=document.createElement("span");O.textContent="12";let _=document.createElement("p");_.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",N.appendChild(F),F.appendChild(T),F.appendChild(O),F.appendChild(_);let P=document.createElement("div");P.setAttribute("class","menuItem"),P.setAttribute("id","bowl2");let U=document.createElement("h3");U.textContent="Bowl 2";let R=document.createElement("span");R.textContent="8";let z=document.createElement("p");z.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",N.appendChild(P),P.appendChild(U),P.appendChild(R),P.appendChild(z);let D=document.createElement("div");D.setAttribute("class","menuItem"),D.setAttribute("id","bowl3");let H=document.createElement("h3");H.textContent="Bowl 3";let W=document.createElement("span");W.textContent="7";let J=document.createElement("p");J.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis. Nunc scelerisque mollis felis ac molestie.",N.appendChild(D),D.appendChild(H),D.appendChild(W),D.appendChild(J)}();const p=new Image;p.src=i,p.setAttribute("id","donMascot");document.getElementById("headerLeft").appendChild(p);const b=document.getElementById("starter1"),h=document.getElementById("starter2"),f=document.getElementById("starter3"),g=document.getElementById("sandwich1"),C=document.getElementById("sandwich2"),v=document.getElementById("sandwich3"),E=document.getElementById("bowl1"),x=document.getElementById("bowl2"),A=document.getElementById("bowl3");let y=new Image;y.src=a,y.setAttribute("id","starter1Img"),y.setAttribute("class","menuImg"),b.prepend(y);let I=new Image;I.src=r,I.setAttribute("id","starter2Img"),I.setAttribute("class","menuImg"),h.prepend(I);let w=new Image;w.src=l,w.setAttribute("id","starter3Img"),w.setAttribute("class","menuImg"),f.prepend(w);let B=new Image;B.src=c,B.setAttribute("id","sandwich1Img"),B.setAttribute("class","menuImg"),g.prepend(B);let q=new Image;q.src=d,q.setAttribute("id","sandwich2Img"),q.setAttribute("class","menuImg"),C.prepend(q);let j=new Image;j.src=s,j.setAttribute("id","sandwich3Img"),j.setAttribute("class","menuImg"),v.prepend(j);let k=new Image;k.src=o,k.setAttribute("id","bowl1Img"),k.setAttribute("class","menuImg"),E.prepend(k);let S=new Image;S.src=u,S.setAttribute("id","bowl2Img"),S.setAttribute("class","menuImg"),x.prepend(S);let M=new Image;M.src=m,M.setAttribute("id","bowl3Img"),M.setAttribute("class","menuImg"),A.prepend(M)}]);