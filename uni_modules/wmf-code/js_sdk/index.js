!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self).CODE={})}(this,function(t){"use strict";var b=function(){return(b=Object.assign||function(t){for(var i,e=1,r=arguments.length;e<r;e++)for(var o in i=arguments[e])Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);return t}).apply(this,arguments)};function w(t,h,n,a){return new(n=n||Promise)(function(e,i){function r(t){try{s(a.next(t))}catch(t){i(t)}}function o(t){try{s(a.throw(t))}catch(t){i(t)}}function s(t){var i;t.done?e(t.value):((i=t.value)instanceof n?i:new n(function(t){t(i)})).then(r,o)}s((a=a.apply(t,h||[])).next())})}function m(e,r){var o,s,h,n={label:0,sent:function(){if(1&h[0])throw h[1];return h[1]},trys:[],ops:[]},t={next:i(0),throw:i(1),return:i(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function i(i){return function(t){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,s&&(h=2&i[0]?s.return:i[0]?s.throw||((h=s.return)&&h.call(s),0):s.next)&&!(h=h.call(s,i[1])).done)return h;switch(s=0,(i=h?[2&i[0],h.value]:i)[0]){case 0:case 1:h=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,s=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(!(h=0<(h=n.trys).length&&h[h.length-1])&&(6===i[0]||2===i[0])){n=0;continue}if(3===i[0]&&(!h||i[1]>h[0]&&i[1]<h[3])){n.label=i[1];break}if(6===i[0]&&n.label<h[1]){n.label=h[1],h=i;break}if(h&&n.label<h[2]){n.label=h[2],n.ops.push(i);break}h[2]&&n.ops.pop(),n.trys.pop();continue}i=r.call(e,n)}catch(t){i=[6,t],s=0}finally{o=h=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,t])}}}function n(t,i,e,r){return e=t.createLinearGradient(0,0,i,e),1===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(1,r[0])),2===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(1,r[1])),3===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.5,r[1]),e.addColorStop(1,r[2])),4===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.35,r[1]),e.addColorStop(.7,r[2]),e.addColorStop(1,r[3])),5===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.35,r[1]),e.addColorStop(.6,r[2]),e.addColorStop(.8,r[3]),e.addColorStop(1,r[4])),6===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.25,r[1]),e.addColorStop(.45,r[2]),e.addColorStop(.65,r[3]),e.addColorStop(.85,r[4]),e.addColorStop(1,r[5])),7===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.15,r[1]),e.addColorStop(.35,r[2]),e.addColorStop(.45,r[3]),e.addColorStop(.65,r[4]),e.addColorStop(.85,r[5]),e.addColorStop(1,r[6])),8===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.1,r[1]),e.addColorStop(.25,r[2]),e.addColorStop(.45,r[3]),e.addColorStop(.65,r[4]),e.addColorStop(.85,r[5]),e.addColorStop(.9,r[6]),e.addColorStop(1,r[7])),9===r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.2,r[1]),e.addColorStop(.3,r[2]),e.addColorStop(.5,r[3]),e.addColorStop(.6,r[4]),e.addColorStop(.7,r[5]),e.addColorStop(.8,r[6]),e.addColorStop(.9,r[7]),e.addColorStop(1,r[8])),10<=r.length&&(e.addColorStop(0,r[0]),e.addColorStop(.1,r[1]),e.addColorStop(.2,r[2]),e.addColorStop(.3,r[3]),e.addColorStop(.4,r[4]),e.addColorStop(.5,r[5]),e.addColorStop(.6,r[6]),e.addColorStop(.7,r[7]),e.addColorStop(.85,r[8]),e.addColorStop(1,r[9])),e}var k=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],g=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],S=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],v=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],y=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],C=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],u=[[2,1,2,2,2,2,0,0],[2,2,2,1,2,2,0,0],[2,2,2,2,2,1,0,0],[1,2,1,2,2,3,0,0],[1,2,1,3,2,2,0,0],[1,3,1,2,2,2,0,0],[1,2,2,2,1,3,0,0],[1,2,2,3,1,2,0,0],[1,3,2,2,1,2,0,0],[2,2,1,2,1,3,0,0],[2,2,1,3,1,2,0,0],[2,3,1,2,1,2,0,0],[1,1,2,2,3,2,0,0],[1,2,2,1,3,2,0,0],[1,2,2,2,3,1,0,0],[1,1,3,2,2,2,0,0],[1,2,3,1,2,2,0,0],[1,2,3,2,2,1,0,0],[2,2,3,2,1,1,0,0],[2,2,1,1,3,2,0,0],[2,2,1,2,3,1,0,0],[2,1,3,2,1,2,0,0],[2,2,3,1,1,2,0,0],[3,1,2,1,3,1,0,0],[3,1,1,2,2,2,0,0],[3,2,1,1,2,2,0,0],[3,2,1,2,2,1,0,0],[3,1,2,2,1,2,0,0],[3,2,2,1,1,2,0,0],[3,2,2,2,1,1,0,0],[2,1,2,1,2,3,0,0],[2,1,2,3,2,1,0,0],[2,3,2,1,2,1,0,0],[1,1,1,3,2,3,0,0],[1,3,1,1,2,3,0,0],[1,3,1,3,2,1,0,0],[1,1,2,3,1,3,0,0],[1,3,2,1,1,3,0,0],[1,3,2,3,1,1,0,0],[2,1,1,3,1,3,0,0],[2,3,1,1,1,3,0,0],[2,3,1,3,1,1,0,0],[1,1,2,1,3,3,0,0],[1,1,2,3,3,1,0,0],[1,3,2,1,3,1,0,0],[1,1,3,1,2,3,0,0],[1,1,3,3,2,1,0,0],[1,3,3,1,2,1,0,0],[3,1,3,1,2,1,0,0],[2,1,1,3,3,1,0,0],[2,3,1,1,3,1,0,0],[2,1,3,1,1,3,0,0],[2,1,3,3,1,1,0,0],[2,1,3,1,3,1,0,0],[3,1,1,1,2,3,0,0],[3,1,1,3,2,1,0,0],[3,3,1,1,2,1,0,0],[3,1,2,1,1,3,0,0],[3,1,2,3,1,1,0,0],[3,3,2,1,1,1,0,0],[3,1,4,1,1,1,0,0],[2,2,1,4,1,1,0,0],[4,3,1,1,1,1,0,0],[1,1,1,2,2,4,0,0],[1,1,1,4,2,2,0,0],[1,2,1,1,2,4,0,0],[1,2,1,4,2,1,0,0],[1,4,1,1,2,2,0,0],[1,4,1,2,2,1,0,0],[1,1,2,2,1,4,0,0],[1,1,2,4,1,2,0,0],[1,2,2,1,1,4,0,0],[1,2,2,4,1,1,0,0],[1,4,2,1,1,2,0,0],[1,4,2,2,1,1,0,0],[2,4,1,2,1,1,0,0],[2,2,1,1,1,4,0,0],[4,1,3,1,1,1,0,0],[2,4,1,1,1,2,0,0],[1,3,4,1,1,1,0,0],[1,1,1,2,4,2,0,0],[1,2,1,1,4,2,0,0],[1,2,1,2,4,1,0,0],[1,1,4,2,1,2,0,0],[1,2,4,1,1,2,0,0],[1,2,4,2,1,1,0,0],[4,1,1,2,1,2,0,0],[4,2,1,1,1,2,0,0],[4,2,1,2,1,1,0,0],[2,1,2,1,4,1,0,0],[2,1,4,1,2,1,0,0],[4,1,2,1,2,1,0,0],[1,1,1,1,4,3,0,0],[1,1,1,3,4,1,0,0],[1,3,1,1,4,1,0,0],[1,1,4,1,1,3,0,0],[1,1,4,3,1,1,0,0],[4,1,1,1,1,3,0,0],[4,1,1,3,1,1,0,0],[1,1,3,1,4,1,0,0],[1,1,4,1,3,1,0,0],[3,1,1,1,4,1,0,0],[4,1,1,1,3,1,0,0],[2,1,1,4,1,2,0,0],[2,1,1,2,1,4,0,0],[2,1,1,2,3,2,0,0],[2,3,3,1,1,1,2,0]],F=function(t){return uni.upx2px(Number(t))},q=function(t){return uni.getSystemInfoSync()[t||"pixelRatio"]},P=function(){var t=new Date;return t.toLocaleDateString().replace(/\//g,"-")+" "+t.toTimeString().slice(0,8)},T={"MP-ALIPAY":function(t){return F(t)*q()},"MP-WEIXIN":function(t){return F(t)},"MP-BAIDU":function(t){return F(t)},"MP-TOUTIAO":function(t){return F(t)},"MP-QQ":function(t){return F(t)},"MP-LARK":function(t){return F(t)},"MP-KUAISHOU":function(t){return F(t)},"MP-360":function(t){return F(t)},"QUICKAPP-WEBVIEW":function(t){return F(t)},"QUICKAPP-WEBVIEW-UNION":function(t){return F(t)},"QUICKAPP-WEBVIEW-HUAWEI":function(t){return F(t)},MP:function(t){return F(t)},"APP-PLUS":function(t){return F(t)},NVUE:function(t){return F(t)},H5:function(t){return F(t)},none:function(t){return F(t)}},I=function(t){var e=F(Number(t.width)),r=F(Number(t.height)),i=q("pixelRatio"),o=e*i,s=r*i;return new Promise(function(i){"[object String]"==Object.prototype.toString.call(t.id)?uni.canvasToTempFilePath({canvasId:t.id,width:e,height:r,destWidth:o,destHeight:s,fileType:t.type||"jpg",quality:t.quality||1,complete:function(t){i(t)}},t.ctx):"[object Object]"==Object.prototype.toString.call(t.id)&&t.id.toTempFilePath(0,0,e,r,o,s,t.type||"png",1,function(t){i(t)})})},h=(i.prototype.setmask=function(t,i){var e=null;i<t&&(e=t,t=i,i=e),e=i,e*=i,e+=i,e>>=1,this.framask[e+=t]=1},i.prototype.getWidth=function(){return this.width},i.prototype.putalign=function(t,i){this.qrframe[t+this.width*i]=1;for(var e=-2;e<2;e++)this.qrframe[t+e+this.width*(i-2)]=1,this.qrframe[t-2+this.width*(i+e+1)]=1,this.qrframe[t+2+this.width*(i+e)]=1,this.qrframe[t+e+1+this.width*(i+2)]=1;for(e=0;e<2;e++)this.setmask(t-1,i+e),this.setmask(t+1,i-e),this.setmask(t-e,i-1),this.setmask(t+e,i+1)},i.prototype.modnn=function(t){for(;255<=t;)t=((t-=255)>>8)+(255&t);return t},i.prototype.appendrs=function(t,i,e,r){for(var o,s=0;s<r;s++)this.strinbuf[e+s]=0;for(s=0;s<i;s++){if(255!=(o=y[this.strinbuf[t+s]^this.strinbuf[e]]))for(var h=1;h<r;h++)this.strinbuf[e+h-1]=this.strinbuf[e+h]^C[this.modnn(o+this.genpoly[r-h])];else for(h=e;h<e+r;h++)this.strinbuf[h]=this.strinbuf[h+1];this.strinbuf[e+r-1]=255==o?0:C[this.modnn(o+this.genpoly[0])]}},i.prototype.ismasked=function(t,i){var e;return i<t&&(e=t,t=i,i=e),e=i,e+=i*i,e>>=1,this.framask[e+=t]},i.prototype.badruns=function(t){for(var i=0,e=0;e<=t;e++)5<=this.rlens[e]&&(i+=this.N1+this.rlens[e]-5);for(e=3;e<t-1;e+=2)this.rlens[e-2]==this.rlens[e+2]&&this.rlens[e+2]==this.rlens[e-1]&&this.rlens[e-1]==this.rlens[e+1]&&3*this.rlens[e-1]==this.rlens[e]&&(0==this.rlens[e-3]||t<e+3||3*this.rlens[e-3]>=4*this.rlens[e]||3*this.rlens[e+3]>=4*this.rlens[e])&&(i+=this.N3);return i},i.prototype.toNum=function(t){return 0===t?1:0},i.prototype.applymask=function(t){switch(t){case 0:for(var i=0;i<this.width;i++)for(var e=0;e<this.width;e++)e+i&1||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1);break;case 1:for(i=0;i<this.width;i++)for(e=0;e<this.width;e++)1&i||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1);break;case 2:for(i=0;i<this.width;i++)for(var r=0,e=0;e<this.width;e++,r++)(r=3==r?0:r)||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1);break;case 3:for(var o=0,i=0;i<this.width;i++,o++)for(r=o=3==o?0:o,e=0;e<this.width;e++,r++)(r=3==r?0:r)||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1);break;case 4:for(i=0;i<this.width;i++)for(r=0,o=i>>1&1,e=0;e<this.width;e++,r++)(o=3==r?(r=0)<o?0:1:o)||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1);break;case 5:for(o=0,i=0;i<this.width;i++,o++){3==o&&(o=0);for(r=0,e=0;e<this.width;e++,r++)3==r&&(r=0),(e&i&1)+this.toNum(this.toNum(r)|this.toNum(o))||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1)}break;case 6:for(o=0,i=0;i<this.width;i++,o++){3==o&&(o=0);for(r=0,e=0;e<this.width;e++,r++)(e&i&1)+((r=3==r?0:r)&&(r==o?1:0))&1||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1)}break;case 7:for(o=0,i=0;i<this.width;i++,o++){3==o&&(o=0);for(r=0,e=0;e<this.width;e++,r++)((r=3==r?0:r)&&(r==o?1:0))+(e+i&1)&1||this.ismasked(e,i)||(this.qrframe[e+i*this.width]^=1)}}},i.prototype.Genframe=function(t){var i=t.length,e=t.slice(0),r=0,o=0,s=0,h=0,n=0,a=0;do{if(o=4*(this.ecclevel-1)+16*(++n-1),this.neccblk1=v[o++],this.neccblk2=v[o++],this.datablkw=v[o++],this.eccblkwid=v[o],i<=(o=this.datablkw*(this.neccblk1+this.neccblk2)+this.neccblk2-3+(n<=9?1:0)))break}while(n<40);this.width=17+4*n;for(var h=this.datablkw+(this.datablkw+this.eccblkwid)*(this.neccblk1+this.neccblk2)+this.neccblk2,c=0;c<h;c++)this.eccbuf[c]=0;for(c=0;c<this.width*this.width;c++)this.qrframe[c]=0;for(c=0;c<(this.width*(this.width+1)+1)/2;c++)this.framask[c]=0;for(c=0;c<3;c++){s=o=0,1==c&&(o=this.width-7),2==c&&(s=this.width-7),this.qrframe[s+3+this.width*(o+3)]=1;for(var l=0;l<6;l++)this.qrframe[s+l+this.width*o]=1,this.qrframe[s+this.width*(o+l+1)]=1,this.qrframe[s+6+this.width*(o+l)]=1,this.qrframe[s+l+1+this.width*(o+6)]=1;for(l=1;l<5;l++)this.setmask(s+l,o+1),this.setmask(s+1,o+l+1),this.setmask(s+5,o+l),this.setmask(s+l+1,o+5);for(l=2;l<4;l++)this.qrframe[s+l+this.width*(o+2)]=1,this.qrframe[s+2+this.width*(o+l+1)]=1,this.qrframe[s+4+this.width*(o+l)]=1,this.qrframe[s+l+1+this.width*(o+4)]=1}if(1<n)for(i=k[n],s=this.width-7;;){for(r=this.width-7;i-3<r&&(this.putalign(r,s),!(r<i));)r-=i;if(s<=i+9)break;s-=i,this.putalign(6,s),this.putalign(s,6)}this.qrframe[8+this.width*(this.width-8)]=1;for(var d=0;d<7;d++)this.setmask(7,d),this.setmask(this.width-8,d),this.setmask(7,d+this.width-7);for(l=0;l<8;l++)this.setmask(l,7),this.setmask(l+this.width-8,7),this.setmask(l,this.width-8);for(l=0;l<9;l++)this.setmask(l,8);for(l=0;l<8;l++)this.setmask(l+this.width-8,8),this.setmask(8,l);for(d=0;d<7;d++)this.setmask(8,d+this.width-7);for(l=0;l<this.width-14;l++)1&l?(this.setmask(8+l,6),this.setmask(6,8+l)):(this.qrframe[8+l+6*this.width]=1,this.qrframe[6+this.width*(8+l)]=1);if(6<n)for(i=g[n-7],o=17,l=0;l<6;l++)for(d=0;d<3;d++,o--)1&(11<o?n>>o-12:i>>o)?(this.qrframe[5-l+this.width*(2-d+this.width-11)]=1,this.qrframe[2-d+this.width-11+this.width*(5-l)]=1):(this.setmask(5-l,2-d+this.width-11),this.setmask(2-d+this.width-11,5-l));for(d=0;d<this.width;d++)for(l=0;l<=d;l++)this.qrframe[l+this.width*d]&&this.setmask(l,d);h=e.length;for(var f=0;f<h;f++)this.eccbuf[f]=e.charCodeAt(f);if(this.strinbuf=this.eccbuf.slice(0),(r=this.datablkw*(this.neccblk1+this.neccblk2)+this.neccblk2)-2<=h&&(h=r-2,9<n&&h--),a=h,9<n){for(this.strinbuf[a+2]=0,this.strinbuf[a+3]=0;a--;)i=this.strinbuf[a],this.strinbuf[a+3]|=255&i<<4,this.strinbuf[a+2]=i>>4;this.strinbuf[2]|=255&h<<4,this.strinbuf[1]=h>>4,this.strinbuf[0]=64|h>>12}else{for(this.strinbuf[a+1]=0,this.strinbuf[a+2]=0;a--;)i=this.strinbuf[a],this.strinbuf[a+2]|=255&i<<4,this.strinbuf[a+1]=i>>4;this.strinbuf[1]|=255&h<<4,this.strinbuf[0]=64|h>>4}for(a=h+3-(n<10?1:0);a<r;)this.strinbuf[a++]=236,this.strinbuf[a++]=17;this.genpoly[0]=1;for(f=0;f<this.eccblkwid;f++){this.genpoly[f+1]=1;for(var u=f;0<u;u--)this.genpoly[u]=this.genpoly[u]?this.genpoly[u-1]^C[this.modnn(y[this.genpoly[u]]+f)]:this.genpoly[u-1];this.genpoly[0]=C[this.modnn(y[this.genpoly[0]]+f)]}for(f=0;f<=this.eccblkwid;f++)this.genpoly[f]=y[this.genpoly[f]];o=r;for(s=0,f=0;f<this.neccblk1;f++)this.appendrs(s,this.datablkw,o,this.eccblkwid),s+=this.datablkw,o+=this.eccblkwid;for(f=0;f<this.neccblk2;f++)this.appendrs(s,this.datablkw+1,o,this.eccblkwid),s+=this.datablkw+1,o+=this.eccblkwid;for(f=s=0;f<this.datablkw;f++){for(u=0;u<this.neccblk1;u++)this.eccbuf[s++]=this.strinbuf[f+u*this.datablkw];for(u=0;u<this.neccblk2;u++)this.eccbuf[s++]=this.strinbuf[this.neccblk1*this.datablkw+f+u*(this.datablkw+1)]}for(u=0;u<this.neccblk2;u++)this.eccbuf[s++]=this.strinbuf[this.neccblk1*this.datablkw+a+u*(this.datablkw+1)];for(f=0;f<this.eccblkwid;f++)for(u=0;u<this.neccblk1+this.neccblk2;u++)this.eccbuf[s++]=this.strinbuf[r+f+u*this.eccblkwid];this.strinbuf=this.eccbuf,r=s=this.width-1,o=h=1;for(var p=(this.datablkw+this.eccblkwid)*(this.neccblk1+this.neccblk2)+this.neccblk2,f=0;f<p;f++){i=this.strinbuf[f];for(u=0;u<8;u++,i<<=1)for(128&i&&(this.qrframe[r+this.width*s]=1);h?r--:(r++,o?0!=s?s--:(o=0===o?1:0,6==(r-=2)&&(r--,s=9)):s!=this.width-1?s++:(o=0===o?1:0,6==(r-=2)&&(r--,s-=8))),h=0<h?0:1,this.ismasked(r,s););}this.strinbuf=this.qrframe.slice(0),s=3e4;for(var b=i=0;b<8&&(this.applymask(b),(r=this.badcheck())<s&&(s=r,i=b),7!=i);b++)this.qrframe=this.strinbuf.slice(0);i!=o&&this.applymask(i),s=S[i+(this.ecclevel-1<<3)];for(b=0;b<8;b++,s>>=1)1&s&&(this.qrframe[this.width-1-b+8*this.width]=1,b<6?this.qrframe[8+this.width*b]=1:this.qrframe[8+this.width*(b+1)]=1);for(b=0;b<7;b++,s>>=1)1&s&&(this.qrframe[8+this.width*(this.width-7+b)]=1,b?this.qrframe[6-b+8*this.width]=1:this.qrframe[7+8*this.width]=1);return this.qrframe},i.prototype.badcheck=function(){for(var t=0,i=0,e=0,r=0,o=0,s=0,h=0,n=0;n<this.width-1;n++)for(var a=0;a<this.width-1;a++)(this.qrframe[a+this.width*n]&&this.qrframe[a+1+this.width*n]&&this.qrframe[a+this.width*(n+1)]&&this.qrframe[a+1+this.width*(n+1)]||!(this.qrframe[a+this.width*n]||this.qrframe[a+1+this.width*n]||this.qrframe[a+this.width*(n+1)]||this.qrframe[a+1+this.width*(n+1)]))&&(t+=this.N2);for(n=0;n<this.width;n++){for(e=r=s=this.rlens[0]=0;s<this.width;s++)(o=this.qrframe[s+this.width*n])==r?this.rlens[e]++:this.rlens[++e]=1,i+=(r=o)?1:-1;t+=this.badruns(e)}var c=i=i<0?-i:i,l=0;for(c+=c<<2,c<<=1;c>this.width*this.width;)c-=this.width*this.width,l++;t+=l*this.N4;for(a=0;a<this.width;a++){for(e=r=h=this.rlens[0]=0;h<this.width;h++)(o=this.qrframe[a+this.width*h])==r?this.rlens[e]++:this.rlens[++e]=1,r=o;t+=this.badruns(e)}return t},i);function i(t){void 0===t&&(t=2),this.strinbuf=[],this.eccbuf=[],this.qrframe=[],this.framask=[],this.rlens=[],this.genpoly=[],this.ecclevel=2,this.N1=3,this.N2=3,this.N3=40,this.N4=10,this.neccblk2=0,this.width=0,this.neccblk1=0,this.datablkw=0,this.eccblkwid=0,this.ecclevel=t}function d(t){return 48<=t&&t<=57?1:32<=t&&t<=95?2:t<32?3:4}function f(t,i){return void 0===i?32<=t?t-32:t+64:parseInt(String.fromCharCode(t)+String.fromCharCode(i))}function p(t,i){return 1==(t=e(t))||(2==t||(3==t&&3==i||4==t&&4==i))}function o(s,h,t,n){var i=this,e=T[h.source||"none"](h.width),r=T[h.source||"none"](h.height);t.setFillStyle(h.bgColor||"#FFFFFF");var o=new l(t,e,r);h.color?a(t,e,r,h.color||["#000000"]):t.setFillStyle("#000000"),c[h.type||"CODE128"](h.code,o,r),t.draw(!1,function(o){return w(i,void 0,void 0,function(){var i,e,r;return m(this,function(t){switch(t.label){case 0:return n?(i=n,e=[b({},o)],r={createTime:P(),takeUpTime:(new Date).getTime()-s},[4,I({width:h.width,height:h.height,id:h.id,ctx:h.ctx||null})]):[3,2];case 1:return i.apply(void 0,[b.apply(void 0,e.concat([(r.img=t.sent(),r.model=q("model"),r.system=q("system"),r.platform=q("platform"),r.code=h.code,r.with=F(h.width),r.height=F(h.height),r.id="[object String]"==Object.prototype.toString.call(h.id)?h.id:"nvue",r)]))]),[3,3];case 2:t.label=3;case 3:return[2]}})})})}var e=function(t){return 48<=t&&t<=57?1:32<=t&&t<=95?2:t<32?3:4},x={CHAR_TILDE:102},A=function(t){var s={currcs:5},i=function(t){for(var i=[],e=0;e<t.length;e++)i.push(t.charCodeAt(e));return i}(t),e=126==i[0]?1:0,r=0<i.length?d(i[e++]):2,t=0<i.length?d(i[e++]):2;s.currcs=(e=0,e+=3==r?1:0,e+=4==r?-1:0,e+=3==t?1:0,0<(e+=4==t?-1:0)?3:4),s.currcs=function(t,i){for(var e=0;e<t.length;e++){var r=t[e];if((r<48||57<r)&&126!=r)return i}return 5}(i,s.currcs);var o=[];switch(s.currcs){case 3:o.push(103);break;case 4:o.push(104);break;default:o.push(105)}for(var h=0;h<i.length;h++){var n=i[h];n in x&&(o.push(x[n]),n=i[++h]);var a=i.length>h+1?i[h+1]:-1,o=o.concat(function(t,i,e){var r=[],o=-1;if(p(t,e))5==e&&(-1==i?(o=100,e=4):p(i,e)||(e=p(i,3)?(o=101,3):(o=100,4)));else if(-1==i||p(i,e))o=98;else switch(e){case 3:o=100,e=4;break;case 4:o=101,e=3}return-1!=o?(r.push(o),r.push(f(t))):5==e?r.push(f(t,i)):r.push(f(t)),s.currcs=e,r}(n,a,s.currcs));5==s.currcs&&h++}for(var c=o[0],l=1;l<o.length;l++)c+=l*o[l];return o.push(c%103),o.push(106),o},a=function(t,i,e,r){r=n(t,i,e,r);t.setFillStyle(r)},c={CODE128:function(t,i,e){for(var r=A(t),o=i.area.width/(11*(r.length-3)+35),s=i.area.left,h=i.area.top,n=e-i.area.top,a=0;a<r.length;a++)for(var c=r[a],l=0;l<8;l+=2){var d=u[c][l]*o,f=u[c][l+1]*o;0<d&&i.fillFgRect(s,h,d,n),s+=d+f}},CODE39:function(t,i,e){console.error("条形码编码类型：CODE39暂未实现")},EAN13:function(t,i,e){-1!==t.search(/^[0-9]{12}$/)?console.error("条形码编码类型：EAN暂未实现"):console.error("条形码编码：code不符合EAN13规范")},UPCE:function(t,i,e){-1!==t.search(/^[0-9]{6}$/)?console.error("条形码编码类型：EAN暂未实现"):console.error("条形码编码：code不符合UPCE规范")},UPC:function(t,i,e){-1!==t.search(/^[0-9]{1}$/)?console.error("条形码编码类型：EAN暂未实现"):console.error("条形码编码：code不符合UPC规范")},ITF:function(t,i,e){-1!==t.search(/^([0-9]{2})+$/)?console.error("条形码编码类型：ITF暂未实现"):console.error("条形码编码：code不符合ITF规范")},ITF14:function(t,i,e){-1!==t.search(/^[0-9]{14}$/)?console.error("条形码编码类型：ITF14暂未实现"):console.error("条形码编码：code不符合ITF14规范")},MSI:function(t,i,e){-1!==t.search(/^[0-9]+$/)?console.error("条形码编码类型：MSI暂未实现"):console.error("条形码编码：code不符合MSI规范")},Codabar:function(t,i,e){-1!==t.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)?console.error("条形码编码类型：Codabar暂未实现"):console.error("条形码编码：code不符合Codabar规范")},Pharmacode:function(t,i,e){!isNaN(parseInt(t,10))&&3<=Number(t)&&Number(t)<=131070?console.error("条形码编码类型：Pharmacode暂未实现"):console.error("条形码编码：code不符合Pharmacode类型")}},l=(r.prototype.fillFgRect=function(t,i,e,r){this.FILLRECT(t,i,e,r)},r.prototype.fillBgRect=function(t,i,e,r){this.FILLRECT(t,i,e,r)},r.prototype.FILLRECT=function(t,i,e,r){this.ctx.fillRect(t,i,e,r)},r);function r(t,i,e){this.borderSize=0,this.paddingWidth=0,this.ctx=t,this.width=i,this.height=e,this.quiet=Math.round(this.width/40),this.area={width:i-2*this.paddingWidth-2*this.quiet,height:e-2*this.borderSize,top:this.borderSize-4,left:this.borderSize+this.quiet},this.fillBgRect(0,0,i,e),this.fillBgRect(0,this.borderSize,i,e-2*this.borderSize)}function N(s,h,t,i,e,n){var r=this,o=T[h.source||"none"]?T[h.source||"none"](h.size):F(h.size),a=T[h.source||"none"]?T[h.source||"none"](h.size):F(h.size),c=T[h.source||"none"]?T[h.source||"none"](h.size):F(h.size),l=(F(h.padding||0)||0)+(h.border?h.border.lineWidth||5:0),d=Math.round(o/(e+l)),f=Math.floor((o-d*e)/2);t.clearRect(0,0,a,c),t.setFillStyle(h.bgColor||"#FFFFFF"),t.fillRect(0,0,a,c),h.src&&t.drawImage(h.src,0,0,o,o),h.color?O(t,a,c,h.color):t.setFillStyle("#000000");for(var u=0;u<e;u++)for(var p=0;p<e;p++)i[p*e+u]&&(j[h.type||"none"],j[h.type||"none"](h.bgColor,t,d*u+f,d*p+f,d,d,h.source));h.img&&(W[(null===(l=h.img)||void 0===l?void 0:l.type)||"none"]?W[(null===(l=h.img)||void 0===l?void 0:l.type)||"none"](t,o,h.img,h.source||"none"):W.none(t,o,h.img,h.source||"none")),h.text&&z(t,a,c,h.text,h.source||"none"),h.border&&M(t,a,c,h.border,h.source||"none"),t.draw(!1,function(o){return w(r,void 0,void 0,function(){var i,e,r;return m(this,function(t){switch(t.label){case 0:return n?(i=n,e=[b({},o)],r={createTime:P(),takeUpTime:(new Date).getTime()-s},[4,I({width:h.size,height:h.size,id:h.id,ctx:h.ctx||null})]):[3,2];case 1:return i.apply(void 0,[b.apply(void 0,e.concat([(r.img=t.sent(),r.model=q("model"),r.system=q("system"),r.platform=q("platform"),r.code=h.code,r.size=F(h.size),r.id="[object String]"==Object.prototype.toString.call(h.id)?h.id:"nvue",r)]))]),[3,3];case 2:t.label=3;case 3:return[2]}})})})}function s(t,i){var e,r;t.code?t.id?(r=(new Date).getTime(),"[object String]"==Object.prototype.toString.call(t.id)?(e=uni.createCanvasContext(t.id,t.ctx||null),o(r,t,e,i)):"[object Object]"==Object.prototype.toString.call(t.id)&&(e=t.id,o(r,t,e,i))):console.warn("没有找到条形码canvas id或者实列!"):console.warn("没有找到条形码code")}function E(t,i){var e,r,o,s;t.code?t.id?(r=(new Date).getTime(),s=new h(t.level),(o=function(t){for(var i,e=t.toString(),r="",o=0;o<e.length;o++)1<=(i=e.charCodeAt(o))&&i<=127?r+=e.charAt(o):(2047<i?(r+=String.fromCharCode(224|i>>12&15),r+=String.fromCharCode(128|i>>6&63)):r+=String.fromCharCode(192|i>>6&31),r+=String.fromCharCode(128|i>>0&63));return r}(t.code))?(o=s.Genframe(o),s=s.getWidth(),"[object String]"==Object.prototype.toString.call(t.id)?(e=uni.createCanvasContext(t.id,t.ctx||null),N(r,t,e,o,s,i)):"[object Object]"==Object.prototype.toString.call(t.id)&&(e=t.id,N(r,t,e,o,s,i))):console.warn("二维码code转换错误")):console.warn("没有找到二维码canvas id或者实列!"):console.warn("没有找到二维码code")}var j={none:function(t,i,e,r,o,s,h){i.fillRect(e,r,o,s)},starry:function(t,i,e,r,o,s,h){i.drawImage("",e,r,o,s)},dots:function(t,i,e,r,o,s,h){void 0===t&&(t="#ffffff"),i.save(),i.beginPath(),i.arc(e,r,o/2,0,2*Math.PI),i.closePath(),i.fill(),i.setLineWidth(1),i.setStrokeStyle(t),i.stroke(),i.clip(),i.restore()},square:function(t,i,e,r,o,s,h){void 0===t&&(t="#ffffff"),"MP-BAIDU"!=h?(i.save(),i.beginPath(),i.moveTo(e,r),i.arcTo(e+o,r,e+o,r+s,0),i.arcTo(e+o,r+s,e,r+s,0),i.arcTo(e,r+s,e,r,0),i.arcTo(e,r,e+o,r,0),i.fill(),i.closePath(),i.setLineWidth(1),i.setStrokeStyle(t),i.stroke(),i.clip(),i.restore()):i.fillRect(e,r,o,s)},custom:function(t,i,e,r,o,s,h){i.drawImage("",e,r,o,s)}},O=function(t,i,e,r){r=n(t,i,e,r);t.setFillStyle(r)},W={none:function(t,i,e,r){r=T[r](e.size||30),i=Number(((i-r)/2).toFixed(2));t.save(),t.drawImage(e.src,i,i,r,r)},circle:function(t,i,e,r){var o=T[r](e.size||30),s=2*o,h=i/2-o,n=i/2-o,a=h+o,i=n+o;t.save(),t.beginPath(),t.arc(a,i,o,0,2*Math.PI),t.closePath(),t.setLineWidth(T[r](e.width||5)),t.setStrokeStyle(e.color||"#FFFFFF"),t.stroke(),t.clip(),t.drawImage(e.src,h,n,s,s)},round:function(t,i,e,r){if("MP-BAIDU"==r){var o=T[r](e.size||30),s=2*o,h=i/2-o,n=i/2-o,a=h+o,c=n+o;return t.save(),t.beginPath(),t.arc(a,c,o,0,2*Math.PI),t.closePath(),t.setLineWidth(T[r](e.width||5)),t.setStrokeStyle(e.color||"#FFFFFF"),t.stroke(),t.clip(),void t.drawImage(e.src,h,n,s,s)}c=e.degree||5,o=T[r](e.size||30),h=o,n=o,s=i/2-o/2,o=i/2-o/2;n<2*(c=h<2*c?h/2:c)&&(c=n/2),t.save(),t.beginPath(),t.moveTo(s+c,o),t.arcTo(s+h,o,s+h,o+n,c),t.arcTo(s+h,o+n,s,o+n,c),t.arcTo(s,o+n,s,o,c),t.arcTo(s,o,s+h,o,c),t.closePath(),t.setLineWidth(T[r](e.width||5)),t.setStrokeStyle(e.color||"#FFFFFF"),t.stroke(),t.clip(),t.drawImage(e.src,s,o,h,h)}},M=function(t,i,e,r,o){var s=(null==r?void 0:r.color)||["#000000"],h=(null==r?void 0:r.degree)||5,s=n(t,i,e,s);t.restore(),t.setGlobalAlpha((null==r?void 0:r.opacity)||1),"MP-BAIDU"==o?(t.setLineWidth((null==r?void 0:r.lineWidth)||5),t.setStrokeStyle(s),t.strokeRect(0,0,i,e)):(t.beginPath(),t.moveTo(0+h,0),t.arcTo(0+i,0,0+i,0+e,h),t.arcTo(0+i,0+e,0,0+e,h),t.arcTo(0,0+e,0,0,h),t.arcTo(0,0,0+i,0,h),t.closePath(),t.setLineWidth((null==r?void 0:r.lineWidth)||5),t.setStrokeStyle(s),t.stroke(),t.clip()),t.setGlobalAlpha(1)},z=function(t,i,e,r,o){var s=r.color||["#FFFFFF"],e=n(t,i,e,s);t.restore(),t.setGlobalAlpha((null==r?void 0:r.opacity)||1),t.setTextAlign("center"),t.setTextBaseline("middle"),t.font=(null==r?void 0:r.font)||"normal 20px system-ui","H5"==o?t.setFillStyle(e):t.setFillStyle(s[0]),t.fillText(r.content,i/2,i/2),t.setGlobalAlpha(1)},R=I,U=q,L=F;t.BarCode=s,t.GetCodeImg=R,t.GetPixelRatio=U,t.GetPx=L,t.QRCode=E,Object.defineProperty(t,"__esModule",{value:!0})});
