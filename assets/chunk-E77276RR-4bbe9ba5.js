import{N as n}from"./chunk-QBIO4VEB-a4073386.js";import{f as p,N as y,O,a as g,c as m}from"./index-67d0cd9a.js";function S(s,e=[]){const a=Object.assign({},s);for(const r of e)r in a&&delete a[r];return a}var w=p(function(e,a){const{fallbackSrc:r,fallback:o,src:f,srcSet:d,align:b,fit:k,loading:c,ignoreFallback:u,crossOrigin:I,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:F,...l}=e,N=r!==void 0||o!==void 0,t=c!=null||u||!N,v=y({...e,ignoreFallback:t}),j=O(v,h),i={ref:a,objectFit:k,objectPosition:b,...t?l:S(l,["onError","onLoad"])};return j?o||g(m.img,{as:n,className:"chakra-image__placeholder",src:r,...i}):g(m.img,{as:n,src:f,srcSet:d,crossOrigin:I,loading:c,referrerPolicy:F,className:"chakra-image",...i})});w.displayName="Image";export{w as I};