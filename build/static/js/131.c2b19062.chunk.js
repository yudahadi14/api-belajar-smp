"use strict";(self.webpackChunkweb_rsudck=self.webpackChunkweb_rsudck||[]).push([[131],{1131:function(a,e,n){n.r(e),n.d(e,{default:function(){return q}});var i=n(4942),t=n(1413),r=n(885),s=n(2791),l=n(3767),o=n(829),d=n(8096),m=n(5022),u=n(4377),p=n(7391),g=n(6151),h=n(6445),c=n(9752),k=n(4454),j=n(5523),f=n(9012),x=n(7133),y=n(1419),Z=n(8970),I=n(2426),b=n.n(I),v=n(1522),P=n(6871),T=n(2455),W=n(364),N=n(8552),_=n(4819),D=n.n(_),C={jenisId:D().string().empty().messages({"string.empty":"Isi Jenis identitas anda."}),jenisIdnomor:D().string().empty().min(6).messages({"string.empty":"Isi nomor identitas anda.","string.min":"Identitas min 6 karakter."}),namaLengkap:D().string().empty().min(3).messages({"string.empty":"Isi nama lengkap anda.","string.min":"Nama lengkap min 3 karakter."}),namaPanggilan:D().string().empty().min(3).messages({"string.empty":"Isi nama panggilan anda.","string.min":"Nama panggilan min 3 karakter."}),tempatLahir:D().string().empty().min(3).messages({"string.empty":"Isi tempat kelahiran anda.","string.min":"tempat kelahiran min 3 karakter."}),tglLahir:D().string().empty().messages({"string.empty":"Isi tanggal kelahiran anda."}),jenisKelamin:D().any().empty().messages({"any.empty":"Isi jenis kelamin anda."}),propinsi:D().string().empty().min(3).messages({"string.empty":"Isi propinsi anda.","string.min":"propinsi min 3 karakter."}),kecamatan:D().string().empty().min(3).messages({"string.empty":"Isi alamat anda.","string.min":"alamat min 3 karakter."}),kotaDati:D().string().empty().min(3).messages({"string.empty":"Isi kotamadya anda.","string.min":"kotamadya min 3 karakter."}),kelurahan:D().string().empty().min(3).messages({"string.empty":"Isi alamat anda.","string.min":"alamat min 3 karakter."}),alamatDomisili:D().string().empty().min(3).messages({"string.empty":"Isi alamat anda.","string.min":"alamat min 3 karakter."}),rt:D().string().empty().min(2).messages({"string.empty":"Isi rt anda."}),rw:D().string().empty().min(2).messages({"string.empty":"Isi rw anda."}),kodePos:D().string().empty().min(3).messages({"string.empty":"Isi kodepos anda.","string.min":"kodepos min 3 karakter."}),alamat:D().string().empty().min(3).messages({"string.empty":"Isi kotamadya anda.","string.min":"alamat min 3 karakter."}),noTelpon:D().string().empty().min(10).messages({"string.empty":"Isi noTelpon anda.","string.min":"noTelpon min 10 karakter."}),noTelpon2:D().string().allow(null,""),agama:D().any().empty().messages({"any.empty":"Isi agama anda."}),nilaiYakin:D().any().empty().messages({"any.empty":"Isi nilai keyakinan anda."}),statusNikah:D().any().empty().messages({"any.empty":"Isi status pernikahan anda."}),statusPendidikan:D().any().empty().messages({"any.empty":"Isi status pendidikan anda."}),statusWarganegara:D().any().empty().messages({"any.empty":"Isi status kewarganegaraan anda."}),bahasa:D().string().min(3).empty().messages({"any.empty":"Isi bahasa yang anda gunakan.","any.min":"Bahasa min 3 karakter."}),infoKerja:D().any().empty().messages({"any.empty":"Isi status pekerjaan anda."}),infoAyah:D().string().empty().messages({"string.empty":"Isi nama bapak anda."}),penjamin:D().any().empty().messages({"any.empty":"Isi penjamin anda."}),namaWaliDarurat:D().string().empty().messages({"string.empty":"Isi nama wali anda."}),textNilaiYakin:D().string().allow(null,""),infoIbu:D().string().allow(null,""),infoIstriSuami:D().string().allow(null,""),noPenjamin:D().string().allow(null,""),telponWaliDarurat:D().string().empty().messages({"string.empty":"Isi nomer telp wali anda."}),filePhoto:D().string().empty().messages({"string.empty":"Isi foto anda."}),fileUpload:D().string().allow(null,""),penjaminSubjenis:D().any().allow(null,"")};function S(a,e){return!C[a]||D().object({field:C[a]}).validate({field:e})}var w=n(184),K=(0,T.Z)((function(){return{root:{padding:"16px 0"},langContainer:{padding:"16px 0",overflowX:"hidden"},dialogImg:{height:"250px",width:"auto"}}})),q=(0,W.$j)((function(a){return{stateIdentitas:a.auth.identitas,stateAgama:a.master.agama,statePendidikan:a.master.pendidikan,statePekerjaan:a.master.pekerjaan,stateJenisID:a.master.jenisIdentitas,stateStatusNikah:a.master.statusNikah,stateError:a.app.error,statePropinsi:a.master.propinsi,stateKotamadya:a.master.kotamadya,stateKecamatan:a.master.kecamatan,stateKelurahan:a.master.kelurahan,stateBahasa:a.app.bahasa}}),(function(a){return{actGetPendidikan:function(e){return a((0,N.UW)(e))},actSetIdentitas:function(e){return a((0,N.Pn)(e))},actGetIdentitas:function(e){return a((0,N.uK)(e))},actGetAgama:function(e){return a((0,N.r3)(e))},actGetPekerjaan:function(e){return a((0,N.UM)(e))},actGetJenisID:function(e){return a((0,N.LT)(e))},actGetStatusNikah:function(e){return a((0,N.Dz)(e))},actRegister:function(e,n){return a((0,N.z2)(e,n))},actResetIdentitas:function(e,n){return a((0,N.M0)(e,n))},actGetPropinsi:function(e){return a((0,N.Xz)(e))},actGetKotamadya:function(e){return a((0,N.Ax)(e))},actGetKecamatan:function(e){return a((0,N.Nf)(e))},actGetKelurahan:function(e){return a((0,N.MZ)(e))}}}))((function(a){var e=a.actGetPendidikan,n=a.stateBahasa,I=a.actGetAgama,T=a.actGetPekerjaan,W=a.actGetJenisID,N=a.actGetStatusNikah,_=a.stateAgama,q=a.statePendidikan,L=a.statePekerjaan,G=a.stateStatusNikah,A=a.stateJenisID,Y=a.stateError,B=a.statePropinsi,J=a.stateKotamadya,R=a.stateKecamatan,M=a.stateKelurahan,F=a.actRegister,V=a.stateIdentitas,U=a.actGetIdentitas,z=a.actSetIdentitas,E=a.actResetIdentitas,O=a.actGetPropinsi,Q=a.actGetKotamadya,X=a.actGetKecamatan,H=a.actGetKelurahan,$=V.jenisId,aa=V.jenisIdnomor,ea=V.namaLengkap,na=V.namaPanggilan,ia=V.tempatLahir,ta=V.tglLahir,ra=V.jenisKelamin,sa=V.alamat,la=V.rt,oa=V.rw,da=V.kelurahan,ma=V.kecamatan,ua=V.kotaDati,pa=V.kodePos,ga=V.propinsi,ha=V.noTelpon,ca=V.agama,ka=V.nilaiYakin,ja=V.textNilaiYakin,fa=V.statusNikah,xa=V.statusWarganegara,ya=(V.infoIbu,V.infoAyah),Za=V.infoIstriSuami,Ia=V.noPenjamin,ba=V.namaWaliDarurat,va=V.telponWaliDarurat,Pa=(V.fileUpload,V.filePhoto),Ta=V.noTelpon2,Wa=V.alamatDomisili,Na=V.statusPendidikan,_a=V.penjamin,Da=V.bahasa,Ca=V.infoKerja,Sa=(V.penjaminSubjenis,K()),wa=s.useState(!1),Ka=(0,r.Z)(wa,2),qa=(Ka[0],Ka[1],s.useState(!1)),La=(0,r.Z)(qa,2),Ga=La[0],Aa=La[1],Ya=s.useState(""),Ba=(0,r.Z)(Ya,2),Ja=Ba[0],Ra=Ba[1],Ma=s.useState(!1),Fa=(0,r.Z)(Ma,2),Va=Fa[0],Ua=Fa[1],za=s.useState({jenisId:"",jenisIdnomor:"",namaLengkap:"",namaPanggilan:"",tempatLahir:"",tglLahir:"",jenisKelamin:"",alamat:"",rt:"",rw:"",kelurahan:"",kecamatan:"",kotaDati:"",kodePos:"",propinsi:"",noTelpon:"",agama:"",nilaiYakin:"",textNilaiYakin:"",statusNikah:"",statusWarganegara:"",infoIbu:"",infoAyah:"",infoIstriSuami:"",noPenjamin:"",namaWaliDarurat:"",telponWaliDarurat:"",fileUpload:"",filePhoto:"",noTelpon2:"",alamatDomisili:"",statusPendidikan:"",penjamin:"",bahasa:"",infoKerja:"",penjaminSubjenis:0}),Ea=(0,r.Z)(za,2),Oa=Ea[0],Qa=Ea[1],Xa=(0,P.s0)();s.useEffect((function(){Y&&Xa("/exception-handling")}),[Y]),s.useEffect((function(){T(),I(),e(),W(),N(),O()}),[]);var Ha=function(a){var e=a.target,n=e.name,r=e.id,s=e.value,l=S(n||r,s).error;Qa((0,t.Z)((0,t.Z)({},Oa),{},(0,i.Z)({},n||r,l?"*"+l.message:""))),z({key:n||r,value:s})},$a=function(a){var e=a.name,n=a.id,r=a.value,s=S(e,r).error;switch(e){case"propinsi":Q(n);break;case"kotaDati":X(n);break;case"kecamatan":H(n)}Qa((0,t.Z)((0,t.Z)({},Oa),{},(0,i.Z)({},e,s?"*"+s.message:""))),z({key:e,value:r})},ae=s.useState(!1),ee=(0,r.Z)(ae,2),ne=ee[0],ie=ee[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v.QA,{setOpen:Ua,type:"success",title:"Berhasil Terdaftar!.",open:Va}),(0,w.jsx)(v.QA,{setOpen:Ra,type:"error",title:Ja,open:!!Ja}),(0,w.jsx)(h.Z,{className:Sa.root,children:(0,w.jsxs)(l.Z,{spacing:2,children:[(0,w.jsx)(v.tD,{type:"back",title:"indonesia"===n?"Daftar Pasien Baru":"Register New Patient",click:function(){return Xa(-1)}}),(0,w.jsxs)(d.Z,{fullWidth:!0,required:!0,error:!!Oa.jenisId,children:[(0,w.jsx)(o.Z,{id:"jenisId",children:"indonesia"===n?"Jenis Identitas":"Identity Type"}),(0,w.jsx)(u.Z,{labelId:"jenisId",id:"jenisId",name:"jenisId",value:$,onChange:Ha,children:A&&A.map((function(a){return(0,w.jsx)(m.Z,{value:a.ref_jki_id.toString(),children:a.ref_jki_ket},"jenisID"+a.ref_jki_id)}))})]}),(0,w.jsx)(p.Z,{id:"jenisIdnomor",name:"jenisIdnomor",label:"indonesia"===n?"No Identitas":"Identity Number",required:!0,error:!!Oa.jenisIdnomor,value:aa,onChange:Ha,helperText:Oa.jenisIdnomor,onBlur:function(){"1"===$&&16===aa.length&&U(aa)}}),(0,w.jsx)(p.Z,{id:"namaLengkap",name:"namaLengkap",label:"indonesia"===n?"Nama Lengkap":"Fullname",required:!0,value:ea,error:!!Oa.namaLengkap,onChange:Ha,helperText:Oa.namaLengkap}),(0,w.jsx)(p.Z,{id:"namaPanggilan",name:"namaPanggilan",label:"indonesia"===n?"Nama Panggilan":"Nickname",required:!0,value:na,onChange:Ha,error:!!Oa.namaPanggilan,helperText:Oa.namaPanggilan}),(0,w.jsx)(p.Z,{id:"tempatLahir",name:"tempatLahir",label:"indonesia"===n?"Tempat Lahir":"Birthplace",required:!0,value:ia,onChange:Ha,error:!!Oa.tempatLahir,helperText:Oa.tempatLahir}),(0,w.jsx)(p.Z,{id:"tglLahir",name:"tglLahir",label:"indonesia"===n?"Tanggal Lahir":"Birthdate",required:!0,InputLabelProps:{shrink:!0},inputProps:{max:b()().format("YYYY-MM-DD")},type:"date",value:ta,onChange:Ha,error:!!Oa.tglLahir,helperText:Oa.tglLahir}),(0,w.jsxs)(d.Z,{required:!0,error:!!Oa.jenisKelamin,children:[(0,w.jsx)(x.Z,{id:"jenisKelamin",children:"indonesia"===n?"Jenis Kelamin":"Gender"}),(0,w.jsxs)(Z.Z,{row:!0,"aria-labelledby":"jeniKelamin",id:"jenisKelamin",name:"jenisKelamin",value:ra,onChange:Ha,children:[(0,w.jsx)(j.Z,{value:"1",control:(0,w.jsx)(y.Z,{}),label:"indonesia"===n?"Pria":"Male"}),(0,w.jsx)(j.Z,{value:"2",control:(0,w.jsx)(y.Z,{}),label:"indonesia"===n?"Perempuan":"Female"})]})]}),(0,w.jsx)(c.Z,{id:"propinsi",name:"propinsi",freeSolo:!0,value:ga,onChange:function(a,e){return $a({name:"propinsi",value:e.label,id:e.id})},inputValue:ga,onInputChange:function(a,e){return Ha({target:{name:"propinsi",value:e}})},options:B.map((function(a){return{id:a.ref_propinsi_id,label:a.ref_propinsi_nama}})),renderInput:function(a){return(0,w.jsx)(p.Z,(0,t.Z)((0,t.Z)({},a),{},{fullWidth:!0,label:"indonesia"===n?"Provinsi":"Province",required:!0,helperText:Oa.propinsi,error:!!Oa.propinsi}))}}),(0,w.jsx)(c.Z,{id:"kotaDati",name:"kotaDati",freeSolo:!0,inputValue:ua,onInputChange:function(a,e){Ha({target:{name:"kotaDati",value:e}})},value:ua,onChange:function(a,e){return $a({name:"kotaDati",value:e.label,id:e.id})},options:J.map((function(a){return{id:a.ref_kotadati2_id,label:a.ref_kotadati2_nama}})),renderInput:function(a){return(0,w.jsx)(p.Z,(0,t.Z)((0,t.Z)({},a),{},{fullWidth:!0,label:"indonesia"===n?"Kotamadya / Dati II":"Regency",required:!0,helperText:Oa.kotaDati,error:!!Oa.kotaDati}))}}),(0,w.jsx)(c.Z,{id:"kecamatan",name:"kecamatan",freeSolo:!0,inputValue:ma,onInputChange:function(a,e){Ha({target:{name:"kecamatan",value:e}})},value:ma,onChange:function(a,e){return $a({name:"kecamatan",value:e.label,id:e.id})},options:R.map((function(a){return{id:a.ref_kcamatan_id,label:a.ref_kcamatan_nama}})),renderInput:function(a){return(0,w.jsx)(p.Z,(0,t.Z)((0,t.Z)({},a),{},{fullWidth:!0,label:"indonesia"===n?"Kecamatan":"Country",required:!0,helperText:Oa.kecamatan,error:!!Oa.kecamatan}))}}),(0,w.jsx)(c.Z,{id:"kelurahan",name:"kelurahan",freeSolo:!0,inputValue:da,onInputChange:function(a,e){Ha({target:{name:"kelurahan",value:e}})},value:da,onChange:function(a,e){return $a({name:"kelurahan",value:e.label,id:e.id})},options:M.map((function(a){return{id:a.ref_klurahan_id,label:a.ref_klurahan_nama}})),renderInput:function(a){return(0,w.jsx)(p.Z,(0,t.Z)((0,t.Z)({},a),{},{fullWidth:!0,label:"indonesia"===n?"Kelurahan":"Subdistrict",required:!0,helperText:Oa.kelurahan,error:!!Oa.kelurahan}))}}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"alamat",name:"alamat",label:"indonesia"===n?"Alamat Sesuai Identitas":"Address ID",required:!0,value:sa,onChange:Ha,helperText:Oa.alamat,error:!!Oa.alamat}),(0,w.jsxs)(l.Z,{direction:"row",spacing:2,children:[(0,w.jsx)(p.Z,{fullWidth:!0,id:"rt",name:"rt",label:"RT",required:!0,value:la,onChange:Ha,helperText:Oa.rw,error:!!Oa.rt}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"rw",name:"rw",label:"RW",required:!0,value:oa,onChange:Ha,helperText:Oa.rw,error:!!Oa.rw})]}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"kodePos",name:"kodePos",label:"indonesia"===n?"Kode Pos":"Post Code",required:!0,value:pa,onChange:Ha,helperText:Oa.kodePos,error:!!Oa.kodePos}),(0,w.jsxs)("div",{children:[(0,w.jsx)(p.Z,{id:"alamatDomisili",name:"alamatDomisili",label:"indonesia"===n?"Alamat Domisili":"Current Address",required:!0,fullWidth:!0,disabled:Ga,error:!!Oa.alamatDomisili,value:Wa,onChange:Ha,helperText:Oa.alamatDomisili}),(0,w.jsx)(f.Z,{children:(0,w.jsx)(j.Z,{control:(0,w.jsx)(k.Z,{checked:Ga,onChange:function(){Aa(!Ga),z({key:"alamatDomisili",value:sa})}}),label:"indonesia"===n?"Sama dengan alamat domisili":"Same as current address"})})]}),(0,w.jsxs)(l.Z,{direction:"row",spacing:2,children:[(0,w.jsx)(v.t7,{id:"noTelpon",name:"noTelpon",label:"indonesia"===n?"No Telp 1":"Phone Number 1",fullWidth:!0,required:!0,value:ha,onChange:Ha,helperText:Oa.noTelpon,className:Sa.inputPhone,inputType:"phone-number",error:!!Oa.noTelpon}),(0,w.jsx)(v.t7,{id:"noTelpon2",name:"noTelpon2",label:"indonesia"===n?"No Telp 2":"Phone Number 2",fullWidth:!0,required:!0,className:Sa.inputPhone,inputType:"phone-number",value:Ta,onChange:Ha,helperText:Oa.noTelpon2})]}),(0,w.jsxs)(d.Z,{fullWidth:!0,required:!0,children:[(0,w.jsx)(o.Z,{id:"agama",children:"indonesia"===n?"Agama":"Religion"}),(0,w.jsx)(u.Z,{labelId:"agama",id:"agama",name:"agama",value:ca,onChange:Ha,children:_&&_.map((function(a){return(0,w.jsx)(m.Z,{value:a.ref_agama_id,children:a.ref_agama_ket},"agama"+a.ref_agama_id)}))})]}),(0,w.jsxs)(l.Z,{spacing:1,children:[(0,w.jsxs)(d.Z,{required:!0,children:[(0,w.jsx)(x.Z,{id:"keyakinan",children:"indonesia"===n?"Keyakinan dan Nilai-Nilai Pribadi":"Personal Believes and Values"}),(0,w.jsxs)(Z.Z,{row:!0,"aria-labelledby":"keyakinan",name:"nilaiYakin",id:"nilaiYakin",value:ka,onChange:Ha,children:[(0,w.jsx)(j.Z,{value:0,control:(0,w.jsx)(y.Z,{}),label:"indonesia"===n?"Tidak":"No"}),(0,w.jsx)(j.Z,{value:1,control:(0,w.jsx)(y.Z,{}),label:"indonesia"===n?"Ya (Tidak mau imunisasi/Tidak mau transfusi/Tidak mau pulang sabtu/Vegetarian":"Yes (Won't immunization/Won't Transfusion/Won't go home on Saturday/Vegetarian)"})]})]}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"textNilaiYakin",name:"textNilaiYakin",disabled:"1"!==ka,label:"indonesia"===n?"Jika ya, sebutkan":"If yes, mention",required:!0,value:ja,onChange:Ha,helperText:Oa.textNilaiYakin})]}),(0,w.jsxs)(d.Z,{fullWidth:!0,required:!0,children:[(0,w.jsx)(o.Z,{id:"agama",children:"indonesia"===n?"Status Pernikahan":"Marital Status"}),(0,w.jsx)(u.Z,{labelId:"statusNikah",id:"statusNikah",name:"statusNikah",value:fa,onChange:Ha,children:G&&G.map((function(a){return(0,w.jsx)(m.Z,{value:a.stat_id,children:a.stat_ket},"jenisID"+a.stat_id)}))})]}),(0,w.jsxs)(d.Z,{fullWidth:!0,required:!0,children:[(0,w.jsx)(o.Z,{id:"pendidikan",children:"indonesia"===n?"Pendidikan":"Education"}),(0,w.jsx)(u.Z,{labelId:"statusPendidikan",id:"statusPendidikan",name:"statusPendidikan",value:Na,onChange:Ha,children:q&&q.map((function(a){return(0,w.jsx)(m.Z,{value:a.pend_id,children:a.pend_nama},"pnddkn"+a.pend_id)}))})]}),(0,w.jsxs)(d.Z,{required:!0,children:[(0,w.jsx)(x.Z,{id:"kewarganegaraan",children:"indonesia"===n?"Kewarganegaraan":"Nationality"}),(0,w.jsxs)(Z.Z,{row:!0,"aria-labelledby":"statusWarganegara",name:"statusWarganegara",value:xa,onChange:Ha,children:[(0,w.jsx)(j.Z,{value:"1",control:(0,w.jsx)(y.Z,{}),label:"indonesia"===n?"WNI":"Citizen"}),(0,w.jsx)(j.Z,{value:"2",control:(0,w.jsx)(y.Z,{}),label:"indonesia"===n?"WNA":"Foreigner"})]})]}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"bahasa",name:"bahasa",label:"indonesia"===n?"Bahasa":"Language",required:!0,value:Da,onChange:Ha,helperText:Oa.bahasa,error:!!Oa.bahasa}),(0,w.jsxs)(d.Z,{fullWidth:!0,required:!0,children:[(0,w.jsx)(o.Z,{id:"pekerjaan",children:"indonesia"===n?"Pekerjaan":"Occupation"}),(0,w.jsx)(u.Z,{labelId:"infoKerja",id:"infoKerja",name:"infoKerja",value:Ca,onChange:Ha,children:L&&L.map((function(a){return(0,w.jsx)(m.Z,{value:a.ref_pkrjn_id,children:a.ref_pkrjn_nama},"pkrjn"+a.ref_pkrjn_id)}))})]}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"infoAyah",name:"infoAyah",label:"indonesia"===n?"Nama Bapak":"Father's Name",required:!0,value:ya,onChange:Ha,helperText:Oa.infoAyah,error:!!Oa.infoAyah}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"infoIstriSuami",name:"infoIstriSuami",label:"indonesia"===n?"Nama Suami / Istri":"Husband's / Wife's Name",required:!0,value:Za,onChange:Ha,helperText:Oa.infoIstriSuami,error:!!Oa.infoIstriSuami}),(0,w.jsxs)(l.Z,{spacing:1,children:[(0,w.jsxs)(d.Z,{fullWidth:!0,required:!0,children:[(0,w.jsx)(o.Z,{id:"penjamin",children:"indonesia"===n?"Penjamin":"Insurance"}),(0,w.jsxs)(u.Z,{labelId:"penjamin",id:"penjamin",name:"penjamin",value:_a,onChange:Ha,children:[(0,w.jsx)(m.Z,{value:1,children:"Umum - Public"}),(0,w.jsx)(m.Z,{value:2,children:"BPJS - BPJS"}),(0,w.jsx)(m.Z,{value:3,children:"Perusahaan - Company"}),(0,w.jsx)(m.Z,{value:4,children:"Asuransi - Insurance"})]})]}),(0,w.jsx)(p.Z,{fullWidth:!0,id:"noPenjamin",name:"noPenjamin",label:"indonesia"===n?"No Penjamin":"Insurance No",required:!0,value:Ia,onChange:Ha,helperText:Oa.noPenjamin})]}),(0,w.jsxs)(l.Z,{direction:"row",spacing:2,children:[(0,w.jsx)(p.Z,{fullWidth:!0,id:"namaWaliDarurat",name:"namaWaliDarurat",label:"indonesia"===n?"Nama Wali":"Guarantor's Name",required:!0,value:ba,onChange:Ha,helperText:Oa.namaWaliDarurat,error:!!Oa.namaWaliDarurat}),(0,w.jsx)(v.t7,{id:"telponWaliDarurat",name:"telponWaliDarurat",fullWidth:!0,label:"indonesia"===n?"Telp Penanggung":"Guarantor's Phone Number",required:!0,className:Sa.inputPhone,inputType:"phone-number",value:va,onChange:Ha,helperText:Oa.telponWaliDarurat,error:!!Oa.telponWaliDarurat})]}),(0,w.jsx)(v.aG,{is_required:!0,is_readonly:!1,field_name:"indonesia"===n?"Foto Identitas - KTP":"ID Photo",default_value:Pa,value:Pa,form_child_id:"",handleChange:function(a){z({key:"filePhoto",value:a.target.value})},is_error:!1}),(0,w.jsx)(g.Z,{variant:"contained",onClick:function(){var a,e=(a=V,D().object(C).validate(a));if(ie(!0),!e.error)return F(V,{success:function(){E(),Ua(!0),ie(!1)},failed:function(a){Ra(a),ie(!1)}});if(e.error.details[0].context&&e.error.details[0].context.key){var n=e.error.details[0].context.key;Qa((0,t.Z)((0,t.Z)({},Oa),{},(0,i.Z)({},n,e.error.details[0].message)))}Ra(e.error.details[0].message||"Mohon Lengkapi Form!."),ie(!1)},disabled:ne,children:"indonesia"===n?"Daftar":"Submit"})]})})]})}))}}]);
//# sourceMappingURL=131.c2b19062.chunk.js.map