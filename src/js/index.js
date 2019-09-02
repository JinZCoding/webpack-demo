import _ from 'lodash';
import { cube } from './math.js';
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



    // tree shaking
    var element1 = document.createElement('pre');

    element1.innerHTML = [
        '窝窝头 一块钱四个！',
        '嘿嘿！ 5 cubed is equal to ' + cube(5)
    ].join('\n\n');


    return element1;
}

// document.body.appendChild(component());

let element = component();// 存储element，以在print.js修改时重新渲染
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        element = component(); // 重新渲染 "component"， 以便更新click事件处理函数
        document.body.appendChild(element);
    })
}