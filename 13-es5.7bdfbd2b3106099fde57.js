!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3DXg":function(e,o,i){"use strict";i.r(o),i.d(o,"RootPageModule",(function(){return m}));var a=i("tyNb"),r=i("fXoL"),l=i("TEn/"),u=i("ofXK");function d(n,t){if(1&n&&(r.Lb(0,"ion-list"),r.Lb(1,"ion-menu-toggle",4),r.Lb(2,"ion-item",5),r.Jb(3,"ion-icon",6),r.dc(4),r.Kb(),r.Kb(),r.Kb()),2&n){var e=t.$implicit;r.yb(2),r.Yb("routerLink",e.url),r.yb(1),r.Yb("name",e.icon),r.yb(1),r.fc(" ",e.title," ")}}var c,p,h,s=[{path:"",component:(c=function(){function e(){n(this,e),this.initializeApp()}var o,i,a;return o=e,(i=[{key:"initializeApp",value:function(){this.sideMenu()}},{key:"sideMenu",value:function(){this.navigate=[{title:"\u5e97\u94fa\u4eea\u8868\u76d8",url:"/admin/dashboard",icon:"apps"},{title:"\u603b\u9500\u552e\u6570\u636e\u4eea\u8868\u76d8",url:"/admin/sale",icon:"apps"},{title:"\u4eca\u65e5\u9500\u552e\u6570\u636e\u4eea\u8868\u76d8",url:"/admin/today_sale",icon:"apps"},{title:"\u6dfb\u52a0\u5e97\u94fa",url:"/admin/map-add",icon:"book"},{title:"DF\u7248\u672c-\u5e97\u94fa",url:"/admin/map-shop-pd",icon:"book"},{title:"\u8f7d\u5165\u7248-\u5e97\u94fa",url:"/admin/map-on",icon:"book"},{title:"\u5e93\u5b58\u6570\u636e",url:"/admin/warehouse",icon:"apps"},{title:"\u540e\u53f0",url:"",icon:"apps"}]}},{key:"ngOnInit",value:function(){}}])&&t(o.prototype,i),a&&t(o,a),e}(),c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=r.Cb({type:c,selectors:[["app-root"]],decls:8,vars:1,consts:[["side","start","menuId","first","contentId","content"],["color","light"],[4,"ngFor","ngForOf"],["Id","content"],["auto-hide","false"],["routerDirection","forward",3,"routerLink"],["slot","start",3,"name"]],template:function(n,t){1&n&&(r.Lb(0,"ion-menu",0),r.Lb(1,"ion-header"),r.Lb(2,"ion-toolbar"),r.Lb(3,"ion-title"),r.dc(4,"\u76ee\u5f55"),r.Kb(),r.Kb(),r.Kb(),r.Lb(5,"ion-content",1),r.cc(6,d,5,3,"ion-list",2),r.Kb(),r.Kb(),r.Jb(7,"ion-router-outlet",3)),2&n&&(r.yb(6),r.Yb("ngForOf",t.navigate))},directives:[l.n,l.h,l.y,l.w,l.f,u.i,l.q,l.m,l.p,l.k,a.h,l.D,l.i],styles:[""]}),c),children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:function(){return i.e(14).then(i.bind(null,"gmZ5")).then((function(n){return n.DashboardPageModule}))}},{path:"map-shop-pd",data:{preload:!0},loadChildren:function(){return Promise.all([i.e(1),i.e(21)]).then(i.bind(null,"tCC3")).then((function(n){return n.MapPageModule}))}},{path:"map-on",data:{preload:!0},loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(20)]).then(i.bind(null,"H4Gf")).then((function(n){return n.MapPageModule}))}},{path:"map-add",data:{preload:!0},loadChildren:function(){return Promise.all([i.e(1),i.e(0)]).then(i.bind(null,"N+9X")).then((function(n){return n.MapPageModule}))}},{path:"sale",loadChildren:function(){return i.e(12).then(i.bind(null,"2EwL")).then((function(n){return n.SalePageModule}))}},{path:"today_sale",loadChildren:function(){return i.e(15).then(i.bind(null,"2Wr6")).then((function(n){return n.TodaySalePageModule}))}},{path:"warehouse",loadChildren:function(){return i.e(16).then(i.bind(null,"/tTq")).then((function(n){return n.WarehousePageModule}))}},{path:"***",redirectTo:"dashboard",pathMatch:"full"}]}],b=((p=function t(){n(this,t)}).\u0275mod=r.Gb({type:p}),p.\u0275inj=r.Fb({factory:function(n){return new(n||p)},imports:[[a.i.forChild(s)],a.i]}),p),f=i("kCW2"),m=((h=function t(){n(this,t)}).\u0275mod=r.Gb({type:h}),h.\u0275inj=r.Fb({factory:function(n){return new(n||h)},imports:[[b,f.a]]}),h)}}])}();