import{S as e,i as t,s as a,R as r,e as o,t as n,k as s,j as i,l as c,c as u,a as h,g as d,d as f,n as l,m as y,f as p,D as v,o as w,u as g,w as m,x as q,v as _,r as b,b as E,Q as $,V as k}from"../chunks/vendor-f4a96aea.js";function P(e){let t,a,r,i,c,y,w,g,m,q,_,b,k,P,I,L,S,Q,C,T,A;return{c(){t=o("p"),a=n("The query won't be able run until you connect your data warehouse."),r=s(),i=o("p"),c=n("Visit "),y=o("a"),w=n("our docs"),g=n(" to learn how to connect to your data warehouse - it only takes a few minutes:"),m=s(),q=o("ul"),_=o("li"),b=o("a"),k=n("Connect BigQuery"),P=s(),I=o("li"),L=o("a"),S=n("Connect Snowflake"),Q=s(),C=o("li"),T=o("a"),A=n("Connect PostgreSQL"),this.h()},l(e){t=u(e,"P",{});var o=h(t);a=d(o,"The query won't be able run until you connect your data warehouse."),o.forEach(f),r=l(e),i=u(e,"P",{});var n=h(i);c=d(n,"Visit "),y=u(n,"A",{href:!0,target:!0});var s=h(y);w=d(s,"our docs"),s.forEach(f),g=d(n," to learn how to connect to your data warehouse - it only takes a few minutes:"),n.forEach(f),m=l(e),q=u(e,"UL",{});var p=h(q);_=u(p,"LI",{});var v=h(_);b=u(v,"A",{href:!0,target:!0});var E=h(b);k=d(E,"Connect BigQuery"),E.forEach(f),v.forEach(f),P=l(p),I=u(p,"LI",{});var $=h(I);L=u($,"A",{href:!0,target:!0});var N=h(L);S=d(N,"Connect Snowflake"),N.forEach(f),$.forEach(f),Q=l(p),C=u(p,"LI",{});var j=h(C);T=u(j,"A",{href:!0,target:!0});var W=h(T);A=d(W,"Connect PostgreSQL"),W.forEach(f),j.forEach(f),p.forEach(f),this.h()},h(){E(y,"href","https://docs.evidence.dev/getting-started/connect-data-warehouse"),E(y,"target","_blank"),E(b,"href","https://docs.evidence.dev/getting-started/connect-data-warehouse#bigquery"),E(b,"target","_blank"),E(L,"href","https://docs.evidence.dev/getting-started/connect-data-warehouse#snowflake"),E(L,"target","_blank"),E(T,"href","https://docs.evidence.dev/getting-started/connect-data-warehouse#postgresql"),E(T,"target","_blank")},m(e,o){p(e,t,o),v(t,a),p(e,r,o),p(e,i,o),v(i,c),v(i,y),v(y,w),v(i,g),p(e,m,o),p(e,q,o),v(q,_),v(_,b),v(b,k),v(q,P),v(q,I),v(I,L),v(L,S),v(q,Q),v(q,C),v(C,T),v(T,A)},p:$,i:$,o:$,d(e){e&&f(t),e&&f(r),e&&f(i),e&&f(m),e&&f(q)}}}function I(e){let t,a,r,c,m,b,$,P,I,L,S,Q,C,T;return C=new k({props:{data:e[0].my_first_query,column:"tracker_id"}}),{c(){t=o("h2"),a=n("Nice Job"),r=s(),c=o("p"),m=n("Now that you have connected your data warehouse, head on over to the "),b=o("a"),$=n("docs"),P=n(" to see more of what evidence can do."),I=s(),L=o("p"),S=n("This section of the report only becomes visible once there is a row of data in my_first_query. You can use conditionals to keep your reports focused while still covering a wide variety of situations."),Q=s(),i(C.$$.fragment),this.h()},l(e){t=u(e,"H2",{});var o=h(t);a=d(o,"Nice Job"),o.forEach(f),r=l(e),c=u(e,"P",{});var n=h(c);m=d(n,"Now that you have connected your data warehouse, head on over to the "),b=u(n,"A",{href:!0,rel:!0});var s=h(b);$=d(s,"docs"),s.forEach(f),P=d(n," to see more of what evidence can do."),n.forEach(f),I=l(e),L=u(e,"P",{});var i=h(L);S=d(i,"This section of the report only becomes visible once there is a row of data in my_first_query. You can use conditionals to keep your reports focused while still covering a wide variety of situations."),i.forEach(f),Q=l(e),y(C.$$.fragment,e),this.h()},h(){E(b,"href","https://docs.evidence.dev"),E(b,"rel","nofollow")},m(e,o){p(e,t,o),v(t,a),p(e,r,o),p(e,c,o),v(c,m),v(c,b),v(b,$),v(c,P),p(e,I,o),p(e,L,o),v(L,S),p(e,Q,o),w(C,e,o),T=!0},p(e,t){const a={};1&t&&(a.data=e[0].my_first_query),C.$set(a)},i(e){T||(q(C.$$.fragment,e),T=!0)},o(e){g(C.$$.fragment,e),T=!1},d(e){e&&f(t),e&&f(r),e&&f(c),e&&f(I),e&&f(L),e&&f(Q),_(C,e)}}}function L(e){let t,a,E,$,k,L,S,Q,C,T,A,N,j,W,x,R,V,B;j=new r({props:{queryString:"\nselect * from analytics.mart_quantified_self.fct_life_tracks\n",queryID:"my_first_query",queryResult:e[0].my_first_query}});const D=[I,P],H=[];function J(e,t){return e[0].my_first_query[0]?0:1}return x=J(e),R=H[x]=D[x](e),{c(){t=o("h1"),a=n("Write your first query"),E=s(),$=o("p"),k=n("The panel below is how SQL queries appear in Evidence."),L=s(),S=o("p"),Q=n("When you are in development mode, queries are shown by default. In production, queries are hidden by default."),C=s(),T=o("p"),A=n("In either case, you (or your audience) can hide or show queries using the button up to the right."),N=s(),i(j.$$.fragment),W=s(),R.c(),V=c()},l(e){t=u(e,"H1",{});var r=h(t);a=d(r,"Write your first query"),r.forEach(f),E=l(e),$=u(e,"P",{});var o=h($);k=d(o,"The panel below is how SQL queries appear in Evidence."),o.forEach(f),L=l(e),S=u(e,"P",{});var n=h(S);Q=d(n,"When you are in development mode, queries are shown by default. In production, queries are hidden by default."),n.forEach(f),C=l(e),T=u(e,"P",{});var s=h(T);A=d(s,"In either case, you (or your audience) can hide or show queries using the button up to the right."),s.forEach(f),N=l(e),y(j.$$.fragment,e),W=l(e),R.l(e),V=c()},m(e,r){p(e,t,r),v(t,a),p(e,E,r),p(e,$,r),v($,k),p(e,L,r),p(e,S,r),v(S,Q),p(e,C,r),p(e,T,r),v(T,A),p(e,N,r),w(j,e,r),p(e,W,r),H[x].m(e,r),p(e,V,r),B=!0},p(e,[t]){const a={};1&t&&(a.queryResult=e[0].my_first_query),j.$set(a);let r=x;x=J(e),x===r?H[x].p(e,t):(b(),g(H[r],1,1,(()=>{H[r]=null})),m(),R=H[x],R?R.p(e,t):(R=H[x]=D[x](e),R.c()),q(R,1),R.m(V.parentNode,V))},i(e){B||(q(j.$$.fragment,e),q(R),B=!0)},o(e){g(j.$$.fragment,e),g(R),B=!1},d(e){e&&f(t),e&&f(E),e&&f($),e&&f(L),e&&f(S),e&&f(C),e&&f(T),e&&f(N),_(j,e),e&&f(W),H[x].d(e),e&&f(V)}}}async function S({fetch:e}){const t=await e("/api/21dc356712aed14579e2cfcf8218a8fc.json"),{data:a}=await t.json();return{props:{data:a}}}function Q(e,t,a){let{data:r}=t;return e.$$set=e=>{"data"in e&&a(0,r=e.data)},[r]}class C extends e{constructor(e){super(),t(this,e,Q,L,a,{data:0})}}export{C as default,S as load};
