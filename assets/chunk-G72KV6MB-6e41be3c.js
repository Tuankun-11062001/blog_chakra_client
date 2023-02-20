import{l}from"./index-67d0cd9a.js";function i(n,r){return Array.isArray(n)?n.map(u=>u===null?null:r(u)):l(n)?Object.keys(n).reduce((u,e)=>(u[e]=r(n[e]),u),{}):n!=null?r(n):null}export{i as m};
