import{a as nn,b as on,c as an,d as ln,f as rn,g as sn}from"./chunk-Y3V6EI5T.js";import{a as Ce}from"./chunk-UFKUC6JL.js";import{A as Zt,B as Ue,C as Ze,E as Xt,G as Jt,H as We,I as en,J as tn,a as fe,b as Dt,c as _e,e as kt,g as ge,h as Pt,i as zt,j as Lt,k as At,l as $t,m as Rt,n as Nt,o as Ht,q as Kt,r as Bt,s as ye,t as He,u as Be,v as Ge,w as be,x as Ut,y as je,z as Qe}from"./chunk-NILA52G2.js";import{Ca as Ne,E as yt,Fa as Gt,Ga as qt,Ia as Ke,Ka as qe,L as q,La as jt,M as H,Ma as Qt,N as bt,O as Ct,R as vt,Ra as Wt,Sa as Yt,_ as xt,aa as wt,ba as It,c as Pe,ca as ue,d as ht,da as j,e as ze,ea as Ot,f as Le,g as Ae,ga as $e,i as ft,ja as St,ka as Tt,na as Et,oa as Ft,r as _t,sa as Mt,t as gt,ta as Re,ua as he,za as Vt}from"./chunk-M6ZP4FB7.js";import{$a as ne,Aa as a,Bb as re,Cb as se,Db as N,Eb as v,Fa as Me,Fb as $,G as nt,Gb as De,I as X,Ia as ee,Ib as pe,Jb as ce,K as J,Kb as de,L as it,Lb as dt,M as ot,Ma as k,Na as st,Ob as me,Pb as h,Qa as Ve,Qb as L,R as S,Rb as ke,Sa as u,Sb as mt,Y as f,Ya as T,Yb as R,Z as _,Za as r,_ as at,_a as te,aa as Ee,ab as ie,bb as oe,cb as g,da as lt,db as pt,eb as ae,fb as le,fc as y,ga as V,gb as p,gc as Z,ha as rt,hb as s,ib as d,ic as I,ja as U,jb as E,jc as G,k as Te,ka as D,kb as F,kc as ut,la as Fe,lb as M,ma as w,mb as C,o as tt,rb as b,sb as c,wb as ct,xb as A,yb as P,zb as z}from"./chunk-UIJQSAH4.js";import{a as K,b as B}from"./chunk-4CLCTAJ7.js";function ve(t,o){let e;try{e=t().value}catch{}let n=w(e);if(!o)try{o=S(lt)}catch{}let i=o?Ce(o):X(()=>{});return G(()=>{let l=t(),m=l.valueChanges.pipe(i).subscribe(n.set);return n.set(l.value),()=>m.unsubscribe()}),n.asReadonly()}function gn(t,o){if(t&1&&(p(0,"label",1),v(1),s()),t&2){let e=c();r("for",e.name()),a(),$(e.label())}}function yn(t,o){if(t&1&&d(0,"input",5),t&2){let e=c().$implicit,n=c(2);r("name",n.name())("value",e)("formControl",n.formControl())}}function bn(t,o){if(t&1&&d(0,"input",6),t&2){let e=c().$implicit,n=c(2);r("name",n.name())("value",e)("formControl",n.formControl())}}function Cn(t,o){if(t&1&&(p(0,"label",4),u(1,yn,1,3,"input",5)(2,bn,1,3,"input",6),p(3,"span"),v(4),s()()),t&2){let e=o.$implicit,n=c(2);a(),g(n.type()=="radio"?1:2),a(3),$(e)}}function vn(t,o){if(t&1&&(p(0,"div",2),ae(1,Cn,5,2,"label",4,pt),s()),t&2){let e=c();r("id",e.name()),a(),le(e.options())}}function xn(t,o){if(t&1&&d(0,"input",3),t&2){let e=c();r("id",e.name())("type",e.type())("name",e.name())("formControl",e.formControl())}}var xe=class t{name=D.required();label=D();type=D.required();options=D([]);disabled=D(!1,{transform:y});hidden=D(!1,{transform:y});fluid=D(!1,{transform:y});onChange=U();controlContainer=S(kt);formControl=I(()=>{let o=this.name(),e=this.controlContainer.control,n=e.get(o);if(n)return n.valueChanges.subscribe(l=>this.onChange.emit(l)),n;let i=new zt;return e.addControl(o,i),i.valueChanges.subscribe(l=>this.onChange.emit(l)),i});value=ve(this.formControl);constructor(){G(()=>{let o=this.formControl(),e=this.disabled();e!=o.disabled&&(e?o.disable():o.enable())}),G(()=>{if(this.type()=="date"){let e=this.value();if(e){let n=en(Jt(e));n!=e&&this.formControl().setValue(n)}}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["campo"]],inputs:{name:[1,"name"],label:[1,"label"],type:[1,"type"],options:[1,"options"],disabled:[1,"disabled"],hidden:[1,"hidden"],fluid:[1,"fluid"]},outputs:{onChange:"onChange"},decls:4,vars:6,consts:[[1,"field"],[1,"ficha-label",3,"for"],[1,"radio-group",3,"id"],[1,"flex-1",3,"id","type","name","formControl"],[1,"radio-item","ficha-label"],["type","radio",3,"name","value","formControl"],["type","checkbox",3,"name","value","formControl"]],template:function(e,n){e&1&&(p(0,"div",0),u(1,gn,2,2,"label",1)(2,vn,3,1,"div",2)(3,xn,1,4,"input",3),s()),e&2&&(ne("hidden",n.hidden())("fluid",n.fluid()),a(),g(n.label()?1:-1),a(),g(n.type()=="checkbox"||n.type()=="radio"?2:3))},dependencies:[ye,_e,Dt,$t,ge,Rt],styles:["[_nghost-%COMP%]{flex:1}.field[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start;gap:.6em;font-size:.75rem;transition:.1s all}.field.hidden[_ngcontent-%COMP%]{opacity:0}.field[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{flex:1;width:100%;padding:1px;border:none;border-bottom:1px solid currentColor;font-size:1em;color:var(--p-form-field-color);border-color:var(--p-form-field-border-color);background:var(--p-form-field-filled-background)}.field[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:hover, .field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, .field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:hover, .field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:hover, .field[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]:hover{border-color:var(--p-form-field-hover-border-color);background:var(--p-form-field-filled-hover-background)}.field[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:1em;background:transparent;border-bottom:none}.field[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]:hover{background:transparent}.field[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%] > .radio-item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.25em;width:fit-content}.field.fluid[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{justify-content:space-between}.field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus{outline:none}"],changeDetection:0})};var W=t=>({height:t}),wn=(t,o,e)=>({"p-select-option":!0,"p-select-option-selected":t,"p-disabled":o,"p-focus":e}),Xe=t=>({$implicit:t});function In(t,o){t&1&&d(0,"CheckIcon",4),t&2&&r("styleClass","p-select-option-check-icon")}function On(t,o){t&1&&d(0,"BlankIcon",4),t&2&&r("styleClass","p-select-option-blank-icon")}function Sn(t,o){if(t&1&&(E(0),u(1,In,1,1,"CheckIcon",3)(2,On,1,1,"BlankIcon",3),F()),t&2){let e=c();a(),r("ngIf",e.selected),a(),r("ngIf",!e.selected)}}function Tn(t,o){if(t&1&&(p(0,"span"),v(1),s()),t&2){let e,n=c();a(),$((e=n.label)!==null&&e!==void 0?e:"empty")}}function En(t,o){t&1&&M(0)}var Fn=["container"],Mn=["filter"],Vn=["focusInput"],Dn=["editableInput"],kn=["items"],Pn=["scroller"],zn=["overlay"],Ln=["firstHiddenFocusableEl"],An=["lastHiddenFocusableEl"],$n=()=>({class:"p-select-clear-icon"}),Rn=()=>({class:"p-select-dropdown-icon"}),dn=t=>({options:t}),mn=(t,o)=>({$implicit:t,options:o}),Nn=()=>({});function Hn(t,o){if(t&1&&(E(0),v(1),F()),t&2){let e=c(2);a(),$(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Kn(t,o){if(t&1&&M(0,23),t&2){let e=c(2);r("ngTemplateOutlet",e.selectedItemTemplate)("ngTemplateOutletContext",L(2,Xe,e.selectedOption))}}function Bn(t,o){if(t&1&&(p(0,"span"),v(1),s()),t&2){let e=c(3);a(),$(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Gn(t,o){if(t&1&&u(0,Bn,2,1,"span",17),t&2){let e=c(2);r("ngIf",!e.selectedOption)}}function qn(t,o){if(t&1){let e=C();p(0,"span",21,3),b("focus",function(i){f(e);let l=c();return _(l.onInputFocus(i))})("blur",function(i){f(e);let l=c();return _(l.onInputBlur(i))})("keydown",function(i){f(e);let l=c();return _(l.onKeyDown(i))}),u(2,Hn,2,1,"ng-container",19)(3,Kn,1,4,"ng-container",22)(4,Gn,1,1,"ng-template",null,4,R),s()}if(t&2){let e,n=N(5),i=c();r("ngClass",i.inputClass)("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass)("pAutoFocus",i.autofocus),T("aria-disabled",i.disabled)("id",i.inputId)("aria-label",i.ariaLabel||(i.label()==="p-emptylabel"?void 0:i.label()))("aria-labelledby",i.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("tabindex",i.disabled?-1:i.tabindex)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("aria-required",i.required)("required",i.required),a(2),r("ngIf",!i.selectedItemTemplate)("ngIfElse",n),a(),r("ngIf",i.selectedItemTemplate&&i.selectedOption)}}function jn(t,o){if(t&1){let e=C();p(0,"input",24,5),b("input",function(i){f(e);let l=c();return _(l.onEditableInput(i))})("keydown",function(i){f(e);let l=c();return _(l.onKeyDown(i))})("focus",function(i){f(e);let l=c();return _(l.onInputFocus(i))})("blur",function(i){f(e);let l=c();return _(l.onInputBlur(i))}),s()}if(t&2){let e=c();r("ngClass",e.inputClass)("disabled",e.disabled)("pAutoFocus",e.autofocus),T("id",e.inputId)("maxlength",e.maxlength)("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Qn(t,o){if(t&1){let e=C();p(0,"TimesIcon",26),b("click",function(i){f(e);let l=c(2);return _(l.clear(i))}),s()}t&2&&T("data-pc-section","clearicon")}function Un(t,o){}function Zn(t,o){t&1&&u(0,Un,0,0,"ng-template")}function Wn(t,o){if(t&1){let e=C();p(0,"span",26),b("click",function(i){f(e);let l=c(2);return _(l.clear(i))}),u(1,Zn,1,0,null,27),s()}if(t&2){let e=c(2);T("data-pc-section","clearicon"),a(),r("ngTemplateOutlet",e.clearIconTemplate)("ngTemplateOutletContext",h(3,$n))}}function Yn(t,o){if(t&1&&(E(0),u(1,Qn,1,1,"TimesIcon",25)(2,Wn,2,4,"span",25),F()),t&2){let e=c();a(),r("ngIf",!e.clearIconTemplate),a(),r("ngIf",e.clearIconTemplate)}}function Xn(t,o){t&1&&M(0)}function Jn(t,o){if(t&1&&(E(0),u(1,Xn,1,0,"ng-container",28),F()),t&2){let e=c(2);a(),r("ngTemplateOutlet",e.loadingIconTemplate)}}function ei(t,o){if(t&1&&d(0,"span",31),t&2){let e=c(3);r("ngClass","p-select-loading-icon pi-spin "+e.loadingIcon)}}function ti(t,o){t&1&&d(0,"span",32),t&2&&oe("p-select-loading-icon pi pi-spinner pi-spin")}function ni(t,o){if(t&1&&(E(0),u(1,ei,1,1,"span",29)(2,ti,1,2,"span",30),F()),t&2){let e=c(2);a(),r("ngIf",e.loadingIcon),a(),r("ngIf",!e.loadingIcon)}}function ii(t,o){if(t&1&&(E(0),u(1,Jn,2,1,"ng-container",17)(2,ni,3,2,"ng-container",17),F()),t&2){let e=c();a(),r("ngIf",e.loadingIconTemplate),a(),r("ngIf",!e.loadingIconTemplate)}}function oi(t,o){if(t&1&&d(0,"span",36),t&2){let e=c(3);r("ngClass",e.dropdownIcon)}}function ai(t,o){t&1&&d(0,"ChevronDownIcon",37),t&2&&r("styleClass","p-select-dropdown-icon")}function li(t,o){if(t&1&&(E(0),u(1,oi,1,1,"span",34)(2,ai,1,1,"ChevronDownIcon",35),F()),t&2){let e=c(2);a(),r("ngIf",e.dropdownIcon),a(),r("ngIf",!e.dropdownIcon)}}function ri(t,o){}function si(t,o){t&1&&u(0,ri,0,0,"ng-template")}function pi(t,o){if(t&1&&(p(0,"span",38),u(1,si,1,0,null,27),s()),t&2){let e=c(2);a(),r("ngTemplateOutlet",e.dropdownIconTemplate)("ngTemplateOutletContext",h(2,Rn))}}function ci(t,o){if(t&1&&u(0,li,3,2,"ng-container",17)(1,pi,2,3,"span",33),t&2){let e=c();r("ngIf",!e.dropdownIconTemplate),a(),r("ngIf",e.dropdownIconTemplate)}}function di(t,o){t&1&&M(0)}function mi(t,o){t&1&&M(0)}function ui(t,o){if(t&1&&(E(0),u(1,mi,1,0,"ng-container",27),F()),t&2){let e=c(3);a(),r("ngTemplateOutlet",e.filterTemplate)("ngTemplateOutletContext",L(2,dn,e.filterOptions))}}function hi(t,o){t&1&&d(0,"SearchIcon")}function fi(t,o){}function _i(t,o){t&1&&u(0,fi,0,0,"ng-template")}function gi(t,o){if(t&1&&(p(0,"span"),u(1,_i,1,0,null,28),s()),t&2){let e=c(4);a(),r("ngTemplateOutlet",e.filterIconTemplate)}}function yi(t,o){if(t&1){let e=C();p(0,"p-iconfield")(1,"input",45,10),b("input",function(i){f(e);let l=c(3);return _(l.onFilterInputChange(i))})("keydown",function(i){f(e);let l=c(3);return _(l.onFilterKeyDown(i))})("blur",function(i){f(e);let l=c(3);return _(l.onFilterBlur(i))}),s(),p(3,"p-inputicon"),u(4,hi,1,0,"SearchIcon",17)(5,gi,2,1,"span",17),s()()}if(t&2){let e=c(3);a(),r("value",e._filterValue()||"")("variant",e.variant),T("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),a(3),r("ngIf",!e.filterIconTemplate),a(),r("ngIf",e.filterIconTemplate)}}function bi(t,o){if(t&1){let e=C();p(0,"div",44),b("click",function(i){return f(e),_(i.stopPropagation())}),u(1,ui,2,4,"ng-container",19)(2,yi,6,8,"ng-template",null,9,R),s()}if(t&2){let e=N(3),n=c(2);a(),r("ngIf",n.filterTemplate)("ngIfElse",e)}}function Ci(t,o){t&1&&M(0)}function vi(t,o){if(t&1&&u(0,Ci,1,0,"ng-container",27),t&2){let e=o.$implicit,n=o.options;c(2);let i=N(9);r("ngTemplateOutlet",i)("ngTemplateOutletContext",ke(2,mn,e,n))}}function xi(t,o){t&1&&M(0)}function wi(t,o){if(t&1&&u(0,xi,1,0,"ng-container",27),t&2){let e=o.options,n=c(4);r("ngTemplateOutlet",n.loaderTemplate)("ngTemplateOutletContext",L(2,dn,e))}}function Ii(t,o){t&1&&(E(0),u(1,wi,1,4,"ng-template",null,12,R),F())}function Oi(t,o){if(t&1){let e=C();p(0,"p-scroller",46,11),b("onLazyLoad",function(i){f(e);let l=c(2);return _(l.onLazyLoad.emit(i))}),u(2,vi,1,5,"ng-template",null,2,R)(4,Ii,3,0,"ng-container",17),s()}if(t&2){let e=c(2);ie(L(8,W,e.scrollHeight)),r("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),a(4),r("ngIf",e.loaderTemplate)}}function Si(t,o){t&1&&M(0)}function Ti(t,o){if(t&1&&(E(0),u(1,Si,1,0,"ng-container",27),F()),t&2){c();let e=N(9),n=c();a(),r("ngTemplateOutlet",e)("ngTemplateOutletContext",ke(3,mn,n.visibleOptions(),h(2,Nn)))}}function Ei(t,o){if(t&1&&(p(0,"span"),v(1),s()),t&2){let e=c(2).$implicit,n=c(3);a(),$(n.getOptionGroupLabel(e.optionGroup))}}function Fi(t,o){t&1&&M(0)}function Mi(t,o){if(t&1&&(E(0),p(1,"li",50),u(2,Ei,2,1,"span",17)(3,Fi,1,0,"ng-container",27),s(),F()),t&2){let e=c(),n=e.$implicit,i=e.index,l=c().options,m=c(2);a(),r("ngStyle",L(5,W,l.itemSize+"px")),T("id",m.id+"_"+m.getOptionIndex(i,l)),a(),r("ngIf",!m.groupTemplate),a(),r("ngTemplateOutlet",m.groupTemplate)("ngTemplateOutletContext",L(7,Xe,n.optionGroup))}}function Vi(t,o){if(t&1){let e=C();E(0),p(1,"p-dropdownItem",51),b("onClick",function(i){f(e);let l=c().$implicit,m=c(3);return _(m.onOptionSelect(i,l))})("onMouseEnter",function(i){f(e);let l=c().index,m=c().options,x=c(2);return _(x.onOptionMouseEnter(i,x.getOptionIndex(l,m)))}),s(),F()}if(t&2){let e=c(),n=e.$implicit,i=e.index,l=c().options,m=c(2);a(),r("id",m.id+"_"+m.getOptionIndex(i,l))("option",n)("checkmark",m.checkmark)("selected",m.isSelected(n))("label",m.getOptionLabel(n))("disabled",m.isOptionDisabled(n))("template",m.itemTemplate)("focused",m.focusedOptionIndex()===m.getOptionIndex(i,l))("ariaPosInset",m.getAriaPosInset(m.getOptionIndex(i,l)))("ariaSetSize",m.ariaSetSize)}}function Di(t,o){if(t&1&&u(0,Mi,4,9,"ng-container",17)(1,Vi,2,10,"ng-container",17),t&2){let e=o.$implicit,n=c(3);r("ngIf",n.isOptionGroup(e)),a(),r("ngIf",!n.isOptionGroup(e))}}function ki(t,o){if(t&1&&v(0),t&2){let e=c(4);De(" ",e.emptyFilterMessageLabel," ")}}function Pi(t,o){t&1&&M(0,null,14)}function zi(t,o){if(t&1&&u(0,Pi,2,0,"ng-container",28),t&2){let e=c(4);r("ngTemplateOutlet",e.emptyFilterTemplate||e.emptyTemplate)}}function Li(t,o){if(t&1&&(p(0,"li",52),u(1,ki,1,1)(2,zi,1,1,"ng-container"),s()),t&2){let e=c().options,n=c(2);r("ngStyle",L(2,W,e.itemSize+"px")),a(),g(!n.emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function Ai(t,o){if(t&1&&v(0),t&2){let e=c(4);De(" ",e.emptyMessageLabel," ")}}function $i(t,o){t&1&&M(0)}function Ri(t,o){if(t&1&&u(0,$i,1,0,"ng-container",28),t&2){let e=c(4);r("ngTemplateOutlet",e.emptyTemplate)}}function Ni(t,o){if(t&1&&(p(0,"li",52),u(1,Ai,1,1)(2,Ri,1,1,"ng-container"),s()),t&2){let e=c().options,n=c(2);r("ngStyle",L(2,W,e.itemSize+"px")),a(),g(n.emptyTemplate?2:1)}}function Hi(t,o){if(t&1&&(p(0,"ul",47,13),u(2,Di,2,2,"ng-template",48)(3,Li,3,4,"li",49)(4,Ni,3,4,"li",49),s()),t&2){let e=o.$implicit,n=o.options,i=c(2);ie(n.contentStyle),r("ngClass",n.contentStyleClass),T("id",i.id+"_list")("aria-label",i.listLabel),a(2),r("ngForOf",e),a(),r("ngIf",i.filterValue&&i.isEmpty()),a(),r("ngIf",!i.filterValue&&i.isEmpty())}}function Ki(t,o){t&1&&M(0)}function Bi(t,o){if(t&1){let e=C();p(0,"div",39)(1,"span",40,6),b("focus",function(i){f(e);let l=c();return _(l.onFirstHiddenFocus(i))}),s(),u(3,di,1,0,"ng-container",28)(4,bi,4,2,"div",41),p(5,"div",42),u(6,Oi,5,10,"p-scroller",43)(7,Ti,2,6,"ng-container",17)(8,Hi,5,8,"ng-template",null,7,R),s(),u(10,Ki,1,0,"ng-container",28),p(11,"span",40,8),b("focus",function(i){f(e);let l=c();return _(l.onLastHiddenFocus(i))}),s()()}if(t&2){let e=c();oe(e.panelStyleClass),r("ngClass","p-select-overlay p-component")("ngStyle",e.panelStyle),a(),T("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),a(2),r("ngTemplateOutlet",e.headerTemplate),a(),r("ngIf",e.filter),a(),te("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),a(),r("ngIf",e.virtualScroll),a(),r("ngIf",!e.virtualScroll),a(3),r("ngTemplateOutlet",e.footerTemplate),a(),T("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Gi=({dt:t})=>`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("select.background")};
    border: 1px solid ${t("select.border.color")};
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
        outline-color ${t("select.transition.duration")}, box-shadow ${t("select.transition.duration")};
    border-radius: ${t("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("select.shadow")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${t("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${t("select.focus.border.color")};
    box-shadow: ${t("select.focus.ring.shadow")};
    outline: ${t("select.focus.ring.width")} ${t("select.focus.ring.style")} ${t("select.focus.ring.color")};
    outline-offset: ${t("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${t("select.filled.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${t("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${t("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${t("select.clear.icon.color")};
    right: ${t("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("select.dropdown.color")};
    width: ${t("select.dropdown.width")};
    border-start-end-radius: ${t("select.border.radius")};
    border-end-end-radius: ${t("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${t("select.padding.y")} ${t("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${t("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${t("select.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + ${t("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${t("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${t("select.overlay.background")};
    color: ${t("select.overlay.color")};
    border: 1px solid ${t("select.overlay.border.color")};
    border-radius: ${t("select.overlay.border.radius")};
    box-shadow: ${t("select.overlay.shadow")};
}

.p-select-header {
    padding: ${t("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${t("select.option.group.padding")};
    background: ${t("select.option.group.background")};
    color: ${t("select.option.group.color")};
    font-weight: ${t("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("select.list.padding")};
    gap: ${t("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("select.option.padding")};
    border: 0 none;
    color: ${t("select.option.color")};
    background: transparent;
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
    box-shadow ${t("select.transition.duration")}, outline-color ${t("select.transition.duration")};
    border-radius: ${t("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${t("select.option.focus.background")};
    color: ${t("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${t("select.option.selected.background")};
    color: ${t("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${t("select.option.selected.focus.background")};
    color: ${t("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${t("select.checkmark.gutter.start")};
    margin-inline-end: ${t("select.checkmark.gutter.end")};
    color: ${t("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${t("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

/*For PrimeNG*/

.p-dropdown.ng-invalid.ng-dirty,
.p-select.ng-invalid.ng-dirty {
    outline: 1px solid ${t("select.invalid.border.color")};
    outline-offset: 0;
}

.p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${t("select.invalid.placeholder.color")};
}
`,qi={root:({instance:t})=>["p-dropdown p-select p-component p-inputwrapper",{"p-disabled":t.disabled,"p-variant-filled":t.variant==="filled"||t.config.inputVariant()==="filled"||t.config.inputStyle()==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.modelValue()!==void 0&&t.modelValue()!==null&&!t.modelValue().length,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size==="small","p-select-lg p-inputfield-lg":t.size==="large"}],label:({instance:t,props:o})=>["p-select-label",{"p-placeholder":!o.editable&&t.label===o.placeholder,"p-select-label-empty":!o.editable&&!t.$slots.value&&(t.label==="p-emptylabel"||t.label.length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t,props:o,state:e,option:n,focusedOption:i})=>["p-select-option",{"p-select-option-selected":t.isSelected(n)&&o.highlightOnSelect,"p-focus":e.focusedOptionIndex===i,"p-disabled":t.isOptionDisabled(n)}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},pn=(()=>{class t extends Vt{name="select";theme=Gi;classes=qi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ee(t)))(i||t)}})();static \u0275prov=it({token:t,factory:t.\u0275fac})}return t})(),cn;cn||(cn={});var ji={provide:fe,useExisting:J(()=>Ui),multi:!0},Qi=(()=>{class t extends Ne{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new V;onMouseEnter=new V;onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ee(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-dropdownItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",y],focused:[2,"focused","focused",y],label:"label",disabled:[2,"disabled","disabled",y],visible:[2,"visible","visible",y],itemSize:[2,"itemSize","itemSize",Z],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",y]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},standalone:!1,features:[Ve],decls:4,vars:22,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle","ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],[3,"styleClass"]],template:function(n,i){n&1&&(p(0,"li",0),b("click",function(m){return i.onOptionClick(m)})("mouseenter",function(m){return i.onOptionMouseEnter(m)}),u(1,Sn,3,2,"ng-container",1)(2,Tn,2,1,"span",1)(3,En,1,0,"ng-container",2),s()),n&2&&(r("id",i.id)("ngStyle",L(14,W,i.itemSize+"px"))("ngClass",mt(16,wn,i.selected,i.disabled,i.focused)),T("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-disabled",i.disabled),a(),r("ngIf",i.checkmark),a(),r("ngIf",!i.template),a(),r("ngTemplateOutlet",i.template)("ngTemplateOutletContext",L(20,Xe,i.option)))},dependencies:()=>[Pe,ze,Ae,Le,jt,He,Ke],encapsulation:2})}return t})(),Ui=(()=>{class t extends Ne{zone;filterService;id;scrollHeight="200px";filter;name;style;panelStyle;styleClass;panelStyleClass;readonly;required;editable;appendTo;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;variant;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";autoDisplayFirst=!0;group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";maxlength;tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!1;selectOnFocus=!1;autoOptionFocus=!0;autofocusFilter=!0;fluid;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1,this.overlayVisible&&this.hide()),this._disabled=e,this.cd.destroyed||this.cd.detectChanges()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}_itemSize;get autoZIndex(){return this._autoZIndex}set autoZIndex(e){this._autoZIndex=e,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_autoZIndex;get baseZIndex(){return this._baseZIndex}set baseZIndex(e){this._baseZIndex=e,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_baseZIndex;get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_showTransitionOptions;get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_hideTransitionOptions;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){It(e,this._options())||this._options.set(e)}onChange=new V;onFilter=new V;onFocus=new V;onBlur=new V;onClick=new V;onShow=new V;onHide=new V;onClear=new V;onLazyLoad=new V;_componentStyle=S(pn);containerViewChild;filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;get hostClass(){return this._componentStyle.classes.root({instance:this}).map(n=>typeof n=="string"?n:Object.keys(n).filter(i=>n[i]).join(" ")).join(" ")+" "+this.styleClass}get hostStyle(){return this.style}_disabled;itemsWrapper;itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;filterOptions;_options=w(null);_placeholder=w(void 0);modelValue=w(null);value;onModelChange=()=>{};onModelTouched=()=>{};hover;focused;overlayVisible;optionsChanged;panel;selectedOptionUpdated;_filterValue=w(null);searchValue;searchTimeout;preventModelTouched;focusedOptionIndex=w(-1);clicked=w(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(he.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(he.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.disabled}get listLabel(){return this.config.getTranslation(he.ARIA).listLabel}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}get inputClass(){let e=this.label();return{"p-select-label":!0,"p-placeholder":this.placeholder()&&e===this.placeholder(),"p-select-label-empty":!this.editable&&!this.selectedItemTemplate&&(e==null||e==="p-emptylabel"||e.length===0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=I(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let i=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(l=>l.label?l.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:l.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let l=this.options||[],m=[];return l.forEach(x=>{let Y=this.getOptionGroupChildren(x).filter(Q=>i.includes(Q));Y.length>0&&m.push(B(K({},x),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...Y]}))}),this.flatOptions(m)}return i}return e});label=I(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(i=>this.isOptionValueEqualsModelValue(i));return n!==-1?this.getOptionLabel(e[n]):this.placeholder()||"p-emptylabel"});filled=I(()=>typeof this.modelValue()=="string"?!!this.modelValue():this.label()!=="p-emptylabel"&&this.modelValue()!==void 0&&this.modelValue()!==null);selectedOption;editableInputValue=I(()=>this.getOptionLabel(this.selectedOption)||this.modelValue()||"");constructor(e,n){super(),this.zone=e,this.filterService=n,G(()=>{let i=this.modelValue(),l=this.visibleOptions();if(l&&ue(l)){let m=this.findSelectedOptionIndex();(m!==-1||i===void 0||typeof i=="string"&&i.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=l[m])}wt(l)&&(i===void 0||this.isModelValueNotSet())&&ue(this.selectedOption)&&(this.selectedOption=null),i!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),console.log("Dropdown component is deprecated as of v18, use Select component instead."),this.id=this.id||Tt("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=q(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-highlight");e&&xt(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this.itemTemplate=e.template;break;case"selectedItem":this.selectedItemTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"filter":this.filterTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"emptyfilter":this.emptyFilterTemplate=e.template;break;case"empty":this.emptyTemplate=e.template;break;case"group":this.groupTemplate=e.template;break;case"loader":this.loaderTemplate=e.template;break;case"dropdownicon":this.dropdownIconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;case"clearicon":this.clearIconTemplate=e.template;break;case"filtericon":this.filterIconTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}flatOptions(e){return(e||[]).reduce((n,i,l)=>{n.push({optionGroup:i,group:!0,index:l});let m=this.getOptionGroupChildren(i);return m&&m.forEach(x=>n.push(x)),n},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)),this.autoDisplayFirst&&(this.modelValue()===null||this.modelValue()===void 0)&&!this.placeholder()){let e=this.findFirstOptionIndex();this.onOptionSelect(null,this.visibleOptions()[e],!1,!0)}}onOptionSelect(e,n,i=!0,l=!1){if(!this.isSelected(n)){let m=this.getOptionValue(n);this.updateModel(m,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),l===!1&&this.onChange.emit({originalEvent:e,value:m})}i&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.modelValue.set(e),this.selectedOptionUpdated=!0}writeValue(e){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),this.modelValue.set(this.value),this.updateEditableLabel(),this.cd.markForCheck()}allowModelChange(){return this.autoDisplayFirst&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isValidOption(e)&&this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return Ot(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){super.ngAfterViewInit(),this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let i=e.querySelector("label");i&&this._placeholder.set(i.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?j(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?j(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isOptionDisabled(e){return this.getOptionValue(this.modelValue())===this.getOptionValue(e)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(e))&&e.disabled===!1?!1:this.optionDisabled?j(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?j(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?j(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onContainerClick(e){this.disabled||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&ue(n)&&this.show()}show(e){this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&H(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=q(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-dropdown-items-wrapper"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=q(this.itemsWrapper,".p-dropdown-item.p-highlight");n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&yt(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&H(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&H(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.disabled)return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n){if(!(this.disabled||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&St(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let i=this.visibleOptions()[n];this.onOptionSelect(e,i,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=q(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?$e(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastOptionIndex(){return $e(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide()}else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n){let i=e.currentTarget;e.shiftKey?i.setSelectionRange(0,i.value.length):(i.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n){let i=e.currentTarget;if(e.shiftKey)i.setSelectionRange(0,i.value.length);else{let l=i.value.length;i.setSelectionRange(l,l),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())H(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Ct(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;H(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?vt(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;H(n)}hasFocusableElements(){return bt(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,l=!1;return i=this.visibleOptions().findIndex(m=>this.isOptionExactMatched(m)),i===-1&&(i=this.visibleOptions().findIndex(m=>this.isOptionStartsWith(m))),i!==-1&&(l=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),l}isOptionStartsWith(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}isOptionExactMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale)===this.searchValue.toLocaleLowerCase(this.filterLocale)}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?q(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():H(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}static \u0275fac=function(n){return new(n||t)(Me(rt),Me(Et))};static \u0275cmp=k({type:t,selectors:[["p-dropdown"]],contentQueries:function(n,i,l){if(n&1&&ct(l,Mt,4),n&2){let m;P(m=z())&&(i.templates=m)}},viewQuery:function(n,i){if(n&1&&(A(Fn,5),A(Mn,5),A(Vn,5),A(Dn,5),A(kn,5),A(Pn,5),A(zn,5),A(Ln,5),A(An,5)),n&2){let l;P(l=z())&&(i.containerViewChild=l.first),P(l=z())&&(i.filterViewChild=l.first),P(l=z())&&(i.focusInputViewChild=l.first),P(l=z())&&(i.editableInputViewChild=l.first),P(l=z())&&(i.itemsViewChild=l.first),P(l=z())&&(i.scroller=l.first),P(l=z())&&(i.overlayViewChild=l.first),P(l=z())&&(i.firstHiddenFocusableElementOnOverlay=l.first),P(l=z())&&(i.lastHiddenFocusableElementOnOverlay=l.first)}},hostVars:5,hostBindings:function(n,i){n&1&&b("click",function(m){return i.onContainerClick(m)}),n&2&&(T("id",i.id),ie(i.hostStyle),oe(i.hostClass))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",y],name:"name",style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",y],required:[2,"required","required",y],editable:[2,"editable","editable",y],appendTo:"appendTo",tabindex:[2,"tabindex","tabindex",Z],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",variant:"variant",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",y],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",y],checkmark:[2,"checkmark","checkmark",y],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",y],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",autoDisplayFirst:[2,"autoDisplayFirst","autoDisplayFirst",y],group:[2,"group","group",y],showClear:[2,"showClear","showClear",y],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",y],virtualScroll:[2,"virtualScroll","virtualScroll",y],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",Z],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",maxlength:[2,"maxlength","maxlength",Z],tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",y],selectOnFocus:[2,"selectOnFocus","selectOnFocus",y],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",y],autofocusFilter:[2,"autofocusFilter","autofocusFilter",y],fluid:[2,"fluid","fluid",y],disabled:"disabled",itemSize:"itemSize",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",filterValue:"filterValue",options:"options"},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},standalone:!1,features:[me([ji,pn]),Ve],decls:11,vars:15,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["role","combobox",3,"ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text","aria-haspopup","listbox",3,"ngClass","disabled","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",1,"p-select-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],["role","combobox",3,"focus","blur","keydown","ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text","aria-haspopup","listbox",3,"input","keydown","focus","blur","ngClass","disabled","pAutoFocus"],["class","p-select-clear-icon",3,"click",4,"ngIf"],[1,"p-select-clear-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-select-dropdown-icon",4,"ngIf"],["class","p-select-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-select-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-select-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-select-header",3,"click",4,"ngIf"],[1,"p-select-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-select-header",3,"click"],["pInputText","","type","text","role","searchbox","autocomplete","off",1,"p-select-filter",3,"input","keydown","blur","value","variant"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-select-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-select-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-select-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"],["role","option",1,"p-select-empty-message",3,"ngStyle"]],template:function(n,i){if(n&1){let l=C();u(0,qn,6,20,"span",15)(1,jn,2,8,"input",16)(2,Yn,3,2,"ng-container",17),p(3,"div",18),u(4,ii,3,2,"ng-container",19)(5,ci,2,2,"ng-template",null,0,R),s(),p(7,"p-overlay",20,1),de("visibleChange",function(x){return f(l),ce(i.overlayVisible,x)||(i.overlayVisible=x),_(x)}),b("onAnimationStart",function(x){return f(l),_(i.onOverlayAnimationStart(x))})("onHide",function(){return f(l),_(i.hide())}),u(9,Bi,13,17,"ng-template",null,2,R),s()}if(n&2){let l,m=N(6);r("ngIf",!i.editable),a(),r("ngIf",i.editable),a(),r("ngIf",i.isVisibleClearIcon),a(),T("aria-expanded",(l=i.overlayVisible)!==null&&l!==void 0?l:!1)("data-pc-section","trigger"),a(),r("ngIf",i.loading)("ngIfElse",m),a(3),pe("visible",i.overlayVisible),r("options",i.overlayOptions)("target","@parent")("appendTo",i.appendTo)("autoZIndex",i.autoZIndex)("baseZIndex",i.baseZIndex)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}},dependencies:()=>[Pe,ht,ze,Ae,Le,Zt,Wt,Ze,Gt,qe,Be,Ge,be,je,Qe,Qi],encapsulation:2,changeDetection:0})}return t})(),un=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=st({type:t});static \u0275inj=ot({imports:[ft,Ue,Re,Yt,Ze,qt,qe,Be,Ge,He,Ke,Ut,je,Qe,Ue,Re]})}return t})();var Zi=["container"],Wi=(t,o)=>o.id;function Yi(t,o){if(t&1){let e=C();p(0,"div",57),b("auxclick",function(i){let l=f(e).$implicit,m=c();return _(m.removerPonto(i,l))})("contextmenu",function(i){let l=f(e).$implicit,m=c();return _(m.removerPonto(i,l))}),s()}if(t&2){let e=o.$implicit;te("left",e.xPercent,"%")("top",e.yPercent,"%")}}var Ie=class t{containerRef=ee.required("container");pontos=w([]);disabled=w(!1);onChange=()=>{};onTouched=()=>{};setDisabledState(o){this.disabled.set(o)}writeValue(o){let e=o==null?[]:Array.isArray(o)?o:[o];this.pontos.set(e)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}adicionarPonto(o){if(this.disabled())return;let n=this.containerRef().nativeElement.getBoundingClientRect(),i=o.clientX-n.left,l=o.clientY-n.top,m=i/n.width*100,x=l/n.height*100;if(m<.5||x<.5)return;let Se=`${m}-${x}`,Y={id:Se,xPercent:m,yPercent:x};this.pontos.update(Q=>{if(Q.some(fn=>fn.id===Se))return Q;let et=[...Q,Y];return this.onChange(et),et}),this.onTouched()}removerPonto(o,e){o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),this.pontos.update(n=>{let i=n.filter(l=>l.id!=e.id);return this.onChange(i),i})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["corpo-sintomas"]],viewQuery:function(e,n){e&1&&re(n.containerRef,Zi,5),e&2&&se()},features:[me([{provide:fe,useExisting:J(()=>t),multi:!0}])],decls:58,vars:0,consts:[["container",""],[1,"corpo-dor",3,"click"],[1,"corpo-dor-img"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 748.000000 810.000000","preserveAspectRatio","xMidYMid meet"],["transform","translate(0.000000,810.000000) scale(0.100000,-0.100000)","fill","currentColor","stroke","none"],["d",`M1726 8063 c-34 -4 -64 -18 -131 -61 -11 -6 -29 -16 -40 -21 -31 -14
-79 -70 -98 -116 -14 -31 -37 -160 -37 -203 0 -43 -5 -55 -31 -81 l-31 -31 23
-58 c13 -31 26 -61 30 -67 3 -5 10 -28 14 -50 3 -21 16 -53 28 -69 26 -36 44
-65 53 -86 19 -46 23 -60 37 -115 8 -33 15 -97 16 -142 2 -77 1 -83 -26 -107
-15 -14 -37 -26 -48 -26 -22 0 -73 -24 -121 -56 -16 -11 -40 -25 -54 -32 -23
-11 -48 -28 -120 -79 -31 -22 -117 -52 -150 -53 -99 -1 -299 -297 -300 -443 0
-21 -4 -46 -9 -55 -5 -9 -5 -44 -1 -77 5 -33 11 -150 14 -260 2 -110 10 -243
16 -295 12 -112 -1 -169 -59 -260 -48 -74 -64 -112 -96 -217 -14 -48 -31 -101
-37 -118 -6 -16 -14 -73 -19 -125 -10 -115 -28 -221 -38 -235 -5 -5 -11 -32
-14 -58 -4 -26 -18 -67 -31 -90 -13 -23 -32 -69 -41 -102 -40 -141 -65 -195
-91 -195 -17 0 -84 -59 -84 -74 0 -7 -13 -25 -28 -42 -38 -39 -103 -130 -127
-178 -11 -21 -30 -45 -42 -53 -58 -38 -5 -100 59 -71 62 29 105 41 123 34 16
-6 17 -15 9 -99 -13 -135 -9 -186 16 -216 11 -14 32 -43 46 -64 33 -50 48 -54
87 -25 17 14 51 35 75 47 24 12 45 28 48 36 3 7 23 26 45 41 21 14 39 31 39
35 0 5 13 28 30 51 16 22 30 48 30 56 0 21 32 92 42 92 4 0 8 14 8 32 0 17 12
56 26 85 26 57 29 80 24 262 -1 72 1 88 19 110 18 23 31 46 78 136 6 11 26 54
44 95 19 41 51 96 71 121 21 25 38 52 38 61 0 9 7 21 15 28 8 7 15 17 15 23 0
5 11 24 24 41 13 17 26 45 30 63 4 17 15 38 25 47 17 16 19 16 25 0 3 -9 2
-22 -4 -29 -13 -15 -29 -89 -40 -181 -4 -40 -13 -81 -19 -92 -6 -12 -11 -55
-11 -97 0 -46 -6 -87 -14 -103 -31 -60 -47 -207 -41 -381 3 -91 10 -179 15
-196 13 -44 42 -226 60 -364 5 -40 13 -78 19 -84 6 -6 11 -25 11 -42 0 -16 7
-43 15 -59 8 -15 15 -38 15 -50 0 -11 7 -30 15 -40 8 -11 15 -32 15 -47 0 -36
28 -117 66 -191 8 -14 14 -46 14 -70 0 -23 7 -72 16 -108 21 -86 21 -197 0
-238 -9 -17 -16 -46 -16 -64 0 -18 -6 -50 -14 -73 -8 -22 -19 -60 -26 -85 -7
-25 -19 -63 -27 -85 -17 -50 -12 -151 12 -215 16 -43 41 -128 52 -180 3 -14
10 -30 15 -37 5 -6 13 -33 18 -60 26 -147 37 -188 66 -245 8 -14 14 -40 14
-56 0 -17 9 -68 21 -114 48 -192 44 -156 33 -343 -5 -92 -10 -115 -31 -148
-36 -57 -83 -162 -83 -186 0 -11 -5 -23 -10 -26 -6 -3 -10 -15 -10 -25 0 -10
-11 -31 -23 -47 -33 -39 -41 -77 -22 -113 8 -16 15 -46 15 -67 0 -33 7 -46 48
-86 36 -36 55 -47 79 -47 17 0 47 -7 66 -15 23 -10 69 -15 127 -15 l91 0 46
44 c46 42 47 46 54 120 4 43 13 83 19 91 7 9 8 15 0 20 -13 8 -14 202 0 210 6
3 10 18 10 33 0 15 4 34 10 42 18 28 22 -17 23 -262 2 -216 4 -246 20 -269 23
-35 72 -56 91 -40 8 7 57 12 122 13 92 1 114 4 139 22 51 35 115 99 115 116 0
8 9 32 20 53 27 49 25 67 -8 113 -16 22 -32 57 -36 78 -4 21 -11 46 -15 55
-23 45 -41 93 -41 109 0 9 -11 37 -25 61 -26 44 -34 114 -15 126 6 3 10 21 10
40 0 19 -4 37 -10 40 -23 14 -2 216 29 273 6 11 11 34 11 51 0 16 4 32 9 35 5
3 12 30 16 61 3 30 10 57 15 60 4 3 11 33 15 67 6 56 22 119 46 183 4 11 12
34 18 50 6 17 16 44 23 60 33 82 58 337 38 376 -14 25 -26 101 -38 234 -12
121 10 382 36 431 15 29 38 93 56 159 10 33 30 85 45 115 26 51 61 177 76 277
4 24 11 45 16 49 5 3 9 23 9 45 0 22 5 49 10 59 6 11 13 47 16 82 3 35 9 72
14 83 15 35 40 377 31 420 -5 22 -9 76 -10 120 -1 44 -8 100 -15 125 -8 25
-17 106 -20 182 -3 75 -10 147 -15 160 -5 14 -6 30 -1 37 11 19 50 4 50 -19 0
-17 28 -79 41 -90 10 -8 54 -89 89 -160 17 -36 47 -99 67 -140 20 -41 46 -88
57 -105 18 -26 21 -43 20 -138 -1 -65 -6 -113 -13 -120 -13 -13 -15 -54 -2
-61 5 -4 12 -30 16 -59 7 -56 22 -106 53 -177 11 -25 23 -64 27 -87 7 -44 58
-119 87 -129 10 -3 18 -12 18 -19 0 -21 38 -52 106 -87 68 -34 88 -33 106 9 7
15 24 42 39 60 30 35 35 61 45 221 7 130 12 134 83 77 24 -19 49 -35 56 -35 6
0 22 12 36 26 l24 26 -60 116 c-33 64 -63 119 -67 120 -5 2 -8 11 -8 21 0 14
-35 59 -103 131 -8 8 -26 24 -40 34 -18 12 -27 28 -27 46 0 15 -7 45 -15 66
-29 72 -32 79 -54 144 -13 36 -28 88 -35 115 -7 28 -21 68 -31 90 -13 28 -20
79 -25 176 -7 122 -15 169 -41 234 -4 11 -10 41 -14 67 -3 26 -10 50 -16 53
-5 4 -9 15 -9 27 0 11 -18 47 -40 79 -22 32 -40 63 -40 68 0 5 -6 14 -14 20
-22 19 -40 172 -28 239 5 31 11 152 12 267 1 116 6 214 11 219 12 13 12 161 0
184 -24 48 -41 95 -41 115 0 13 -4 27 -9 33 -5 5 -28 45 -51 89 -37 71 -80
124 -103 125 -5 0 -23 11 -41 25 -18 14 -39 25 -48 25 -8 0 -23 7 -34 15 -10
8 -32 15 -48 15 -15 0 -44 13 -65 29 -50 39 -118 81 -133 82 -7 0 -33 13 -58
29 -25 16 -73 45 -106 65 -71 43 -83 64 -94 160 -9 73 3 125 50 230 9 22 28
65 41 95 13 30 40 86 61 124 44 80 46 98 14 136 -17 21 -25 46 -30 97 -12 116
-31 165 -93 235 -85 94 -114 118 -146 118 -10 0 -30 9 -45 20 -20 15 -54 24
-118 30 -90 10 -98 10 -168 3z m181 -39 c21 -9 47 -20 58 -24 61 -22 104 -46
157 -87 47 -35 66 -59 88 -107 28 -61 56 -209 45 -237 -3 -9 6 -25 20 -39 33
-31 32 -45 -9 -90 -22 -25 -38 -55 -45 -88 -6 -28 -22 -71 -36 -96 -14 -24
-25 -53 -25 -64 0 -37 -41 -102 -80 -128 -82 -54 -277 -87 -336 -56 -10 5 -42
20 -70 32 -41 18 -56 31 -73 65 -11 23 -21 49 -21 56 0 8 -16 48 -36 89 -64
132 -73 172 -74 306 0 79 5 138 15 170 8 27 15 60 15 74 0 32 60 117 108 152
56 41 100 58 175 68 38 4 71 11 75 14 7 8 6 8 49 -10z m-238 -1018 c19 -17 96
-43 150 -52 29 -5 64 1 128 21 48 15 92 32 97 36 6 5 20 9 33 9 27 0 32 -16
35 -125 l3 -80 40 -5 c23 -3 57 -16 75 -28 51 -32 172 -92 187 -92 7 0 13 -4
13 -10 0 -5 10 -10 23 -10 12 0 38 -16 57 -35 32 -33 33 -36 17 -52 -16 -17
-21 -17 -80 5 -69 25 -173 30 -179 10 -3 -8 -34 -15 -84 -20 -82 -6 -160 -21
-171 -32 -22 -22 69 -25 96 -3 21 18 292 23 322 6 13 -8 62 -17 109 -21 138
-11 231 -25 240 -34 17 -18 89 -165 95 -196 4 -18 11 -39 15 -48 48 -97 65
-160 52 -201 -14 -43 -24 -142 -28 -278 -2 -58 -5 -133 -8 -166 -2 -33 0 -65
6 -72 6 -7 5 -14 -2 -18 -13 -8 -13 -162 0 -170 6 -3 10 -17 10 -31 0 -31 25
-81 57 -114 31 -31 60 -94 74 -162 6 -29 16 -61 21 -71 17 -32 48 -216 48
-282 0 -61 21 -178 39 -220 25 -57 41 -108 41 -134 0 -16 6 -42 14 -58 8 -15
22 -55 32 -88 9 -33 27 -71 40 -86 13 -14 24 -29 24 -35 0 -8 67 -88 133 -158
15 -16 27 -37 27 -46 0 -9 18 -41 39 -71 36 -50 45 -74 42 -106 -3 -38 -82 14
-117 78 -33 60 -55 79 -91 79 -18 0 -42 6 -53 12 -17 11 -22 10 -29 -1 -13
-21 -2 -41 23 -41 11 0 39 -7 61 -14 l40 -14 3 -169 c3 -187 0 -215 -24 -206
-18 7 -34 -12 -34 -43 0 -25 -34 -59 -49 -49 -6 3 -11 19 -11 34 0 15 -4 31
-9 36 -5 6 -12 33 -14 60 -10 89 -23 153 -35 167 -6 8 -8 24 -5 37 5 19 2 22
-13 19 -13 -3 -18 -11 -16 -28 7 -70 15 -108 38 -178 17 -52 18 -98 2 -108
-16 -10 -36 22 -44 72 -7 52 -19 63 -34 34 -9 -16 -15 -18 -30 -10 -11 6 -20
19 -20 29 0 10 -12 49 -26 87 -14 37 -30 89 -36 114 -17 78 -35 254 -27 277 5
12 5 55 2 95 -4 64 -13 90 -71 208 -36 74 -89 174 -119 222 -29 47 -53 91 -53
97 0 5 -11 22 -25 37 -14 15 -25 33 -25 40 0 7 -6 19 -13 26 -25 25 -41 63
-54 133 -8 39 -18 90 -23 115 -17 80 -19 94 -19 145 2 114 -2 161 -16 181 -22
34 -27 84 -15 149 6 33 17 99 23 147 7 47 15 90 20 94 4 4 7 134 7 289 0 261
-1 283 -18 299 -18 15 -20 15 -35 -2 -15 -16 -16 -27 -7 -72 12 -61 12 -256 1
-285 -4 -10 -3 -31 2 -46 11 -27 -2 -169 -24 -274 -5 -27 -14 -86 -20 -130
-12 -102 -21 -122 -61 -138 -81 -33 -233 66 -355 230 -29 40 -53 75 -53 79 0
4 -6 15 -13 23 -18 22 -41 97 -33 109 3 6 1 22 -5 36 -10 20 -9 30 4 49 24 36
25 126 3 159 -18 27 -18 40 0 111 9 40 -13 89 -40 85 -19 -3 -21 -10 -23 -77
-2 -53 2 -82 12 -98 17 -25 20 -118 5 -128 -5 -3 -12 -28 -16 -55 -4 -28 -10
-50 -15 -50 -19 0 -9 -49 11 -55 12 -4 24 -21 31 -48 22 -82 91 -180 205 -292
86 -83 116 -99 221 -112 57 -7 70 -24 50 -66 -18 -38 -14 -63 20 -124 13 -23
23 -53 23 -67 0 -14 5 -28 10 -31 27 -16 8 -57 -51 -113 -59 -55 -99 -114 -99
-147 0 -42 -131 -184 -221 -241 -24 -15 -47 -32 -51 -37 -9 -14 -100 -28 -221
-34 -135 -6 -175 10 -314 123 -133 110 -169 145 -177 179 -11 45 -54 104 -95
129 -62 39 -87 116 -58 174 48 94 52 107 50 167 -2 76 18 105 73 105 44 0 80
18 169 85 67 50 145 126 145 143 1 4 21 29 46 57 25 27 47 60 50 72 4 13 9 23
13 23 3 0 17 23 30 50 l24 51 -26 52 c-14 28 -28 74 -32 100 -8 54 -31 85 -49
67 -15 -15 -9 -155 8 -183 27 -43 27 -72 0 -123 -36 -68 -200 -242 -296 -314
-72 -54 -84 -60 -128 -60 -44 0 -51 3 -64 28 -9 18 -19 86 -26 172 -6 78 -13
146 -16 151 -3 5 -7 77 -9 161 -2 84 -8 194 -15 245 -8 65 -8 98 -1 112 17 31
14 116 -5 132 -14 11 -19 9 -35 -11 -16 -22 -19 -43 -19 -163 0 -77 5 -147 10
-158 6 -11 12 -113 14 -236 2 -123 9 -233 15 -253 15 -46 14 -146 -1 -173 -8
-14 -13 -74 -15 -164 -1 -78 -6 -150 -11 -160 -5 -10 -10 -38 -10 -63 -2 -63
-12 -119 -23 -126 -5 -3 -9 -14 -9 -25 0 -19 -23 -58 -61 -104 -9 -11 -20 -31
-24 -45 -4 -14 -36 -64 -71 -111 -35 -48 -64 -93 -64 -101 0 -8 -4 -18 -9 -24
-8 -8 -26 -41 -99 -179 -49 -94 -54 -112 -48 -177 13 -127 5 -225 -22 -275 -7
-12 -12 -35 -12 -51 0 -16 -7 -35 -15 -42 -8 -7 -15 -20 -15 -30 0 -10 -7 -31
-15 -46 -8 -16 -15 -36 -15 -45 0 -9 -7 -19 -15 -23 -8 -3 -15 -12 -15 -21 0
-8 -4 -15 -10 -15 -13 0 -13 37 0 45 6 3 10 17 10 30 0 13 7 30 15 39 8 8 15
22 15 30 0 9 5 25 12 35 9 15 8 24 -6 46 l-17 26 -20 -25 c-12 -15 -19 -40
-19 -68 0 -23 -7 -52 -15 -62 -8 -11 -15 -33 -15 -50 0 -16 -7 -37 -16 -47 -9
-10 -22 -35 -29 -56 -16 -46 -41 -52 -38 -8 1 17 6 39 11 50 17 37 34 110 39
163 4 42 2 52 -11 52 -22 0 -36 -32 -36 -87 -1 -26 -7 -59 -15 -73 -8 -14 -14
-34 -15 -45 0 -32 -32 -106 -44 -102 -7 2 -11 42 -11 110 0 58 -4 109 -8 114
-5 4 -16 -3 -26 -15 -14 -19 -19 -21 -27 -10 -18 23 -20 71 -6 165 12 74 17
83 46 83 69 0 236 117 236 166 0 40 -25 28 -97 -46 -66 -67 -71 -70 -116 -70
-41 0 -52 -5 -78 -32 -16 -18 -29 -35 -29 -39 0 -14 -38 -49 -64 -59 -52 -19
-60 8 -21 70 14 22 25 42 25 45 0 13 152 182 180 200 37 24 71 77 100 160 12
33 27 74 35 90 20 47 57 157 64 195 4 19 13 45 19 57 7 12 12 49 12 82 0 33 5
72 11 88 6 15 14 57 19 93 9 70 27 144 41 172 5 10 9 31 9 47 0 16 7 34 15 41
8 7 15 18 15 25 0 12 45 101 61 121 24 29 61 162 60 214 -7 411 -13 513 -28
536 -24 37 -14 204 15 263 12 25 22 49 22 53 0 16 52 120 81 163 35 52 44 59
94 76 22 7 46 18 54 23 8 7 95 11 219 11 151 1 207 4 210 13 2 8 -9 12 -35 12
-21 0 -44 4 -52 9 -12 7 -7 13 20 25 19 8 42 17 52 20 24 7 21 26 -4 26 -21 0
-157 -43 -196 -62 -30 -15 -76 5 -71 29 2 10 33 34 70 53 37 19 70 39 75 43
16 17 177 87 199 87 36 0 54 45 54 135 0 70 1 75 22 75 12 0 29 -6 37 -14z
m887 -1764 c4 -9 9 -84 11 -167 3 -111 8 -154 19 -166 20 -22 19 -109 -1 -109
-15 0 -19 15 -15 57 1 13 -6 33 -14 45 -9 12 -16 42 -16 66 0 41 -19 115 -43
168 -6 14 -5 29 2 42 6 11 11 34 11 50 0 16 3 31 6 35 9 9 32 -3 40 -21z
m-1342 -39 c10 -55 9 -73 -5 -128 -15 -60 -17 -64 -29 -45 -14 22 -12 194 2
208 16 16 25 7 32 -35z m-5 -383 c38 -19 91 -72 91 -91 0 -5 -9 -9 -20 -9 -11
0 -20 4 -20 8 0 11 -66 42 -90 42 -15 0 -20 7 -20 28 0 26 7 42 17 42 2 0 21
-9 42 -20z m1325 -39 c23 -31 36 -60 36 -79 0 -17 5 -43 11 -59 6 -15 15 -112
20 -214 4 -102 13 -207 20 -234 9 -34 10 -103 5 -244 -3 -108 -8 -207 -10
-221 -2 -14 -7 -47 -11 -75 -8 -67 -50 -281 -78 -400 -38 -160 -52 -205 -83
-271 -19 -39 -37 -87 -40 -105 -4 -19 -17 -54 -29 -79 -12 -25 -25 -72 -28
-105 -3 -33 -11 -91 -18 -130 -18 -110 -8 -333 21 -445 26 -103 11 -325 -29
-428 -12 -29 -21 -62 -21 -72 0 -11 -12 -44 -26 -73 -25 -49 -33 -82 -52 -227
-4 -33 -13 -65 -20 -72 -7 -7 -12 -26 -12 -43 0 -17 -7 -40 -15 -51 -8 -10
-15 -34 -15 -52 0 -18 -5 -42 -10 -53 -6 -10 -11 -73 -11 -138 0 -93 -3 -122
-14 -131 -27 -22 -18 -49 76 -233 20 -38 39 -106 34 -119 -3 -8 10 -35 30 -61
42 -55 45 -72 11 -63 -32 8 -43 -10 -21 -34 10 -11 15 -31 13 -52 -3 -30 -6
-33 -37 -35 -18 -1 -38 -6 -44 -12 -6 -6 -22 -11 -34 -11 -13 0 -35 -7 -48
-16 -13 -8 -36 -14 -52 -12 -26 3 -28 7 -33 53 -4 42 -8 50 -25 50 -15 0 -21
-8 -23 -34 -2 -19 -11 -45 -20 -59 -15 -23 -15 -25 1 -37 23 -17 21 -25 -6
-25 -53 0 -83 83 -77 220 5 124 4 202 -4 270 -12 102 -11 186 1 202 6 7 10 40
10 74 0 54 7 87 45 199 5 17 13 44 17 60 4 17 13 40 19 52 7 12 12 31 12 43 0
12 11 55 25 96 14 41 25 97 25 124 0 27 5 61 12 77 6 15 15 69 18 118 21 270
32 382 40 397 13 24 15 187 2 200 -22 22 -42 -11 -42 -67 0 -29 -5 -77 -10
-106 -6 -30 -15 -115 -20 -189 -10 -137 -27 -304 -35 -350 -2 -14 -7 -50 -10
-80 -8 -77 -38 -181 -50 -177 -6 2 -11 55 -13 128 -1 68 -7 128 -12 133 -6 6
-10 42 -10 81 0 48 -5 78 -16 93 -20 29 -14 222 9 302 41 141 50 179 54 231 4
50 1 62 -28 110 -18 30 -38 57 -43 61 -6 4 -10 26 -10 50 3 471 6 559 20 604
16 52 11 148 -8 171 -6 8 -8 47 -4 100 5 73 9 230 7 353 0 14 2 59 4 100 2 41
4 128 5 192 0 83 4 120 13 130 7 7 22 34 32 61 11 30 27 52 44 60 18 8 26 20
26 37 0 45 -54 35 -76 -15 -6 -11 -15 -29 -22 -40 -51 -84 -66 -88 -90 -26
-20 50 -42 68 -62 51 -17 -14 -20 -40 -5 -40 6 0 10 -6 10 -13 0 -8 14 -34 32
-58 l32 -44 -2 -370 c-3 -359 -4 -388 -21 -430 -26 -65 -30 -112 -14 -206 17
-103 20 -170 11 -269 -3 -46 -1 -73 9 -94 25 -48 0 -278 -36 -336 -43 -70 -51
-122 -31 -201 6 -24 15 -62 20 -84 14 -62 34 -128 48 -152 6 -12 12 -35 12
-51 0 -43 -37 -213 -49 -225 -7 -7 -11 -58 -11 -121 0 -154 -9 -218 -29 -214
-20 4 -29 38 -30 125 -1 39 -5 74 -10 77 -5 4 -10 70 -11 149 0 78 -5 169 -11
202 -18 108 -19 119 -23 208 -4 97 -27 147 -67 147 -20 0 -21 -4 -15 -57 4
-32 12 -73 17 -90 6 -18 8 -41 4 -52 -3 -10 0 -41 6 -67 6 -27 11 -64 10 -83
0 -18 3 -39 7 -45 4 -6 12 -83 19 -171 15 -216 29 -329 42 -353 6 -11 11 -39
11 -61 0 -23 4 -49 9 -59 27 -50 41 -88 41 -114 0 -16 10 -50 22 -76 17 -38
22 -69 23 -159 2 -61 5 -115 8 -120 3 -5 -1 -22 -9 -37 -7 -16 -14 -39 -14
-53 0 -13 -4 -33 -10 -43 -5 -10 -11 -97 -12 -194 l-3 -176 -30 -24 c-25 -20
-28 -28 -19 -42 12 -21 -10 -54 -37 -54 -23 0 -29 20 -29 106 0 41 -4 74 -8
74 -14 0 -40 -54 -47 -100 -8 -47 -18 -60 -48 -60 -23 0 -32 25 -20 53 42 91
44 100 31 108 -31 20 -48 3 -48 -46 0 -13 -4 -27 -10 -30 -5 -3 -10 -17 -10
-31 0 -20 -5 -24 -29 -24 -48 0 -76 38 -92 123 -23 118 -23 117 4 145 13 15
34 56 45 92 20 63 43 119 62 150 5 8 20 41 34 72 23 51 26 69 27 191 0 105 -3
142 -15 166 -9 16 -16 44 -16 61 0 17 -11 66 -24 108 -13 42 -27 95 -31 117
-6 39 -20 91 -36 130 -4 11 -10 46 -13 79 -7 63 -33 153 -47 162 -5 3 -9 16
-9 30 0 14 -5 35 -12 47 -12 24 -29 135 -31 207 -1 60 8 117 27 165 8 22 15
53 16 69 0 15 7 49 14 75 29 91 38 172 27 241 -6 36 -11 84 -11 106 0 23 -7
66 -16 95 -9 30 -23 77 -31 104 -8 28 -23 70 -35 95 -11 25 -24 67 -28 95 -4
27 -17 69 -29 93 -25 49 -37 102 -52 222 -6 46 -14 91 -19 100 -4 8 -11 54
-15 100 -4 47 -10 99 -15 115 -7 24 -22 226 -21 285 1 81 20 250 29 267 7 12
12 48 12 80 1 32 7 94 15 138 8 44 15 108 15 143 0 69 21 122 47 122 22 0 81
-38 93 -61 6 -10 15 -19 21 -19 11 0 61 -40 183 -148 39 -34 91 -74 115 -89
58 -34 155 -63 211 -63 87 1 214 26 276 56 69 33 203 146 255 214 19 25 58 69
88 98 30 29 51 56 47 60 -4 4 -14 -1 -21 -12 -16 -21 -35 -13 -35 14 0 17 43
60 60 60 5 0 24 -22 44 -49z m-663 -2496 c22 -87 23 -113 4 -158 -8 -20 -15
-56 -15 -81 0 -36 -4 -46 -21 -51 -27 -9 -30 -4 -36 52 -3 26 -10 53 -14 59
-5 6 -10 47 -11 90 -2 94 23 167 55 162 15 -2 24 -20 38 -73z m-17 -681 c3
-26 6 -86 6 -134 0 -55 6 -101 15 -123 20 -48 20 -227 0 -282 -8 -22 -15 -51
-15 -63 0 -25 -29 -82 -42 -82 -4 0 -11 12 -14 28 -4 15 -11 32 -16 39 -18 23
-15 478 3 489 5 3 9 38 9 78 0 70 10 96 36 96 6 0 14 -21 18 -46z`],["d",`M1603 7563 c-25 -9 -12 -41 32 -82 51 -47 75 -51 120 -16 59 45 49
92 -17 80 -25 -5 -38 -2 -47 9 -13 15 -62 20 -88 9z`],["d",`M1953 7556 c-46 -21 -57 -49 -63 -156 l-5 -95 -33 -3 c-18 -2 -40 2
-48 9 -13 10 -17 10 -25 -2 -20 -32 -10 -39 59 -39 93 0 107 15 99 103 -3 34
-3 68 1 73 4 6 28 11 54 10 58 -1 80 18 82 71 l1 38 -45 2 c-25 2 -59 -4 -77
-11z`],["d",`M1807 7191 c-23 -9 -20 -20 14 -49 l27 -22 32 26 c17 15 28 30 23 34
-13 12 -76 19 -96 11z`],["d",`M1550 6645 c7 -8 21 -15 31 -15 11 0 19 7 19 15 0 10 -10 15 -31 15
-27 0 -30 -2 -19 -15z`],["d",`M2067 6639 c-9 -6 -15 -15 -11 -20 7 -12 93 -1 112 13 8 7 12 7 12
-1 0 -6 7 -11 15 -11 23 0 18 17 -7 24 -35 9 -101 7 -121 -5z`],["d",`M1642 6628 c3 -7 21 -14 40 -16 29 -2 37 -8 42 -28 5 -20 13 -24 41
-24 19 0 56 -5 84 -11 55 -12 101 4 121 40 25 47 -5 56 -52 16 -30 -25 -100
-35 -112 -16 -22 35 -174 70 -164 39z`],["d",`M1565 6570 c-12 -19 5 -29 59 -35 65 -8 114 9 58 21 -18 4 -35 11
-38 15 -7 12 -71 11 -79 -1z`],["d",`M1624 6475 c-4 -9 3 -23 16 -33 15 -12 24 -32 26 -56 2 -30 11 -45
38 -68 44 -36 45 -53 6 -73 -54 -28 -56 -43 -15 -181 9 -31 50 -51 69 -35 13
11 13 16 -7 43 -21 28 -21 30 -5 58 10 17 13 32 7 35 -15 10 -11 75 6 91 8 9
15 24 15 33 0 10 -7 24 -15 31 -8 7 -15 21 -15 32 0 23 -24 62 -64 106 -32 35
-53 41 -62 17z`],["d",`M1992 6427 c-25 -26 -42 -52 -42 -66 0 -13 -9 -39 -21 -57 -25 -42
-18 -74 17 -74 20 0 24 5 24 28 0 17 10 38 24 51 19 18 24 33 23 62 -1 27 5
45 21 62 52 55 9 50 -46 -6z`],["d",`M1373 6003 c-7 -3 -13 -13 -13 -22 0 -48 90 -70 125 -31 16 18 17 22
4 34 -15 14 -95 27 -116 19z`],["d",`M2277 5973 c-4 -3 -7 -15 -7 -25 0 -26 70 -26 87 1 7 10 9 22 6 25
-8 8 -78 8 -86 -1z`],["d",`M1831 5646 c-13 -15 -6 -42 14 -49 13 -6 55 19 55 32 0 6 -43 31 -54
31 -2 0 -9 -6 -15 -14z`],["d",`M1798 5075 c-21 -28 -23 -46 -6 -63 14 -14 68 -16 68 -2 0 6 11 10
24 10 39 0 56 11 56 36 0 30 -27 44 -82 44 -34 -1 -47 -6 -60 -25z`],["d",`M3080 3681 c-8 -15 -7 -26 2 -41 18 -28 33 -19 33 20 0 39 -19 50
-35 21z`],["d",`M3290 3654 c-11 -12 -10 -24 3 -68 10 -29 17 -74 17 -99 0 -34 4 -47
14 -47 36 0 33 105 -5 182 -5 10 -5 20 1 23 11 7 4 25 -9 25 -5 0 -14 -7 -21
-16z`],["d",`M2017 2612 c-20 -22 -41 -73 -38 -91 4 -25 55 -81 74 -81 26 0 32 26
12 56 -9 14 -15 37 -13 52 3 23 8 27 37 27 45 0 60 -23 41 -62 -8 -15 -16 -31
-18 -35 -2 -5 6 -8 19 -8 24 0 69 42 69 65 0 42 -20 64 -73 79 -70 20 -90 20
-110 -2z`],["d",`M1616 2548 c-3 -34 -2 -66 2 -70 16 -16 39 3 56 44 14 37 14 44 1 65
-9 13 -24 23 -34 23 -15 0 -19 -11 -25 -62z`],["d",`M1492 2588 c-7 -7 -12 -27 -12 -45 0 -41 38 -65 66 -43 18 16 13 62
-10 86 -18 17 -28 18 -44 2z`],["d",`M1523 2323 c-24 -9 5 -43 36 -43 31 0 57 22 46 40 -6 10 -60 13 -82
3z`],["d",`M1388 269 c-10 -6 -18 -19 -18 -29 0 -28 36 -26 44 2 7 29 -4 40 -26
27z`],["d",`M2165 260 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43
7z`],["d",`M2080 241 c0 -24 11 -32 28 -22 16 10 5 41 -14 41 -8 0 -14 -9 -14
-19z`],["d",`M5569 8039 c-134 -14 -225 -83 -303 -231 -42 -79 -46 -93 -46 -156 0
-63 -2 -71 -25 -86 -18 -12 -25 -25 -25 -48 0 -65 44 -169 95 -223 41 -42 65
-102 65 -159 0 -23 7 -47 17 -59 15 -15 18 -38 18 -117 0 -125 -2 -127 -157
-207 -15 -8 -30 -18 -33 -24 -4 -5 -16 -9 -29 -9 -12 0 -50 -18 -84 -40 -33
-22 -64 -40 -68 -40 -3 0 -22 -13 -41 -30 -23 -21 -44 -30 -68 -30 -63 0 -142
-68 -193 -168 -12 -24 -33 -55 -46 -69 -24 -25 -56 -109 -56 -144 0 -10 -4
-21 -10 -24 -15 -9 -13 -202 2 -228 9 -15 13 -82 14 -212 1 -104 7 -214 13
-244 23 -110 9 -197 -40 -256 -9 -11 -26 -40 -39 -65 -12 -25 -26 -52 -31 -60
-23 -40 -39 -85 -39 -111 0 -15 -5 -40 -11 -56 -13 -31 -48 -276 -49 -336 0
-20 -4 -45 -9 -55 -13 -24 -38 -119 -46 -172 -4 -24 -18 -69 -30 -100 -12 -30
-30 -80 -39 -110 -12 -41 -24 -61 -48 -77 -83 -57 -168 -157 -243 -287 -30
-53 -64 -105 -75 -116 -16 -16 -18 -25 -10 -40 6 -11 17 -20 25 -20 36 0 109
27 132 48 14 13 35 22 47 20 20 -3 21 -7 21 -170 l0 -166 26 -21 c15 -11 29
-32 33 -45 14 -56 87 -38 166 42 25 25 60 51 78 59 22 9 32 20 32 36 0 12 14
35 30 50 17 16 33 41 36 55 6 27 24 71 51 124 7 14 13 37 13 50 0 13 4 28 10
34 18 18 29 143 18 203 -15 81 -4 172 27 220 14 22 25 45 25 51 0 6 15 34 33
63 34 54 107 200 107 214 0 4 21 35 46 68 25 33 52 75 60 94 34 79 44 -31 15
-159 -6 -25 -10 -91 -11 -148 0 -73 -5 -112 -15 -133 -22 -41 -20 -488 1 -516
8 -11 14 -44 14 -83 0 -36 5 -82 10 -102 10 -34 18 -81 39 -228 4 -30 20 -93
35 -140 14 -47 34 -107 42 -135 9 -27 22 -64 30 -82 8 -17 14 -39 14 -50 1
-17 13 -43 55 -114 20 -34 36 -181 37 -334 1 -67 -15 -184 -31 -230 -37 -110
-30 -355 14 -450 13 -27 26 -78 29 -112 3 -35 10 -71 15 -80 15 -29 41 -124
41 -150 0 -13 5 -34 12 -46 6 -12 19 -64 30 -115 10 -51 22 -102 28 -112 5
-10 10 -28 10 -39 0 -18 11 -48 43 -118 10 -22 -9 -132 -43 -248 -6 -22 -17
-61 -23 -86 -7 -25 -26 -62 -44 -82 -18 -20 -35 -53 -39 -74 -4 -20 -20 -59
-36 -86 -15 -26 -28 -53 -28 -59 0 -22 46 -85 107 -145 57 -56 68 -62 117 -68
30 -4 63 -4 74 -1 11 4 39 0 63 -8 42 -15 45 -14 99 12 54 27 55 29 66 84 20
100 23 108 44 108 26 0 40 -36 40 -100 0 -41 4 -51 22 -61 13 -7 29 -19 37
-27 20 -20 164 -11 212 13 49 25 137 102 166 146 19 30 25 51 26 107 1 38 -3
75 -9 83 -6 8 -14 28 -18 44 -4 17 -18 47 -32 67 -13 21 -24 42 -24 47 0 12
-21 63 -61 148 -39 82 -48 221 -18 280 10 20 19 47 19 59 0 39 37 177 62 235
14 30 31 87 37 125 7 38 19 92 27 119 27 90 46 150 54 170 19 48 27 106 25
185 -3 98 -13 186 -25 215 -36 91 -46 242 -26 379 9 59 16 137 16 175 0 64 17
122 41 136 5 4 9 17 9 30 0 13 4 26 9 29 5 4 12 25 16 49 4 23 12 47 17 54 6
7 14 28 19 48 5 19 13 50 18 68 49 168 60 210 66 267 3 36 13 85 21 110 9 25
20 90 24 145 5 55 13 143 18 195 10 109 5 385 -7 409 -5 9 -12 50 -15 91 -14
161 -28 267 -43 316 -16 50 -13 84 6 84 10 0 101 -176 101 -195 0 -6 11 -22
24 -35 14 -12 28 -37 32 -54 4 -17 17 -47 30 -66 13 -19 24 -40 24 -46 0 -6
11 -21 25 -34 14 -13 25 -30 25 -37 0 -8 19 -47 43 -86 l42 -72 1 -170 c1
-138 4 -176 17 -200 9 -16 17 -35 17 -41 0 -5 14 -32 31 -58 17 -27 40 -74 51
-105 12 -30 27 -62 35 -69 7 -7 13 -20 13 -28 0 -8 6 -14 13 -14 7 0 32 -18
55 -39 72 -68 154 -94 169 -53 4 9 18 29 32 44 31 34 40 77 48 231 3 64 8 117
12 117 4 0 33 -13 64 -29 l57 -29 20 25 c20 26 19 34 -9 67 -15 17 -16 17 -21
-10 -7 -39 -21 -39 -70 -2 -33 25 -46 45 -57 81 -9 31 -19 47 -30 47 -14 0
-15 -12 -10 -97 3 -54 11 -113 18 -131 8 -24 9 -40 1 -55 -6 -12 -14 -41 -17
-64 -4 -24 -11 -45 -15 -48 -13 -8 -32 33 -25 55 7 21 -28 133 -38 123 -4 -3
-7 -19 -7 -33 0 -39 -22 -54 -69 -46 -24 3 -42 2 -46 -4 -4 -6 -15 -8 -25 -5
-15 5 -19 0 -22 -26 -4 -43 -23 -47 -43 -10 -15 30 -15 31 10 43 20 9 25 18
25 49 0 47 -15 59 -24 18 -4 -24 -10 -30 -27 -27 -41 6 -113 251 -88 300 5 9
9 54 9 100 0 75 -3 87 -30 128 -16 25 -30 51 -30 58 0 7 -17 39 -37 70 -20 31
-57 98 -82 147 -26 50 -70 123 -99 163 -28 39 -52 76 -52 82 0 6 -13 34 -30
63 -18 33 -30 68 -30 91 0 21 -4 45 -9 55 -6 10 -11 82 -12 162 -2 129 -5 151
-28 209 -24 60 -26 76 -25 220 0 126 5 172 23 244 12 49 23 121 24 160 2 66 1
71 -20 74 -26 4 -30 -8 -37 -118 -2 -41 -9 -93 -15 -115 -5 -22 -14 -58 -20
-80 -6 -22 -11 -98 -11 -168 0 -96 -4 -133 -15 -151 -18 -27 -30 -156 -21
-220 6 -35 12 -46 25 -46 16 0 17 9 13 83 -4 71 -2 85 16 107 26 33 35 23 39
-48 9 -167 27 -309 40 -331 10 -16 12 -26 5 -33 -19 -19 -42 1 -48 41 -7 43
-22 59 -114 127 -65 48 -96 60 -172 68 l-58 6 -62 -63 c-80 -80 -138 -146
-138 -157 0 -13 -34 -74 -45 -82 -6 -4 -9 -47 -9 -97 2 -86 3 -91 30 -115 16
-14 33 -26 37 -26 19 0 18 34 -3 82 -32 76 -18 148 46 235 13 17 24 34 24 38
0 3 29 35 64 70 l63 65 65 0 c46 0 69 -4 78 -15 7 -8 19 -15 27 -15 8 0 34
-17 59 -37 43 -36 77 -91 87 -143 3 -14 10 -38 15 -55 22 -61 53 -219 52 -257
-1 -50 0 -71 9 -163 5 -55 14 -116 20 -135 17 -56 14 -369 -4 -404 -10 -18
-15 -57 -15 -113 0 -46 -5 -93 -10 -103 -11 -21 -24 -80 -45 -210 -21 -126
-27 -154 -35 -165 -4 -5 -11 -26 -15 -45 -8 -44 -36 -122 -47 -135 -4 -5 -8
-20 -8 -35 0 -14 -7 -38 -15 -54 -8 -15 -15 -39 -15 -52 0 -12 -4 -25 -9 -29
-30 -18 -43 -74 -48 -200 -2 -78 -10 -152 -20 -185 -18 -59 -13 -115 24 -280
18 -82 24 -305 11 -380 -5 -25 -11 -65 -15 -90 -3 -25 -9 -49 -13 -55 -14 -18
-48 -128 -61 -195 -9 -46 -23 -81 -51 -120 -21 -31 -38 -61 -38 -67 0 -6 -6
-24 -14 -40 -8 -15 -22 -53 -32 -83 -9 -30 -20 -59 -24 -65 -4 -5 -10 -44 -13
-85 -5 -72 -4 -77 24 -110 20 -23 29 -45 29 -70 0 -22 11 -51 30 -80 16 -25
30 -52 30 -61 0 -9 7 -30 15 -45 8 -16 15 -37 15 -47 0 -10 11 -30 25 -45 14
-15 25 -39 25 -54 0 -15 5 -39 12 -53 9 -19 9 -28 0 -37 -7 -7 -12 -22 -12
-34 0 -23 -61 -84 -85 -84 -17 0 -75 -33 -75 -42 0 -14 -37 -8 -50 7 -7 8 -21
15 -31 15 -21 0 -36 -20 -21 -29 6 -3 13 -18 17 -32 13 -52 -48 -75 -82 -31
-19 24 -16 48 10 65 l22 15 -25 10 c-14 5 -35 24 -47 41 -38 50 -28 175 21
281 15 33 65 41 73 11 9 -36 102 -78 117 -53 8 13 -43 56 -97 82 -52 24 -62
39 -91 141 -24 84 -21 120 15 165 30 37 31 42 26 109 -5 68 -24 150 -47 209
-7 19 -10 84 -9 171 1 115 -1 146 -14 166 -31 46 -47 139 -45 253 1 104 3 110
30 141 21 25 28 43 28 74 0 23 6 52 14 64 7 12 14 43 15 69 1 38 -7 63 -41
125 l-43 78 -3 241 c-3 195 0 253 12 302 18 68 21 138 6 147 -6 4 -10 -8 -10
-29 0 -38 -10 -49 -33 -40 -34 13 -27 69 10 79 23 5 25 9 18 43 -8 44 -6 502
5 820 0 19 36 14 74 -12 31 -21 48 -24 137 -25 64 -1 119 4 148 13 25 8 68 20
95 28 46 12 86 49 86 77 0 18 -30 13 -63 -11 -50 -36 -114 -51 -237 -55 -93
-3 -127 0 -175 16 l-60 19 -5 85 c-3 47 -9 89 -13 94 -18 17 -47 -38 -47 -88
0 -55 -22 -99 -50 -99 -10 0 -23 -7 -30 -15 -7 -8 -20 -15 -29 -15 -9 0 -22
-5 -28 -11 -6 -6 -49 -11 -105 -10 -104 0 -152 15 -206 62 -36 32 -60 37 -68
15 -17 -45 72 -97 198 -116 101 -15 165 -6 255 37 28 14 55 23 60 20 5 -3 7
-95 4 -204 -2 -109 -5 -247 -6 -308 -3 -182 -16 -348 -31 -379 -9 -19 -11 -33
-4 -40 5 -7 12 -32 15 -56 4 -25 13 -59 20 -75 10 -23 12 -61 8 -150 -3 -66
-5 -129 -4 -140 12 -105 -5 -257 -33 -297 -9 -12 -16 -32 -16 -45 0 -12 -4
-25 -10 -28 -11 -7 -14 -48 -3 -58 4 -4 8 -44 10 -88 3 -45 10 -91 17 -103 8
-11 17 -57 21 -101 16 -181 -3 -309 -52 -338 -17 -11 -17 -32 2 -47 12 -10 15
-38 14 -143 -1 -129 -1 -132 -31 -173 -29 -41 -29 -42 -17 -100 6 -33 14 -81
17 -109 3 -35 12 -59 33 -85 34 -40 39 -100 14 -170 -16 -46 -30 -60 -83 -86
-36 -18 -97 -78 -97 -96 0 -25 26 -17 79 27 64 52 83 56 91 18 3 -16 10 -41
15 -58 32 -102 30 -259 -3 -292 -8 -8 -54 -13 -132 -15 -66 -2 -123 -7 -127
-13 -4 -5 -8 -20 -8 -32 0 -18 -6 -23 -25 -23 -21 0 -25 5 -25 29 0 17 5 33
10 36 15 9 12 35 -4 35 -8 0 -22 -10 -31 -22 l-16 -23 -19 25 c-29 37 -34 59
-16 79 11 12 16 37 16 78 0 49 5 67 28 99 42 61 52 82 52 107 0 12 11 39 24
58 14 20 28 49 31 65 3 16 10 45 15 64 5 19 12 52 15 73 5 31 12 41 38 52 44
18 47 23 31 53 -8 15 -14 45 -14 68 0 27 -8 53 -24 76 -13 19 -26 50 -30 69
-9 47 -32 77 -48 61 -12 -12 13 -93 38 -123 8 -8 14 -24 14 -35 0 -11 4 -24 9
-30 16 -17 20 -81 7 -100 -16 -21 -46 -12 -46 13 0 10 -7 27 -15 37 -8 11 -15
36 -15 57 0 20 -7 50 -15 65 -8 16 -15 46 -15 66 0 20 -4 40 -10 43 -5 3 -10
26 -10 51 0 25 -7 59 -16 75 -17 34 -33 106 -40 184 -3 28 -12 64 -20 82 -8
17 -14 35 -14 41 0 5 -8 27 -17 48 -23 51 -24 61 -29 247 -3 106 -1 163 6 172
22 26 35 143 34 295 -2 265 -6 290 -55 360 -9 14 -29 63 -44 110 -15 47 -37
108 -48 135 -28 71 -47 141 -56 210 -5 33 -13 74 -19 90 -6 17 -15 68 -21 115
-13 116 -21 161 -27 172 -20 31 -25 597 -6 621 5 6 11 62 11 122 1 61 6 126
11 145 5 19 14 81 20 138 6 61 18 119 30 145 34 72 50 128 50 171 0 22 7 50
15 60 8 11 15 35 15 53 0 18 5 42 12 52 10 16 7 29 -15 73 -25 50 -27 61 -27
191 0 131 -16 243 -41 289 -5 10 -9 37 -9 60 -1 24 -9 72 -19 108 -15 53 -22
66 -41 68 -21 3 -22 1 -17 -35 13 -91 29 -169 37 -188 12 -27 20 -79 25 -150
2 -33 7 -95 10 -138 4 -45 2 -83 -3 -90 -22 -27 -36 -102 -48 -272 -16 -217
-23 -256 -57 -317 -15 -26 -27 -54 -27 -63 0 -9 -24 -49 -54 -88 -30 -40 -91
-146 -137 -237 -45 -91 -93 -177 -107 -192 -24 -26 -24 -30 -26 -227 -2 -138
-6 -205 -14 -213 -7 -7 -12 -28 -12 -48 0 -34 -32 -100 -47 -100 -5 0 -15 15
-23 32 -21 44 -32 44 -58 -2 -26 -46 -42 -44 -42 5 0 19 -5 37 -12 41 -19 12
-38 -27 -38 -77 0 -36 -6 -55 -25 -77 -26 -31 -33 -70 -14 -89 16 -16 7 -84
-14 -97 -15 -9 -21 -6 -37 14 -29 37 -25 89 16 234 20 68 18 96 -5 96 -22 0
-31 -35 -31 -125 0 -53 -3 -63 -19 -68 -17 -4 -19 4 -25 102 -9 139 -9 160 -1
197 5 24 3 33 -9 37 -11 5 -22 -5 -37 -35 -24 -47 -53 -74 -88 -83 -52 -13
-50 24 5 100 12 17 29 46 37 65 16 40 200 230 221 230 8 0 17 13 21 30 4 16
11 32 16 35 5 4 9 16 9 28 0 12 7 35 15 51 18 35 62 190 63 225 1 13 12 56 26
95 15 43 27 106 31 161 6 82 36 258 52 302 3 10 16 41 28 68 12 28 26 61 30
75 4 14 18 36 30 50 50 53 70 152 54 265 -5 39 -14 153 -20 255 -5 102 -12
215 -15 253 -6 71 10 237 26 265 5 9 11 29 14 43 3 14 17 41 31 60 13 19 40
57 59 85 53 79 97 101 129 66 9 -10 37 -28 62 -41 43 -21 45 -24 45 -66 0 -40
5 -49 70 -115 39 -39 70 -76 70 -81 0 -5 11 -26 23 -47 13 -20 32 -64 42 -97
21 -68 35 -89 78 -110 51 -26 93 -20 120 18 28 38 52 100 67 177 6 30 16 75
21 100 21 97 21 97 5 103 -12 5 -19 -1 -26 -21 -6 -15 -15 -35 -20 -44 -6 -10
-10 -29 -10 -42 0 -36 -31 -180 -41 -190 -5 -6 -9 -18 -9 -27 0 -25 -27 -49
-55 -49 -27 0 -80 58 -90 99 -13 58 -73 155 -132 217 -57 59 -63 70 -63 107 0
53 8 64 45 69 24 2 31 8 33 29 4 36 -22 44 -63 19 -18 -11 -50 -20 -73 -20
-63 0 -96 46 -49 67 12 6 37 23 55 38 18 15 100 61 181 101 129 64 154 80 192
126 l44 52 -2 90 c-1 54 -8 109 -17 135 -9 25 -16 75 -16 115 0 68 -2 74 -33
104 -18 18 -40 32 -49 32 -18 0 -58 70 -58 102 0 12 8 30 17 40 13 15 17 41
19 121 2 104 27 194 67 243 9 10 28 34 44 53 17 21 57 48 102 69 69 32 80 34
151 30 200 -12 358 -165 380 -366 5 -46 6 -90 3 -98 -3 -9 6 -27 22 -44 23
-24 27 -35 22 -66 -7 -44 -32 -74 -61 -74 -53 -1 -67 -48 -73 -256 -5 -157 -4
-173 15 -210 27 -53 105 -125 167 -153 28 -13 62 -30 77 -37 14 -8 34 -14 45
-14 10 0 34 -10 53 -23 19 -13 50 -29 68 -36 17 -8 32 -17 32 -22 0 -5 11 -14
24 -21 29 -13 41 -37 26 -52 -14 -14 -13 -36 3 -36 7 0 26 14 42 30 32 33 67
39 87 14 7 -9 25 -28 41 -42 15 -15 27 -33 27 -40 0 -8 6 -26 13 -40 43 -86
67 -139 67 -149 0 -6 6 -24 14 -40 21 -42 34 -131 25 -172 -5 -20 -8 -186 -8
-369 -1 -358 1 -370 55 -432 31 -36 73 -115 83 -158 5 -20 17 -62 26 -92 9
-30 20 -100 25 -155 7 -93 19 -147 40 -186 5 -9 12 -44 16 -78 4 -34 11 -64
15 -67 5 -3 9 -34 9 -70 0 -54 5 -75 30 -119 17 -30 30 -64 30 -77 0 -13 7
-32 15 -42 8 -11 15 -30 15 -41 0 -15 41 -64 120 -144 81 -82 120 -129 120
-144 0 -12 11 -35 25 -52 l24 -30 1 33 c0 44 -49 118 -144 215 -42 43 -76 85
-76 93 0 8 -3 14 -8 14 -10 0 -36 52 -57 115 -10 28 -23 64 -30 80 -24 55 -35
101 -35 140 0 35 -17 113 -40 191 -6 16 -14 85 -20 151 -5 70 -18 144 -29 175
-10 29 -22 66 -26 83 -10 45 -55 134 -98 193 l-38 53 2 422 2 422 -26 76 c-15
42 -40 103 -57 137 -16 33 -30 64 -30 68 0 18 -54 75 -102 106 -41 28 -64 36
-101 36 -32 1 -58 9 -80 24 -44 32 -68 46 -94 57 -11 6 -24 15 -28 20 -3 6
-15 11 -25 11 -18 0 -49 12 -130 49 -44 20 -112 86 -135 131 -14 27 -17 56
-16 137 1 57 6 126 11 154 6 29 10 53 10 55 0 1 20 25 44 53 31 37 51 75 71
136 l28 85 -26 24 c-15 14 -29 40 -33 62 -20 115 -41 173 -88 246 -35 56 -120
128 -149 128 -9 0 -19 5 -22 10 -11 17 -88 47 -135 53 -25 2 -79 1 -121 -4z
m-496 -2874 c-1 -38 -9 -95 -18 -125 -9 -30 -21 -76 -27 -102 -20 -91 -29 -51
-23 100 7 165 17 205 49 200 19 -3 21 -9 19 -73z m-613 -1644 c0 -38 -14 -54
-39 -46 -26 8 -29 56 -5 80 21 21 44 3 44 -34z m2709 13 c25 -41 27 -86 6
-104 -23 -19 -41 2 -49 56 -5 38 5 84 18 84 2 0 13 -16 25 -36z m-85 -18 c21
-39 15 -69 -11 -64 -28 5 -43 98 -16 98 5 0 17 -16 27 -34z m-2714 -49 c0 -62
-11 -87 -37 -87 -21 0 -18 119 5 136 28 22 32 17 32 -49z m1379 -1148 c15 -34
16 -49 7 -139 -9 -94 -19 -132 -39 -144 -21 -13 -37 5 -37 45 0 14 -3 28 -6
32 -19 19 -3 188 21 227 12 20 40 9 54 -21z m-8 -844 c3 -77 11 -153 17 -170
12 -32 32 -204 32 -271 0 -22 -6 -46 -12 -53 -10 -9 -13 -63 -13 -199 0 -125
-4 -194 -12 -207 -6 -11 -14 -28 -17 -38 -9 -30 -30 -14 -45 34 -7 24 -17 51
-22 61 -5 10 0 43 11 85 26 90 26 186 1 222 -22 31 -51 144 -51 199 0 20 7 55
15 77 8 22 14 57 15 77 0 20 4 39 9 43 12 7 13 165 1 180 -6 7 -5 24 2 46 6
19 13 40 14 47 2 8 14 12 26 10 22 -3 23 -7 29 -143z m319 -301 c0 -8 -4 -12
-10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m55 -914 c0 -10
-12 -16 -38 -18 -27 -2 -42 -10 -54 -28 -11 -18 -23 -24 -41 -22 -35 4 -38 21
-10 51 33 35 143 48 143 17z m-491 -50 c26 -25 -34 -67 -79 -56 -21 5 -26 12
-23 33 2 19 11 29 28 34 27 7 59 2 74 -11z m-136 -12 c4 -19 -33 -42 -54 -34
-17 7 -19 42 -1 50 23 9 52 1 55 -16z`],["d",`M5580 7701 c0 -25 30 -36 48 -17 19 18 7 36 -24 36 -17 0 -24 -6 -24
-19z`],["d",`M5673 6838 c-30 -47 -34 -63 -22 -85 16 -30 19 -29 54 7 22 23 26 33
17 42 -7 7 -12 20 -12 30 0 21 -25 24 -37 6z`],["d",`M5320 6622 c-38 -18 -101 -78 -92 -87 11 -11 30 -4 62 25 46 41 89
41 124 -1 18 -21 26 -42 26 -69 0 -45 23 -70 48 -53 10 6 15 17 13 25 -2 7 -6
24 -10 38 -10 40 -63 107 -99 124 -18 9 -34 16 -35 16 -1 -1 -18 -8 -37 -18z`],["d",`M5966 6618 c-14 -13 -39 -49 -55 -81 -27 -50 -31 -68 -31 -134 0 -73
5 -98 36 -186 8 -20 14 -54 14 -74 0 -57 47 -169 80 -193 59 -42 130 -10 170
77 12 27 36 77 53 113 16 36 49 85 72 110 83 89 98 140 66 223 -17 45 -31 22
-31 -52 0 -66 -1 -69 -45 -117 -27 -29 -67 -92 -96 -154 -29 -58 -59 -120 -68
-137 -9 -20 -24 -33 -36 -34 -37 -2 -60 2 -71 14 -30 32 -89 273 -80 327 4 23
0 40 -10 51 -12 13 -14 26 -8 51 5 18 7 47 6 63 -2 24 7 41 43 79 l45 50 33
-17 c17 -9 39 -21 47 -26 8 -5 22 -12 30 -16 51 -20 89 -52 101 -83 9 -24 10
-24 30 -6 29 26 21 58 -15 62 -16 2 -43 13 -60 25 -126 89 -176 104 -220 65z`],["d",`M5680 6555 c-10 -12 -10 -15 4 -15 9 0 16 7 16 15 0 8 -2 15 -4 15
-2 0 -9 -7 -16 -15z`],["d",`M5230 6457 c0 -16 41 -37 71 -37 12 0 23 -10 29 -25 5 -13 23 -31 40
-40 27 -14 31 -14 36 0 8 21 -11 42 -73 82 -54 34 -103 44 -103 20z`],["d",`M5960 6438 c0 -6 10 -18 23 -29 16 -14 38 -18 89 -19 64 0 98 14 61
26 -10 3 -26 10 -36 15 -24 13 -137 18 -137 7z`],["d",`M5186 6405 c-21 -21 -20 -32 3 -40 20 -6 51 3 51 15 0 4 -8 15 -19
24 -17 16 -20 16 -35 1z`],["d",`M5690 6335 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
-7 -10 -15z`],["d",`M5660 6200 c0 -16 5 -21 23 -18 12 2 22 10 22 18 0 8 -10 16 -22 18
-18 3 -23 -2 -23 -18z`],["d","M5682 6071 c2 -7 7 -12 11 -12 12 1 9 15 -3 20 -7 2 -11 -2 -8 -8z"],["d",`M5700 5940 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z`],["d",`M5677 5822 c-21 -23 -13 -32 25 -32 30 0 37 17 16 38 -16 16 -22 15
-41 -6z`],["d",`M6303 5824 c-9 -24 18 -36 39 -17 10 9 15 20 12 24 -9 15 -44 10 -51
-7z`],["d",`M5696 5715 c-12 -12 -14 -28 -9 -63 7 -55 7 -56 28 -49 11 5 15 21
15 61 0 60 -10 75 -34 51z`],["d",`M5690 5530 c-18 -11 -4 -40 20 -40 13 0 20 7 20 19 0 22 -21 33 -40
21z`],["d",`M5660 5400 c0 -11 2 -20 4 -20 2 0 6 9 9 20 3 11 1 20 -4 20 -5 0 -9
-9 -9 -20z`],["d",`M5735 5390 c-4 -6 -17 -15 -29 -20 -20 -8 -19 -9 5 -9 16 -1 29 6 33
15 8 20 1 30 -9 14z`],["d","M5710 5270 c0 -19 3 -21 12 -12 9 9 9 15 0 24 -9 9 -12 7 -12 -12z"],["d",`M5660 5171 c0 -12 57 -41 64 -33 3 3 6 14 6 24 0 14 -8 18 -35 18
-19 0 -35 -4 -35 -9z`],["d",`M6586 5139 c-31 -25 -38 -83 -9 -77 10 2 23 14 29 26 6 13 17 29 23
35 29 29 -9 43 -43 16z`],["d",`M6666 5122 c-9 -15 6 -52 20 -52 20 0 29 27 14 45 -14 17 -26 19 -34
7z`],["d",`M4752 5084 c-22 -15 -30 -58 -13 -68 4 -3 16 3 26 14 22 24 61 26 73
4 10 -18 43 -16 49 3 2 6 -9 23 -24 37 -32 30 -77 34 -111 10z`],["d","M5677 5064 c-7 -7 17 -34 31 -34 12 0 23 26 15 34 -8 8 -38 8 -46 0z"],["d",`M5168 5031 c-29 -26 -31 -30 -15 -36 11 -5 25 -1 36 9 22 20 89 21
116 2 11 -7 32 -16 47 -20 15 -3 48 -24 73 -46 25 -22 50 -40 55 -40 11 0 70
-87 70 -104 0 -6 5 -17 11 -23 9 -9 9 -20 0 -44 -6 -17 -11 -43 -11 -56 0 -13
-10 -37 -21 -53 -24 -31 -20 -60 8 -60 38 1 100 157 73 184 -5 5 -10 22 -10
36 0 14 -11 42 -25 62 -14 20 -25 41 -25 46 0 5 -27 28 -61 52 -33 23 -68 50
-77 59 -27 28 -82 48 -149 55 -59 7 -63 5 -95 -23z`],["d","M5681 4972 c-8 -16 -7 -21 5 -26 18 -7 31 21 16 36 -7 7 -13 4 -21 -10z"],["d","M5660 4826 c0 -11 9 -16 26 -16 31 0 28 23 -4 28 -15 2 -22 -2 -22 -12z"],[1,"ponto",3,"left","top"],[1,"ponto",3,"auxclick","contextmenu"]],template:function(e,n){if(e&1){let i=C();p(0,"div",1,0),b("click",function(m){return f(i),_(n.adicionarPonto(m))}),p(2,"div",2),at(),p(3,"svg",3)(4,"g",4),d(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12)(13,"path",13)(14,"path",14)(15,"path",15)(16,"path",16)(17,"path",17)(18,"path",18)(19,"path",19)(20,"path",20)(21,"path",21)(22,"path",22)(23,"path",23)(24,"path",24)(25,"path",25)(26,"path",26)(27,"path",27)(28,"path",28)(29,"path",29)(30,"path",30)(31,"path",31)(32,"path",32)(33,"path",33)(34,"path",34)(35,"path",35)(36,"path",36)(37,"path",37)(38,"path",38)(39,"path",39)(40,"path",40)(41,"path",41)(42,"path",42)(43,"path",43)(44,"path",44)(45,"path",45)(46,"path",46)(47,"path",47)(48,"path",48)(49,"path",49)(50,"path",50)(51,"path",51)(52,"path",52)(53,"path",53)(54,"path",54)(55,"path",55),s()()(),ae(56,Yi,1,4,"div",56,Wi),s()}e&2&&(a(56),le(n.pontos()))},styles:[".corpo-dor[_ngcontent-%COMP%]{position:relative;height:22rem;aspect-ratio:748/810;display:flex;justify-content:center;align-items:center;color:var(--p-text-color)}.corpo-dor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;fill:currentColor}.corpo-dor[_ngcontent-%COMP%]   .corpo-dor-img[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{width:100%;height:100%}.corpo-dor[_ngcontent-%COMP%]   .ponto[_ngcontent-%COMP%]{position:absolute;width:.75rem;height:.75rem;background-color:red;border-radius:50%;transform:translate(-50%,-50%);cursor:pointer;border:2px solid currentColor;box-shadow:0 0 5px #000}"],changeDetection:0})};var Xi=["printElement"],Ji=()=>["M","F"],eo=()=>["Cl\xEDnico","Ortop.","Pr\xF3pria","Outra"],to=()=>["melhorando","est\xE1vel","piorando"],no=()=>["ou sem raz\xE3o aparente"],O=()=>["sim","n\xE3o"],io=()=>["pesco\xE7o","bra\xE7o","antebra\xE7o","cabe\xE7a"],oo=()=>["lombar","coxa","perna"],ao=()=>["melhor","pior","nenhum efeito"],lo=()=>["prono","supino","lado D","lado E"],ro=()=>["inchado","fisgando","estalando","travando","falseando","cedendo"],so=()=>["inchado","fisgando","estalando","travando","deslocando"],po=()=>["boa","regular","ruim"],co=()=>["nenhuma","antiinflamat\xF3rios","analg\xE9sicos","ester\xF3ides","anticoagulantes","outros"],mo=()=>["agudo","subagudo","cr\xF4nico","trauma","in\xEDcio insidioso"],Je=()=>["normal","anormal"],uo=()=>["Vertigem","zumbido","n\xE1usea","vis\xE3o","fala"];function ho(t,o){if(t&1&&(p(0,"h1"),v(1),s()),t&2){let e=o.$implicit;a(),$(e.label)}}function fo(t,o){t&1&&(p(0,"div",13),d(1,"campo",49),s())}function _o(t,o){t&1&&(p(0,"div",13),d(1,"campo",50),s())}function go(t,o){t&1&&(p(0,"div",13),d(1,"campo",51),s(),p(2,"div",13),d(3,"campo",52),s())}function yo(t,o){t&1&&(p(0,"div",13),d(1,"campo",53),s())}function bo(t,o){t&1&&(p(0,"div",13),d(1,"campo",54),s())}function Co(t,o){t&1&&(p(0,"div",13),d(1,"campo",55),s())}function vo(t,o){t&1&&(p(0,"div",13),d(1,"campo",56),s())}function xo(t,o){t&1&&(p(0,"div",13),d(1,"campo",57),s())}function wo(t,o){t&1&&(p(0,"div",13),d(1,"campo",58),s())}function Io(t,o){if(t&1&&(dt(0),p(1,"div",13),d(2,"campo",59)(3,"campo",60),s(),p(4,"div",13),d(5,"campo",61)(6,"campo",62),s()),t&2){let e=c().isCervical()?h(3,io):h(4,oo);a(2),r("options",e),a(3),r("options",e),a(),r("options",e)}}function Oo(t,o){t&1&&(p(0,"div",13),d(1,"campo",63)(2,"campo",64),s(),p(3,"div",13),d(4,"campo",65)(5,"campo",66),s(),p(6,"div",13),d(7,"campo",67)(8,"campo",68),s()),t&2&&(a(2),r("options",h(2,O)),a(3),r("options",h(3,O)))}function So(t,o){t&1&&d(0,"campo",38),t&2&&r("options",h(1,ao))}function To(t,o){t&1&&d(0,"campo",40),t&2&&r("options",h(1,lo))}function Eo(t,o){t&1&&d(0,"campo",41)}function Fo(t,o){t&1&&d(0,"campo",42)}function Mo(t,o){t&1&&(p(0,"div",13),d(1,"campo",69),s())}function Vo(t,o){t&1&&(p(0,"div",13),d(1,"campo",73),s()),t&2&&(a(),r("options",h(1,ro)))}function Do(t,o){t&1&&(p(0,"div",13),d(1,"campo",73)(2,"campo",74),s()),t&2&&(a(),r("options",h(1,so)))}function ko(t,o){if(t&1&&(p(0,"div",13),d(1,"campo",70)(2,"campo",71),s(),u(3,Vo,2,2,"div",13)(4,Do,3,2,"div",13),p(5,"div",13),d(6,"campo",72),s()),t&2){let e=c();a(),r("options",h(4,O)),a(),r("options",e.locaisDorMM()),a(),g(e.isMMII()?3:-1),a(),g(e.isMMSS()?4:-1)}}function Po(t,o){t&1&&d(0,"campo",89)(1,"campo",90),t&2&&r("options",h(1,O))}function zo(t,o){t&1&&(p(0,"div",13),d(1,"campo",91)(2,"campo",92)(3,"campo",89)(4,"campo",90),s()),t&2&&(a(),r("options",h(2,O)),a(2),r("options",h(3,O)))}function Lo(t,o){if(t&1&&(p(0,"div",13),d(1,"campo",75)(2,"campo",76),s(),p(3,"div",13),d(4,"campo",77)(5,"campo",78),s(),p(6,"div",13),d(7,"campo",79)(8,"campo",80),u(9,Po,2,2),s(),u(10,zo,5,4,"div",13),p(11,"div",13),d(12,"campo",81)(13,"campo",82)(14,"campo",83)(15,"campo",84),s(),p(16,"div",13),d(17,"campo",85)(18,"campo",86),s(),p(19,"div",13),d(20,"campo",87)(21,"campo",88),s()),t&2){let e=c();a(),r("options",h(9,po)),a(3),r("options",h(10,co)),a(3),r("options",h(11,O)),a(2),g(e.isMMII()?9:-1),a(),g(e.isMMSS()?10:-1),a(2),r("options",h(12,O)),a(2),r("options",h(13,O)),a(3),r("options",h(14,mo)),a(3),r("options",e.locaisDorMM())}}function Ao(t,o){t&1&&(p(0,"div",13),d(1,"campo",100)(2,"campo",101)(3,"campo",102),s()),t&2&&(a(),r("options",h(3,O)),a(),r("options",h(4,Je)),a(),r("options",h(5,Je)))}function $o(t,o){t&1&&(p(0,"div",13),d(1,"campo",103)(2,"campo",104),s()),t&2&&(a(),r("options",h(2,uo)),a(),r("options",h(3,Je)))}function Ro(t,o){if(t&1&&(p(0,"div",10)(1,"h2"),v(2,"PERGUNTAS ESPEC\xCDFICAS"),s(),u(3,Ao,4,6,"div",13)(4,$o,3,4,"div",13),p(5,"div",13),d(6,"campo",93),s(),p(7,"div",13),d(8,"campo",94),s(),p(9,"div",13),d(10,"campo",91)(11,"campo",92),s(),p(12,"div",13),d(13,"campo",95)(14,"campo",96)(15,"campo",83)(16,"campo",84),s(),p(17,"div",13),d(18,"campo",97)(19,"campo",98)(20,"campo",79)(21,"campo",80),s(),p(22,"div",13),d(23,"campo",99),s()()),t&2){let e=c();a(3),g(e.isLombar()?3:-1),a(),g(e.isCervical()?4:-1),a(6),r("options",h(7,O)),a(3),r("options",h(8,O)),a(2),r("options",h(9,O)),a(3),r("options",h(10,O)),a(2),r("options",h(11,O))}}var Oe=class t{fb=S(Kt);tipoFichaOptions=rn;paciente=D.required();fichaEditar=D.required();onSalvar=U();onCancel=U();printElement=ee("printElement",{read:Fe});tipoFicha=ut(()=>this.fichaEditar()?.tipo||"LOMBAR");form=I(()=>{let o=this.paciente(),e=B(K({data:new Date},this.fichaEditar()?.form??{}),{nome:o.nome,telefone:o.celular,dataNasc:o.nascimento,idade:o.nascimento?We(o.nascimento):null}),n=Object.fromEntries(Object.entries(e).map(([l,m])=>[l,[m]])),i=e.corpoSintomas??[];return this.fb.group(B(K({},n),{corpoSintomas:[i]}))});formValue=ve(this.form);isLombar=I(()=>this.tipoFicha()=="LOMBAR");isCervical=I(()=>this.tipoFicha()=="CERVICAL");isMMII=I(()=>this.tipoFicha()=="EXTREMIDADES_MMII");isMMSS=I(()=>this.tipoFicha()=="EXTREMIDADES_MMSS");piorMelhorOptions1=I(()=>this.isCervical()?["curvando","sentado","virando","deitado","levantando"]:this.isMMII()?["curvar","sentado","levantando","1\xBAs passos","em p\xE9","andar","escada","agachar","ajoelhar"]:this.isMMSS()?["curvar","sentado","virar o pesco\xE7o","vestir","alcan\xE7ar","pegar"]:["curvando","sentado","levantando","em p\xE9","andando","deitado"]);piorMelhorOptions2=I(()=>this.isMMII()||this.isMMSS()?["manh\xE3","durante o dia","final do dia","parado","movimentando","deitado prono","deitado supino","deitado lado D","deitado lado E"]:["manh\xE3","durante o dia","final do dia","parado","movimentando"]);locaisDorMM=I(()=>this.isMMII()?["coluna","quadril","joelho","tornozelo","p\xE9"]:["pesco\xE7o","ombro","cotovelo","punho","m\xE3o"]);refreshIdade(){let o=this.form().get("dataNasc")?.value,e=o?We(o):void 0;this.form().get("idade")?.setValue(e)}onSubmit(){this.onSalvar.emit({tipo:this.tipoFicha(),form:this.formValue()})}onImprimir(){let o=this.printElement()?.nativeElement;if(!o)return;let e=o.cloneNode(!0),n=document.createElement("div");n.classList.add("print-wrapper"),n.appendChild(e),document.body.appendChild(n);let i=document.createElement("style");i.textContent=`
    @media print {
      body * {
        visibility: hidden !important;
      }

      .print-wrapper,
      .print-wrapper * {
        visibility: visible !important;
      }

      .print-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 9999;
        background: white !important;
        padding: 16px;
      }
    }
  `,document.head.appendChild(i),setTimeout(()=>{window.print(),document.body.removeChild(n),document.head.removeChild(i)},100)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["ficha"]],viewQuery:function(e,n){e&1&&re(n.printElement,Xi,5,Fe),e&2&&se()},inputs:{paciente:[1,"paciente"],fichaEditar:[1,"fichaEditar"]},outputs:{onSalvar:"onSalvar",onCancel:"onCancel"},decls:96,vars:41,consts:[["printElement",""],["selectedItem",""],["indicacao",""],["col","6"],["variant","on"],["pInputText","","id","paciente","fluid","","disabled","",3,"ngModel"],["for","paciente"],["inputId","tipoFicha","fluid","",3,"ngModelChange","options","ngModel","disabled"],["for","tipoFicha"],[1,"ficha-form",3,"ngSubmit","formGroup"],[1,"section"],[2,"display","flex","flex-direction","row","justify-content","flex-start","align-items","flex-start","gap","1rem"],[2,"flex","1","display","flex","flex-direction","column","justify-content","flex-start","align-items","flex-start"],[1,"row"],["label","Data","name","data","type","date"],["label","Sexo","name","sexo","type","radio",3,"options"],["label","Nome","name","nome","type","text","disabled",""],["label","Endereco","name","endereco","type","text"],["label","Telefone","name","telefone","type","text"],["label","Data nasc.","name","dataNasc","type","date",3,"onChange"],["label","Idade","name","idade","type","number","disabled",""],["label","Indica\xE7\xE3o","name","indicacao","type","radio",1,"flex-0",3,"options"],["name","indicacaoOutra","type","text",3,"hidden"],["label","Incapacidade funcional / epis\xF3dio atual","name","incapacidadeFuncionalEpisodioAtual","type","text"],["formControlName","corpoSintomas"],["label","Sintomas atuais","name","sintomasAtuais","type","text"],["label","Presentes desde","name","presentesDesde","type","text"],["name","presentesDesdeOptions","type","radio",1,"flex-0",3,"options"],["label","Come\xE7ou como resultado de","name","comecouComoResultadoDe","type","text"],["name","comecouComoResultadoDeOptions","type","checkbox",1,"flex-0",3,"options"],[1,"ficha-label",2,"width","4ch"],["name","pior","type","checkbox","fluid","",3,"options"],["name","pior2","type","checkbox","fluid","",3,"options"],["label","outros","name","piorOutros","type","text"],[1,"ficha-label",2,"width","6ch"],["name","melhor","type","checkbox","fluid","",3,"options"],["name","melhor2","type","checkbox","fluid","",3,"options"],["label","outros","name","melhorOutros","type","text"],["label","Uso continuado faz a dor","name","usoContinuadoFazADor","type","radio",3,"options"],["label","Dist\xFArbio do sono?","name","disturbioDoSono","type","checkbox",3,"options"],["label","Posi\xE7\xE3o de dormir","name","posicaoDeDormir","type","checkbox",3,"options"],["label","Superf\xEDcie","name","superficie","type","text"],["label","Travesseiros","name","travesseiros","type","text"],["label","Tratamentos anteriores","name","tratamentosAnteriores","type","text"],["stickyOverlay","",1,"ficha-form-actions"],["label","Voltar",3,"click"],[1,"flex","justify-start","align-center","gap-2"],["label","Imprimir","severity","help",3,"click"],["type","submit","label","Salvar","severity","success"],["label","Exig\xEAncias de trabalho","name","exigenciasDeTrabalho","type","text"],["label","Esfor\xE7os no trabalho","name","esforcosNoTrabalho","type","text"],["label","Trabalho - stresses mec\xE2nicos","name","trabalhoStressesMecanicos","type","text"],["label","Lazer - stresses mec\xE2nicos","name","lazerStressesMecanicos","type","text"],["label","Atividades de lazer","name","atividadesDeLazer","type","text"],["label","Pontua\xE7\xE3o question\xE1rio de incapacidade","name","pontuacaoQuestionarioDeIncapacidade","type","text"],["label","Resultado pontua\xE7\xE3o triagem","name","resultadoPontuacaoTriagem","type","text"],["label","Pontua\xE7\xE3o Incapacidade funcional","name","pontuacaoIncapacidadeFuncional","type","text"],["label","NPRS (0-10)","name","nprs","type","number"],["label","Pontua\xE7\xE3o EVA (0-10)","name","pontuacaoEVA","type","number"],["label","Sintomas no in\xEDcio","name","sintomasNoInicio","type","checkbox",1,"flex-0",3,"options"],["name","sintomasNoInicioOutro","type","text"],["label","Sintomas constantes","name","sintomasConstantes","type","checkbox",3,"options"],["label","Sintomas intermitentes","name","sintomasIntermitentes","type","checkbox",1,"flex-0",3,"options"],["label","Sintomas no in\xEDcio","name","sintomasNoInicio","type","text"],["label","Parestesia","name","parestesia","type","radio",1,"flex-0",3,"options"],["label","Hist\xF3ria da coluna","name","historiaDaColuna","type","text"],["label","Tossir / espirrar","name","tossirEspirrar","type","radio",1,"flex-0",3,"options"],["label","Sintomas constantes","name","sintomasConstantes","type","text"],["label","Sintomas intermitentes","name","sintomasIntermitentes","type","text"],["label","Hist\xF3ria pr\xE9via da coluna","name","historiaPreviaDaColuna","type","text"],["label","Dor em repouso","name","dorEmRepouso","type","radio",3,"options"],["label","Local","name","local","type","checkbox",1,"flex-0",3,"options"],["label","Epis\xF3dios anteriores","name","episodiosAnteriores","type","text"],["label","Outras perguntas","name","outrasPerguntas","type","checkbox","fluid","",3,"options"],["name","outrasPerguntasText","type","text"],["label","Sa\xFAde geral","name","saudeGeral","type","radio",1,"flex-0",3,"options"],["name","saudeGeralText","type","text"],["label","Medica\xE7\xE3o","name","medicacao","type","radio",1,"flex-0",3,"options"],["name","medicacaoText","type","text"],["label","Imagens","name","imagens","type","radio",1,"flex-0",3,"options"],["name","imagensText","type","text"],["label","Acidentes","name","acidentes","type","radio",1,"flex-0",3,"options"],["name","acidentesText","type","text"],["label","Perda inexplicada de peso","name","perdaInexplicadaDePeso","type","radio",1,"flex-0",3,"options"],["name","perdaInexplicadaDePesoText","type","text"],["label","Resumo","name","resumo","type","radio","fluid","",3,"options"],["name","resumoText","type","text"],["label","Locais para exame f\xEDsico","name","locaisParaExameFisico","type","radio","fluid","",3,"options"],["name","locaisParaExameFisicoText","type","text"],["label","Dor durante a noite","name","dorDuranteANoite","type","radio",1,"flex-0",3,"options"],["name","dorDuranteANoiteText","type","text"],["label","Cir\xFAgia recente ou de grande porte","name","cirugiaRecenteOuDeGrandePorte","type","radio",1,"flex-0",3,"options"],["name","cirugiaRecenteOuDeGrandePorteText","type","text"],["label","Medica\xE7\xE3o","name","medicacao","type","text"],["label","Sa\xFAde geral / Comorbidades","name","saudeGeralComorbidades","type","text"],["label","Hist\xF3ria de c\xE2ncer","name","historiaDeCancer","type","radio",1,"flex-0",3,"options"],["name","historiaDeCancerText","type","text"],["label","Hist\xF3ria de trauma","name","historiaDeTrauma","type","radio",1,"flex-0",3,"options"],["name","historiaDeTraumaText","type","text"],["label","Objetivos / expectativas / cren\xE7as do paciente","name","objetivosExpectativasCrencasDoPaciente","type","text"],["label","Tossir / espirrar / esfor\xE7o","name","tossirEspirrarEsforco","type","radio",3,"options"],["label","Bexiga / Intestino","name","bexigaIntestino","type","radio",3,"options"],["label","Modo de andar","name","modoDeAndar","type","radio",1,"flex-0",3,"options"],["name","vertigemZumbidoNauseaVisaoFala","type","checkbox",3,"options"],["label","Modo de andar / Membros superiores","name","modoDeAndarMembrosSuperiores","type","radio",1,"flex-0",3,"options"]],template:function(e,n){if(e&1){let i=C();p(0,"app-row",null,0)(2,"app-col",3)(3,"p-float-label",4),d(4,"input",5),p(5,"label",6),v(6,"Paciente"),s()()(),p(7,"app-col",3)(8,"p-float-label",4)(9,"p-select",7),de("ngModelChange",function(m){return f(i),ce(n.tipoFicha,m)||(n.tipoFicha=m),_(m)}),u(10,ho,2,1,"ng-template",null,1,R),s(),p(12,"label",8),v(13,"Tipo"),s()()(),p(14,"app-col")(15,"form",9),b("ngSubmit",function(){return f(i),_(n.onSubmit())}),p(16,"div",10)(17,"div",11)(18,"div",12)(19,"div",13),d(20,"campo",14)(21,"campo",15),s(),p(22,"div",13),d(23,"campo",16),s(),p(24,"div",13),d(25,"campo",17),s(),p(26,"div",13),d(27,"campo",18),p(28,"campo",19),b("onChange",function(){return f(i),_(n.refreshIdade())}),s(),d(29,"campo",20),s(),p(30,"div",13),d(31,"campo",21,2)(33,"campo",22),s(),u(34,fo,2,0,"div",13)(35,_o,2,0,"div",13)(36,go,4,0)(37,yo,2,0,"div",13),p(38,"div",13),d(39,"campo",23),s(),u(40,bo,2,0,"div",13)(41,Co,2,0,"div",13)(42,vo,2,0,"div",13)(43,xo,2,0,"div",13)(44,wo,2,0,"div",13),s(),d(45,"corpo-sintomas",24),s()(),p(46,"div",10)(47,"h2"),v(48,"HIST\xD3RIA"),s(),p(49,"div",13),d(50,"campo",25),s(),p(51,"div",13),d(52,"campo",26)(53,"campo",27),s(),p(54,"div",13),d(55,"campo",28)(56,"campo",29),s(),u(57,Io,7,5)(58,Oo,9,4),p(59,"div",13)(60,"span",30),v(61,"Pior"),s(),d(62,"campo",31),s(),p(63,"div",13),d(64,"span",30)(65,"campo",32),s(),p(66,"div",13),d(67,"span",30)(68,"campo",33),s(),p(69,"div",13)(70,"span",34),v(71,"Melhor"),s(),d(72,"campo",35),s(),p(73,"div",13),d(74,"span",34)(75,"campo",36),s(),p(76,"div",13),d(77,"span",34)(78,"campo",37),s(),p(79,"div",13),u(80,So,1,2,"campo",38),d(81,"campo",39),u(82,To,1,2,"campo",40)(83,Eo,1,0,"campo",41)(84,Fo,1,0,"campo",42),s(),u(85,Mo,2,0,"div",13)(86,ko,7,5),p(87,"div",13),d(88,"campo",43),s(),u(89,Lo,22,15),s(),u(90,Ro,24,12,"div",10),p(91,"div",44)(92,"p-button",45),b("click",function(){return f(i),_(n.onCancel.emit())}),s(),p(93,"div",46)(94,"p-button",47),b("click",function(){return f(i),_(n.onImprimir())}),s(),d(95,"p-button",48),s()()()()()}if(e&2){let i=N(32);a(4),r("ngModel",n.paciente().nome),a(5),r("options",n.tipoFichaOptions),pe("ngModel",n.tipoFicha),r("disabled",n.fichaEditar()!=null),a(6),r("formGroup",n.form()),a(6),r("options",h(36,Ji)),a(10),r("options",h(37,eo)),a(2),r("hidden",i.value()!="Outra"),a(),g(n.isLombar()?34:-1),a(),g(n.isCervical()?35:-1),a(),g(n.isMMII()||n.isMMSS()?36:-1),a(),g(n.isLombar()||n.isCervical()?37:-1),a(3),g(n.isLombar()?40:-1),a(),g(n.isCervical()?41:-1),a(),g(n.isMMSS()?42:-1),a(),g(n.isLombar()||n.isCervical()?43:-1),a(),g(n.isMMII()||n.isMMSS()?44:-1),a(9),r("options",h(38,to)),a(3),r("options",h(39,no)),a(),g(n.isLombar()||n.isCervical()?57:-1),a(),g(n.isMMII()||n.isMMSS()?58:-1),a(4),r("options",n.piorMelhorOptions1()),a(3),r("options",n.piorMelhorOptions2()),a(7),r("options",n.piorMelhorOptions1()),a(3),r("options",n.piorMelhorOptions2()),a(5),g(n.isMMII()||n.isMMSS()?80:-1),a(),ne("flex-0",n.isMMII()||n.isMMSS()),r("options",h(40,O)),a(),g(n.isLombar()||n.isCervical()?82:-1),a(),g(n.isLombar()?83:-1),a(),g(n.isCervical()?84:-1),a(),g(n.isLombar()||n.isCervical()?85:-1),a(),g(n.isMMII()||n.isMMSS()?86:-1),a(3),g(n.isMMII()||n.isMMSS()?89:-1),a(),g(!n.isMMII()&&!n.isMMSS()?90:-1)}},dependencies:[xe,ye,At,_e,ge,Pt,Nt,Ht,un,Xt,Bt,Lt,on,Ie,Qt,sn,ln,be,an],styles:["h2[_ngcontent-%COMP%]{margin-bottom:.5rem;border-bottom:1px solid currentColor;padding-bottom:.25rem;color:var(--p-text-color);font-weight:600}.section[_ngcontent-%COMP%]{margin-bottom:2rem}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;margin-bottom:1rem;width:100%}.flex-0[_ngcontent-%COMP%]{flex:0}.ficha-form[_ngcontent-%COMP%]{position:relative}.ficha-form[_ngcontent-%COMP%]   .ficha-form-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}"],changeDetection:0})};function No(t,o){t&1&&(p(0,"div",0),d(1,"p-progress-spinner"),s())}function Ho(t,o){if(t&1){let e=C();p(0,"ficha",2),b("onSalvar",function(i){f(e);let l=c();return _(l.onSalvar(i))})("onCancel",function(){f(e);let i=c();return _(i.onCancel())}),s()}if(t&2){let e=c();r("paciente",e.paciente())("fichaEditar",e.ficha())}}var hn=class t{router=S(gt);activatedRoute=S(_t);pacientesService=S(tn);messageService=S(Ft);loadingInit=w(!1);paciente=w(void 0);ficha=w(void 0);constructor(){this.activatedRoute.paramMap.pipe(Ce()).subscribe(o=>{this.loadingInit.set(!0),this.loadDataFromRoute(o).subscribe(()=>{if(this.paciente()==null){this.onCancel();return}this.ficha()==null&&o.get("fichaId")&&this.router.navigate([".."],{relativeTo:this.activatedRoute,replaceUrl:!0})}).add(()=>this.loadingInit.set(!1))})}onSalvar(o){let e=B(K({},this.ficha()??{}),{tipo:o.tipo,form:o.form}),n=this.paciente().id;this.pacientesService.salvarFicha(n,e).subscribe(i=>{let l=this.ficha()!=null;this.ficha.set(i),this.messageService.add({severity:"success",summary:"Sucesso",detail:"Ficha salva com sucesso!"}),l||this.router.navigate([`/pacientes/edicao/${n}/ficha/${i.id}`],{relativeTo:this.activatedRoute,replaceUrl:!0})})}onCancel(){let o=this.paciente()?.id;this.router.navigate([o?`/pacientes/edicao/${o}`:"/pacientes"],{relativeTo:this.activatedRoute,replaceUrl:!0})}loadDataFromRoute(o){return this.paciente.set(void 0),this.ficha.set(void 0),Te(o.get("pacienteId")).pipe(nt(e=>e?this.pacientesService.loadPaciente(e):Te(void 0)),tt(e=>e||void 0),X(e=>{this.paciente.set(e);let n=o.get("fichaId");if(n){let i=(e?.fichas??[]).find(l=>l.id===n);this.ficha.set(i)}else this.ficha.set(void 0)}))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["ficha-form"]],decls:2,vars:1,consts:[[1,"flex","justify-content-center","align-items-center","w-full","h-full"],[3,"paciente","fichaEditar"],[3,"onSalvar","onCancel","paciente","fichaEditar"]],template:function(e,n){e&1&&u(0,No,2,0,"div",0)(1,Ho,1,2,"ficha",1),e&2&&g(n.loadingInit()?0:1)},dependencies:[Oe,nn],encapsulation:2})};export{hn as FichaFormComponent};
