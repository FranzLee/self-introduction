var myText = [];

function startGame() {
    myGameArea.start();
    myText.push(new conponent(400, 260, 0, 50, "各位學長早安", 40, "pink"));
    myText.push(new conponent(420, 260, 51, 50, "我是李則聿", 40, "pink"));
    myText.push(new conponent(360, 260, 101, 50, "以下是我的自我介紹", 40, "pink"));
    myText.push(new conponent(400, 260, 151, 20, "我的興趣", 30, "pink"));
    myText.push(new conponent(400, 260, 171, 50, "我的興趣", 30, "pink", "swip", 20, 50));
    myText.push(new conponent(20, 50, 221, 350, "我的興趣", 30, "pink"));
    myText.push(new conponent(70, 100, 261, 310, "看足球比賽", 20, "orange"));
    myText.push(new conponent(200, 100, 301, 270, "皇馬拿歐冠冠軍啦", 15, "gold"));
    myText.push(new conponent(70, 200, 341, 230, "沒事發瘋", 20, "orange"));
    myText.push(new conponent(200, 200, 381, 190, "啊啊啊啊啊啊啊啊啊啊啊啊啊", 15, "gold"));
    myText.push(new conponent(70, 300, 421, 150, "沒事寫code", 20, "orange"));
    myText.push(new conponent(200, 300, 461, 110, "誒怎麼兩點了？", 15, "gold"));
    myText.push(new conponent(70, 400, 501, 70, "講幹話(特別幹的那一種", 20, "orange"));
    myText.push(new conponent(340, 400, 541, 30, "請幫我微波這支冰淇淋", 15, "gold"));
    myText.push(new conponent(360, 260, 571, 20, "零重點型自我介紹", 30, "pink"));
    myText.push(new conponent(360, 260, 591, 50, "零重點型自我介紹", 30, "pink", "swip", 20, 50));
    myText.push(new conponent(20, 50, 641, 410, "零重點型自我介紹", 30, "pink"));
    myText.push(new conponent(70, 100, 641, 410, "一個嚴重社恐，", 20, "white"));
    myText.push(new conponent(210, 100, 681, 370, "組織語言能力低落，", 20, "white"));
    myText.push(new conponent(390, 100, 721, 330, "常常帶兩台電腦來學校，", 20, "white"));
    myText.push(new conponent(610, 100, 761, 290, "然後什麼都沒做又帶回去了。", 20, "white"));
    myText.push(new conponent(70, 200, 801, 250, "一個從小到大沒學過python的特殊人類，", 20, "white"));
    myText.push(new conponent(430, 200, 841, 210, "沒有藍牙耳機的特殊人類，", 20, "white"));
    myText.push(new conponent(670, 200, 881, 170, "數數能力低落，", 20, "white"));
    myText.push(new conponent(70, 300, 921, 130, "習慣把冰淇淋加入火鍋燉煮，", 20, "white"));
    myText.push(new conponent(330, 300, 961, 90, "iPhone8可憐仔，", 20, "white"));
    myText.push(new conponent(480, 300, 1001, 50, "每天睡足3小時-健康兒童", 20, "white"));
    myText.push(new conponent(360, 260, 1051, 20, "個人可悲的程式能力", 30, "pink"));
    myText.push(new conponent(360, 260, 1071, 50, "個人可悲的程式能力", 30, "pink", "swip", 20, 50));
    myText.push(new conponent(20, 50, 1121, 410, "個人可悲的程式能力", 30, "pink"));
    myText.push(new conponent(70, 100, 1121, 410, "自學過HTML、", 20, "white"));
    myText.push(new conponent(210, 100, 1151, 380, "JavaScript、", 20, "white"));
    myText.push(new conponent(330, 100, 1181, 350, "一點點CSS、", 20, "white"));
    myText.push(new conponent(460, 100, 1211, 320, "一點點Java，", 20, "white"));
    myText.push(new conponent(580, 100, 1241, 290, "聽學長講課後會一點C++、", 20, "white"));
    myText.push(new conponent(820, 100, 1271, 260, "一點點SQL，", 20, "white"));
    myText.push(new conponent(70, 200, 1301, 230, "雖然好像接觸不少，", 20, "white"));
    myText.push(new conponent(250, 200, 1341, 190, "但真的比較熟的只有JavaScript了，", 20, "white"));
    myText.push(new conponent(570, 200, 1381, 150, "像是本「偽投影片」，", 20, "white"));
    myText.push(new conponent(70, 300, 1421, 110, "就是HTML的canvas及JavaScript實作的", 20, "white"));
    myText.push(new conponent(360, 260, 1531, 20, "個人資訊", 30, "pink"));
    myText.push(new conponent(360, 260, 1551, 50, "個人資訊", 30, "pink", "swip", 20, 50));
    myText.push(new conponent(20, 50, 1601, 100000, "個人資訊", 30, "pink"));
    myText.push(new conponent(70, 100, 1631, 100000, "Discord : ", 20, "white"));
    myText.push(new conponent(160, 100, 1661, 100000, "Franz_0330", 20, "white"));
    myText.push(new conponent(70, 150, 1691, 100000, "Instagram : ", 20, "white"));
    myText.push(new conponent(180, 150, 1721, 100000, "franz_lee_0330", 20, "white"));
    myText.push(new conponent(70, 200, 1751, 100000, "Github : ", 20, "white"));
    myText.push(new conponent(150, 200, 1781, 100000, "Franz Lee", 20, "white"));
    myText.push(new conponent(70, 250, 1811, 100000, "Mail : ", 20, "white"));
    myText.push(new conponent(130, 250, 1841, 100000, "franz.e.lee@gmail.com", 20, "white"));
    myText.push(new conponent(70, 300, 1871, 100000, "連結與資訊放在底下唷！", 20, "white"));
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 540;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frame = 0;
        this.interval = setInterval(updateGameArea, 20);
    }, 
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function conponent(x, y, startFrame, lastFrame, words, fontSize, fontColor, changing, newX, newY) {
    this.startFrame = startFrame;
    this.lastFrame = lastFrame;
    this.x = x;
    this.y = y;
    this.words = words;
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.changing = changing;
    this.newX = newX;
    this.newY = newY;
    if(this.changing == "swip") {
        this.changeXperFrame = (this.newX - this.x) / this.lastFrame;
        this.changeYperFrame = (this.newY - this.y) / this.lastFrame;        
    }
    if(this.changing == "disappear") {

    }
    if(this.changing == "appear") {

    }
    this.update = function () {
        var gap = myGameArea.frame - this.startFrame;
        if((gap >= 0) && (gap <= lastFrame)) {
            if(this.changing) {
                this.x += this.changeXperFrame;
                this.y += this.changeYperFrame;
            }
            console.log(myGameArea.frame);
            myGameArea.context.font = fontSize + "px Arial";
            myGameArea.context.fillStyle = fontColor;
            myGameArea.context.fillText(this.words, this.x, this.y);
        }
    }

}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.frame += 1;
    for(i = 0; i < myText.length; i++) {
        myText[i].update();
    }
    if(myGameArea.frame == 1871) {
        document.getElementById("information1").innerHTML = "Discord : Franz_0330";
        document.getElementById("information2").innerHTML = "Instagram : franz_lee_0330<br></br>";
        document.getElementById("information3").innerHTML = "Github : Franz Lee<br></br>"
        document.getElementById("information4").innerHTML = "Mail : franz.e.lee@gmail.com<br></br>"
    }
}
