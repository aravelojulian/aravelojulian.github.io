"use strict";(self.webpackChunkfact_front=self.webpackChunkfact_front||[]).push([[189],{1908:(M,C,l)=>{l.d(C,{Z:()=>x});const g={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let h;const E=new Uint8Array(16);function v(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(E)}const u=[];for(let s=0;s<256;++s)u.push((s+256).toString(16).slice(1));const x=function Z(s,r,b){if(g.randomUUID&&!r&&!s)return g.randomUUID();const e=(s=s||{}).random||(s.rng||v)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){b=b||0;for(let a=0;a<16;++a)r[b+a]=e[a];return r}return function _(s,r=0){return(u[s[r+0]]+u[s[r+1]]+u[s[r+2]]+u[s[r+3]]+"-"+u[s[r+4]]+u[s[r+5]]+"-"+u[s[r+6]]+u[s[r+7]]+"-"+u[s[r+8]]+u[s[r+9]]+"-"+u[s[r+10]]+u[s[r+11]]+u[s[r+12]]+u[s[r+13]]+u[s[r+14]]+u[s[r+15]]).toLowerCase()}(e)}},9639:(M,C,l)=>{l.d(C,{p:()=>s});var c=l(755),g=l(4288),h=l(1749),E=l(319),v=l(1908),u=l(3690),_=l(3472),T=l(163),A=l(9082),Z=l(4230),x=l(2295);let s=(()=>{class r extends u.u{constructor(e,a,f){super(),this._restService=e,this._toast=a,this._modal=f,this.faPlus=g.r8p,this.faTrashCan=g.Vui,this.faPencil=g.TzT,this.faEye=g.Mdf,this.faRepeat=g.jHE,this.modalViewTypes=T.t,this.allElementsSelected=(0,c.tdS)(!1),this.elements=(0,c.tdS)([]),this.selectedElements=(0,c.tdS)([]),this.filters=(0,c.tdS)(null),this.query=(0,c.tdS)({limit:10,offset:0,page:1}),this.canAdd=!0,this.canEdit=!0,this.canRemove=!0,this.canView=!0}removeNonValidKeys(e){for(const a in e){const f=e[a];(null==f||""===f)&&delete e[a]}return e}getElements(){this._restService.getElements(this.query(),this.filters()).pipe((0,h.R)(this.observableDestroy$)).subscribe({next:e=>{this.query.mutate(a=>{a.total=e?.count}),this.elements.set(e?.results.map(a=>(a?.uuid||(a.uuid=(0,v.Z)()),a)))}})}addElement(e){this._restService.create(this.removeNonValidKeys(e)).pipe((0,h.R)(this.observableDestroy$)).subscribe({next:()=>{this._toast.showToast("Agregado exitosamente",_.p.SUCCESS),this.getElements()},error:()=>{this._toast.showToast("Ha ocurrido un error en la creaci\xf3n",_.p.DANGER)}})}updateElement(e){this._restService.edit(e?.uuid,this.removeNonValidKeys(e)).pipe((0,h.R)(this.observableDestroy$)).subscribe({next:()=>{this._toast.showToast("Editado exitosamente",_.p.SUCCESS),this.getElements()},error:()=>{this._toast.showToast("Ha ocurrido un error al editar",_.p.DANGER)}})}selectAllElement(){this.allElementsSelected()?this.selectedElements.set([]):this.elements().forEach(e=>{this.selectedElements().includes(e)||this.selectedElements.mutate(f=>{f.push(e)})}),this.allElementsSelected.set(!this.allElementsSelected())}closeModalAction(e){this.modalRef.result.then(a=>{if("string"!=typeof a)switch(e){case T.t.CREATE:this.addElement(a);break;case T.t.EDIT:this.updateElement(a)}},a=>{console.log(a)})}selectElement(e){this.selectedElements().includes(e)?this.selectedElements.mutate(f=>{f.splice(f.indexOf(e),1)}):this.selectedElements.mutate(f=>{f.push(e)}),this.allElementsSelected.set(this.selectedElements()?.length===this.elements?.length)}removeElements(e){const a=this._modal.open(A.c,{size:"sm"});a.componentInstance.question=e?"\xbfEst\xe1 seguro que desea eliminar este elemento?":"\xbfEst\xe1 seguro que desea eliminar todos los elementos?",a.result.then(f=>{"accept"===f&&(e?this._restService.remove(e).pipe((0,h.R)(this.observableDestroy$)).subscribe({next:()=>{this.getElements()}}):(0,E.D)(this.selectedElements()?.map(P=>this._restService.remove(P?.uuid))).pipe((0,h.R)(this.observableDestroy$)).subscribe({next:()=>{this._toast.showToast("Eliminado exitosamente",_.p.SUCCESS),this.getElements()},error:()=>{this._toast.showToast("Ha ocurrido un error al eliminar los elementos",_.p.DANGER)}}))})}isChecked(e){return this.selectedElements().some(a=>a?.uuid===e?.uuid)}search(e){this.filters.set(e),this.getElements()}changePagination(e){this.query.mutate(a=>{a={...a,page:e,offset:10*(e-1)}}),this.getElements()}ngOnInit(){this.allElementsSelected.set(!1),this.getElements()}}return r.\u0275fac=function(e){return new(e||r)(c.Y36(Z.M),c.Y36(_.k),c.Y36(x.FF))},r.\u0275cmp=c.Xpm({type:r,selectors:[["ng-component"]],inputs:{canAdd:"canAdd",canEdit:"canEdit",canRemove:"canRemove",canView:"canView"},features:[c.qOj],decls:0,vars:0,template:function(e,a){},encapsulation:2}),r})()},6189:(M,C,l)=>{l.r(C),l.d(C,{ClientsModule:()=>X});var c=l(6733),g=l(6752),h=l(3072),E=l(2295),v=l(4288),u=l(8513),_=l(4039),T=l(9639),A=l(1276),Z=l(163),x=l(3628),s=l(4447),r=l(2997),b=l(6994),e=l(755),a=l(3472),f=l(5893),P=l(7160);function w(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.raiseDialog(i.selectedElements()[0],i.modalViewTypes.CREATE))}),e._UZ(1,"fa-icon",1),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faPlus),e.xp6(1),e.hij(" ",e.lcZ(3,2,e.lcZ(4,4,"a\xf1adir"))," ")}}function L(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.raiseDialog(i.selectedElements()[0],i.modalViewTypes.VIEW))}),e._UZ(1,"fa-icon",1),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faEye),e.xp6(1),e.hij(" ",e.lcZ(3,2,e.lcZ(4,4,"ver"))," ")}}function R(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.raiseDialog(i.selectedElements()[0],i.modalViewTypes.EDIT))}),e._UZ(1,"fa-icon",1),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faPencil),e.xp6(1),e.hij(" ",e.lcZ(3,2,e.lcZ(4,4,"editar"))," ")}}function S(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.removeElements())}),e._UZ(1,"fa-icon",1),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faTrashCan),e.xp6(1),e.hij(" ",e.lcZ(3,2,e.lcZ(4,4,"eliminar"))," ")}}function J(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"input",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,m=e.oxw();return e.KtG(m.selectElement(i))}),e.qZA()}if(2&n){const t=e.oxw().$implicit,o=e.oxw();e.Q6J("checked",o.isChecked(t))}}function N(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"fa-icon",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,m=e.oxw();return e.KtG(m.raiseDialog(i,m.modalViewTypes.VIEW))}),e.ALo(1,"translate"),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("icon",t.faEye)("ngbTooltip",e.lcZ(1,2,"Ver cliente"))}}function F(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"fa-icon",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,m=e.oxw();return e.KtG(m.raiseDialog(i,m.modalViewTypes.EDIT))}),e.ALo(1,"translate"),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("icon",t.faPencil)("ngbTooltip",e.lcZ(1,2,"Editar cliente"))}}function k(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"fa-icon",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,m=e.oxw();return e.KtG(m.removeElements(null==i?null:i.uuid))}),e.ALo(1,"translate"),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("icon",t.faTrashCan)("ngbTooltip",e.lcZ(1,2,"Eliminar cliente"))}}function q(n,d){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e.YNc(2,J,1,1,"input",11),e.qZA(),e.TgZ(3,"td")(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"td")(7,"span"),e._uU(8),e.qZA()(),e.TgZ(9,"td")(10,"span"),e._uU(11),e.ALo(12,"parseIdentificationType"),e.qZA()(),e.TgZ(13,"td")(14,"span"),e._uU(15),e.qZA()(),e.TgZ(16,"td")(17,"span"),e._uU(18),e.qZA()(),e.TgZ(19,"td")(20,"div",12),e.YNc(21,N,2,4,"fa-icon",13),e.YNc(22,F,2,4,"fa-icon",13),e.YNc(23,k,2,4,"fa-icon",13),e.qZA()()()),2&n){const t=d.$implicit,o=e.oxw();e.xp6(2),e.Q6J("ngIf",o.canEdit||o.canView||o.canRemove),e.xp6(3),e.Oqu(null==t?null:t.name),e.xp6(3),e.Oqu(null==t?null:t.phone_number),e.xp6(3),e.Oqu(e.lcZ(12,9,null==t||null==t.identification?null:t.identification.type)),e.xp6(4),e.Oqu(null==t||null==t.identification?null:t.identification.number),e.xp6(3),e.Oqu(null==t||null==t.emails?null:t.emails[0]),e.xp6(3),e.Q6J("ngIf",o.canView),e.xp6(1),e.Q6J("ngIf",o.canEdit),e.xp6(1),e.Q6J("ngIf",o.canRemove)}}function Q(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"div",16)(1,"ngb-pagination",17),e.NdJ("pageChange",function(i){e.CHM(t);const m=e.oxw();return e.KtG(m.changePagination(i))}),e.qZA()()}if(2&n){const t=e.oxw();let o,i,m;e.xp6(1),e.Q6J("collectionSize",null==(o=t.query())?null:o.total)("pageSize",null==(i=t.query())?null:i.limit)("page",null==(m=t.query())?null:m.page)("maxSize",5)}}let U=(()=>{class n extends T.p{constructor(t,o,i){super(t,o,i),this._clientService=t,this._toastService=o,this._modalService=i,this.faPersonCirclePlus=v.Ukc}raiseDialog(t,o=Z.t.VIEW){this.modalRef=this._modalService.open(x.m,{size:"lg",backdrop:"static"}),this.modalRef.componentInstance.viewMode=o,(o===Z.t.VIEW||o===Z.t.EDIT)&&(this.modalRef.componentInstance.element=t),this.closeModalAction(o)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.y),e.Y36(a.k),e.Y36(E.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-client-table"]],standalone:!0,features:[e._Bn([A.y]),e.qOj,e.jDz],decls:41,vars:38,consts:[[1,"d-flex","flex-column","gap-3","mt-5"],[3,"icon"],[1,"component-title","p-2"],[3,"filters"],[1,"d-flex","justify-content-end","gap-1"],["class","btn btn-secondary",3,"click",4,"ngIf"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center p-2",4,"ngIf"],[1,"btn","btn-secondary",3,"click"],["class","cursor-pointer","type","checkbox",3,"checked","click",4,"ngIf"],[1,"icons-table-container"],["placement","left",3,"icon","ngbTooltip","click",4,"ngIf"],["type","checkbox",1,"cursor-pointer",3,"checked","click"],["placement","left",3,"icon","ngbTooltip","click"],[1,"d-flex","justify-content-center","p-2"],[3,"collectionSize","pageSize","page","maxSize","pageChange"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"fa-icon",1),e.TgZ(3,"span",2),e._uU(4),e.ALo(5,"capitalize"),e.ALo(6,"translate"),e.qZA()(),e._UZ(7,"app-filters-chips",3),e.TgZ(8,"div",4),e.YNc(9,w,5,6,"button",5),e.YNc(10,L,5,6,"button",5),e.YNc(11,R,5,6,"button",5),e.YNc(12,S,5,6,"button",5),e.qZA(),e.TgZ(13,"table",6)(14,"thead")(15,"tr"),e._UZ(16,"th",7),e.TgZ(17,"th",7),e._uU(18),e.ALo(19,"titlecase"),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"th",7),e._uU(22),e.ALo(23,"titlecase"),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"th",7),e._uU(26),e.ALo(27,"capitalize"),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"th",7),e._uU(30),e.ALo(31,"titlecase"),e.ALo(32,"translate"),e.qZA(),e.TgZ(33,"th",7),e._uU(34),e.ALo(35,"titlecase"),e.ALo(36,"translate"),e.qZA(),e._UZ(37,"th",7),e.qZA()(),e.TgZ(38,"tbody"),e.YNc(39,q,24,11,"tr",8),e.qZA()(),e.YNc(40,Q,2,4,"div",9),e.qZA()),2&t){let i,m,O,I;e.xp6(2),e.Q6J("icon",o.faPersonCirclePlus),e.xp6(2),e.Oqu(e.lcZ(5,14,e.lcZ(6,16,"clientes"))),e.xp6(3),e.Q6J("filters",o.filters()),e.xp6(2),e.Q6J("ngIf",o.canAdd),e.xp6(1),e.Q6J("ngIf",1===(null==(i=o.selectedElements())?null:i.length)&&o.canView),e.xp6(1),e.Q6J("ngIf",1===(null==(m=o.selectedElements())?null:m.length)&&o.canEdit),e.xp6(1),e.Q6J("ngIf",(null==(O=o.selectedElements())?null:O.length)>0&&o.canRemove),e.xp6(6),e.Oqu(e.lcZ(19,18,e.lcZ(20,20,"nombre"))),e.xp6(4),e.Oqu(e.lcZ(23,22,e.lcZ(24,24,"tel\xe9fono"))),e.xp6(4),e.Oqu(e.lcZ(27,26,e.lcZ(28,28,"tipo identificaci\xf3n"))),e.xp6(4),e.Oqu(e.lcZ(31,30,e.lcZ(32,32,"identificaci\xf3n"))),e.xp6(4),e.Oqu(e.lcZ(35,34,e.lcZ(36,36,"email"))),e.xp6(5),e.Q6J("ngForOf",o.elements()),e.xp6(1),e.Q6J("ngIf",null==(I=o.query())?null:I.total)}},dependencies:[u.uH,u.BN,E.N9,_.aw,_.X$,c.rS,s.m,r.P,f.e,c.O5,c.sg,E._L,b.l,P.d],changeDetection:0}),n})();var p=l(3226),y=l(2845),V=l(49);function j(n,d){if(1&n&&e._UZ(0,"fa-icon",20),2&n){const t=e.oxw();e.Q6J("icon",t.faAngleDown)}}function z(n,d){if(1&n&&e._UZ(0,"fa-icon",20),2&n){const t=e.oxw();e.Q6J("icon",t.faAngleUp)}}function G(n,d){if(1&n&&(e.TgZ(0,"option",22),e._uU(1),e.ALo(2,"capitalize"),e.qZA()),2&n){const t=d.$implicit;e.Q6J("value",null==t?null:t.value),e.xp6(1),e.hij(" ",e.lcZ(2,2,null==t?null:t.text)," ")}}function K(n,d){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"el formato de tel\xe9fono es incorrecto"))," "))}function $(n,d){if(1&n&&(e.TgZ(0,"div",23),e.YNc(1,K,4,5,"span",24),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form.controls.phone_number.hasError("pattern"))}}const Y=function(n){return{"not-collapsed":n}},B=function(n,d){return{"is-invalid":n,"is-valid":d}};let D=(()=>{class n{constructor(){this.isCollapsed=!0,this.faAngleDown=v.gc2,this.faAngleUp=v.onQ,this.faSearch=v.wn1,this.IdentificationsTypes=V.P,this.form=new p.nJ({identification__type:new p.p4({value:null,disabled:!1}),identification:new p.p4({value:null,disabled:!1},[p.kI.pattern(y.qC)]),name:new p.p4({value:null,disabled:!1}),phone_number:new p.p4({value:null,disabled:!1},[p.kI.pattern(y.qC)]),commercial_name:new p.p4({value:null,disabled:!1}),email:new p.p4({value:null,disabled:!1})}),this.searchFilters=new e.vpe}search(){const t={...this.form.value};Object.keys(t).forEach(o=>!t[o]&&delete t[o]),this.searchFilters.emit(t)}noDataToSearch(){const t={...this.form.value};return!Object.keys(t).some(o=>t[o])}clear(){this.form.reset(),this.searchFilters.emit(null)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-client-filters"]],outputs:{searchFilters:"searchFilters"},standalone:!0,features:[e.jDz],decls:62,vars:61,consts:[[1,"d-flex","flex-column","gap-2","filters-container",3,"ngClass"],[1,"d-flex","justify-content-between","align-items-center","cursor-pointer",3,"click"],[1,"component-title"],[3,"icon",4,"ngIf"],[3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[1,"d-flex","flex-column","gap-3",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center","gap-1"],[1,"d-flex","flex-column","form-group","col-4"],[1,"control-label","mb-2"],["formControlName","identification__type",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["formControlName","identification","type","text",1,"form-control"],["formControlName","email","type","text",1,"form-control"],["formControlName","phone_number","type","text",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","name","type","text",1,"form-control"],["formControlName","commercial_name","type","text",1,"form-control"],[1,"d-flex","justify-content-end","gap-3"],[1,"btn","btn-outline-secondary",3,"click"],[3,"icon"],[1,"btn","btn-primary",3,"disabled","click"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){e.CHM(i);const O=e.MAs(9);return e.KtG(O.toggle())}),e.TgZ(2,"span",2),e._uU(3),e.ALo(4,"capitalize"),e.ALo(5,"translate"),e.qZA(),e.YNc(6,j,1,1,"fa-icon",3),e.YNc(7,z,1,1,"fa-icon",3),e.qZA(),e.TgZ(8,"div",4,5),e.NdJ("ngbCollapseChange",function(O){return o.isCollapsed=O}),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),e._uU(14),e.ALo(15,"capitalize"),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"select",10),e.YNc(18,G,3,4,"option",11),e.qZA()(),e.TgZ(19,"div",8)(20,"label",9),e._uU(21),e.ALo(22,"capitalize"),e.ALo(23,"translate"),e.qZA(),e._UZ(24,"input",12),e.qZA(),e.TgZ(25,"div",8)(26,"label",9),e._uU(27),e.ALo(28,"capitalize"),e.ALo(29,"translate"),e.qZA(),e._UZ(30,"input",13),e.qZA()(),e.TgZ(31,"div",7)(32,"div",8)(33,"label",9),e._uU(34),e.ALo(35,"capitalize"),e.ALo(36,"translate"),e.qZA(),e._UZ(37,"input",14),e.YNc(38,$,2,1,"div",15),e.qZA(),e.TgZ(39,"div",8)(40,"label",9),e._uU(41),e.ALo(42,"capitalize"),e.ALo(43,"translate"),e.qZA(),e._UZ(44,"input",16),e.qZA(),e.TgZ(45,"div",8)(46,"label",9),e._uU(47),e.ALo(48,"capitalize"),e.ALo(49,"translate"),e.qZA(),e._UZ(50,"input",17),e.qZA()(),e.TgZ(51,"div",18)(52,"button",19),e.NdJ("click",function(){return o.clear()}),e._UZ(53,"fa-icon",20),e._uU(54),e.ALo(55,"capitalize"),e.ALo(56,"translate"),e.qZA(),e.TgZ(57,"button",21),e.NdJ("click",function(){return o.search()}),e._UZ(58,"fa-icon",20),e._uU(59),e.ALo(60,"capitalize"),e.ALo(61,"translate"),e.qZA()()()()()}2&t&&(e.Q6J("ngClass",e.VKq(56,Y,!o.isCollapsed)),e.xp6(3),e.Oqu(e.lcZ(4,20,e.lcZ(5,22,"filtros de b\xfasqueda"))),e.xp6(3),e.Q6J("ngIf",o.isCollapsed),e.xp6(1),e.Q6J("ngIf",!o.isCollapsed),e.xp6(1),e.Q6J("ngbCollapse",o.isCollapsed),e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.hij(" ",e.lcZ(15,24,e.lcZ(16,26,"tipo de identificaci\xf3n")),": "),e.xp6(4),e.Q6J("ngForOf",o.IdentificationsTypes),e.xp6(3),e.hij(" ",e.lcZ(22,28,e.lcZ(23,30,"identificaci\xf3n")),": "),e.xp6(6),e.hij(" ",e.lcZ(28,32,e.lcZ(29,34,"email")),": "),e.xp6(7),e.hij(" ",e.lcZ(35,36,e.lcZ(36,38,"tel\xe9fono")),": "),e.xp6(3),e.Q6J("ngClass",e.WLB(58,B,o.form.controls.phone_number.touched&&o.form.controls.phone_number.errors,o.form.controls.phone_number.valid&&o.form.controls.phone_number.value)),e.xp6(1),e.Q6J("ngIf",o.form.controls.phone_number.touched&&o.form.controls.phone_number.errors),e.xp6(3),e.hij(" ",e.lcZ(42,40,e.lcZ(43,42,"nombre")),": "),e.xp6(6),e.hij(" ",e.lcZ(48,44,e.lcZ(49,46,"nombre comercial")),": "),e.xp6(6),e.Q6J("icon",o.faSearch),e.xp6(1),e.hij(" ",e.lcZ(55,48,e.lcZ(56,50,"limpiar"))," "),e.xp6(3),e.Q6J("disabled",o.form.invalid||o.noDataToSearch()),e.xp6(1),e.Q6J("icon",o.faSearch),e.xp6(1),e.hij(" ",e.lcZ(60,52,e.lcZ(61,54,"buscar"))," "))},dependencies:[E._D,_.aw,_.X$,r.P,f.e,u.uH,u.BN,c.O5,p.UX,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,p.sg,p.u,c.sg,c.mk],styles:[".alert-atlas-theme[_ngcontent-%COMP%]{color:#085b76;background-color:#c9effb;border-color:#b6e9fa}.alert-atlas-theme[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-top-color:#9ee2f8}.alert-atlas-theme[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%]{color:#043646}.badge-atlas-theme[_ngcontent-%COMP%]{color:#212529;background-color:#10b4e9}.badge-atlas-theme[href][_ngcontent-%COMP%]:hover, .badge-atlas-theme[href][_ngcontent-%COMP%]:focus{color:#212529;background-color:#0c8fb9}.bg-atlas-theme[_ngcontent-%COMP%]{background-color:#10b4e9!important}a.bg-atlas-theme[_ngcontent-%COMP%]:hover, a.bg-atlas-theme[_ngcontent-%COMP%]:focus, button.bg-atlas-theme[_ngcontent-%COMP%]:hover, button.bg-atlas-theme[_ngcontent-%COMP%]:focus{background-color:#0c8fb9!important}.border-atlas-theme[_ngcontent-%COMP%]{border-color:#10b4e9!important}.btn-atlas-theme[_ngcontent-%COMP%]{color:#212529;background-color:#10b4e9;border-color:#10b4e9}.btn-atlas-theme[_ngcontent-%COMP%]:hover{color:#212529;background-color:#0d9ac7;border-color:#0c8fb9}.btn-atlas-theme[_ngcontent-%COMP%]:focus, .btn-atlas-theme.focus[_ngcontent-%COMP%]{box-shadow:0 0 0 .2rem #10b4e980}.btn-atlas-theme.disabled[_ngcontent-%COMP%], .btn-atlas-theme[_ngcontent-%COMP%]:disabled{color:#212529;background-color:#10b4e9;border-color:#10b4e9}.btn-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%] > .btn-atlas-theme.dropdown-toggle[_ngcontent-%COMP%]{color:#212529;background-color:#0c8fb9;border-color:#0b84aa}.btn-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%] > .btn-atlas-theme.dropdown-toggle[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem #10b4e980}.btn-outline-atlas-theme[_ngcontent-%COMP%]{color:#10b4e9;background-color:transparent;border-color:#10b4e9}.btn-outline-atlas-theme[_ngcontent-%COMP%]:hover{color:#212529;background-color:#10b4e9;border-color:#10b4e9}.btn-outline-atlas-theme[_ngcontent-%COMP%]:focus, .btn-outline-atlas-theme.focus[_ngcontent-%COMP%]{box-shadow:0 0 0 .2rem #10b4e980}.btn-outline-atlas-theme.disabled[_ngcontent-%COMP%], .btn-outline-atlas-theme[_ngcontent-%COMP%]:disabled{color:#10b4e9;background-color:transparent}.btn-outline-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%] > .btn-outline-atlas-theme.dropdown-toggle[_ngcontent-%COMP%]{color:#212529;background-color:#10b4e9;border-color:#10b4e9}.btn-outline-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-atlas-theme[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%] > .btn-outline-atlas-theme.dropdown-toggle[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem #10b4e980}.list-group-item-atlas-theme[_ngcontent-%COMP%]{color:#085b76;background-color:#b6e9fa}.list-group-item-atlas-theme.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-atlas-theme.list-group-item-action[_ngcontent-%COMP%]:focus{color:#085b76;background-color:#9ee2f8}.list-group-item-atlas-theme.list-group-item-action.active[_ngcontent-%COMP%]{color:#212529;background-color:#085b76;border-color:#085b76}.table-atlas-theme[_ngcontent-%COMP%], .table-atlas-theme[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-atlas-theme[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{background-color:#b6e9fa}.table-hover[_ngcontent-%COMP%]   .table-atlas-theme[_ngcontent-%COMP%]:hover{background-color:#9ee2f8}.table-hover[_ngcontent-%COMP%]   .table-atlas-theme[_ngcontent-%COMP%]:hover > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-atlas-theme[_ngcontent-%COMP%]:hover > th[_ngcontent-%COMP%]{background-color:#9ee2f8}.text-atlas-theme[_ngcontent-%COMP%]{color:#10b4e9!important}a.text-atlas-theme[_ngcontent-%COMP%]:hover, a.text-atlas-theme[_ngcontent-%COMP%]:focus{color:#0c8fb9!important}.filters-container[_ngcontent-%COMP%]{border:1px solid #b3b3b3;border-radius:.5rem;padding:.5rem 1rem}.filters-container.not-collapsed[_ngcontent-%COMP%]{padding-bottom:1rem}"],changeDetection:0}),n})();const W=[{path:"",component:(()=>{class n{constructor(t){this._authenticatedUserService=t,this.canAdd=!1,this.canEdit=!1,this.canView=!1,this.canRemove=!1}search(t){this.clientTable.search(t)}ngOnInit(){const t=this._authenticatedUserService.isUserAdmin();this.canAdd=this._authenticatedUserService.checkPermission("app.add_client")||t,this.canEdit=this._authenticatedUserService.checkPermission("app.change_client")||t,this.canView=this._authenticatedUserService.checkPermission("app.view_client")||t,this.canRemove=this._authenticatedUserService.checkPermission("app.delete_client")||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.G))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-clients"]],viewQuery:function(t,o){if(1&t&&e.Gf(U,5),2&t){let i;e.iGM(i=e.CRH())&&(o.clientTable=i.first)}},decls:2,vars:4,consts:[[3,"searchFilters"],[3,"canAdd","canRemove","canEdit","canView"]],template:function(t,o){1&t&&(e.TgZ(0,"app-client-filters",0),e.NdJ("searchFilters",function(m){return o.search(m)}),e.qZA(),e._UZ(1,"app-client-table",1)),2&t&&(e.xp6(1),e.Q6J("canAdd",o.canAdd)("canRemove",o.canRemove)("canEdit",o.canEdit)("canView",o.canView))},dependencies:[U,D],changeDetection:0}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(W),g.Bz]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,H,x.m,U,D]}),n})()},163:(M,C,l)=>{l.d(C,{t:()=>c});var c=(()=>((c=c||{})[c.VIEW=0]="VIEW",c[c.CREATE=1]="CREATE",c[c.EDIT=2]="EDIT",c))()},2845:(M,C,l)=>{l.d(C,{CU:()=>c,Ms:()=>v,O3:()=>A,U1:()=>Z,_D:()=>E,cS:()=>T,l:()=>u,q9:()=>_,qC:()=>g,y3:()=>h});const c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,g=/^[0-9.]*$/,h=/^\d{1,13}$/,E=/^(?=.{8}$)\D*\d/,v=/^(?=.{10}$)\D*\d/,u=/^(?=.{9}$)\D*\d/,_=/^(?=.{12}$)\D*\d/,T=/^(?=.{6}$)\D*\d/,A=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,Z=/^([aA][lL])-\d{8}-\d{2}$/}}]);