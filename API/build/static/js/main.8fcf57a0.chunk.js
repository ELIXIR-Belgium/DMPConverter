(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,n){e.exports=n(75)},64:function(e,t,n){},65:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n.n(l),i=(n(64),n(13)),c=n(11),s=n(16),u=n(17),d=n(20),m=(n(65),n(43)),p=(n(67),"https://datahub.elixir-belgium.org/converter"),E={labelIdle:'Drag&Drop or  <span class="filepond--label-action">Browse</span> your file exported from DMPonline in .TXT format.'},h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.selectedFunder,t={url:"".concat(p,"/convert/").concat(e),process:{onload:function(e){var t=document.createElement("iframe");t.id="iframe"+Math.random(),t.style.display="none",document.body.appendChild(t),t.src="".concat(p,"/download/").concat(e,".pdf")}}};return r.a.createElement("div",{className:"uploadContainer"},r.a.createElement(m.FilePond,Object.assign({},E,{allowMultiple:!0,server:t})))}}]),t}(a.Component),b=n(109),f=n(101),O=n(111),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changeFunder,n=e.selectedFunder,a=function(e){t(e.target.value)};return r.a.createElement("div",{className:"funderType"},r.a.createElement(O.a,{component:"legend"},"Convert from ELIXIR Belgium template to:"),r.a.createElement("div",null,["FWO","ERC","H2020"].map((function(e,t){return r.a.createElement(f.a,{name:"funder",value:e,control:r.a.createElement(b.a,{color:"primary"}),label:e,key:t,checked:e===n,onChange:a})}))))}}]),t}(a.Component),y=n(110),v=n(107),T=n(106),I=n(108),C=n(105),N=n(103),R=n(104),A=n(102);function S(e){var t=e.open,n=e.setOpen,a=function(){n({openDialog:!1})};return r.a.createElement("div",null,r.a.createElement(I.a,{open:t,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:"true",maxWidth:"md"},r.a.createElement(A.a,{id:"alert-dialog-title"},"DMP Converter terms & conditions"),r.a.createElement(N.a,null,r.a.createElement(R.a,{id:"alert-dialog-description"},"MIT License",r.a.createElement("br",null),r.a.createElement("br",null),"Copyright (c) 2020 DMP Converter",r.a.createElement("br",null),r.a.createElement("br",null),'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',r.a.createElement("br",null),r.a.createElement("br",null),"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",r.a.createElement("br",null),r.a.createElement("br",null),'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.')),r.a.createElement(C.a,null,r.a.createElement(T.a,{onClick:a,color:"primary"},"Close"))))}function j(e){var t=e.open,n=e.setOpen,a=function(){n({openPPDialog:!1})};return r.a.createElement("div",null,r.a.createElement(I.a,{open:t,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:"true",maxWidth:"md"},r.a.createElement(A.a,{id:"alert-dialog-title"},"DMPConverter Privacy Policy"),r.a.createElement(N.a,null,r.a.createElement(R.a,{id:"alert-dialog-description",style:{textAlign:"justify"}},r.a.createElement("strong",null,"Our contact "),r.a.createElement("br",null),"ELIXIR Belgium ",r.a.createElement("br",null),"VIB-UGent Center for Plant Systems Biology (PSB) ",r.a.createElement("br",null),"Technologiepark 71, ",r.a.createElement("br",null),"9052 Zwijnaarde ",r.a.createElement("br",null),"Phone: +32 (0)9 331 36 94 ",r.a.createElement("br",null),"Email: datahub@elixir-belgium.org ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Type of personal information we collect "),r.a.createElement("br",null),"We collect and process the data contained in the file uploaded by the user to convert the format of the file. ",r.a.createElement("br",null),"We don't receive nor store any other personal information. ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"How we store your personal information")," ",r.a.createElement("br",null),"The data contained in the file uploaded by the user is securely stored in the website server storage for 15 minutes. ",r.a.createElement("br",null),r.a.createElement("br",null),"We keep the data contained in the file uploaded by the user for 15 minutes after the user has started the conversion of a file with DMPConverter. After this period of time, all data will be automatically deleted. ",r.a.createElement("br",null),"We don't store any other personal information. We only store the converted file for 15 minutes in order to be available for the user to download. ",r.a.createElement("br",null),r.a.createElement("br",null),"The data contained in the file uploaded by the user will not be provided to third parties, unless there is an appropriate legal ground for it, or you have given your explicit consent.")),r.a.createElement(C.a,null,r.a.createElement(T.a,{onClick:a,color:"primary"},"Close"))))}var P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={termsAgreed:!1,openDialog:!1,openPPDialog:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.state.termsAgreed?"mainContainer":"mainContainer disabled"},r.a.createElement("h1",null,"DMP Converter"),r.a.createElement("small",null,"Select the source file(s) to convert."),r.a.createElement(g,this.props),r.a.createElement(h,this.props)),r.a.createElement("div",{className:"center"},r.a.createElement(O.a,{component:"legend"},r.a.createElement(y.a,{color:"primary",inputProps:{"aria-label":"primary checkbox"},onClick:function(){e.setState({termsAgreed:!e.state.termsAgreed})}}),"I have read, understand and agree to the",r.a.createElement(v.a,{href:"#",onClick:function(){e.setState({openDialog:!0})}}," ","terms and conditions"," "),"and",r.a.createElement(v.a,{href:"#",onClick:function(){e.setState({openPPDialog:!0})}}," ","privacy policy"))),r.a.createElement(S,{open:this.state.openDialog,setOpen:function(t){return e.setState(t)}}),r.a.createElement(j,{open:this.state.openPPDialog,setOpen:function(t){return e.setState(t)}}))}}]),t}(a.Component),D=n(34),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,this.props))}}]),t}(a.Component),w=Object(D.b)((function(e){return{selectedFunder:e.selectedFunder}}),(function(e){return{changeFunder:function(t){return e(function(e){return{type:"CHANGE_FUNDER",payload:{funder:e}}}(t))}}}))(F),H=n(30),W=n(40),L={selectedFunder:"FWO"},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FUNDER":return Object(W.a)({},e,{selectedFunder:t.payload.funder});default:return Object(W.a)({},e)}},M=n(46),B=Object(H.c)(k,Object(H.a)(M.a));o.a.render(r.a.createElement(D.a,{store:B},r.a.createElement(w,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.8fcf57a0.chunk.js.map