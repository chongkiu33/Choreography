

document.onmousemove = function(e){
    var x = e.clientX;
    var y = e.clientY;
    //console.log('('+ x+','+y+')');
    
    console.log('('+ x  + ',' +y + ')' );
    console.log(window.innerWidth, window.innerHeight);
    //console.log(pointArr[0][0]);
}

var pointArr = [
    [321,143],
    [319,163],  //2
    [326,163],  //3
    [327,177],  //4
    [330,189],  //5
    [339,199],
    [354,197],
    [377,208], //8
    [405,220],
    [396,230], //10
    [394,247],
    [413,245],
    [435,260],
    [439,213], 
    [403,263], //15
    [420,279],
    [427,293],
    [440,309],
    [450,319],
    [448,338], //20
    [488,378],
    [546,362],
    [575,343],
    [598,329],
    [611,304],  //25
    [597,288], 
    [573,313],
    [562,313],
    [538,333],
    [478,345],  //30
    [585,394],
    [575,426],
    [557,459],
    [537,525],
    [559,588],  //35
    [576,639],
    [581,670],
    [604,675],
    [603,713],
    [576,735],  //40
    [547,742],
    [570,760],
    [589,763],
    [620,762],
    [665,761],  //45
    [660,715],
    [645,636],
    [637,578],
    [645,507],
    [678,425],  //50
    [685,393],
    [693,374],
    [748,355],
    [836,349],
    [866,331],  //55
    [972,293],
    [969,275],
    [1059,264],
    [1143,254],
    [1115,222],  //60
    [1025,205],
    [1001,231],
    [911,239],
    [810,269],
    [698,264],  //65
    [625,252],
    [592,248],
    [574,234],
    [628,242],
    [715,252],  //70
    [752,235],
    [781,201],
    [733,218],
    [712,229],
    [614,198],  //75
    [521,183],
    [508,177],
    [486,173],
    [462,158],
    [439,143],  //80
    [422,112],
    [407,91],
    [385,77],
    [368,79],
    [347,84],
    [325,93],
    [316,106],
    [320,117],




];

var windowWei = 1429;
var windowHei = 965;



var bodypoint = document.getElementById("bodypoint");


var points = [];

var circles = [];

var numbers = [];

DrawPoints();

function DrawPoints(){
    for (let i=0; i<pointArr.length;i++ ){
    points[i] = document.createElement("div");
    points[i].setAttribute("class","point");
    points[i].style.marginLeft = (pointArr[i][0]/windowWei)*100*1.13+ '%';
    points[i].style.marginTop =  (pointArr[i][1]/windowHei)*100*0.7+ '%';


    circles[i] = document.createElement("div");
    circles[i].setAttribute("class","circle");


    numbers[i] = document.createElement("div");
    numbers[i].innerHTML = i+1;
    numbers[i].setAttribute("class","number");


    points[i].appendChild(circles[i]);
    points[i].appendChild(numbers[i]);

    bodypoint.appendChild(points[i]);
    }

    for (let i=0; i<43;i++ ){
        numbers[i].style.marginLeft = "-10px";
    }
    for (let i=43; i<60;i++ ){
        numbers[i].style.marginLeft = "4px";
    }
    for (let i=76; i<88;i++ ){
        numbers[i].style.marginTop = "-18px";
    }

    //单独小的调整
    numbers[0].style.marginLeft = "-10px";
    numbers[0].style.marginTop = "-5px";

    numbers[2].style.marginLeft = "10px";
    numbers[2].style.marginTop = "0px";

    numbers[3].style.marginLeft = "10px";
    numbers[3].style.marginTop = "0px";

    numbers[8].style.marginLeft = "10px";
    numbers[8].style.marginTop = "-5px";

    numbers[9].style.marginLeft = "-20px";
    numbers[9].style.marginTop = "-5px";

    numbers[26].style.marginLeft = "0px";
    numbers[26].style.marginTop = "10px";

    numbers[56].style.marginLeft = "-20px";
    numbers[56].style.marginTop = "-5px";

    numbers[68].style.marginLeft = "15px";
    numbers[68].style.marginTop = "-5px";

    numbers[86].style.marginLeft = "-20px";
    numbers[86].style.marginTop = "-5px";

    numbers[87].style.marginLeft = "-20px";
    numbers[87].style.marginTop = "-5px";  
}

var blocks = document.querySelectorAll('.block');

for(let i=0 ; i< blocks.length;i++){
    circles[i].onmousemove = function(e){
        blocks[i].style.opacity = '100%';
    }

    circles[i].onmouseleave = function(e){
        blocks[i].style.opacity = '35%';
    }
}


var danceVideo = document.getElementById('dancevideo');

//视频移动功能

document.onmousemove = function(e){
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    danceVideo.style.marginLeft = ((window.innerWidth-250)*2 - mouseX)/3 + 'px' ;
    danceVideo.style.marginTop =((window.innerHeight-250)*2 - mouseY)/3+ 'px';
    
}

//鼠标拖线

var body=document.body;

    document.addEventListener('mousemove',(e)=>{
        var elem=document.createElement('div');
        elem.setAttribute('class','trail')
        elem.setAttribute('style',`left:${e.clientX + 5}px; top:${e.clientY + 5}px;`);

        elem.onanimationend=()=>{
            elem.remove();
        }

        body.insertAdjacentElement('beforeend',elem);



        
    })