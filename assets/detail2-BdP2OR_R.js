import{u as L,a as B,b as T,c as q,d as H,e as V,f as F,g as N,h as z,i as D,j as M,k as R,l as $,m as A,n as E,o as G,p as J,q as K,r as P,s as W,t as O,v as Q,w as U,x as X,y as Y,z as Z,A as tt,B as et,C as st,D as it,E as at,F as ut,G as lt,H as _t,I as ct,J as nt,K as ot,L as rt,S as bt,M as dt,N as mt}from"./pic24-Bd2jbImc.js";import{_ as pt,a as gt,b as vt}from"./019-BoUxK-1g.js";import{_ as jt,d as j,r as l,w as ht,e as It,c as d,a as e,n as ft,g as h,h as m,f as p,i as yt,j as I,k as xt,o as _,F as wt,l as kt,m as Ct,u as St,I as Lt}from"./index-DDQHaAyX.js";const f=[{id:1,title:"C公益,以专业精神解决社会问题",titleImg:L,subTitleList:[{id:1,title:"Caid",titleImg:B,titleImgbtn:T,picList:[q,H]},{id:2,title:"Cmefly",titleImg:V,titleImgbtn:F,picList:[N,z,D,M,R,$,A,E,G,J,K,P]},{id:3,title:"Cgreen",titleImg:W,titleImgbtn:O,picList:[Q,U]},{id:4,title:"Cblue",titleImg:X,titleImgbtn:Y,picList:[Z,tt]},{id:5,title:"Cstar",titleImg:et,titleImgbtn:st,picList:[it,at]},{id:6,title:"Cpal",titleImg:ut,titleImgbtn:lt,picList:[_t,ct,nt,ot]}]}],Bt={class:"container"},Tt={class:"header-bar"},qt={class:"header-title"},Ht=["src"],Vt={class:"sub-title-bar"},Ft={class:"sub-title"},Nt=["src"],zt={class:"content-box"},Dt={__name:"detail2",setup(Mt){const g=St(),c=xt();j(()=>f.length);const i=l(0),a=j(()=>f[0]),u=l(null),n=l(!1),y=l([mt]),o=l(""),r=l("");ht(()=>c.params.subId,(t,s)=>{console.log(c.params.subId)}),It(()=>{const t=document.body.clientHeight;if(console.log(t,"screenHeight2222222222"),requestAnimationFrame(()=>{i.value=Number(c.params.subId)-1,u.value.slideTo(i.value,300,()=>{})}),t<520){document.querySelector(".content-box").style.width="220px",document.querySelector(".content-box").style.height="291px",document.querySelector(".sub-title-bar").style.marginBottom="2.2vh",o.value="220px",r.value="291px";return}t<700&&(document.querySelector(".content-box").style.width="280px",document.querySelector(".content-box").style.height="370px",document.querySelector(".sub-title-bar").style.marginBottom="2.2vh",o.value="280px",r.value="370px")});const x=t=>{u.value=t},w=()=>{if(n.value)return;n.value=!0;let t=u.value.clickedIndex;i.value=t,u.value.slideTo(t,300,()=>{}),setTimeout(()=>{(7<t||t<3)&&(u.value.loopDestroy(),u.value.loopCreate()),n.value=!1},800)},k=()=>{g.replace({name:"home"})},C=()=>{g.back()};return(t,s)=>{const S=Lt;return _(),d("div",Bt,[e("div",Tt,[e("div",qt,[e("img",{class:"header-title-img",style:ft(a.value.titleHeight&&`height:${a.value.titleHeight}`),src:a.value.titleImg,alt:""},null,12,Ht)])]),e("div",Vt,[e("div",Ft,[a.value.subTitleList[i.value].titleImg?(_(),d("img",{key:0,class:"sub-title-img",src:a.value.subTitleList[i.value].titleImg,alt:""},null,8,Nt)):h("",!0)]),s[1]||(s[1]=e("div",{class:"sub-title-icon"},[e("img",{src:pt,alt:""})],-1))]),e("div",zt,[(_(),m(rt,{"pic-list":a.value.subTitleList[i.value].picList,width:o.value,height:r.value,key:`${p(c).params.subId}-${i.value}`},null,8,["pic-list","width","height"]))]),yt(p(dt),{onSwiper:x,slidesPerView:"auto",spaceBetween:10,centeredSlides:!0,freeMode:!0,modules:y.value,class:"sub-title-swiper",onClick:s[0]||(s[0]=b=>w(t.index))},{default:I(()=>[(_(!0),d(wt,null,kt(a.value.subTitleList,(b,v)=>(_(),m(p(bt),{class:Ct(["title-swiper-item",{active:v===i.value}]),key:v},{default:I(()=>[b.titleImgbtn?(_(),m(S,{key:0,class:"title-btn","lazy-load":!0,src:b.titleImgbtn,alt:""},null,8,["src"])):h("",!0)]),_:2},1032,["class"]))),128))]),_:1},8,["modules"]),e("div",{class:"footer-bar"},[e("div",{class:"to-home",onClick:k},s[2]||(s[2]=[e("img",{src:gt,alt:""},null,-1)])),e("div",{class:"to-pre",onClick:C},s[3]||(s[3]=[e("img",{src:vt,alt:""},null,-1)]))])])}}},Et=jt(Dt,[["__scopeId","data-v-729040cf"]]);export{Et as default};
