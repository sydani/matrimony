import{a as P,b as w,c as E,d as I}from"./chunk-FCZMKPZG.js";import{o as O,p as k,r as T,s as j,t as D,u as F,w as U,y as $,z}from"./chunk-ED2T2ZY5.js";import{h as y}from"./chunk-PAD4JWDO.js";import{$ as f,Bb as o,Cb as c,Db as a,Fb as _,Ja as v,Na as i,bb as x,ca as g,db as h,ec as S,ib as C,jb as M,kb as t,lb as n,mb as m,tb as u,wb as b}from"./chunk-QGVSMFEC.js";function B(r,d){return this.user}function L(r,d){if(r&1&&(t(0,"div",14),m(1,"img",15),t(2,"div",16)(3,"span",17),o(4),n()()()),r&2){let l=u(),s=l.$implicit,e=l.$index,p=u();i(),b("src","../../assets/images/"+s,v),i(3),c(e+1+"/"+(p.user==null||p.user.imageUrls==null?null:p.user.imageUrls.length))}}function N(r,d){r&1&&x(0,L,5,2,"ng-template",10)}function H(r,d){r&1&&(t(0,"h2"),o(1,"No images found!"),n())}var re=(()=>{class r{constructor(){this.dataService=f(z),this.users=this.dataService.getUsers(),this.carouselOptions={loop:!1,dots:!0,navSpeed:400,dotsEach:!0,nav:!1,navText:["",""],center:!0,startPosition:0,responsive:{0:{items:1},600:{items:1},900:{items:1},1e3:{items:1}},autoHeight:!1,autoplay:!1,items:1}}get user(){return this.id?this.users.find(l=>l.id===Number(this.id)):null}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-profile"]],inputs:{id:"id"},standalone:!0,features:[_],decls:37,vars:10,consts:[[1,"gradient"],[1,"d-flex","align-items-center","py-4","position-relative","text-white","back"],["mat-icon-button","","routerLink","/home"],[1,"fs-3","ps-3"],[1,"container","p-0"],[1,"d-flex","profile-container","row","justify-content-between","align-items-center","p-0"],[1,"row","align-items-center","justify-content-between","p-0"],[1,"carousel","slide","col-12","col-sm-12","col-xs-12","col-lg-6","col-md-8"],[1,"carousel-inner"],[3,"options"],["carouselSlide",""],[1,"col-12","col-sm-12","col-xs-12","col-lg-6","col-md-4","profile-details"],[1,"col","card","p-0"],[1,"card-title","fs-6","fw-bold","py-2","m-0"],[1,"slider-container"],["alt","image",1,"card-img-top",3,"src"],[1,"carousel-caption","d-flex","justify-content-end"],[1,"owl-text-overlay"]],template:function(s,e){s&1&&(t(0,"section",0)(1,"div",1)(2,"button",2)(3,"mat-icon"),o(4,"arrow_back"),n()(),t(5,"span",3),o(6,"Previous"),n()(),t(7,"section",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"owl-carousel-o",9),C(13,N,1,0,null,10,B,!0,H,2,0,"h2"),n()()(),t(16,"div",11)(17,"mat-card",12)(18,"mat-card-content")(19,"p",13),o(20),n(),t(21,"span"),o(22),n(),t(23,"span"),o(24),n(),t(25,"span"),o(26),n(),m(27,"br"),t(28,"span"),o(29),n(),m(30,"br"),t(31,"span"),o(32),n(),t(33,"span"),o(34),n(),t(35,"span"),o(36),n()()()()()()()()),s&2&&(i(12),h("options",e.carouselOptions),i(),M(e.user==null?null:e.user.imageUrls),i(7),c(e.user==null?null:e.user.name),i(2),a("",e.user==null?null:e.user.age,", "),i(2),a("",e.user==null?null:e.user.height,", "),i(2),a("",e.user==null?null:e.user.occupation,", "),i(3),a("",e.user==null?null:e.user.religion,", "),i(3),a("",e.user==null?null:e.user.city,", "),i(2),a("",e.user==null?null:e.user.state,", "),i(2),a("",e.user==null?null:e.user.country,". "))},dependencies:[E,w,P,S,j,T,I,k,O,y,U,D,F,$],styles:['.profile-container .card-img-top{height:650px!important;object-fit:cover;border-top-left-radius:0!important;border-top-right-radius:0!important}  .profile-container .owl-dots{position:absolute;bottom:20px;left:50%;transform:translate(-50%,-50%)}  .profile-container .owl-text-overlay{background:#0006;border-radius:25px;font-size:12px;color:#fff;bottom:7%;right:20px;padding:0 8px}.slider-container[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:20%;background-image:linear-gradient(180deg,#00000085 6% 4%,#69696900 100% 100%)}.gradient[_ngcontent-%COMP%]{position:absolute;display:block;width:100%;height:100%;background-image:linear-gradient(145deg,#54b972 40%,#27b1b2 80%);mix-blend-mode:multiply}@media screen and (min-width: 768px){.profile-container[_ngcontent-%COMP%], .profile-container[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%], .profile-container[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]{padding:2rem}}@media screen and (max-width: 576px){.profile-details[_ngcontent-%COMP%]{margin-top:-20px;z-index:10}.back[_ngcontent-%COMP%]{position:absolute!important;z-index:3;left:2%}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:0}}']})}}return r})();export{re as ProfileComponent};
