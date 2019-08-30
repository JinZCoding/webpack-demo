import _ from 'lodash';
import '../css/style.css';
import Img from '../images/img.jpeg';
import Data from '../data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var br = document.createElement('br');

    element.innerHTML = _.join(['是谁~~', '送你来到我身边~~~'], ' ');
    element.classList.add('hello');

    // 添加图像
    var myImg = new Image();
    myImg.src = Img;
    myImg.width = 100;
    myImg.height = 100;
    element.appendChild(myImg)
    console.log(Data)

    element.appendChild(br)

    btn.innerHTML = '点我点我点我';
    btn.onclick = printMe;
    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());

if(module.hot) {
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}