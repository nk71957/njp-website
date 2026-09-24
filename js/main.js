var D={
 Gym:{t:"Gym Management",s:[["482","Active members"],["137","Check-ins today"],["23","Renewals due"]],r:[["Monthly plan, Aarav S.","Paid",0],["Annual plan, Neha K.","Renews in 3 days",1],["Quarterly plan, Rohit P.","Paid",0]]},
 Library:{t:"Library Management",s:[["1,204","Books issued"],["38","Due today"],["12","Overdue"]],r:[["Wings of Fire","Returned",0],["Godan","Due today",1],["Discovery of India","Overdue 4 days",1]]},
 Retail:{t:"Retail Billing",s:[["Rs 84,300","Sales today"],["212","Bills"],["9","Low stock items"]],r:[["Bill #2041, Cash","Paid",0],["Bill #2042, UPI","Paid",0],["Rice 5kg","Only 4 left",1]]},
 School:{t:"School Management",s:[["1,150","Students"],["94%","Attendance today"],["41","Fees pending"]],r:[["Class 8-B attendance","Marked",0],["Term 2 exam results","Published",0],["Fee reminder, Class 6","Sent to 12 parents",1]]}
};
var tabs=document.getElementById("tabs"),panel=document.getElementById("panel");
function show(k){
  Array.prototype.forEach.call(tabs.children,function(b){b.setAttribute("aria-selected",b.dataset.k===k)});
  var d=D[k];panel.innerHTML="";
  var h=document.createElement("h3");h.textContent=d.t;panel.appendChild(h);
  var st=document.createElement("div");st.className="stats";
  d.s.forEach(function(x){var e=document.createElement("div");e.className="stat";var b=document.createElement("b");b.textContent=x[0];var s=document.createElement("span");s.textContent=x[1];e.appendChild(b);e.appendChild(s);st.appendChild(e)});
  panel.appendChild(st);
  var ul=document.createElement("ul");ul.className="rows";
  d.r.forEach(function(x){var li=document.createElement("li");var a=document.createElement("span");a.textContent=x[0];var m=document.createElement("em");m.textContent=x[1];if(x[2])m.className="warn";li.appendChild(a);li.appendChild(m);ul.appendChild(li)});
  panel.appendChild(ul);
}
Object.keys(D).forEach(function(k,i){
  var b=document.createElement("button");b.className="tab";b.type="button";b.role="tab";b.dataset.k=k;b.textContent=D[k].t.replace(" Management","").replace(" Billing"," Billing");
  b.onclick=function(){show(k)};tabs.appendChild(b);
});
show("Gym");
document.getElementById("form").addEventListener("submit",function(e){
  if(!this.checkValidity())return;
  this.querySelector('button[type="submit"]').disabled=true;
});

var homeEl=document.getElementById("top"),carEl=document.getElementById("careers"),navc=document.getElementById("navc");
var CIDS=["careers","tracks","assist","process","apply"];
function route(){
  var h=location.hash.slice(1),c=CIDS.indexOf(h)>-1;
  homeEl.hidden=c;carEl.hidden=!c;
  if(c){navc.setAttribute("aria-current","page")}else{navc.removeAttribute("aria-current")}
  var t=h&&h!=="careers"&&h!=="top"?document.getElementById(h):null;
  if(t){t.scrollIntoView()}else{window.scrollTo(0,0)}
}
window.addEventListener("hashchange",route);route();
document.getElementById("form2").addEventListener("submit",function(e){
  if(!this.checkValidity())return;
  this.querySelector('button[type="submit"]').disabled=true;
});
var mb=document.getElementById("menuBtn"),lk=document.getElementById("links");
function setMenu(o){lk.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu")}
mb.addEventListener("click",function(){setMenu(!lk.classList.contains("open"))});
lk.addEventListener("click",function(e){if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});
window.addEventListener("resize",function(){if(window.innerWidth>760)setMenu(false)});
