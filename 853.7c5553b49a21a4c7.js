"use strict";(self.webpackChunkfact_front=self.webpackChunkfact_front||[]).push([[853],{3551:(Z,b,r)=>{r.d(b,{v:()=>S});var e=r(755),n=r(3226),h=r(6733),f=r(8513),u=r(4288),v=r(4039),m=r(1749),p=r(2845),E=r(3690),_=r(49),g=r(3472),T=r(2997),C=r(1056),A=r(5893);function X(t,l){if(1&t&&(e.TgZ(0,"option",10),e._uU(1),e.ALo(2,"capitalize"),e.qZA()),2&t){const o=l.$implicit;e.Q6J("value",null==o?null:o.value),e.xp6(1),e.hij(" ",e.lcZ(2,2,null==o?null:o.text)," ")}}function I(t,l){1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"el tipo de identificaci\xf3n es requerido"))," "))}function P(t,l){if(1&t&&(e.TgZ(0,"div",11),e.YNc(1,I,4,5,"span",12),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.form.controls.type.hasError("required"))}}function a(t,l){1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"la identificaci\xf3n es requerida"))," "))}function d(t,l){1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"el formato de identificaci\xf3n es incorrecto"))," "))}function s(t,l){if(1&t&&(e.TgZ(0,"div",11),e.YNc(1,a,4,5,"span",12),e.YNc(2,d,4,5,"span",12),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.form.controls.number.hasError("required")),e.xp6(1),e.Q6J("ngIf",o.form.controls.number.hasError("pattern"))}}function c(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(o);const M=e.oxw();return e.KtG(M.getInfoTaxpayer())}),e._UZ(1,"fa-icon",14),e.qZA()}if(2&t){const o=e.oxw();e.Q6J("disabled",o.form.invalid||o.isSearching),e.xp6(1),e.Q6J("icon",o.faSearch)}}const y=function(t,l){return{"flex-column":t,"gap-3":l}},O=function(t,l){return{"identification-min-height":t,"mb-2":l}},D=function(t,l,o){return{"is-invalid":t,"is-valid":l,disabled:o}},L=function(t,l){return{"is-invalid":t,"is-valid":l}};let S=(()=>{class t extends E.u{constructor(o,i){super(),this._haciendaService=o,this._toastService=i,this.identificationTypes=_.P,this.faSearch=u.wn1,this.isSearching=!1,this.automaticSearch=!1,this.identificationPlaceholder="X-XXXX-XXXX",this.form=new n.nJ({type:new n.p4({value:_.d.FISICAS_NACIONALES,disabled:!1},[n.kI.required]),number:new n.p4({value:null,disabled:!1},[n.kI.required,n.kI.pattern(p.l)])}),this.labelInColumn=!1,this.readonly=!1,this.noSearch=!1,this.taxpayerFounded=new e.vpe,this.identificationNumberChanged=new e.vpe}set data(o){o&&this.form.patchValue({...o})}subscribeToIdentificationChanged(){this.form.get("number").valueChanges.pipe((0,m.R)(this.observableDestroy$)).subscribe({next:o=>{this.identificationCopy!==o&&(this.identificationCopy=o,this.identificationNumberChanged.emit(),this.form.updateValueAndValidity(),this.form.valid&&!this.automaticSearch?(this.automaticSearch=!0,this.getInfoTaxpayer()):!this.form.valid&&this.automaticSearch&&(this.automaticSearch=!1))}})}subscribeToIdentificationTypesChange(){this.form.get("type").valueChanges.pipe((0,m.R)(this.observableDestroy$)).subscribe({next:o=>{switch(o){case _.d.FISICAS_NACIONALES:this.form.get("number").clearValidators(),this.form.get("number").setValidators([n.kI.required,n.kI.pattern(p.l)]),this.identificationPlaceholder="X-XXXX-XXXX";break;case _.d.DIMEX:this.form.get("number").clearValidators(),this.form.get("number").setValidators([n.kI.required,n.kI.pattern(p.q9)]),this.identificationPlaceholder="XXXX-XXXX-XXXX";break;case _.d.NITES_TRIBUTARIOS:this.form.get("number").clearValidators(),this.form.get("number").setValidators([n.kI.required,n.kI.pattern(p.l)]),this.identificationPlaceholder="X-XXXX-XXXX";break;case _.d.JURIDICA_NACIONAL:this.form.get("number").clearValidators(),this.form.get("number").setValidators([n.kI.required,n.kI.pattern(p.Ms)]),this.identificationPlaceholder="XX-XXXX-XXXX";break;default:this.form.get("number").clearValidators(),this.form.get("number").setValidators([n.kI.required,n.kI.pattern(p.l)]),this.identificationPlaceholder="X-XXXX-XXXX"}}})}getInfoTaxpayer(){this.isSearching=!0,this.form.disable(),this._haciendaService.getTaxpayerInfo(this.form.get("number").value).pipe((0,m.R)(this.observableDestroy$)).subscribe({next:o=>{this.form.get("type").setValue(o.tipoIdentificacion),this._toastService.showToast("El contribuyente es "+o.nombre,g.p.SUCCESS),this.isSearching=!1,this.taxpayerFounded.emit({...o,numeroIdentificacion:this.form.get("number").value}),this.form.enable(),this.automaticSearch=!1},error:()=>{this._toastService.showToast("No se ha podido encontrar un contribuyente con la identificaci\xf3n proporcionada",g.p.DANGER),this.isSearching=!1,this.form.enable()}})}ngOnInit(){this.subscribeToIdentificationChanged(),this.subscribeToIdentificationTypesChange()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(C.r),e.Y36(g.k))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-identification-search"]],inputs:{labelInColumn:"labelInColumn",readonly:"readonly",noSearch:"noSearch",data:"data"},outputs:{taxpayerFounded:"taxpayerFounded",identificationNumberChanged:"identificationNumberChanged"},standalone:!0,features:[e._Bn([C.r]),e.qOj,e.jDz],decls:15,vars:29,consts:[[1,"d-flex","justify-content-between","align-items-start",3,"formGroup","ngClass"],[1,"d-flex","flex-column","justify-content-center",3,"ngClass"],[1,"w-20"],[1,"d-flex","justify-content-between","align-items-start","gap-3","w-100"],[1,"form-group","w-100"],["formControlName","type",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],["formControlName","number",1,"form-control",3,"placeholder","readonly","ngClass"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"],[1,"btn","btn-primary",3,"disabled","click"],[3,"icon"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.ALo(4,"titlecase"),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"select",5),e.YNc(9,X,3,4,"option",6),e.qZA(),e.YNc(10,P,2,1,"div",7),e.qZA(),e.TgZ(11,"div",4),e._UZ(12,"input",8),e.YNc(13,s,3,2,"div",7),e.qZA(),e.YNc(14,c,2,2,"button",9),e.qZA()()),2&o&&(e.Q6J("formGroup",i.form)("ngClass",e.WLB(16,y,i.labelInColumn,!i.labelInColumn)),e.xp6(1),e.Q6J("ngClass",e.WLB(19,O,!i.labelInColumn,i.labelInColumn)),e.xp6(2),e.hij("",e.lcZ(4,12,e.lcZ(5,14,"identificaci\xf3n")),":"),e.xp6(5),e.Q6J("ngClass",e.kEZ(22,D,i.form.controls.type.touched&&i.form.controls.type.errors,i.form.controls.type.valid,i.readonly||i.noSearch)),e.xp6(1),e.Q6J("ngForOf",i.identificationTypes),e.xp6(1),e.Q6J("ngIf",i.form.controls.type.touched&&i.form.controls.type.errors&&!i.readonly&&!i.noSearch),e.xp6(2),e.Q6J("placeholder",i.identificationPlaceholder)("readonly",i.readonly||i.noSearch)("ngClass",e.WLB(26,L,i.form.controls.number.touched&&i.form.controls.number.errors,i.form.controls.number.valid)),e.xp6(1),e.Q6J("ngIf",i.form.controls.number.touched&&i.form.controls.number.errors&&!i.readonly&&!i.noSearch),e.xp6(1),e.Q6J("ngIf",!i.readonly&&!i.noSearch))},dependencies:[v.aw,v.X$,h.rS,n.UX,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u,h.mk,h.sg,T.P,A.e,h.O5,f.uH,f.BN],styles:[".identification-min-height[_ngcontent-%COMP%]{min-height:32px}"],changeDetection:0}),t})()},6610:(Z,b,r)=>{r.d(b,{$:()=>P});var e=r(755),n=r(3226),h=r(2845),f=r(4039),u=r(6733),v=r(2997),m=r(1749),p=r(3690),E=r(5893);function _(a,d){if(1&a&&(e.TgZ(0,"option",8),e._uU(1),e.qZA()),2&a){const s=d.$implicit;e.Q6J("value",s),e.xp6(1),e.hij(" ",s," ")}}function g(a,d){1&a&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"el c\xf3digo es requerido"))," "))}function T(a,d){if(1&a&&(e.TgZ(0,"div",9),e.YNc(1,g,4,5,"span",10),e.qZA()),2&a){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.phoneForm.controls.code.hasError("required"))}}function C(a,d){1&a&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"el tel\xe9fono es requerido"))," "))}function A(a,d){1&a&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"capitalize"),e.ALo(3,"translate"),e.qZA()),2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,e.lcZ(3,3,"el tel\xe9fono debe contener solo d\xedgitos"))," "))}function X(a,d){if(1&a&&(e.TgZ(0,"div",9),e.YNc(1,C,4,5,"span",10),e.YNc(2,A,4,5,"span",10),e.qZA()),2&a){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.phoneForm.controls.phone.hasError("required")),e.xp6(1),e.Q6J("ngIf",s.phoneForm.controls.phone.hasError("pattern"))}}const I=function(a,d){return{"is-invalid":a,"is-valid":d}};let P=(()=>{class a extends p.u{constructor(){super(...arguments),this.phoneForm=new n.nJ({code:new n.p4({value:"+506",disabled:!0},[n.kI.required]),phone:new n.p4({value:null,disabled:!1},[n.kI.required,n.kI.pattern(h._D)])}),this.phoneCodes=["+506"],this.readonly=!1,this.onChange=()=>{},this.onTouched=()=>{}}set disabled(s){s?this.phoneForm.get("phone").disable():this.phoneForm.get("phone").enable()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}writeValue(s){s&&this.phoneForm.patchValue({phone:s}),this.reactToValueChanges()}reactToValueChanges(){this.phoneForm.get("phone").valueChanges.pipe((0,m.R)(this.observableDestroy$)).subscribe({next:s=>{this.onChange(s),this.onTouched()}})}}return a.\u0275fac=function(){let d;return function(c){return(d||(d=e.n5z(a)))(c||a)}}(),a.\u0275cmp=e.Xpm({type:a,selectors:[["app-phone"]],inputs:{readonly:"readonly",disabled:"disabled"},standalone:!0,features:[e._Bn([{provide:n.JU,useExisting:(0,e.Gpc)(()=>a),multi:!0}]),e.qOj,e.jDz],decls:16,vars:23,consts:[[1,"d-flex","justify-content-start","gap-3",3,"formGroup"],[1,"d-flex","flex-column","form-group","w-33"],[1,"control-label","mb-2"],["formControlName","code",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],[1,"d-flex","flex-column","form-group","w-100"],["formControlName","phone","type","text","placeholder","XXXX-XXXX",1,"form-control",3,"ngClass","readonly"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3),e.ALo(4,"titlecase"),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"select",3),e.YNc(7,_,2,2,"option",4),e.qZA(),e.YNc(8,T,2,1,"div",5),e.qZA(),e.TgZ(9,"div",6)(10,"label",2),e._uU(11),e.ALo(12,"capitalize"),e.ALo(13,"translate"),e.qZA(),e._UZ(14,"input",7),e.YNc(15,X,3,2,"div",5),e.qZA()()),2&s&&(e.Q6J("formGroup",c.phoneForm),e.xp6(3),e.hij(" ",e.lcZ(4,9,e.lcZ(5,11,"c\xf3digo")),": "),e.xp6(3),e.Q6J("ngClass",e.WLB(17,I,c.phoneForm.controls.code.touched&&c.phoneForm.controls.code.errors,c.phoneForm.controls.code.valid)),e.xp6(1),e.Q6J("ngForOf",c.phoneCodes),e.xp6(1),e.Q6J("ngIf",c.phoneForm.controls.code.touched&&c.phoneForm.controls.code.errors),e.xp6(3),e.hij(" ",e.lcZ(12,13,e.lcZ(13,15,"tel\xe9fono")),": "),e.xp6(3),e.Q6J("ngClass",e.WLB(20,I,c.phoneForm.controls.phone.touched&&c.phoneForm.controls.phone.errors,c.phoneForm.controls.phone.valid))("readonly",c.readonly),e.xp6(1),e.Q6J("ngIf",c.phoneForm.controls.phone.touched&&c.phoneForm.controls.phone.errors))},dependencies:[n.UX,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u,f.aw,f.X$,u.rS,u.mk,u.sg,u.O5,v.P,E.e],changeDetection:0}),a})()}}]);