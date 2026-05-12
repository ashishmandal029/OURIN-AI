console.log("OURIN AI Loaded");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn)=>{
  btn.addEventListener("mouseenter",()=>{
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave",()=>{
    btn.style.transform = "scale(1)";
  });
});