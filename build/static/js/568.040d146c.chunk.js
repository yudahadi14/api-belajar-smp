"use strict";(self.webpackChunkweb_rsudck=self.webpackChunkweb_rsudck||[]).push([[568],{8640:function(t,a,e){e.r(a);var n=e(885),i=e(2455),r=e(6445),s=e(3767),c=e(890),d=e(1889),l=e(6151),o=e(703),u=e(2791),p=e(6871),h=e(9476),x=e(145),k=e(7349),f=e(872),m=e(364),j=e(8814),_=e(9661),Z=e(2426),g=e.n(Z),b=e(8552),v=e(184),P=(0,i.Z)((function(){return{textRoll:{position:"relative",paddingBottom:"128px",paddingTop:"16px"}}}));a.default=(0,m.$j)((function(t){return{statePaket:t.master.paketMCU,stateBahasa:t.app.bahasa,stateUser:t.auth.token}}),(function(t){return{actSetAppointment:function(a){return t((0,b.vT)(a))}}}))((function(t){var a=(0,p.s0)(),e=t.statePaket,i=t.actSetAppointment,m=t.stateUser,Z=t.stateBahasa,b=P(),y=(0,p.UO)().id,w=u.useState({package_name:null,total:0,update_at:"",list:[]}),C=(0,n.Z)(w,2),B=C[0],M=C[1];u.useEffect((function(){if(y&&e){var t=e.find((function(t){return t.ref_pkt_mcu_id===Number(y)}));t&&M({package_name:t.produk.ref_prod_nama,tgl_update:g()(t.produk.tgl_update).format("YYYY-MM-DD hh:mm"),total:t.produk_paket.reduce((function(t,a){return t+a.produk.ref_prod_hargajual}),0),list:t.produk_paket})}}),[y,e]);return(0,v.jsxs)(r.Z,{className:b.textRoll,children:[(0,v.jsxs)(s.Z,{spacing:2,children:[(0,v.jsx)(k.Z,{type:"back",title:"Berita",click:function(){return a(-1)}}),(0,v.jsx)(h.jL,{variant:"news",src:_}),(0,v.jsx)(r.Z,{children:(0,v.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,v.jsx)(d.ZP,{item:!0,xs:12,children:(0,v.jsxs)(s.Z,{spacing:0,children:[(0,v.jsx)(c.Z,{variant:"subtitle2",children:B.package_name}),(0,v.jsx)(c.Z,{variant:"h5",children:"".concat((0,j.uf)(B.total),"*")}),(0,v.jsx)(c.Z,{variant:"body2",color:"text.secondary",children:"indonesia"===Z?"*Harga dapat berubah sewaktu-waktu":"*The price could changes every time"}),(0,v.jsx)(c.Z,{variant:"body1",children:"updated : ".concat(B.tgl_update)})]})}),(0,v.jsx)(d.ZP,{item:!0,xs:12,children:(0,v.jsx)(l.Z,{variant:"contained",size:"small",onClick:function(){i({layanan:{id_poli:22,ref_layanan_nama:"MCU",disabled:!0},dokter:{peg_id:"100080",nama_dokter:"DOKTER LAB",disabled:!0},total:B.total}),a("/make-appointment")},disabled:!m,children:"indonesia"===Z?"Pilih":"*Choose"})})]})}),(0,v.jsx)(o.Z,{sx:{padding:"16px"},children:(0,v.jsx)(d.ZP,{container:!0,spacing:1,children:B.list.map((function(t,a){return(0,v.jsxs)(d.ZP,{item:!0,xs:12,container:!0,spacing:1,alignItems:"center",children:[(0,v.jsx)(d.ZP,{item:!0,xs:2,children:(0,v.jsx)(f.Z,{})}),(0,v.jsx)(d.ZP,{item:!0,xs:!0,children:(0,v.jsx)(c.Z,{variant:"body1",children:t.produk.ref_prod_nama})})]},a+"_list")}))})})]}),(0,v.jsx)(x.Z,{})]})}))},872:function(t,a,e){var n=e(5318);a.Z=void 0;var i=n(e(5649)),r=e(184),s=(0,i.default)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");a.Z=s}}]);
//# sourceMappingURL=568.040d146c.chunk.js.map