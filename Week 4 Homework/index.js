//create About Me paragraph
const aboutMePar = document.createElement("p");
aboutMePar.textContent = "I am currently taking part in the SavvyCoders Full Stack Development Cohort. I am working to improve my coding skills and portfolio to obtain a position as a Junior Web Developer.";
aboutMePar.style.color = "white";
aboutMePar.style.textAlign = "center";
document.querySelector("footer").appendChild(aboutMePar);

//create and append image to page
const myPicture = document.createElement("img");
myPicture.src = "./Images/SuttonRyan_img.jpg";
myPicture.id = "picture";
document.querySelector("main").appendChild(myPicture);