let settingsBtn = document.getElementById("settingsBtn");
let settings = document.getElementById("settings");
let moreBtn = document.getElementById("moreBtn");
let reportBtn = document.getElementById("reportBtn");
let colorsBtn= document.getElementById("colorsBtn");
let colorCh = document.querySelectorAll(".color")
let colorACh = document.querySelectorAll(".colorA")
let card = document.getElementById("card");
let projectsPage = document.getElementById("projectsPage");
let topDiv = document.getElementById("topDiv");
let cl = document.getElementById("cl");
let line = document.getElementById("line");
let botDiv = document.getElementById("botDiv");
let info = document.getElementById("info");
let projectsPage2 = document.getElementById("projectPage2");
let nav = document.getElementById("nav");
let cl2 = document.getElementById("cl2");
let closeImg = document.getElementById("closeImg");
let submitBtn = document.getElementById("submitIP");
let CommentsDad = document.getElementById("commentsDad");
let firstName = document.getElementById("firstIP");
let lastName = document.getElementById("lastIP");
let email = document.getElementById("emailIP");
let comment = document.getElementById("commentIP");
let pro1 = document.getElementById("pro1");
let pro2 = document.getElementById("pro2");
let pro3 = document.getElementById("pro3");
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let count3 = document.getElementById("count3");
let ghostVid = document.getElementById("ghostVid");
let secoundPage = document.getElementById("secoundPage")
let comments = document.getElementById("comments")


function openSett(){
    settings.classList.toggle("down");
    colorsBtn.classList.add("focus");
    moreBtn.classList.remove("focus");
    reportBtn.classList.remove("focus");
}

moreBtn.onclick=function(){
    moreBtn.classList.add("focus");
    colorsBtn.classList.remove("focus");
    reportBtn.classList.remove("focus");
}
reportBtn.onclick=function(){
    reportBtn.classList.add("focus");
    colorsBtn.classList.remove("focus");
    moreBtn.classList.remove("focus");
}
colorsBtn.onclick=function(){
    colorsBtn.classList.add("focus");
    moreBtn.classList.remove("focus");
    reportBtn.classList.remove("focus");
}

if(window.localStorage.getItem("color")){
    colorCh.forEach( element =>{
        // element.style.backgroundColor = '#153448';
        element.style.backgroundColor = window.localStorage.getItem("color");
    })
    colorACh.forEach( element =>{
        // element.style.color = '#153448';
        element.style.color = window.localStorage.getItem("color");
    })
    }

    if(window.localStorage.getItem("color")=="#153448"){
        card.style.background="linear-gradient(to bottom left ,#153448,#224d69)";
    }
    if(window.localStorage.getItem("color")=="#A79277"){
        card.style.background="linear-gradient(to bottom left ,#A79277,#7c6b4d)";
    }
    if(window.localStorage.getItem("color")=="#86A789"){
        card.style.background="linear-gradient(to bottom left ,#86A789,#4e6650)";
    }
    if(window.localStorage.getItem("color")=="#663521"){
        card.style.background="linear-gradient(to bottom left ,#663521,#a16851)";
    }

function colorchange(){
    window.localStorage.setItem("color","#153448")
    // if(window.localStorage.getItem("color")){
    // colorCh.forEach( element =>{
    //     // element.style.backgroundColor = '#153448';
    //     element.style.backgroundColor = window.localStorage.getItem("color");
    // })
    // colorACh.forEach( element =>{
    //     // element.style.color = '#153448';
    //     element.style.color = window.localStorage.getItem("color");
    // })
    // }
    if(window.localStorage.getItem("color")){
        colorCh.forEach( element =>{
            // element.style.backgroundColor = '#153448';
            element.style.backgroundColor = window.localStorage.getItem("color");
        })
        colorACh.forEach( element =>{
            // element.style.color = '#153448';
            element.style.color = window.localStorage.getItem("color");
        })
        }
    card.style.background="linear-gradient(to bottom left ,#153448,#224d69)";
}


function colorchange2(){
    window.localStorage.setItem("color","#A79277")
    // colorCh.forEach( element =>{
    //     element.style.backgroundColor = '#A79277';
    // })
    // colorACh.forEach( element =>{
    //     element.style.color = '#7c6b4d';
    // })
    if(window.localStorage.getItem("color")){
        colorCh.forEach( element =>{
            // element.style.backgroundColor = '#153448';
            element.style.backgroundColor = window.localStorage.getItem("color");
        })
        colorACh.forEach( element =>{
            // element.style.color = '#153448';
            element.style.color = window.localStorage.getItem("color");
        })
        }
    card.style.background="linear-gradient(to bottom left ,#A79277,#7c6b4d)";
}


function colorchange3(){
    window.localStorage.setItem("color","#86A789");

    // colorCh.forEach( element =>{
    //     element.style.backgroundColor = '#86A789';
    // })
    // colorACh.forEach( element =>{
    //     element.style.color = '#86A789';
    // })
    if(window.localStorage.getItem("color")){
        colorCh.forEach( element =>{
            // element.style.backgroundColor = '#153448';
            element.style.backgroundColor = window.localStorage.getItem("color");
        })
        colorACh.forEach( element =>{
            // element.style.color = '#153448';
            element.style.color = window.localStorage.getItem("color");
        })
        }
    card.style.background="linear-gradient(to bottom left ,#86A789,#4e6650)";
}


function colorchange4(){
    window.localStorage.setItem("color","#663521");
    // colorCh.forEach( element =>{
    //     element.style.backgroundColor = '#663521';
    // })
    // colorACh.forEach( element =>{
    //     element.style.color = '#663521';
    // })
    if(window.localStorage.getItem("color")){
        colorCh.forEach( element =>{
            // element.style.backgroundColor = '#153448';
            element.style.backgroundColor = window.localStorage.getItem("color");
        })
        colorACh.forEach( element =>{
            // element.style.color = '#153448';
            element.style.color = window.localStorage.getItem("color");
        })
        }
    card.style.background="linear-gradient(to bottom left ,#663521,#a16851)";
}


function openProjects(){
    // projectsPage.style.cssText="top:45%;left:45%;transform:translate(-55%,-55%);transform:scale(2);"
    projectsPage.style.cssText="top:50%;left:50%;transform:translate(-50%,-50%);"
    card.style.right="100px";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        projectsPage.style.animation="rotate 1s";
    },500)
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        projectsPage.style.cssText="top:-100px;left:50%;"
    },1500)
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        projectsPage2.style.cssText="top:0px;"
        nav.style.cssText="filter:blur(8px);"
    },1900)
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        //nav.style.cssText="top:-100px;"
    },2200)
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
       projectsPage2.style.cssText="top:0px;position:fixed; border-top:100px solid red; border-bottom:100px solid white;"
       cl2.style.top="-100px"
    },2500)
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        closeImg.style.opacity="1";
        ghostVid.autoplay = true;
    },3000)
}

function scaleHover(){
    closeImg.style.width="80px";
}
function scaleUnHover(){
    closeImg.style.width="100px";
}

function closeProjects(){
    closeImg.style.opacity="0";
    projectsPage2.style.cssText="border-top:430px solid red; border-bottom:430px solid white;position:fixed;top:0px;border-radius:40%;width:60%;"
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        projectsPage2.style.cssText="top:-950px;"
        nav.style.opacity="1"
    },400)
    setTimeout(function(){
        // projectsPage.style.transform="rotate(360deg)"
        projectsPage.style.cssText="top:1px;left:10px;"
        cl2.style.top="-500px"
        card.style.right="-200px";
        nav.style.cssText="filter:none;"
    },1000)
}

// function switchPro1(){
//     pro3.style.marginLeft="0px";
//     pro1.style.marginLeft="3400px";
//     pro2.style.marginLeft="3400px";
//     count1.classList.add("activePro");
//     count2.classList.remove("activePro");
//     count3.classList.remove("activePro");
// }
// function switchPro2(){
//     pro3.style.marginLeft="-3400px";
//     pro1.style.marginLeft="0";
//     pro2.style.marginLeft="3400px";
//     count1.classList.remove("activePro");
//     count2.classList.add("activePro");
//     count3.classList.remove("activePro");
// }
// function switchPro3(){
//     pro2.style.marginLeft="0";
//     pro3.style.marginLeft="-3400px";
//     pro1.style.marginLeft="-3400px";
//     count1.classList.remove("activePro");
//     count2.classList.remove("activePro");
//     count3.classList.add("activePro");
// }

let currentProject = 1; // المشروع الحالي

function showProject(projectNumber) {
    // إخفاء جميع المشاريع
    document.querySelectorAll('.project').forEach(project => {
        project.style.display = 'none';
        pro3.style.marginLeft="0px";
        pro2.style.marginLeft="0px";
    });

    // عرض المشروع المحدد
    document.getElementById(`pro${projectNumber}`).style.display = 'block';
}

// التحقق من الضغط على السهم الأيمن
document.getElementById('goRight').addEventListener('click', function() {
    currentProject = (currentProject % 5) + 1; // التبديل بين 1 و 2 و 3 بشكل دوري
    showProject(currentProject);
});

// التحقق من الضغط على السهم الأيسر
document.getElementById('goLeft').addEventListener('click', function() {
    currentProject = (currentProject - 2 + 5) % 5 + 1; // التبديل بين 3 و 2 و 1 بشكل دوري
    showProject(currentProject);
});

// عرض المشروع الأول عند التحميل الأولي
showProject(currentProject);

setInterval(function(){
   if(pro1.style.display=="block"){
        count1.classList.add("activePro");
        count2.classList.remove("activePro");
        count3.classList.remove("activePro");
        count4.classList.remove("activePro");
        count5.classList.remove("activePro");
    }else if(pro2.style.display=="block"){
        count1.classList.remove("activePro");
        count2.classList.add("activePro");
        count3.classList.remove("activePro");
        count4.classList.remove("activePro");
        count5.classList.remove("activePro");
    }else if(pro3.style.display=="block"){
        count1.classList.remove("activePro");
        count2.classList.remove("activePro");
        count4.classList.remove("activePro");
        count5.classList.remove("activePro");
        count3.classList.add("activePro");
    }else if(pro4.style.display=="block"){
        count1.classList.remove("activePro");
        count2.classList.remove("activePro");
        count3.classList.remove("activePro");
        count4.classList.add("activePro");
        count5.classList.remove("activePro");
    }else if(pro5.style.display=="block"){
        count1.classList.remove("activePro");
        count2.classList.remove("activePro");
        count3.classList.remove("activePro");
        count4.classList.remove("activePro");
        count5.classList.add("activePro");
    }
},100)


// function goLeft(){
//     pro2.style.marginRight="0px";
//     pro1.style.marginRight="3400px";
// }



// function colorChange (){
//     if(color1.classList.contains("color")==true){
//     console.log("hi");
//     color1.style.backgroundColor="red";
//     }
// }
// function color1(){
//     if(divs1.classList.contains("asda")==true){
//         console.log("hi")
//     }
// }

//########################################################################################################################

// Comments Page 

submitBtn.onclick = function (){
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let firstN = firstName.value;
    let lastN = lastName.value;
    let emailValue = email.value;
    let commentValue = comment.value;

    if(firstN != "" && lastN != "" && emailValue != "" && commentValue != ""){

        h1.innerHTML= firstN +" "+ lastN;
        h4.innerHTML=emailValue;
        p.innerHTML=commentValue;

        div.appendChild(h1);
        div.appendChild(h4);
        div.appendChild(p);
        CommentsDad.appendChild(div);
    }

    firstName.value="";
    lastName.value="";
    email.value="";
    comment.value="";

}
//#################################################################################
//################--translate--#####################
//#################################################################################

document.querySelector("#hello").style.setProperty('--after-content','"Here is who I am & what I do"')
document.querySelector("#cardName").style.setProperty('--after-mohamed','"Mohamed"');
secoundPage.style.setProperty('--after-contact','"Contact with me"');
comments.style.setProperty('--after-comments','"Comments"');

let lang = 0

function arab(){
    lang = 1;
setInterval(function(){
    if(lang==1){
        document.querySelector(".language").innerHTML="اللغة";
        document.querySelector(".home").innerHTML="الرئيسية";
        document.querySelector(".contact").innerHTML="تواصل";
        document.querySelector("#hello").innerHTML="اهلا";
        document.querySelector("#hello").style.right="-10px";
        document.querySelector("#infoP").innerHTML="أنا 'عاصم محمد' طالب في معهد  قسم نظم المعلومات الحاسوبية ونظم المعلومات في مصر، كما أنني أدرس برمجة المواقع الإلكترونية منذ 3 سنوات.";
        document.querySelector("#infoP").style.fontWeight="600";
        document.querySelector("#hello").style.setProperty('--after-content','"من أنا وماذا أفعل"');
        document.querySelector(".projectsP").innerHTML="المشاريع";
        document.querySelector("#cardName").innerHTML="عاصم محمد";
        document.querySelector("#cardName").style.setProperty('--after-mohamed','""');
        document.querySelector("#pageName").innerHTML="عاصم محمد";
        document.querySelector("#reportBtn").innerHTML="تقرير";
        document.querySelector("#moreBtn").innerHTML="المزيد";
        firstName.placeholder="الاسم الاول";
        lastName.placeholder="الاسم الثاني";
        email.placeholder="البريد الالكتروني";
        comment.placeholder="تعليق";
        submitBtn.innerText="ارسال";
        secoundPage.style.setProperty('--after-contact','"تواصل معي"');
        comments.style.setProperty('--after-comments','"التعليقات"');
        colorsBtn.innerText="الالوان";
        
    }
},100)
}
function engl(){
    lang = 0;
setInterval(function(){
    if(lang==0){
        document.querySelector(".language").innerHTML="language";
        document.querySelector(".home").innerHTML="Home";
        document.querySelector(".contact").innerHTML="Contact";
        document.querySelector("#hello").innerHTML="Hello";
        document.querySelector("#hello").style.right="-100px";
        document.querySelector("#infoP").innerHTML='I am "Assem Mohamed", a student at the <a target="_blank" href="https://aboukir-institutes.edu.eg/"> AHI Institute </a>, Department of Computer Information and Systems Systems in Egypt, and I have also been studying website programming for 3 years.';
        document.querySelector("#infoP").style.fontWeight="300";
        document.querySelector("#hello").style.setProperty('--after-content','"Here is who I am & what I do"');
        document.querySelector(".projectsP").innerHTML="PROJECTS";
        document.querySelector("#cardName").innerHTML="Assem";
        document.querySelector("#cardName").style.setProperty('--after-mohamed','"Mohamed"');
        document.querySelector("#pageName").innerHTML="Assem Mohamed";
        document.querySelector("#reportBtn").innerHTML="Report";
        document.querySelector("#moreBtn").innerHTML="More";
        firstName.placeholder="First Name";
        lastName.placeholder="Last Name";
        email.placeholder="Email";
        comment.placeholder="Comment";
        submitBtn.innerText="Submit";
        secoundPage.style.setProperty('--after-contact','"Contact With Me"');
        comments.style.setProperty('--after-comments','"Comments"');
        colorsBtn.innerText="Colors";
        
    }
},100)
}
