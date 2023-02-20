import{an as ze,a7 as pe,f as F,a as e,c as N,g as H,r as l,al as Le,am as $e,av as Ve,aw as Ke,ax as Ge,ak as Ue,ao as J,ai as R,ag as f,W as We,o as Ye,ap as qe,ay as Je,az as Qe,m as Xe,aA as Ze,j as n,x as er,y as rr,z as or,A as nr,a8 as tr,D as ar,F as E,I as M,T as h,q as A,B as I,b as y,v as ir,d as lr,L as sr,aB as cr,aC as dr}from"./index-67d0cd9a.js";import{F as ur}from"./index.esm-1aecf43c.js";import{S as pr}from"./chunk-GJO77I2I-69a57a56.js";import{I as X}from"./chunk-E77276RR-4bbe9ba5.js";import{T as mr}from"./chunk-OEQDSMWZ-be362b6c.js";import{M as hr}from"./chunk-YI7XFFAC-32ff57df.js";import{T as vr,a as gr,b as se,c as fr,d as ce}from"./chunk-TPBRUKW6-b561582b.js";import{T as Pr,a as wr,b as yr,c as de,d as T,e as br,f as _}from"./chunk-Z3IFIKNA-d50cfd80.js";import{T as Cr}from"./chunk-V3BNVYZO-04c3308d.js";import"./chunk-QBIO4VEB-a4073386.js";function xr(o){return"current"in o}var me=()=>typeof window<"u";function Tr(){var o;const r=navigator.userAgentData;return(o=r==null?void 0:r.platform)!=null?o:navigator.platform}var _r=o=>me()&&o.test(navigator.vendor),kr=o=>me()&&o.test(Tr()),Sr=()=>kr(/mac|iphone|ipad|ipod/i),Br=()=>Sr()&&_r(/apple/i);function Mr(o){const{ref:r,elements:a,enabled:c}=o,s=()=>{var i,m;return(m=(i=r.current)==null?void 0:i.ownerDocument)!=null?m:document};ze(s,"pointerdown",i=>{if(!Br()||!c)return;const m=i.target,C=(a??[r]).some(d=>{const v=xr(d)?d.current:d;return(v==null?void 0:v.contains(m))||v===m});s().activeElement!==m&&C&&(i.preventDefault(),m.focus())})}var[Ar,S]=pe({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[Dr,j]=pe({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),he=F(function(r,a){const{getHeaderProps:c}=S(),s=j();return e(N.header,{...c(r,a),className:H("chakra-popover__header",r.className),__css:s.header})});he.displayName="PopoverHeader";function ve(o){const r=l.Children.only(o.children),{getTriggerProps:a}=S();return l.cloneElement(r,a(r.props,r.ref))}ve.displayName="PopoverTrigger";var D={click:"click",hover:"hover"};function Er(o={}){const{closeOnBlur:r=!0,closeOnEsc:a=!0,initialFocusRef:c,id:s,returnFocusOnClose:i=!0,autoFocus:m=!0,arrowSize:b,arrowShadowColor:C,trigger:d=D.click,openDelay:v=200,closeDelay:x=200,isLazy:Ce,lazyBehavior:xe="unmount",computePositionOnMount:Te,..._e}=o,{isOpen:p,onClose:P,onOpen:U,onToggle:Z}=Le(o),W=l.useRef(null),z=l.useRef(null),B=l.useRef(null),O=l.useRef(!1),ee=l.useRef(!1);p&&(ee.current=!0);const[re,ke]=l.useState(!1),[oe,Se]=l.useState(!1),Be=l.useId(),Me=s??Be,[ne,L,$,V]=["popover-trigger","popover-content","popover-header","popover-body"].map(t=>`${t}-${Me}`),{referenceRef:K,getArrowProps:Ae,getPopperProps:te,getArrowInnerProps:De,forceUpdate:Ee}=$e({..._e,enabled:p||!!Te}),ae=Ve({isOpen:p,ref:B});Mr({enabled:p,ref:z}),Ke(B,{focusRef:z,visible:p,shouldFocus:i&&d===D.click}),Ge(B,{focusRef:c,visible:p,shouldFocus:m&&d===D.click});const ie=Ue({wasSelected:ee.current,enabled:Ce,mode:xe,isSelected:ae.present}),Ne=l.useCallback((t={},g=null)=>{const u={...t,style:{...t.style,transformOrigin:J.transformOrigin.varRef,[J.arrowSize.var]:b?`${b}px`:void 0,[J.arrowShadowColor.var]:C},ref:R(B,g),children:ie?t.children:null,id:L,tabIndex:-1,role:"dialog",onKeyDown:f(t.onKeyDown,w=>{a&&w.key==="Escape"&&P()}),onBlur:f(t.onBlur,w=>{const G=ue(w),q=Q(B.current,G),je=Q(z.current,G);p&&r&&(!q&&!je)&&P()}),"aria-labelledby":re?$:void 0,"aria-describedby":oe?V:void 0};return d===D.hover&&(u.role="tooltip",u.onMouseEnter=f(t.onMouseEnter,()=>{O.current=!0}),u.onMouseLeave=f(t.onMouseLeave,w=>{w.nativeEvent.relatedTarget!==null&&(O.current=!1,setTimeout(()=>P(),x))})),u},[ie,L,re,$,oe,V,d,a,P,p,r,x,C,b]),Oe=l.useCallback((t={},g=null)=>te({...t,style:{visibility:p?"visible":"hidden",...t.style}},g),[p,te]),Re=l.useCallback((t,g=null)=>({...t,ref:R(g,W,K)}),[W,K]),k=l.useRef(),Y=l.useRef(),le=l.useCallback(t=>{W.current==null&&K(t)},[K]),Ie=l.useCallback((t={},g=null)=>{const u={...t,ref:R(z,g,le),id:ne,"aria-haspopup":"dialog","aria-expanded":p,"aria-controls":L};return d===D.click&&(u.onClick=f(t.onClick,Z)),d===D.hover&&(u.onFocus=f(t.onFocus,()=>{k.current===void 0&&U()}),u.onBlur=f(t.onBlur,w=>{const G=ue(w),q=!Q(B.current,G);p&&r&&q&&P()}),u.onKeyDown=f(t.onKeyDown,w=>{w.key==="Escape"&&P()}),u.onMouseEnter=f(t.onMouseEnter,()=>{O.current=!0,k.current=window.setTimeout(()=>U(),v)}),u.onMouseLeave=f(t.onMouseLeave,()=>{O.current=!1,k.current&&(clearTimeout(k.current),k.current=void 0),Y.current=window.setTimeout(()=>{O.current===!1&&P()},x)})),u},[ne,p,L,d,le,Z,U,r,P,v,x]);l.useEffect(()=>()=>{k.current&&clearTimeout(k.current),Y.current&&clearTimeout(Y.current)},[]);const Fe=l.useCallback((t={},g=null)=>({...t,id:$,ref:R(g,u=>{ke(!!u)})}),[$]),He=l.useCallback((t={},g=null)=>({...t,id:V,ref:R(g,u=>{Se(!!u)})}),[V]);return{forceUpdate:Ee,isOpen:p,onAnimationComplete:ae.onComplete,onClose:P,getAnchorProps:Re,getArrowProps:Ae,getArrowInnerProps:De,getPopoverPositionerProps:Oe,getPopoverProps:Ne,getTriggerProps:Ie,getHeaderProps:Fe,getBodyProps:He}}function Q(o,r){return o===r||(o==null?void 0:o.contains(r))}function ue(o){var r;const a=o.currentTarget.ownerDocument.activeElement;return(r=o.relatedTarget)!=null?r:a}function ge(o){const r=We("Popover",o),{children:a,...c}=Ye(o),s=qe(),i=Er({...c,direction:s.direction});return e(Ar,{value:i,children:e(Dr,{value:r,children:Je(a,{isOpen:i.isOpen,onClose:i.onClose,forceUpdate:i.forceUpdate})})})}ge.displayName="Popover";function fe(o){var r;const{bg:a,bgColor:c,backgroundColor:s,shadow:i,boxShadow:m}=o,{getArrowProps:b,getArrowInnerProps:C}=S(),d=j(),v=(r=a??c)!=null?r:s,x=i??m;return e(N.div,{...b(),className:"chakra-popover__arrow-positioner",children:e(N.div,{className:H("chakra-popover__arrow",o.className),...C(o),__css:{"--popper-arrow-bg":v?`colors.${v}, ${v}`:void 0,"--popper-arrow-shadow":x?`shadows.${x}, ${x}`:void 0,...d.arrow}})})}fe.displayName="PopoverArrow";var Pe=F(function(r,a){const{getBodyProps:c}=S(),s=j();return e(N.div,{...c(r,a),className:H("chakra-popover__body",r.className),__css:s.body})});Pe.displayName="PopoverBody";var we=F(function(r,a){const{onClose:c}=S(),s=j();return e(Qe,{size:"sm",onClick:c,className:H("chakra-popover__close-btn",r.className),__css:s.closeButton,ref:a,...r})});we.displayName="PopoverCloseButton";function Nr(o){if(o)return{enter:{...o.enter,visibility:"visible"},exit:{...o.exit,transitionEnd:{visibility:"hidden"}}}}var Or={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Rr=N(Xe.section),ye=F(function(r,a){const{variants:c=Or,...s}=r,{isOpen:i}=S();return e(Rr,{ref:a,variants:Nr(c),initial:!1,animate:i?"enter":"exit",...s})});ye.displayName="PopoverTransition";var be=F(function(r,a){const{rootProps:c,motionProps:s,...i}=r,{getPopoverProps:m,getPopoverPositionerProps:b,onAnimationComplete:C}=S(),d=j(),v={position:"relative",display:"flex",flexDirection:"column",...d.content};return e(N.div,{...b(c),__css:d.popper,className:"chakra-popover__popper",children:e(ye,{...s,...m(i,a),onAnimationComplete:Ze(C,i.onAnimationComplete),className:H("chakra-popover__content",r.className),__css:v})})});be.displayName="PopoverContent";function Ir({open:o,close:r}){return n(er,{isOpen:o,onClose:r,size:"3xl",children:[e(rr,{}),n(or,{children:[e(nr,{children:"Edit Product"}),e(tr,{}),n(ar,{children:[n(E,{gap:"2rem",children:[n(M,{flexDir:"column",gap:"0.5rem",children:[e(h,{children:"Name Product"}),e(A,{})]}),n(I,{w:"20rem",children:[e(h,{mb:"0.5rem",children:"Category"}),n(pr,{children:[e("option",{value:"flower",children:"Flower"}),e("option",{value:"DIY",children:"DIY"})]})]})]}),n(E,{mt:"1rem",gap:"2rem",children:[n(M,{flexDir:"column",gap:"0.5rem",children:[e(h,{children:"Stock"}),e(A,{})]}),n(M,{flexDir:"column",gap:"0.5rem",children:[e(h,{children:"Price"}),e(A,{})]}),n(M,{flexDir:"column",gap:"0.5rem",children:[e(h,{children:"Made in"}),e(A,{})]})]}),n(E,{mt:"1rem",gap:"2rem",children:[n(I,{flex:"1",children:[n(M,{flexDir:"column",gap:"0.5rem",children:[e(h,{children:"Image "}),e(A,{})]}),n(I,{mt:"1rem",children:[e(E,{mb:"0.5rem",gap:"1rem",w:"full",children:n(ge,{children:[e(ve,{children:e(y,{variant:"link",children:e(X,{src:"https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg",alt:"second-image",w:"5rem",h:"4rem",objectFit:"cover",borderRadius:"0.5rem",bg:"pink"})})}),n(be,{children:[e(fe,{}),e(we,{}),e(he,{children:"Confirmation!"}),n(Pe,{children:[e(h,{children:"you want to delete it"}),e(E,{mt:"1rem",justify:"end",children:e(y,{colorScheme:"red",children:"Delete"})})]})]})]})}),n(I,{children:[e(h,{mb:"0.5rem",children:"Image Second"}),n(M,{gap:"1rem",children:[e(A,{}),e(y,{colorScheme:"blue",children:"Add"})]})]})]})]}),e(I,{children:e(X,{src:"https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg",alt:"img_preview",w:"20rem",bg:"pink",objectFit:"cover"})})]}),e(mr,{w:"full",h:"20rem",resize:"none",mt:"2rem"})]}),n(hr,{children:[e(y,{colorScheme:"blue",mr:3,onClick:r,children:"Close"}),e(y,{variant:"ghost",children:"Secondary Action"})]})]})]})}function Yr(){const{isOpen:o,onOpen:r,onClose:a}=ir();return n(lr,{pos:"absolute",top:"7rem",paddingInline:"5rem",paddingBlock:"2rem",maxW:"full",children:[n(vr,{children:[n(gr,{children:[e(se,{children:"All Product"}),e(se,{children:"Order"})]}),n(fr,{children:[n(ce,{children:[e(y,{colorScheme:"green",children:"Create one!"}),e(h,{mt:"4rem",children:" All Product"}),e(Pr,{mt:"1rem",children:n(wr,{variant:"striped",colorScheme:"teal",children:[e(Cr,{children:"Total is 3"}),e(yr,{children:n(de,{children:[e(T,{children:"No."}),e(T,{children:"Image"}),e(T,{children:"Name"}),e(T,{children:"Stock"}),e(T,{children:"Category"}),e(T,{children:"Made in"}),e(T,{children:"Price"}),e(T,{})]})}),e(br,{children:n(de,{children:[e(_,{textAlign:"center",children:"1"}),e(_,{children:e(X,{alt:"img_product",src:"https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg",w:"10rem",h:"5rem",objectFit:"cover"})}),e(_,{w:"15rem",textOverflow:"ellipsis",overflow:"hidden",children:e(h,{w:"inherit",textOverflow:"ellipsis",overflow:"hidden",children:"Marigold"})}),e(_,{textAlign:"center",children:"15"}),e(_,{textAlign:"center",children:"Flower"}),e(_,{textAlign:"center",children:"Viet Nam"}),e(_,{textAlign:"center",children:"20k"}),e(_,{children:n(E,{gap:"1rem",justify:"center",children:[e(sr,{to:"marigold",children:n(y,{colorScheme:"blue",children:[e(cr,{}),e(h,{ml:"0.5rem",children:"Preview"})]})}),n(y,{colorScheme:"green",onClick:r,children:[e(ur,{}),e(h,{ml:"0.5rem",children:"Edit"})]}),n(y,{colorScheme:"red",children:[e(dr,{}),e(h,{ml:"0.5rem",children:"Delete"})]})]})})]})})]})})]}),e(ce,{children:e("p",{children:"two!"})})]})]}),e(Ir,{open:o,close:a})]})}export{Yr as default};