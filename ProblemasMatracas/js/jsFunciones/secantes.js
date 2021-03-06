function secantes() {
canvas = document.getElementById("secantes");
ctx = canvas.getContext("2d");
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != secantes)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "secantes";
  gnuplot.active_plot = secantes;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', secantes);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', secantes, false);} 
  gnuplot.zoomed = false;
  gnuplot.zoom_axis_width = 0;
  gnuplot.zoom_in_progress = false;
  gnuplot.polar_mode = false;
  ctx.clearRect(0,0,600,400);
}
// Gnuplot version 4.6.1
// short forms of commands provided by gnuplot_common.js
function DT  (dt)  {gnuplot.dashtype(dt);};
function DS  (x,y) {gnuplot.dashstart(x,y);};
function DL  (x,y) {gnuplot.dashstep(x,y);};
function M   (x,y) {if (gnuplot.pattern.length > 0) DS(x,y); else gnuplot.M(x,y);};
function L   (x,y) {if (gnuplot.pattern.length > 0) DL(x,y); else gnuplot.L(x,y);};
function Dot (x,y) {gnuplot.Dot(x/10.,y/10.);};
function Pt  (N,x,y,w) {gnuplot.Pt(N,x/10.,y/10.,w/10.);};
function R   (x,y,w,h) {gnuplot.R(x,y,w,h);};
function T   (x,y,fontsize,justify,string) {gnuplot.T(x,y,fontsize,justify,string);};
function TR  (x,y,angle,fontsize,justify,string) {gnuplot.TR(x,y,angle,fontsize,justify,string);};
function bp  (x,y) {gnuplot.bp(x,y);};
function cfp () {gnuplot.cfp();};
function cfsp() {gnuplot.cfsp();};

ctx.lineCap = "butt"; ctx.lineJoin = "miter";
CanvasTextFunctions.enable(ctx);
ctx.strokeStyle = "rgb(215,215,215)";
ctx.lineWidth = 1;

ctx.lineWidth = 1;
ctx.strokeStyle = "rgb(000,000,000)";
ctx.beginPath();
M(2751,3880);
L(2701,3880);
M(2751,3880);
L(2801,3880);
ctx.stroke();
ctx.closePath();
T(2671,3930,10.0,"Right","-4");
ctx.beginPath();
M(2751,3433);
L(2701,3433);
M(2751,3433);
L(2801,3433);
ctx.stroke();
ctx.closePath();
T(2671,3483,10.0,"Right","-3");
ctx.beginPath();
M(2751,2985);
L(2701,2985);
M(2751,2985);
L(2801,2985);
ctx.stroke();
ctx.closePath();
T(2671,3035,10.0,"Right","-2");
ctx.beginPath();
M(2751,2538);
L(2701,2538);
M(2751,2538);
L(2801,2538);
ctx.stroke();
ctx.closePath();
T(2671,2588,10.0,"Right","-1");
ctx.beginPath();
M(2751,2090);
L(2701,2090);
M(2751,2090);
L(2801,2090);
ctx.stroke();
ctx.closePath();
T(2671,2140,10.0,"Right"," ");
ctx.beginPath();
M(2751,1643);
L(2701,1643);
M(2751,1643);
L(2801,1643);
ctx.stroke();
ctx.closePath();
T(2671,1693,10.0,"Right","1");
ctx.beginPath();
M(2751,1196);
L(2701,1196);
M(2751,1196);
L(2801,1196);
ctx.stroke();
ctx.closePath();
T(2671,1246,10.0,"Right","2");
ctx.beginPath();
M(2751,748);
L(2701,748);
M(2751,748);
L(2801,748);
ctx.stroke();
ctx.closePath();
T(2671,798,10.0,"Right","3");
ctx.beginPath();
M(2751,301);
L(2701,301);
M(2751,301);
L(2801,301);
ctx.stroke();
ctx.closePath();
T(2671,351,10.0,"Right","4");
ctx.beginPath();
M(1160,2090);
L(1160,2140);
M(1160,2090);
L(1160,2040);
ctx.stroke();
ctx.closePath();
T(1160,2290,10.0,"Center","-4");
ctx.beginPath();
M(1558,2090);
L(1558,2140);
M(1558,2090);
L(1558,2040);
ctx.stroke();
ctx.closePath();
T(1558,2290,10.0,"Center","-3");
ctx.beginPath();
M(1955,2090);
L(1955,2140);
M(1955,2090);
L(1955,2040);
ctx.stroke();
ctx.closePath();
T(1955,2290,10.0,"Center","-2");
ctx.beginPath();
M(2353,2090);
L(2353,2140);
M(2353,2090);
L(2353,2040);
ctx.stroke();
ctx.closePath();
T(2353,2290,10.0,"Center","-1");
ctx.beginPath();
M(2751,2090);
L(2751,2140);
M(2751,2090);
L(2751,2040);
ctx.stroke();
ctx.closePath();
T(2751,2290,10.0,"Center"," ");
ctx.beginPath();
M(3148,2090);
L(3148,2140);
M(3148,2090);
L(3148,2040);
ctx.stroke();
ctx.closePath();
T(3148,2290,10.0,"Center","1");
ctx.beginPath();
M(3546,2090);
L(3546,2140);
M(3546,2090);
L(3546,2040);
ctx.stroke();
ctx.closePath();
T(3546,2290,10.0,"Center","2");
ctx.beginPath();
M(3944,2090);
L(3944,2140);
M(3944,2090);
L(3944,2040);
ctx.stroke();
ctx.closePath();
T(3944,2290,10.0,"Center","3");
ctx.beginPath();
M(4341,2090);
L(4341,2140);
M(4341,2090);
L(4341,2040);
ctx.stroke();
ctx.closePath();
T(4341,2290,10.0,"Center","4");
ctx.beginPath();
M(4739,2090);
L(4739,2140);
M(4739,2090);
L(4739,2040);
ctx.stroke();
ctx.closePath();
T(4739,2290,10.0,"Center","5");
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(000,000,225)";
ctx.strokeStyle = "rgb(000,000,000)";
ctx.beginPath();
M(1160,2090);
L(4739,2090);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,225)";
ctx.strokeStyle = "rgb(000,000,000)";
ctx.beginPath();
M(2751,3880);
L(2751,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,255)";
TR(1110,2141,-360,10.0,"Center","x");
ctx.strokeStyle = "rgb(000,000,000)";
ctx.strokeStyle = "rgb(000,000,255)";
T(2949,3980,10.0,"Center","y");
ctx.strokeStyle = "rgb(000,000,000)";
T(2949,201,10.0,"Center","Rectas Secantes");
T(3844,1469,10.0,"","P(3,1)");
ctx.lineWidth = 1;
if (typeof(gnuplot.hide_secantes_plot_1) == "undefined"|| !gnuplot.hide_secantes_plot_1) {
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(000,000,000)";
T(4079,513,10.0,"Right","2x + 3y = 9");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.beginPath();
M(4159,463);
L(4579,463);
M(2154,301);
L(2172,315);
L(2208,342);
L(2245,369);
L(2281,396);
L(2317,423);
L(2353,450);
L(2389,477);
L(2425,504);
L(2461,531);
L(2498,559);
L(2534,586);
L(2570,613);
L(2606,640);
L(2642,667);
L(2678,694);
L(2715,721);
L(2751,748);
L(2787,775);
L(2823,803);
L(2859,830);
L(2895,857);
L(2931,884);
L(2968,911);
L(3004,938);
L(3040,965);
L(3076,992);
L(3112,1020);
L(3148,1047);
L(3184,1074);
L(3221,1101);
L(3257,1128);
L(3293,1155);
L(3329,1182);
L(3365,1209);
L(3401,1236);
L(3438,1264);
L(3474,1291);
L(3510,1318);
L(3546,1345);
L(3582,1372);
L(3618,1399);
L(3654,1426);
L(3691,1453);
L(3727,1480);
L(3763,1508);
L(3799,1535);
L(3835,1562);
L(3871,1589);
L(3908,1616);
L(3944,1643);
L(3980,1670);
L(4016,1697);
L(4052,1724);
L(4088,1752);
L(4124,1779);
L(4161,1806);
L(4197,1833);
L(4233,1860);
L(4269,1887);
L(4305,1914);
L(4341,1941);
L(4377,1968);
L(4414,1996);
L(4450,2023);
L(4486,2050);
L(4522,2077);
L(4558,2104);
L(4594,2131);
L(4631,2158);
L(4667,2185);
L(4703,2213);
L(4739,2240);
ctx.stroke();
ctx.closePath();
} // End secantes_plot_1 
if (typeof(gnuplot.hide_secantes_plot_2) == "undefined"|| !gnuplot.hide_secantes_plot_2) {
ctx.lineWidth = 1;
ctx.strokeStyle = "rgb(000,171,000)";
ctx.strokeStyle = "rgb(000,000,255)";
ctx.strokeStyle = "rgb(000,000,000)";
T(4079,638,10.0,"Right","3x - 5y = 4");
ctx.strokeStyle = "rgb(000,171,000)";
ctx.strokeStyle = "rgb(000,000,255)";
ctx.beginPath();
M(4159,588);
L(4579,588);
M(1160,3522);
L(1196,3498);
L(1232,3473);
L(1268,3449);
L(1305,3424);
L(1341,3400);
L(1377,3376);
L(1413,3351);
L(1449,3327);
L(1485,3302);
L(1522,3278);
L(1558,3254);
L(1594,3229);
L(1630,3205);
L(1666,3180);
L(1702,3156);
L(1738,3132);
L(1775,3107);
L(1811,3083);
L(1847,3058);
L(1883,3034);
L(1919,3010);
L(1955,2985);
L(1991,2961);
L(2028,2936);
L(2064,2912);
L(2100,2888);
L(2136,2863);
L(2172,2839);
L(2208,2814);
L(2245,2790);
L(2281,2766);
L(2317,2741);
L(2353,2717);
L(2389,2692);
L(2425,2668);
L(2461,2644);
L(2498,2619);
L(2534,2595);
L(2570,2570);
L(2606,2546);
L(2642,2522);
L(2678,2497);
L(2715,2473);
L(2751,2448);
L(2787,2424);
L(2823,2400);
L(2859,2375);
L(2895,2351);
L(2931,2326);
L(2968,2302);
L(3004,2278);
L(3040,2253);
L(3076,2229);
L(3112,2204);
L(3148,2180);
L(3184,2156);
L(3221,2131);
L(3257,2107);
L(3293,2082);
L(3329,2058);
L(3365,2034);
L(3401,2009);
L(3438,1985);
L(3474,1960);
L(3510,1936);
L(3546,1912);
L(3582,1887);
L(3618,1863);
L(3654,1838);
L(3691,1814);
L(3727,1790);
L(3763,1765);
L(3799,1741);
L(3835,1716);
L(3871,1692);
L(3908,1668);
L(3944,1643);
L(3980,1619);
L(4016,1594);
L(4052,1570);
L(4088,1546);
L(4124,1521);
L(4161,1497);
L(4197,1472);
L(4233,1448);
L(4269,1424);
L(4305,1399);
L(4341,1375);
L(4377,1350);
L(4414,1326);
L(4450,1301);
L(4486,1277);
L(4522,1253);
L(4558,1228);
L(4594,1204);
L(4631,1179);
L(4667,1155);
L(4703,1131);
L(4739,1106);
ctx.stroke();
ctx.closePath();
} // End secantes_plot_2 
ctx.lineWidth = 1;
ctx.strokeStyle = "rgb(000,000,000)";
ctx.beginPath();
M(2751,3880);
L(2701,3880);
M(2751,3880);
L(2801,3880);
ctx.stroke();
ctx.closePath();
T(2671,3930,10.0,"Right","-4");
ctx.beginPath();
M(2751,3433);
L(2701,3433);
M(2751,3433);
L(2801,3433);
ctx.stroke();
ctx.closePath();
T(2671,3483,10.0,"Right","-3");
ctx.beginPath();
M(2751,2985);
L(2701,2985);
M(2751,2985);
L(2801,2985);
ctx.stroke();
ctx.closePath();
T(2671,3035,10.0,"Right","-2");
ctx.beginPath();
M(2751,2538);
L(2701,2538);
M(2751,2538);
L(2801,2538);
ctx.stroke();
ctx.closePath();
T(2671,2588,10.0,"Right","-1");
ctx.beginPath();
M(2751,2090);
L(2701,2090);
M(2751,2090);
L(2801,2090);
ctx.stroke();
ctx.closePath();
T(2671,2140,10.0,"Right"," ");
ctx.beginPath();
M(2751,1643);
L(2701,1643);
M(2751,1643);
L(2801,1643);
ctx.stroke();
ctx.closePath();
T(2671,1693,10.0,"Right","1");
ctx.beginPath();
M(2751,1196);
L(2701,1196);
M(2751,1196);
L(2801,1196);
ctx.stroke();
ctx.closePath();
T(2671,1246,10.0,"Right","2");
ctx.beginPath();
M(2751,748);
L(2701,748);
M(2751,748);
L(2801,748);
ctx.stroke();
ctx.closePath();
T(2671,798,10.0,"Right","3");
ctx.beginPath();
M(2751,301);
L(2701,301);
M(2751,301);
L(2801,301);
ctx.stroke();
ctx.closePath();
T(2671,351,10.0,"Right","4");
ctx.beginPath();
M(1160,2090);
L(1160,2140);
M(1160,2090);
L(1160,2040);
ctx.stroke();
ctx.closePath();
T(1160,2290,10.0,"Center","-4");
ctx.beginPath();
M(1558,2090);
L(1558,2140);
M(1558,2090);
L(1558,2040);
ctx.stroke();
ctx.closePath();
T(1558,2290,10.0,"Center","-3");
ctx.beginPath();
M(1955,2090);
L(1955,2140);
M(1955,2090);
L(1955,2040);
ctx.stroke();
ctx.closePath();
T(1955,2290,10.0,"Center","-2");
ctx.beginPath();
M(2353,2090);
L(2353,2140);
M(2353,2090);
L(2353,2040);
ctx.stroke();
ctx.closePath();
T(2353,2290,10.0,"Center","-1");
ctx.beginPath();
M(2751,2090);
L(2751,2140);
M(2751,2090);
L(2751,2040);
ctx.stroke();
ctx.closePath();
T(2751,2290,10.0,"Center"," ");
ctx.beginPath();
M(3148,2090);
L(3148,2140);
M(3148,2090);
L(3148,2040);
ctx.stroke();
ctx.closePath();
T(3148,2290,10.0,"Center","1");
ctx.beginPath();
M(3546,2090);
L(3546,2140);
M(3546,2090);
L(3546,2040);
ctx.stroke();
ctx.closePath();
T(3546,2290,10.0,"Center","2");
ctx.beginPath();
M(3944,2090);
L(3944,2140);
M(3944,2090);
L(3944,2040);
ctx.stroke();
ctx.closePath();
T(3944,2290,10.0,"Center","3");
ctx.beginPath();
M(4341,2090);
L(4341,2140);
M(4341,2090);
L(4341,2040);
ctx.stroke();
ctx.closePath();
T(4341,2290,10.0,"Center","4");
ctx.beginPath();
M(4739,2090);
L(4739,2140);
M(4739,2090);
L(4739,2040);
ctx.stroke();
ctx.closePath();
T(4739,2290,10.0,"Center","5");
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(000,000,225)";
ctx.strokeStyle = "rgb(000,000,000)";
ctx.beginPath();
M(1160,2090);
L(4739,2090);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,225)";
ctx.strokeStyle = "rgb(000,000,000)";
ctx.beginPath();
M(2751,3880);
L(2751,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,255)";
TR(1110,2141,-360,10.0,"Center","x");
ctx.strokeStyle = "rgb(000,000,000)";
ctx.strokeStyle = "rgb(000,000,255)";
T(2949,3980,10.0,"Center","y");
ctx.strokeStyle = "rgb(000,000,000)";
T(2949,201,10.0,"Center","Rectas Secantes");
T(3844,1469,10.0,"","P(3,1)");
ctx.lineWidth = 1;
if (typeof(gnuplot.hide_secantes_plot_1) == "undefined"|| !gnuplot.hide_secantes_plot_1) {
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(000,000,000)";
ctx.fillStyle = "rgb(000,000,000)";
Pt(6,3944,1643,120.0);
} // End secantes_plot_1 
ctx.lineWidth = 1;
ctx.strokeStyle = "rgb(000,000,000)";

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 600;
gnuplot.plot_term_ymax = 400;
gnuplot.plot_xmin = 116.0;
gnuplot.plot_xmax = 473.9;
gnuplot.plot_ybot = 388.0;
gnuplot.plot_ytop = 30.1;
gnuplot.plot_width = 357.9;
gnuplot.plot_height = 357.9;
gnuplot.plot_axis_xmin = -4;
gnuplot.plot_axis_xmax = 5;
gnuplot.plot_axis_ymin = -4;
gnuplot.plot_axis_ymax = 4;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
gnuplot.plot_timeaxis_x = "";
}
