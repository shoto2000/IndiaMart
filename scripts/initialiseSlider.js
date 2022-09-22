// Show Slideshow

let data=[
  {name:"Foundation",url:"https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg"},
  {name:"Pan Stick Foundation",url:"https://3.imimg.com/data3/LX/OI/MY-3792183/pan-stick-250x250.jpg"},
  {name:"Compact",url:"https://3.imimg.com/data3/YL/EJ/MY-3792183/01-250x250.jpg"},
  {name:"Fairness Scrub",url:"https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg"},
  {name:"Nail enamel",url:"https://3.imimg.com/data3/BK/MD/MY-3792183/01-250x250.jpg"},
  {name:"Lip Gloss",url:"https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg"},
  {name:"Fruit Bleach",url:"https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg"},
  {name:"Lip Balm",url:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg"},
  
]

  //this function is for appending data in slideshow container
let append=()=>{

let c=0;
for(let i=0;i<data.length;i++)
{
 //this is the div used for slide
 let div=document.getElementById("c"+(c+1));
 div.innerHTML=null;

 let img=document.createElement("img");
 img.src=data[i].url;

 let div2=document.createElement("div");
 div2.setAttribute("class","name");

 let name=document.createElement("div");
 name.innerText=data[i].name;

 let div3=document.createElement("div");


 let btn=document.createElement("button");
 btn.setAttribute("class","slideBtn");
 btn.innerText="Get Best Quote";

 div3.append(btn)

 div2.append(name,div3);

 div.append(img,div2);
 c++;

}



}

append();