"use strict";(self.webpackChunkweb_rsudck=self.webpackChunkweb_rsudck||[]).push([[673],{7673:function(e,t,i){i.r(t);var n=i(885),o=i(2791),a=i(3767),r=i(829),s=i(8096),d=i(9891),l=i(8129),c=i(7391),u=i(6151),p=i(6445),m=i(6390),g=i(6871),v=i(2455),b=i(364),f=i(2325),Z=i(184),h=(0,v.Z)((function(){return{root:{paddingTop:"16px"}}}));t.default=(0,b.$j)((function(e){return{}}),(function(e){return{actLogin:function(t,i){return e((0,f.x4)(t,i))}}}))((function(e){var t=e.actLogin,i=h(),v=o.useState(""),b=(0,n.Z)(v,2),f=b[0],x=b[1],y=o.useState("Nomer MR"),C=(0,n.Z)(y,2),j=C[0],k=C[1],w=o.useState(!1),M=(0,n.Z)(w,2),I=(M[0],M[1],o.useState(!1)),F=(0,n.Z)(I,2),S=F[0],T=F[1],L=(0,g.s0)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(m.lj,{open:S,setOpen:T,title:"Failed",subtitle:"Gagal banget sekali"}),(0,Z.jsx)(p.Z,{className:i.root,children:(0,Z.jsxs)(a.Z,{spacing:2,children:[(0,Z.jsx)(m.tD,{type:"back",title:"Login",click:function(){return L(-1)}}),(0,Z.jsxs)(s.Z,{fullWidth:!0,children:[(0,Z.jsx)(r.Z,{id:"type",children:"Type"}),(0,Z.jsxs)(l.Z,{labelId:"type",id:"demo-simple-select",value:j,label:"Type",onChange:function(e){x(""),k(e.target.value)},children:[(0,Z.jsx)(d.Z,{value:"Nomer MR",children:"No MR"}),(0,Z.jsx)(d.Z,{value:"Nomer Tlp",children:"Telp"}),(0,Z.jsx)(d.Z,{value:"Email",children:"Email"})]})]}),(0,Z.jsx)(c.Z,{id:"type",label:j,value:f,onChange:function(e){var t=e.target.value;if("Nomer MR"===j){var i=t.replace(/\D/g,"").match(/(\d{0,2})(\d{0,2})(\d{0,2})/);i=i[2]?i[1]+"-"+i[2]+(i[2].length>1?"-":"")+i[3]:i[1],x(i)}else if("Nomer Tlp"===j){var n=t.replace(/\D/g,"").match(/(\d{0,4})(\d{0,4})(\d{0,4})/);n=n[2]?n[1]+"-"+n[2]+(n[2].length>3?"-":"")+n[3]:n[1],x(n)}else x(e.target.value)}}),(0,Z.jsx)(c.Z,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),(0,Z.jsx)(u.Z,{variant:"contained",onClick:function(){return t({},(function(){return T(!0)}))},children:"Login"})]})})]})}))},9891:function(e,t,i){i.d(t,{Z:function(){return M}});var n=i(4942),o=i(3366),a=i(7462),r=i(2791),s=i(8182),d=i(767),l=i(2065),c=i(7630),u=i(1046),p=i(6199),m=i(3701),g=i(162),v=i(2071),b=i(208);var f=(0,b.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var Z=(0,b.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var h=(0,b.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),x=i(5159);function y(e){return(0,x.Z)("MuiMenuItem",e)}var C=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=i(184),k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=(0,c.ZP)(m.Z,{shouldForwardProp:function(e){return(0,c.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,i.dense&&t.dense,i.divider&&t.divider,!i.disableGutters&&t.gutters]}})((function(e){var t,i=e.theme,o=e.ownerState;return(0,a.Z)({},i.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat(i.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:i.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,n.Z)(t,"&.".concat(C.selected),(0,n.Z)({backgroundColor:(0,l.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:(0,l.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity+i.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(C.selected,":hover"),{backgroundColor:(0,l.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity+i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.Fq)(i.palette.primary.main,i.palette.action.selectedOpacity)}}),(0,n.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:i.palette.action.focus}),(0,n.Z)(t,"&.".concat(C.disabled),{opacity:i.palette.action.disabledOpacity}),(0,n.Z)(t,"& + .".concat(f.root),{marginTop:i.spacing(1),marginBottom:i.spacing(1)}),(0,n.Z)(t,"& + .".concat(f.inset),{marginLeft:52}),(0,n.Z)(t,"& .".concat(h.root),{marginTop:0,marginBottom:0}),(0,n.Z)(t,"& .".concat(h.inset),{paddingLeft:36}),(0,n.Z)(t,"& .".concat(Z.root),{minWidth:36}),t),!o.dense&&(0,n.Z)({},i.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},i.typography.body2,(0,n.Z)({},"& .".concat(Z.root," svg"),{fontSize:"1.25rem"})))})),M=r.forwardRef((function(e,t){var i=(0,u.Z)({props:e,name:"MuiMenuItem"}),n=i.autoFocus,l=void 0!==n&&n,c=i.component,m=void 0===c?"li":c,b=i.dense,f=void 0!==b&&b,Z=i.divider,h=void 0!==Z&&Z,x=i.disableGutters,C=void 0!==x&&x,M=i.focusVisibleClassName,I=i.role,F=void 0===I?"menuitem":I,S=i.tabIndex,T=(0,o.Z)(i,k),L=r.useContext(p.Z),N={dense:f||L.dense||!1,disableGutters:C},R=r.useRef(null);(0,g.Z)((function(){l&&R.current&&R.current.focus()}),[l]);var O,V=(0,a.Z)({},i,{dense:N.dense,divider:h,disableGutters:C}),G=function(e){var t=e.disabled,i=e.dense,n=e.divider,o=e.disableGutters,r=e.selected,s=e.classes,l={root:["root",i&&"dense",t&&"disabled",!o&&"gutters",n&&"divider",r&&"selected"]},c=(0,d.Z)(l,y,s);return(0,a.Z)({},s,c)}(i),D=(0,v.Z)(R,t);return i.disabled||(O=void 0!==S?S:-1),(0,j.jsx)(p.Z.Provider,{value:N,children:(0,j.jsx)(w,(0,a.Z)({ref:D,role:F,tabIndex:O,component:m,focusVisibleClassName:(0,s.Z)(G.focusVisible,M)},T,{ownerState:V,classes:G}))})}))}}]);
//# sourceMappingURL=673.a86d09c2.chunk.js.map