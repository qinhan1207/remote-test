// 导航区扩展=======================================
let i2 = document.querySelector('.i2')
let subMenu = document.querySelector('.sub-menu')
i2.onmouseover = function(){
    subMenu.style.display = 'block';
}
i2.onmouseout = function(){
    subMenu.style.display = 'none';
}

// 轮播图功能====================================
let img = document.querySelector('.banner-box img');
let prev = document.querySelector('.banner-box .prev');
let next = document.querySelector('.banner-box .next');
let bannerBox = document.querySelector('.banner-box')

let imgArr = ['1.jpg','2.jpg','3.jpg','4.jpg'];
let count = 0;

// 定义函数，用来切换图片路径
function cutImg(){
    img.src = './images/' + imgArr[count];
}
// 设置定时器，每隔两秒切换图片
    let timer = setInterval(function(){
        if(count<imgArr.length-1){
            count++;
        }
        else{
            count = 0;
        }
        cutImg();
    },3000)
// 点击下一张
next.onclick = function(){
    if(count<imgArr.length-1){
        count++;
    }
    else{
        count = 0;
    }
    cutImg();
}
prev.onclick = function(){
    if(count===0){
        count = imgArr.length-1;
    }
    else{
        count--;
    }
    cutImg();
}
// 鼠标移入div,轮播图不变
bannerBox.onmouseover = function(){
    clearInterval(timer)
}
// 鼠标划出div定时器跑起来
bannerBox.onmouseout = function(){
    timer = setInterval(function(){
        if(count<imgArr.length-1){
            count++;
        }
        else{
            count = 0;
        }
        cutImg();
    },3000)
}

// 小轮播图=============================================
let prev1 = document.querySelector('.focus-container .prev')
let next1 = document.querySelector('.focus-container .next')
let img1 = document.querySelector('.focus-container img')
let lis = document.querySelectorAll(".banner-btn li")
let slide = document.querySelector('.focus-container')


let imgArr1 = ['10.jpg','11.png','12.jpg','13.jpg','14.png'];
let count1 = 0;








// 定义函数，用来切换图片路径
function cutImg1(){
    img1.src = './images/' + imgArr1[count1];
    for(let i = 0;i<lis.length;i++){
        lis[i].classList.remove('active')
    }
    lis[count1].classList.add('active');
}


// 设置定时器，每隔2s切换图片
let timer1 = setInterval(function(){
    count1++;
    if(count1===imgArr1.length-1){
        count1=0;
    }
    cutImg1();
},2000)
// 点击下一张
next1.onclick = function(){
    if(count1<imgArr1.length-1){
        count1++;
    }
    else{
        count1 = 0;
    }
    cutImg1() 
}
// 点击上一张
prev1.onclick = function(){
    if(count1===0){
        count1 = imgArr1.length-1;
    }
    else{
        count1--;
    }
    cutImg1();
}
// 鼠标划入div，将定时切换图片关掉
slide.onmouseover = function(){
    clearInterval(timer1);
}
// 鼠标划出div，定时器跑起来
slide.onmouseout = function(){
    timer1 = setInterval(function(){
        count1++;
        if(count1===imgArr1.length-1){
            count1=0;
        }
        cutImg1();
    },2000)
}
// 给li绑定点击事件
for(let i = 0;i<lis.length;i++){
    lis[i].onclick = () => {
        count1 = i;
        cutImg1();
    }
}