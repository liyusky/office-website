webpackJsonp([9],{t421:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("WT6e"),o=function(){},i=t("bfOx"),u=t("Xjw4"),c=t("g5jc"),a=function(){return function(){this.headerContent=new c.a}}(),s=function(){function n(n){this.aboutUsService=n,this.navList=[this.getNavItem(0,"company-profile","\u516c\u53f8\u7b80\u4ecb"),this.getNavItem(1,"site-notice","\u7f51\u7ad9\u516c\u544a"),this.getNavItem(2,"common-problem","\u5e38\u89c1\u95ee\u9898"),this.getNavItem(3,"career","\u62db\u8d24\u7eb3\u58eb"),this.getNavItem(4,"contact-us","\u8054\u7cfb\u6211\u4eec")]}return n.prototype.ngOnInit=function(){},n.prototype.selectContent=function(n){this.aboutUsService.headerContent.next(n)},n.prototype.getNavItem=function(n,e,t){return{title:t,goal:e,flag:n}},n}(),r=l._0({encapsulation:0,styles:[[".nav-header[_ngcontent-%COMP%]{width:100%;height:70px;padding-left:15px;padding-right:15px}.nav-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;display:-webkit-box;display:-webkit-flex;-ms-flex-align:center;align-items:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-pack:center;-webkit-justify-content:center;width:100%;height:100%;border-bottom:1px solid #eee;font-size:18px;color:#656565}.nav-list[_ngcontent-%COMP%]{width:100%;height:350px}.nav-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;display:-webkit-box;display:-webkit-flex;-ms-flex-align:center;align-items:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-pack:center;-webkit-justify-content:center;width:100%;height:70px;color:#656565;font-size:16px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.nav-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]::before{content:'';display:none;width:2px;height:70px;position:absolute;top:0;left:0;z-index:99;background-color:#2577e4}.nav-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover::before{display:block}.nav-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover{color:#2577e4;background-color:#f8fbfb}.active[_ngcontent-%COMP%]{border:none}.active[_ngcontent-%COMP%]::before{display:block}"]],data:{}});function p(n){return l._21(0,[(n()(),l._2(0,0,null,null,5,"li",[["class","list-item"],["routerLinkActive","active"]],null,[[null,"click"]],function(n,e,t){var o=!0,i=n.component;return"click"===e&&(o=!1!==l._12(n,1).onClick()&&o),"click"===e&&(o=!1!==i.selectContent(n.context.$implicit.flag)&&o),o},null,null)),l._1(1,16384,[[1,4]],0,i.l,[i.k,i.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._1(2,1720320,null,2,i.m,[i.k,l.k,l.B,l.h],{routerLinkActive:[0,"routerLinkActive"]},null),l._17(603979776,1,{links:1}),l._17(603979776,2,{linksWithHrefs:1}),(n()(),l._19(5,null,["",""]))],function(n,e){n(e,1,0,l._5(1,"",e.context.$implicit.goal,"")),n(e,2,0,"active")},function(n,e){n(e,5,0,e.context.$implicit.title)})}function f(n){return l._21(0,[(n()(),l._2(0,0,null,null,4,"div",[["class","nav-header"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n  "])),(n()(),l._2(2,0,null,null,1,"div",[["class","header-title"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\u5173\u4e8e\u6211\u4eec"])),(n()(),l._19(-1,null,["\n"])),(n()(),l._19(-1,null,["\n"])),(n()(),l._2(6,0,null,null,4,"ul",[["class","nav-list"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n  "])),(n()(),l.X(16777216,null,null,1,null,p)),l._1(9,802816,null,0,u.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l._19(-1,null,["\n"])),(n()(),l._19(-1,null,["\n\n\n\n"]))],function(n,e){n(e,9,0,e.component.navList)},null)}var d=function(){function n(n){this.aboutUsService=n,this._headerContent=[this.getContent("company-profile","\u516c\u53f8\u7b80\u4ecb","\u59cb\u7ec8\u575a\u6301\u4ee5\u7406\u5ff5\u521b\u65b0\u3001\u6a21\u5f0f\u521b\u65b0\u548c\u6280\u672f\u521b\u65b0\u670d\u52a1\u5927\u4f17\uff0c\u771f\u6b63\u7684\u8ba9\u91d1\u878d\u66f4\u7f8e\u597d\u3002"),this.getContent("site-notice","\u7f51\u7ad9\u516c\u544a","\u6bcf\u5929\u66f4\u65b0\u4f60\u5173\u6ce8\u7684\u5934\u6761\uff0c\u4e0e\u91d1\u878d\u7f51\u8d37\u4e16\u754c\u63a5\u8f68\u3002"),this.getContent("common-problem","\u5e38\u89c1\u95ee\u9898","\u7cbe\u7ec6\u89e3\u7b54\uff0c\u53ea\u4e3a\u5411\u60a8\u63d0\u4f9b\u6700\u4f18\u8d28\u7684\u9879\u76ee\u4e0e\u670d\u52a1\u3002"),this.getContent("career","\u62db\u8d24\u7eb3\u58eb","\u60a8\u7684\u52a0\u5165\u5c06\u4f1a\u4e3a\u6211\u4eec\u5e26\u6765\u66f4\u591a\u7684\u7cbe\u5f69\uff0c\u671f\u5f85\u60a8\u7684\u52a0\u5165\u3002"),this.getContent("contact-us","\u8054\u7cfb\u6211\u4eec","\u8bda\u5b9e\u548c\u52e4\u52c9\u5e94\u8be5\u6210\u4e3a\u4f60\u6c38\u4e45\u7684\u4f34\u4fa3\uff01")],this.title=this._headerContent[0].title,this.message=this._headerContent[0].message,this.bgImage=this._headerContent[0].bgImage}return n.prototype.ngOnInit=function(){var n=this;this.aboutUsService.headerContent.subscribe(function(e){n.title=n._headerContent[e].title,n.message=n._headerContent[e].message,n.bgImage=n._headerContent[e].bgImage})},Object.defineProperty(n.prototype,"message",{get:function(){return this._message},set:function(n){this._message=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"title",{get:function(){return this._title},set:function(n){this._title=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bgImage",{get:function(){return this._bgImage},set:function(n){this._bgImage=n},enumerable:!0,configurable:!0}),n.prototype.getContent=function(n,e,t){return{title:e,message:t,bgImage:"../../../assets/images/about-us/"+n+"-header.png"}},n}(),b=l._0({encapsulation:0,styles:[[".detail-header[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;display:-webkit-box;display:-webkit-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-pack:space-between;-webkit-justify-content:space-between;width:100%;height:140px;color:#fff;background-color:transparent;position:relative;z-index:99;padding:30px}.detail-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:36px;font-weight:400}.detail-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}"]],data:{}});function g(n){return l._21(0,[(n()(),l._2(0,0,null,null,9,"div",[["class","detail-header"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n  "])),(n()(),l._2(2,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),l._19(3,null,["",""])),(n()(),l._19(-1,null,["\n  "])),(n()(),l._2(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l._19(6,null,["",""])),(n()(),l._19(-1,null,["\n  "])),(n()(),l._2(8,0,null,null,0,"img",[["class","bg-cover"]],[[8,"src",4]],null,null,null,null)),(n()(),l._19(-1,null,["\n"]))],null,function(n,e){var t=e.component;n(e,3,0,t.title),n(e,6,0,t.message),n(e,8,0,t.bgImage)})}var _=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=l._0({encapsulation:0,styles:[[".about-us[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;display:-webkit-box;display:-webkit-flex;-ms-flex-pack:center;justify-content:center;-webkit-box-pack:center;-webkit-justify-content:center;width:100%;min-height:950px;position:relative;padding-top:55px;padding-bottom:81px;background-color:#f1f2f3}.about-us-content[_ngcontent-%COMP%]{width:1100px;display:-ms-flexbox;display:flex;display:-webkit-box;display:-webkit-flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-pack:space-between;-webkit-justify-content:space-between}.about-us-content[_ngcontent-%COMP%]   .content-nav[_ngcontent-%COMP%]{width:170px;height:420px;background-color:#fff}.about-us-content[_ngcontent-%COMP%]   .content-detail[_ngcontent-%COMP%]{width:910px;height:auto}"]],data:{}});function m(n){return l._21(0,[(n()(),l._2(0,0,null,null,19,"section",[["class","about-us"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n  "])),(n()(),l._2(2,0,null,null,16,"div",[["class","about-us-content"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n    "])),(n()(),l._2(4,0,null,null,4,"nav",[["class","content-nav"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n      "])),(n()(),l._2(6,0,null,null,1,"office-nav",[],null,null,null,f,r)),l._1(7,114688,null,0,s,[a],null,null),(n()(),l._19(-1,null,["\n    "])),(n()(),l._19(-1,null,["\n    "])),(n()(),l._2(10,0,null,null,7,"div",[["class","content-detail"]],null,null,null,null,null)),(n()(),l._19(-1,null,["\n      "])),(n()(),l._2(12,0,null,null,1,"office-header",[],null,null,null,g,b)),l._1(13,114688,null,0,d,[a],null,null),(n()(),l._19(-1,null,["\n      "])),(n()(),l._2(15,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l._1(16,212992,null,0,i.o,[i.b,l.M,l.j,[8,null],l.h],null,null),(n()(),l._19(-1,null,["\n    "])),(n()(),l._19(-1,null,["\n  "])),(n()(),l._19(-1,null,["\n"]))],function(n,e){n(e,7,0),n(e,13,0),n(e,16,0)},null)}var x=l.Y("office-about-us",_,function(n){return l._21(0,[(n()(),l._2(0,0,null,null,1,"office-about-us",[],null,null,null,m,h)),l._1(1,114688,null,0,_,[],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]);t.d(e,"AboutUsModuleNgFactory",function(){return k});var k=l.Z(o,[],function(n){return l._9([l._10(512,l.j,l.V,[[8,[x]],[3,l.j],l.v]),l._10(4608,u.l,u.k,[l.s,[2,u.p]]),l._10(4608,a,a,[]),l._10(512,u.b,u.b,[]),l._10(512,i.n,i.n,[[2,i.s],[2,i.k]]),l._10(512,o,o,[]),l._10(1024,i.i,function(){return[[{path:"",component:_,children:[{path:"",redirectTo:"company-profile",pathMatch:"full"},{path:"company-profile",loadChildren:"./company-profile/company-profile.module#CompanyProfileModule"},{path:"common-problem",loadChildren:"./common-problem/common-problem.module#CommonProblemModule"},{path:"site-notice",loadChildren:"./site-notice/site-notice.module#SiteNoticeModule"},{path:"contact-us",loadChildren:"./contact-us/contact-us.module#ContactUsModule"},{path:"career",loadChildren:"./career/career.module#CareerModule"},{path:"**",loadChildren:"./company-profile/company-profile.module#CompanyProfileModule"}]}]]},[])])})}});