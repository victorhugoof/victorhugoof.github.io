import{Ca as T,c as _,f as H,i as M,ta as D,za as E}from"./chunk-M6ZP4FB7.js";import{$a as v,Aa as A,Ea as F,L as b,Ma as s,Oa as V,Ob as C,Qa as g,R as p,Ya as h,Za as x,_ as w,_a as O,aa as f,ac as B,bb as R,gb as k,gc as j,hb as $,ib as P,ic as N,jc as X,ka as l,la as L,ma as y,tb as d,ub as u}from"./chunk-UIJQSAH4.js";var K=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.colorOne")};
    }
    40% {
        stroke: ${e("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${e("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.colorFour")};
    }
}
`,Q={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Y=(()=>{class e extends E{name="progressspinner";theme=K;classes=Q;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ve=(()=>{class e extends T{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=p(Y);static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=s({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[C([Y]),g],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(a,o){a&1&&(k(0,"div",0),w(),k(1,"svg",1),P(2,"circle",2),$()()),a&2&&(x("ngStyle",o.style)("ngClass",o.styleClass),h("aria-label",o.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),A(),O("animation-duration",o.animationDuration),h("data-pc-section","root"),A(),h("fill",o.fill)("stroke-width",o.strokeWidth))},dependencies:[M,_,H,D],encapsulation:2,changeDetection:0})}return e})();var Z=["*"],ee=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,te={root:({instance:e,props:n})=>["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]},z=(()=>{class e extends E{name="floatlabel";theme=ee;classes=te;static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Ve=(()=>{class e extends T{_componentStyle=p(z);variant="over";static \u0275fac=(()=>{let t;return function(o){return(t||(t=f(e)))(o||e)}})();static \u0275cmp=s({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(a,o){a&2&&v("p-floatlabel",!0)("p-floatlabel-over",o.variant==="over")("p-floatlabel-on",o.variant==="on")("p-floatlabel-in",o.variant==="in")},inputs:{variant:"variant"},features:[C([z]),g],ngContentSelectors:Z,decls:1,vars:0,template:function(a,o){a&1&&(d(),u(0))},dependencies:[M,D],encapsulation:2,changeDetection:0})}return e})();var ne=["*"],W=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-row"]],hostAttrs:[1,"grid","grid-cols-12","gap-2"],ngContentSelectors:ne,decls:1,vars:0,template:function(t,a){t&1&&(d(),u(0))},encapsulation:2,changeDetection:0})};var ae=["*"],i=e=>{let n=j(e);if(n>=1&&n<=12)return n;throw new Error("Invalid column type: "+e)},U=class e{col=l(12,{transform:i});sm=l(void 0,{transform:i});md=l(void 0,{transform:i});lg=l(void 0,{transform:i});startCol=l(void 0,{transform:i});startSm=l(void 0,{transform:i});startMd=l(void 0,{transform:i});startLg=l(void 0,{transform:i});endCol=l(void 0,{transform:i});endSm=l(void 0,{transform:i});endMd=l(void 0,{transform:i});endLg=l(void 0,{transform:i});classes=N(()=>{let n=[],t=(a,o)=>{o&&n.push(`${a}[${o}]`)};return t("col-span-",this.col()),t("sm:col-span-",this.sm()),t("md:col-span-",this.md()),t("lg:col-span-",this.lg()),t("col-start-",this.startCol()),t("sm:col-start-",this.startSm()),t("md:col-start-",this.startMd()),t("lg:col-start-",this.startLg()),t("col-end-",this.endCol()),t("sm:col-end-",this.endSm()),t("md:col-end-",this.endMd()),t("lg:col-end-",this.endLg()),n.join(" ")});static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-col"]],hostVars:2,hostBindings:function(t,a){t&2&&R(a.classes())},inputs:{col:[1,"col"],sm:[1,"sm"],md:[1,"md"],lg:[1,"lg"],startCol:[1,"startCol"],startSm:[1,"startSm"],startMd:[1,"startMd"],startLg:[1,"startLg"],endCol:[1,"endCol"],endSm:[1,"endSm"],endMd:[1,"endMd"],endLg:[1,"endLg"]},ngContentSelectors:ae,decls:1,vars:0,template:function(t,a){t&1&&(d(),u(0))},styles:[".col-span-3[_ngcontent-%COMP%]{grid-column:span 3/span 3}"],changeDetection:0})};var le={LOMBAR:"AVALIA\xC7\xC3O DA COLUNA LOMBAR",CERVICAL:"AVALIA\xC7\xC3O DA COLUNA CERVICAL",EXTREMIDADES_MMII:"AVALIA\xC7\xC3O DAS EXTREMIDADES - MMII",EXTREMIDADES_MMSS:"AVALIA\xC7\xC3O DAS EXTREMIDADES - MMSS"},I=e=>e&&le[e]||"",je=[{value:"LOMBAR",label:I("LOMBAR")},{value:"CERVICAL",label:I("CERVICAL")},{value:"EXTREMIDADES_MMII",label:I("EXTREMIDADES_MMII")},{value:"EXTREMIDADES_MMSS",label:I("EXTREMIDADES_MMSS")}];var G=class e{el=p(L);renderer=p(F);stickyPosition=l("bottom");overlay=y(!1);observer=y(void 0);sentinel=y(void 0);constructor(){X(()=>{let n=this.stickyPosition(),t=parseFloat(getComputedStyle(document.documentElement).fontSize),a=new IntersectionObserver(([o])=>{let r=o.isIntersecting;this.overlay.set(!r)},{threshold:[0,1],rootMargin:n==="top"?`-${t}px 0px 0px 0px`:`0px 0px -${t}px 0px`});this.overlay.set(!1),this.observer.update(o=>(o?.disconnect(),a)),this.sentinel.update(o=>{o?.remove();let r=this.el.nativeElement,m=this.getValidParent(r)??r.parentElement,c=this.renderer.createElement("div");return this.renderer.addClass(c,"sticky-overlay-sentinel"),n=="top"?this.renderer.insertBefore(m,c,r):this.renderer.insertBefore(m,c,r.nextSibling),a.observe(c),c})})}ngOnDestroy(){this.overlay.set(!1),this.observer.update(n=>{n?.disconnect()}),this.sentinel.update(n=>{n?.remove()})}getValidParent(n){let t=n.parentElement;if(!t||t.tagName==="BODY"||t.tagName==="HTML"||t.tagName==="DOCUMENT")return;let a=getComputedStyle(t),o=a.position,r=a.overflowY,m=a.overflow;return o!=="static"&&(m!=="hidden"&&r!=="hidden")?t:this.getValidParent(t)}validateParent(){if(!this.getValidParent(this.el.nativeElement)){let t="[StickyOverlayDirective] O elemento pai n\xE3o configurado corretamente";if(B())throw new Error(t);console.warn(t)}}static \u0275fac=function(t){return new(t||e)};static \u0275dir=V({type:e,selectors:[["","stickyOverlay",""]],hostVars:8,hostBindings:function(t,a){t&2&&v("sticky-overlay",!0)("sticky-overlay-top",a.stickyPosition()=="top")("sticky-overlay-bottom",a.stickyPosition()=="bottom")("sticky-overlay-active",a.overlay())},inputs:{stickyPosition:[1,"stickyPosition"]}})};export{ve as a,Ve as b,W as c,U as d,I as e,je as f,G as g};
