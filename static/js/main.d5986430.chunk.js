(this["webpackJsonpblaise-challenge-fall-2020"]=this["webpackJsonpblaise-challenge-fall-2020"]||[]).push([[0],[,,,function(t){t.exports=JSON.parse('[{"lat":45.5129604703,"lon":-73.5729924601},{"lat":45.514631582,"lon":-73.5747866117},{"lat":45.5124314226,"lon":-73.5783069657},{"lat":45.5110814248,"lon":-73.5678750573},{"lat":45.5130674543,"lon":-73.5724840797},{"lat":45.5108550085,"lon":-73.5729647009},{"lat":45.5140107255,"lon":-73.5767955614},{"lat":45.5127572264,"lon":-73.5764316993},{"lat":45.5154943018,"lon":-73.5682797513},{"lat":45.5134770736,"lon":-73.5725005275}]')},function(t){t.exports=JSON.parse('[{"lat":45.509251,"lon":-73.568071},{"lat":45.512056,"lon":-73.566417},{"lat":45.509507,"lon":-73.573516},{"lat":45.510422,"lon":-73.575515},{"lat":45.511119,"lon":-73.576976},{"lat":45.514816,"lon":-73.578489},{"lat":45.511429,"lon":-73.578216},{"lat":45.511157,"lon":-73.577452},{"lat":45.513932,"lon":-73.57615},{"lat":45.513848,"lon":-73.576314},{"lat":45.513678,"lon":-73.576191},{"lat":45.515399,"lon":-73.575736},{"lat":45.510443,"lon":-73.575882},{"lat":45.515188,"lon":-73.57509},{"lat":45.51541,"lon":-73.574692},{"lat":45.516542,"lon":-73.573943},{"lat":45.512689,"lon":-73.573817},{"lat":45.516743,"lon":-73.573563},{"lat":45.509484,"lon":-73.573866},{"lat":45.513872,"lon":-73.572353},{"lat":45.508728,"lon":-73.571191},{"lat":45.508459,"lon":-73.571671},{"lat":45.509484,"lon":-73.570859},{"lat":45.509167,"lon":-73.570755},{"lat":45.511156,"lon":-73.570261},{"lat":45.511275,"lon":-73.570088},{"lat":45.510933,"lon":-73.569989},{"lat":45.5127,"lon":-73.569474},{"lat":45.51234,"lon":-73.569396},{"lat":45.512705,"lon":-73.569769},{"lat":45.514753,"lon":-73.568547},{"lat":45.514367,"lon":-73.56848},{"lat":45.510095,"lon":-73.567412},{"lat":45.509944,"lon":-73.567675},{"lat":45.509948,"lon":-73.567125},{"lat":45.511244,"lon":-73.566593},{"lat":45.511448,"lon":-73.566799},{"lat":45.513858,"lon":-73.56601},{"lat":45.513339,"lon":-73.565995},{"lat":45.514078,"lon":-73.576831},{"lat":45.511638,"lon":-73.577844},{"lat":45.511595,"lon":-73.578398},{"lat":45.511853,"lon":-73.578042},{"lat":45.512024,"lon":-73.577664},{"lat":45.511364,"lon":-73.578503},{"lat":45.509438,"lon":-73.567888}]')},,,,,function(t,l,a){},function(t,l,a){t.exports=a(20)},,,,,function(t,l,a){},,,,function(t,l,a){},function(t,l,a){"use strict";a.r(l);var n=a(0),e=a.n(n),o=a(5),c=a.n(o),r=(a(15),a(2)),i=a(6),s=a(1);a(18),a(9);var u=function(t){return e.a.createElement(s.b,{longitude:t.lon,latitude:t.lat},e.a.createElement("div",{className:"marker passenger-marker"},"P"))};var m=function(t){var l=Object(n.useState)(""),a=Object(r.a)(l,2),o=a[0],c=a[1];return e.a.createElement(s.b,{longitude:t.lon,latitude:t.lat},e.a.createElement("div",{className:"marker-popup ".concat(o)},"Number of closest passengers: "," ",t.closestCount||0),e.a.createElement("div",{className:"marker stop-marker",onMouseEnter:function(){c("visible-popup")},onMouseLeave:function(){c("")}},"S"))},d=a(3),h=a(4);var f=function(){var t=function(){var t,l=0,a=0,n=Object(i.a)(d);try{for(n.s();!(t=n.n()).done;){var e=t.value;l+=e.lon,a+=e.lat}}catch(s){n.e(s)}finally{n.f()}var o,c=Object(i.a)(h);try{for(c.s();!(o=c.n()).done;){var r=o.value;l+=r.lon,a+=r.lat}}catch(s){c.e(s)}finally{c.f()}return[l/=d.length+h.length,a/=d.length+h.length]}(),l=Object(r.a)(t,2),a=l[0],o=l[1],c=function(){var t,l={},a={type:"MultiLineString",coordinates:[]},n=Object(i.a)(d);try{for(n.s();!(t=n.n()).done;){var e,o=t.value,c=Number.MAX_SAFE_INTEGER,r=0,s=0,u=Object(i.a)(h);try{for(u.s();!(e=u.n()).done;){var m=e.value,f=Math.sqrt(Math.pow(m.lon-o.lon,2)+Math.pow(m.lat-o.lat,2));f<c&&(c=f,r=m.lat,s=m.lon)}}catch(v){u.e(v)}finally{u.f()}var p="".concat(r,",").concat(s);p in l||(l[p]=0),l[p]++,a.coordinates.push([[o.lon,o.lat],[s,r]])}}catch(v){n.e(v)}finally{n.f()}return[l,a]}(),f=Object(r.a)(c,2),p=f[0],v=f[1],g=function(t){return[d.map((function(t){var l=t.lat,a=t.lon;return e.a.createElement(u,{lat:l,lon:a,key:"".concat(l,",").concat(a)})})),h.map((function(l){var a=l.lat,n=l.lon;return e.a.createElement(m,{lat:a,lon:n,key:"".concat(a,",").concat(n),closestCount:t["".concat(a,",").concat(n)]})}))]}(p),b=Object(r.a)(g,2),y=b[0],E=b[1],j=Object(n.useState)({longitude:a,latitude:o,zoom:14.75}),w=Object(r.a)(j,2),k=w[0],O=w[1];return e.a.createElement(s.d,{style:{width:"100vw",height:"100vh"},mapStyle:"mapbox://styles/mapbox/light-v9",accessToken:"pk.eyJ1IjoiY2hhcnl1bmciLCJhIjoiY2tjYzN4dTRkMDEwMzJ6cHFlZGg1dnVodyJ9.z2FITnqLcQNmj1ljg5eFDg",longitude:k.longitude,latitude:k.latitude,zoom:k.zoom,onViewportChange:O},e.a.createElement(s.c,{id:"closestPaths",type:"geojson",data:v}),e.a.createElement(s.a,{id:"closestPaths",type:"line",source:"closestPaths",paint:{"line-color":"#888","line-width":3}}),y,E)};a(19);var p=function(){return e.a.createElement("div",{className:"App"},e.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(e.a.createElement(e.a.StrictMode,null,e.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d5986430.chunk.js.map