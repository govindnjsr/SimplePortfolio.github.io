const boxContainer=document.querySelector(".boxContainer")
const introTextContainer=document.querySelector(".introTextContainer")
const introPicContainer=document.querySelector(".introPicContainer")
const myName=document.querySelector(".name")
const jobTitleContainers=document.querySelectorAll(".jobTitleWrapper")
const jobTitles=document.querySelectorAll(".jobTitle")

const projectTitle=document.querySelector(".projectTitle")

const laptop=document.querySelectorAll(".laptop")
const projectPic=document.querySelectorAll(".projectPic")
const realtimecolPics=document.querySelectorAll(".realtimecolPicDiv")

for(let i=0;i<365;i++){

    const list = [
        0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
        205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
        211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
        133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
        259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
        260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
        144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
        24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
        270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
        316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
        156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
        79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
        283, 284, 285, 323, 324, 325, 326,
      ];


    const el=document.createElement("div");
    el.classList=list.includes(i)?"box active":"box";
    boxContainer.appendChild(el);
}

// it will give us the y cordinate when we scroll
window.addEventListener("scroll",()=>{
    const offSetY=Math.ceil(window.scrollY);
    console.log(offSetY)
    introTextContainer.style.transform=`translate(${-offSetY*0.1}px,${offSetY*0.5}px)`
    introPicContainer.style.transform=`translate(${-offSetY*0.4}px,${offSetY*0.7}px)`
    myName.style.transform=`translateX(${-offSetY*0.2}px)`
    // -myName.style.transform=`translateX(calc(100vh - ${offSetY}px))`
  
    //awesome parralex effect ..
    jobTitleContainers[0].style.backgroundPositionY=`${offSetY*0.5}px`;
    jobTitleContainers[1].style.backgroundPositionY=`${-offSetY*0.3}px`;

    // jobTitles
    // -jobTitles[0].style.transform=`translateY(-250px))`
 
    jobTitles[0].style.transform=`translateX(calc(200vh - ${offSetY}px))`
    jobTitles[1].style.transform=`translateX(calc(-300vh + ${offSetY}px))`
    // projectTitle
    // projectTitle.style.transform=`translateY(calc(400vh - ${offSetY}px))`
  
    laptop[0].style.transform=`translateY(calc(480vh - ${offSetY}px))`
    laptop[1].style.transform=`translateY(calc(750vh - ${offSetY}px))`

    //for bench pics
    projectPic[0].style.transform=`translateY(calc(600vh - ${offSetY}px))`
    projectPic[1].style.transform=`translateY(calc(600vh - ${offSetY}px))`
    projectPic[2].style.transform=`translateY(calc(600vh - ${offSetY}px))`
    projectPic[3].style.transform=`translateY(calc(600vh - ${offSetY}px))`

    //for realtime code pics
    realtimecolPics[0].style.transform=`translateY(calc(870vh - ${offSetY}px))`
    realtimecolPics[1].style.transform=`translateY(calc(870vh - ${offSetY}px))`
    realtimecolPics[2].style.transform=`translateY(calc(870vh - ${offSetY}px))`

})












