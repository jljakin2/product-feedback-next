(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{351:function(e,t,s){"use strict";s.r(t);var a=s(1),o=s(0),n=s(93),c=s(213),i=s(92),r=s(24),u=s(9),d=s(10),j=s(21);t.default=({onChange:e,autoFocus:t,field:s,item:{password_is_set:l}={},errors:b,warnings:p,isDisabled:w})=>{const x=Object(o.useRef)(),[O,f]=Object(o.useState)(!1),[m,g]=Object(o.useState)(!1),[h,C]=Object(o.useState)(""),[v,S]=Object(o.useState)("");Object(o.useEffect)(()=>{O&&e({inputPassword:h,inputConfirm:v})},[h,v]),Object(o.useEffect)(()=>{O&&x.current&&x.current.focus()},[O]);const k=e=>{const t=e===b?"danger":"warning";return e.map(({message:e,data:s})=>Object(a.jsx)(c.a,{appearance:t,key:e},e,s?" - "+JSON.stringify(s):null))},P="ks-input-"+s.path;return Object(a.jsx)(n.a,null,Object(a.jsx)(n.d,{htmlFor:P,field:s,errors:b}),Object(a.jsx)(n.b,{text:s.adminDoc}),Object(a.jsx)(n.c,null,O?Object(a.jsx)(r.d,{growIndexes:[0,1]},Object(a.jsx)(i.c,{autoComplete:"off",autoFocus:t,id:P,ref:x,name:"inputPassword",onChange:e=>C(e.target.value),placeholder:"New Password",type:m?"text":"password",value:h,disabled:w}),Object(a.jsx)(i.c,{autoComplete:"off",autoFocus:t,id:P+"-confirm",name:"inputConfirm",onChange:e=>S(e.target.value),placeholder:"Confirm Password",type:m?"text":"password",value:v,disabled:w}),Object(a.jsx)(u.a,{isActive:m,onClick:()=>{g(!m)},title:m?"Hide Text":"Show Text",variant:"ghost",isDisabled:w},Object(a.jsx)(j.a,null,m?"Hide Text":"Show Text"),Object(a.jsx)("div",{css:{width:20}},m?Object(a.jsx)(d.m,null):Object(a.jsx)(d.f,null)))):Object(a.jsx)(u.a,{id:P+"-button",onClick:()=>{f(!O)},variant:"ghost",isDisabled:w},l?"Update Password":"Set Password")),k(b),k(p))}}}]);