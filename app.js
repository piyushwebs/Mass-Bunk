let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let img1 = document.querySelector("#first_img");

btn1.addEventListener('click',changeImg);
function changeImg()
{
  img1.src = "thirdImg.jpg";
  alert("Your vote have been saved");
}

btn2.addEventListener('click',changeImg1);
btn2.addEventListener('mouseover',changeText);
btn2.addEventListener('mouseout',changeText1);

function changeText1()
{
  img1.src = "InitialImg.jpg";
  btn2.textContent = "No!!";
}
function changeText()
{
  img1.src = "secondImg.jpg";
  setTimeout(img1,250);
  btn2.textContent = "yesi kya majburi hay bhai";
}
function changeImg1()
{
  img1.src = "secondImg.jpg";
  btn2.textContent = "yesi kya majburi hay bhai";
  alert(`"Either accept that you'll get placed, or start practicing your best bunk bed dive for the mass bunk Olympics!"`);
}