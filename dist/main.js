!function(e){var t={};function n(i){if(t[i])return t[i].exports;var u=t[i]={i:i,l:!1,exports:{}};return e[i].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(i,u,function(t){return e[t]}.bind(null,u));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);!function(e){let t=document.createElement("div");t.setAttribute("id","menuWrapper");let n=document.createElement("div");n.setAttribute("class","left");let i=document.createElement("div");i.setAttribute("class","center");let u=document.createElement("div");u.setAttribute("class","right"),t.appendChild(n),t.appendChild(i),t.appendChild(u),e.appendChild(t);let r=document.createElement("div");r.setAttribute("id","header");let a=document.createElement("div");a.setAttribute("class","left");let l=document.createElement("div");l.setAttribute("class","right"),r.appendChild(a),r.appendChild(l),e.appendChild(r);let d=document.createElement("div");d.setAttribute("id","main"),e.appendChild(d);let c=document.createElement("div");c.setAttribute("id","footer");let s=document.createElement("div");s.setAttribute("class","left");let o=document.createElement("div");o.setAttribute("class","center");let m=document.createElement("div");m.setAttribute("class","right"),c.appendChild(s),c.appendChild(o),c.appendChild(m),e.appendChild(c)}(document.getElementById("content")),function(){let e=document.getElementById("main");e.setAttribute("class","tabsy");let t=document.createElement("input");t.type="radio",t.name="tab",t.value="checked",t.setAttribute("id","tab1"),e.appendChild(t);let n=document.createElement("label");n.setAttribute("class","tabButton"),n.setAttribute("for","tab1"),n.innerText="About Us",e.appendChild(n);let i=document.createElement("div");i.setAttribute("class","tab"),e.appendChild(i);let u=document.createElement("div");u.setAttribute("class","content"),u.setAttribute("id","about"),i.appendChild(u);let r=document.createElement("input");r.type="radio",r.name="tab",r.value="checked",r.setAttribute("id","tab2"),e.appendChild(r);let a=document.createElement("label");a.setAttribute("class","tabButton"),a.setAttribute("for","tab2"),a.innerText="Menu",e.appendChild(a);let l=document.createElement("div");l.setAttribute("class","tab"),e.appendChild(l);let d=document.createElement("div");d.setAttribute("class","content"),d.innerText="menu goes here...",l.appendChild(d)}(),function(){let e=document.getElementById("about"),t=document.createElement("h3");t.textContent="Our restaurant started in 2016...";let n=document.createElement("p");n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis tristique diam sed mattis.\n            Nunc scelerisque mollis felis ac molestie. Praesent metus purus, pharetra sit amet varius vel, tincidunt condimentum erat. \n            Mauris mollis elementum massa, vitae efficitur urna imperdiet nec. Pellentesque convallis cursus dui eget sagittis. \n            Fusce placerat risus velit, vel ultricies dui volutpat id. Proin quis iaculis neque.\n            Aliquam erat volutpat. Etiam bibendum augue eu orci ultricies malesuada. Donec quis rhoncus erat, ut porttitor nunc.\n            Maecenas efficitur fermentum ligula, ac egestas turpis imperdiet et. Aenean et ex ante. \n            Quisque placerat mollis diam, sed interdum nisl molestie eu. In et neque eu quam consectetur gravida quis sed magna. \n            Mauris elit dui, vehicula sed nunc eu, fermentum consectetur est.",e.appendChild(t),e.appendChild(n)}()}]);