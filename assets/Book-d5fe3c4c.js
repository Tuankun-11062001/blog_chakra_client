import{a as e,d as a,L as h,j as o,B as t,T as s,a0 as m,F as i,I as f,n as u,q as b}from"./index-67d0cd9a.js";import{b as x}from"./index.esm-6b0ffbaa.js";import{S as g}from"./slick-theme-483b739f.js";import{I as w}from"./chunk-E77276RR-4bbe9ba5.js";import{H as l}from"./chunk-B2MGPQRJ-bc55f51f.js";import"./chunk-QBIO4VEB-a4073386.js";function d({item:n,slide:r,w:c,m:p}){return e(a,{h:r?"30rem":"20rem",w:r?"inherit":c,m:r?"unset":p,display:"flex",children:e(h,{to:n.nameSign,children:o(a,{className:r&&"bookItem",boxShadow:"md",alignSelf:"center",display:"flex",flexDir:"column",overflow:"hidden",justifyContent:"space-between",h:"inherit",border:"1px",borderColor:"transparent",_hover:{border:"1px",borderColor:"green"},children:[e(w,{src:n.img,objectFit:"cover",h:"18rem"}),e(t,{children:e(s,{noOfLines:1,textAlign:"center",children:r==!1?n.name:""})})]})})})}function k(){return e(g,{...{centerMode:!0,centerPadding:"60px",slidesToShow:2,autoplay:!0,autoplaySpeed:3e3},children:m.map(r=>e(d,{item:r,slide:!0},r.id))})}function v(){return o(a,{pos:"absolute",top:"7rem",paddingInline:"5rem",paddingBlock:"2rem",maxW:"full",children:[o(i,{gap:"2rem",align:"center",h:"30rem",children:[o(t,{flex:"1",children:[e(l,{fontSize:"4rem",color:"blackAlpha.800",mb:"1rem",children:"New & Trending"}),e(s,{fontSize:"1.6rem",color:"gray.600",mb:"1rem",children:"Explorer new world from authors"}),o(f,{children:[e(u,{pointerEvents:"none",children:e(x,{})}),e(b,{placeholder:"Name book here ...."})]})]}),e(t,{w:"80rem",p:"1rem",children:e(k,{})})]}),o(t,{children:[e(l,{children:"Lastest books"}),e(i,{mt:"2rem",wrap:"wrap",children:m.map(n=>e(d,{item:n,w:"calc(16.66% - 2rem)",m:"1rem",slide:!1},n.id))})]})]})}export{v as default};