import{a as q,b as H}from"./chunk-3YJT6R2S.js";import{o as G,p as T,q as $,r as D,s as V,t as L,u as U,v as j,w as R,x as A,y as N,z as J}from"./chunk-ED2T2ZY5.js";import{h as B}from"./chunk-PAD4JWDO.js";import{$ as g,Bb as i,Cb as w,Db as s,Fb as I,Gb as v,Ja as S,Na as o,bb as C,ca as k,cc as F,db as f,ec as z,fb as h,gb as u,hb as y,ib as P,jb as O,ka as _,kb as e,la as x,lb as n,mb as p,pb as b,rb as M,tb as l,wb as E}from"./chunk-QGVSMFEC.js";var K=r=>({opacity:r}),Q=r=>({visibility:r});function W(r,d){r&1&&(e(0,"div",14)(1,"mat-icon",28),i(2,"verified_user"),n(),e(3,"span",29),i(4,"Verified"),n()())}function X(r,d){r&1&&(e(0,"div",15)(1,"mat-icon",28),i(2," workspace_premium "),n(),e(3,"span",29),i(4,"Premium NRI"),n()())}function Y(r,d){if(r&1){let a=b();e(0,"mat-card",10)(1,"div",11),p(2,"img",12),e(3,"mat-card-content")(4,"div",13),C(5,W,5,0,"div",14)(6,X,5,0,"div",15),n(),e(7,"p",16),i(8),n(),e(9,"span"),i(10),n(),e(11,"span"),i(12),n(),e(13,"span"),i(14),n(),p(15,"br"),e(16,"span"),i(17),n(),p(18,"br"),e(19,"span"),i(20),n(),e(21,"span"),i(22),n(),e(23,"span"),i(24),n()(),e(25,"div",17)(26,"div",18),p(27,"mat-divider",19),n(),e(28,"div",20)(29,"span")(30,"mat-icon",21),i(31,"grade"),n()(),e(32,"span",22),i(33,"Shortlist"),n()(),e(34,"div",23)(35,"mat-card-actions",24)(36,"span",25),i(37,"Like her?"),n(),e(38,"button",26),M("click",function(){_(a);let c=l().$implicit,m=l();return x(m.handleDislike(c.id))}),e(39,"mat-icon"),i(40,"close"),n()(),e(41,"button",27),M("click",function(){_(a);let c=l().$implicit,m=l();return x(m.handleLike(c.id))}),e(42,"mat-icon"),i(43,"check"),n()()()()()()()}if(r&2){let a=l(),t=a.$implicit,c=a.$index,m=a.$index;h("col card gesture-"+(c+1)),f("ngStyle",v(15,K,c>0?"calc(1/"+(c+1)+")":1)),o(),f("ngStyle",v(17,Q,m===0?"visible":"hidden")),o(),E("src","../../assets/images/"+t.imageUrls[0],S),o(3),u(5,t.verified?5:-1),o(),u(6,t.premium?6:-1),o(2),w(t.name),o(2),s("",t.age,", "),o(2),s("",t.height,", "),o(2),s("",t.occupation,", "),o(3),s("",t.religion,", "),o(3),s("",t.city,", "),o(2),s("",t.state,", "),o(2),s("",t.country,". ")}}function Z(r,d){if(r&1&&C(0,Y,44,19,"mat-card",9),r&2){let a=d.$index;u(0,a<3?0:-1)}}function ee(r,d){r&1&&(e(0,"h2",8),i(1,"All profiles completed!"),n())}var fe=(()=>{class r{constructor(){this._snackBar=g(q),this.dataService=g(J),this.users=this.dataService.getUsers()}handleLike(a){this.users=this.users.filter(t=>t.id!==a),this.openSnackBar("User liked!","success")}handleDislike(a){this.users=this.users.filter(t=>t.id!==a),this.openSnackBar("User disliked!","danger")}openSnackBar(a,t){this._snackBar.openFromComponent(H,{horizontalPosition:"right",verticalPosition:"top",panelClass:t==="danger"?"snackbar-danger":"snackbar-success",duration:3e3,data:{message:a}})}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=k({type:r,selectors:[["app-gesture"]],standalone:!0,features:[I],decls:14,vars:1,consts:[[1,"gradient"],[1,"container","p-3"],[1,"d-flex","align-items-center","py-4","position-relative","text-white"],["mat-icon-button","","routerLink","/home"],[1,"fs-3","ps-3"],[1,"gesture-container","p-3"],[1,"slider-container"],[1,"gesture-stack"],[1,"bg-light","p-5"],["appearance","outlined",3,"class","ngStyle"],["appearance","outlined",3,"ngStyle"],[3,"ngStyle"],["alt","image",1,"card-img-top",3,"src"],[1,"d-flex","pt-2"],[1,"d-flex","align-items-center","verified","me-3"],[1,"d-flex","align-items-center","premium"],[1,"card-title","fs-6","fw-bold","py-2","m-0"],[1,"row","pb-2"],[1,"px-3","py-3"],[1,""],[1,"col-3","ps-3","d-flex","align-items-center"],[1,"material-icons-outlined","icon"],[1,"ps-1",2,"font-size","0.75rem"],[1,"col-9"],[1,"justify-content-end"],[1,"fw-bold"],["mat-stroked-button","",1,"mx-2","rounded-pill",3,"click"],["mat-flat-button","","color","warn",1,"rounded-pill",3,"click"],[1,"icon","material-icons-outlined"],[1,"small-text"]],template:function(t,c){t&1&&(e(0,"section",0)(1,"section",1)(2,"div",2)(3,"button",3)(4,"mat-icon"),i(5,"arrow_back"),n()(),e(6,"span",4),i(7,"Daily Recommendations"),n()()(),e(8,"section",5)(9,"div",6)(10,"div",7),P(11,Z,1,1,null,null,y,!1,ee,2,0,"h2",8),n()()()()),t&2&&(o(11),O(c.users))},dependencies:[z,F,R,L,j,U,V,$,D,T,G,N,A,B],styles:['.gesture-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.gesture-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:15px!important}.gesture-container[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{border-top-left-radius:14px!important;border-top-right-radius:14px!important}.gesture-container[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]{display:grid;grid-template-areas:"stack";border-radius:15px;--scale: 1;--x: 0;--y: 0;box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f!important}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{grid-area:stack;width:100%;height:auto;object-fit:cover;transform:scale(var(--scale)) translate(var(--x),var(--y));transform-origin:top;transition:all .15s linear}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]   .gesture-1[_ngcontent-%COMP%]{z-index:6}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]   .gesture-2[_ngcontent-%COMP%]{z-index:5;--scale: .925;--y: -15px}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]   .gesture-3[_ngcontent-%COMP%]{z-index:4;--scale: .85;--y: -30px}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]   .gesture-4[_ngcontent-%COMP%]{z-index:3;--scale: .775;--y: -45px}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]   .gesture-5[_ngcontent-%COMP%]{z-index:2;--scale: .7;--y: -60px}.gesture-container[_ngcontent-%COMP%]   .gesture-stack[_ngcontent-%COMP%]   .gesture-6[_ngcontent-%COMP%]{z-index:1;--scale: .625;--y: -75px}.icon[_ngcontent-%COMP%]{font-size:20px;height:auto}.small-text[_ngcontent-%COMP%]{font-size:small}.verified[_ngcontent-%COMP%]{color:#7489dd}.premium[_ngcontent-%COMP%]{color:#ad8bd1}.gradient[_ngcontent-%COMP%]{position:absolute;display:block;width:100%;height:60%;background-image:linear-gradient(145deg,#54b972 40%,#27b1b2 80%);mix-blend-mode:multiply}']})}}return r})();export{fe as GestureComponent};
