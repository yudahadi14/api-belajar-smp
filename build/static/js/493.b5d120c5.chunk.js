"use strict";(self.webpackChunkweb_rsudck=self.webpackChunkweb_rsudck||[]).push([[493],{2493:function(t,e,n){n.r(e);var a=n(885),r=n(1889),i=n(3767),u=n(6445),c=n(2791),o=n(2455),s=n(6341),d=n(1488),l=n(145),p=n(7349),f=n(6871),k=n(364),m=n(8552),h=n(184),x=(0,o.Z)((function(){return{textContent:{padding:"0 8px !important",flexGrow:100},filterContent:{flexGrow:100},searchBar:{display:"flex"},root:{paddingTop:"32px",paddingBottom:"128px"},chip:{}}}));e.default=(0,k.$j)((function(t){return{statePaketMCU:t.master.paketMCU}}),(function(t){return{actGetPaketMCU:function(e){return t((0,m.s5)(e))},actSetAppointment:function(e){return t((0,m.vT)(e))}}}))((function(t){var e=t.actGetPaketMCU,n=t.statePaketMCU,o=t.actSetAppointment,k=x(),m=(0,f.s0)();c.useEffect((function(){e({mcu_id:null,mcu_name:null})}),[]);var _=c.useState(""),C=(0,a.Z)(_,2),j=C[0],g=C[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Z,{title:"Info Paket MCU",subtitle:"Temukan paket MCU sesuai kebutuhan anda",variant:"with-background",click:function(){m(-1)}}),(0,h.jsxs)(u.Z,{className:k.root,children:[(0,h.jsxs)(i.Z,{spacing:2,children:[(0,h.jsx)("div",{className:k.searchBar,children:(0,h.jsx)(s.Z,{label:"Cari Paket",onChange:function(t){return g(t.target.value)},value:j,onSubmit:function(){e({mcu_id:null,mcu_name:j})}})}),(0,h.jsx)("div",{children:(0,h.jsx)(r.ZP,{container:!0,spacing:2,children:n&&n.map((function(t){var e=t.produk_paket.reduce((function(t,e){return t+e.produk.ref_prod_hargajual}),0);return(0,h.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,h.jsx)(d.Z,{title:t.produk.ref_prod_nama,img:"",price:e,handleChoose:function(){o({layanan:{id_poli:22,ref_layanan_nama:"MCU",disabled:!0},dokter:{peg_id:"100080",nama_dokter:"DOKTER LAB",disabled:!0},total:e}),m("/make-appointment")}})},t.ref_pkt_mcu_id+"paket")}))})})]}),(0,h.jsx)(l.Z,{})]})]})}))}}]);
//# sourceMappingURL=493.b5d120c5.chunk.js.map