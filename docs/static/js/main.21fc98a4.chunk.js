(this["webpackJsonpmi-portafolio"]=this["webpackJsonpmi-portafolio"]||[]).push([[0],{31:function(e,a,t){e.exports=t(49)},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),o=t(12),i=t(4),s=t(10),m=t(11),u=t(14);function d(){var e=Object(s.a)(["\n    .list-col {\n        color: #f2f2f2;\n    }\n\n    .active {\n        color: #77abb7;\n    }\n    \n    list-style: none;\n    display: flex;\n    flex-flow: row nowrap;\n\n    .link-nav {\n        text-decoration: none;\n        padding: 18px 10px;\n        font-weight: 600;\n        font-size: 25px;\n    }\n\n    @media (max-width: 768px) {\n        flex-flow: column nowrap;\n        background-color: #e3e3e3;\n        position: fixed;\n        transform: ",";\n        top: 0;\n        right: 0;\n        height: 100vh;\n        width: 300px;\n        padding-top: 3.5rem;\n        transition: transform 0.3s ease-in-out;\n        z-index: 100;\n        .list-col {\n            color: #254b62\n        }\n        .active {\n            color: #77abb7;\n        }\n    }"]);return d=function(){return e},e}var E=m.a.div(d(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),p=function(e){var a=e.open;return l.a.createElement(E,{open:a},l.a.createElement(o.b,{activeClassName:"active",to:"/home",className:"link-nav list-col"},"Home"),l.a.createElement(o.b,{activeClassName:"active",to:"/curriculum",className:"link-nav list-col"},"Curriculum"),l.a.createElement(o.b,{activeClassName:"active",to:"/projects",className:"link-nav list-col"},"Projects"),l.a.createElement(o.b,{activeClassName:"active",to:"/blog",className:"link-nav list-col"},"Blog"))};function f(){var e=Object(s.a)(["\n    width: 2rem;\n    height: 2rem;\n    \n    margin-top: 18px;\n    right: 20px;\n    z-index: 200;\n    display: none;\n\n    @media (max-width: 768px){\n        display: flex;\n        justify-content: space-around;\n        flex-flow: column nowrap;\n    }\n\n    div {\n        width: 2rem;\n        height: 0.25rem;\n        background-color: ",";\n        border-radius: 10px;\n        transform-origin: 1px;\n        transition: all 0.3s linear;\n        color: #f2f2f2;\n\n        &:nth-child(1) {\n            transform: ",";\n        }\n        &:nth-child(2) {\n            trasform: ",";\n            opacity: ",";\n        }\n        &:nth-child(3) {\n            transform: ",";\n        }\n    }\n"]);return f=function(){return e},e}var v=m.a.div(f(),(function(e){return e.open?"#254b62":"#77abb7"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),b=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{open:t,onClick:function(){return r(!t)}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement(p,{open:t}))};function h(){var e=Object(s.a)(["\n    width: 100%;\n    height: 80px;\n    padding: 20px 20px;\n    display: flex;\n    justify-content: space-between;\n\n    .logo {\n        padding: 8px 0;\n        color: #f95959;\n        font-weight: 600;\n        font-size: 35px;\n    }"]);return h=function(){return e},e}var g=m.a.nav(h()),N=function(){return l.a.createElement(g,null,l.a.createElement("div",{className:"logo"},"< VinceMis />"),l.a.createElement(b,null))},x=t(53),w=t(50),k=t(51),y=t(52);function C(){var e=Object(s.a)(["\n    background-color: #f95959; \n    border: 0;   \n    padding: 10px;\n    border-radius: 3px;\n    color: #fff;\n"]);return C=function(){return e},e}var S=m.a.button(C()),M=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"row center-item"},l.a.createElement("div",{className:"col-12 col-md-6 nav-burger"},l.a.createElement("div",{className:"avatar-content text-center animate__animated animate__flipInX"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/vincemis610/mybriefcase/master/public/assets/dev.png",alt:"avatar"}))),l.a.createElement("div",{className:"col-12 col-md-6 nav-burger animate__animated animate__fadeIn"},l.a.createElement("h1",{className:"title-name"},"Hello there..!"),l.a.createElement("p",{className:"text-content"},"I'm Vince Mis and am a Fullstack Developer"),l.a.createElement(S,{onClick:c},"About Me..."))),l.a.createElement(x.a,{className:"modal-lg center-item",isOpen:t},l.a.createElement(w.a,null,l.a.createElement("span",{className:"header-modal"},"About Me")),l.a.createElement(k.a,null,l.a.createElement("div",{className:"text-about pb-4"},"Hello! ",l.a.createElement("br",null),l.a.createElement("br",null),"I'm Vicente, am a fullstack developer web, i love to learn new technology, im a lover of GNU/Linux especially Debian that is my favorite distro, i like to be autodidact and practice coding a lot.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Skills")," ",l.a.createElement("br",null),"Autodidact",l.a.createElement("br",null),"Team-Work",l.a.createElement("br",null),"Open-mindedness",l.a.createElement("br",null),"Patience",l.a.createElement("br",null),"Cloud Platforms(AWS, GCP)",l.a.createElement("br",null),"Javascript(Backend, Frontend)",l.a.createElement("br",null),"DBA MySQL, PostGreSQL, Firestore"),l.a.createElement("div",{className:"text-about"},l.a.createElement("strong",null,"Location: ")," Teabo, Yucatan, Mexico"),l.a.createElement("div",{className:"text-about"},l.a.createElement("strong",null,"Mail: ")," vincemis610@gmail.com"),l.a.createElement("div",{className:"text-about"},l.a.createElement("strong",null,"Phone: "),"+52 997-121-6646")),l.a.createElement(y.a,null,l.a.createElement(S,{onClick:c},"Close"))))},A=function(){return l.a.createElement("div",{className:"container seccion-footer"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12 icons-footer nav-burger"},l.a.createElement("i",{onClick:function(){return window.location.href="https://github.com/vincemis610"},className:"fa fa-github mx-4","aria-hidden":"true"}),l.a.createElement("i",{onClick:function(){return window.location.href="https://twitter.com/vammpichi"},className:"fa fa-twitter mx-4","aria-hidden":"true"}),l.a.createElement("i",{onClick:function(){return window.location.href="https://www.facebook.com/VinceMisMex"},className:"fa fa-facebook mx-4","aria-hidden":"true"}),l.a.createElement("i",{onClick:function(){return window.location.href="https://api.whatsapp.com/send?phone=529971216646&text=Hola,%20\xbfQu\xe9%20tal%20%est\xe1s?"},className:"fa fa-whatsapp mx-4","aria-hidden":"true"}))))},P=function(){return l.a.createElement("div",{className:"text-light center-item"},l.a.createElement("h1",null,"In Proccess..."))},O=[{id:"1",period:"AUG 2015 - JUL 2018",enterprise:"Town Hall Teabo",charge:"System Area Manager",locate:"Teabo, Yucatan",col:"Center",address:"32 st between 31 & 31a",activities:"Manager of town hall portal and national institute for access to public information, tech support all the building, design of the website using PHP, MySQL and HTML5."},{id:"2",period:"JUL 2018 - FEB 2019",enterprise:"Corporate Ordaz Gonzalez",charge:"Informatic Area Asistant",locate:"Merida Yucatan",col:"North Mexico",address:"7 St and 22 St",activities:"Technical support in all building, configuration of Access Points, Ip Cameras, BackUp DataBase Server, Configuration Contpaq Software."},{id:"3",period:"JUN 2019 - CURRENT",enterprise:"CodecTI",charge:"Fullstack Developer",locate:"Merida Yucatan",col:"North Mexico",address:"28 st Between 27 St & 25 St",activities:"Rest APIs development using Node JS, Express, Lambda and APi Gateway, configuration of EC2 instance, \n            Route 43, Elastic Load Balancer, S3 from AWS, use of Version Control System Bitbucket, DBA RDS MySQL, consumption of APIs like google \n            geolocalization and Firebase(Authorize, firestore, notification), openpay implementation."}],j=[{id:"1",period:"SEP 2004 - JUL 2007",school:"COBAY Teabo",certify:"Bachelor",locate:"Teabo, Yucatan",col:"Mothers Park ",address:"23St between 32",cp:97910},{id:"2",period:"SEP 2007 - JUL 2009",school:"Souths Regional Technological University of Yucatan State",certify:"Higher University Technician T. I. C.",locate:"Tekax Yucatan",col:"San Diego",address:"Railroad Track Merida",cp:97970},{id:"3",period:"April 2019",school:"Software House Merida",certify:"QA Automation, DevOps",locate:"Merida, Yucatan",col:"Garcia Gineres",address:"St 23 Num 188 between 12 & 14",cp:97070}],T=function(e){var a=e.period,t=e.enterprise,n=e.charge,r=e.locate,c=e.col,o=e.address,i=e.activities;return l.a.createElement("div",{className:"col-12 col-md-6 my-2 p-2 text-d"},l.a.createElement("div",{className:"card my-3 p-3 text-d"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-building mr-3","aria-hidden":"true"}),l.a.createElement("strong",null,t)),l.a.createElement("br",null),l.a.createElement("strong",null,n," : ")," ",a,l.a.createElement("div",{className:"pb-2"},r,", ",c,l.a.createElement("br",null),l.a.createElement("span",null,o)),l.a.createElement("div",{className:"activities"},l.a.createElement("span",null,i)))))},L=function(e){var a=e.period,t=e.school,n=(e.certify,e.locate),r=e.col,c=e.address,o=e.cp;return l.a.createElement("div",{className:"col-12 col-md-6 my-2 p-2 text-d"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-building-o mr-3","aria-hidden":"true"}),l.a.createElement("strong",null,t)),l.a.createElement("br",null),l.a.createElement("strong",null," Period: ")," ",a,l.a.createElement("div",{className:"pb-2"},l.a.createElement("strong",null,"Locate: "),n,", ",r,l.a.createElement("br",null),l.a.createElement("strong",null,"Address: "),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("strong",null,"CP: "),l.a.createElement("span",null,o)))))},B=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"container center-item"},l.a.createElement("div",{className:"row mt-5 text-light"},l.a.createElement("div",{className:"row col-12 pt-4"},l.a.createElement("div",{className:"col-12"},l.a.createElement("i",{className:"fa fa-briefcase icon-cv","aria-hidden":"true"}),l.a.createElement("h2",null,"Laboral Experience")),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"hrow"})),O.map((function(e){return l.a.createElement(T,Object.assign({key:e.id},e))}))),l.a.createElement("div",{className:"row col-12"},l.a.createElement("div",{className:"col-12"},l.a.createElement("i",{className:"fa fa-graduation-cap icon-cv","aria-hidden":"true"}),l.a.createElement("h2",null,"Education")),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"hrow"})),j.map((function(e){return l.a.createElement(L,Object.assign({className:"mycard",key:e.id},e))})))),l.a.createElement(x.a,{className:"modal-lg center-item",isOpen:t},l.a.createElement(w.a,null,l.a.createElement("span",{className:"header-modal"},"About Me")),l.a.createElement(k.a,null,l.a.createElement("div",{className:"text-about pb-4"},t.activities),l.a.createElement("div",{className:"text-about"},l.a.createElement("strong",null,"Location: ")," Teabo, Yucatan, Mexico"),l.a.createElement("div",{className:"text-about"},l.a.createElement("strong",null,"Mail: ")," vincemis610@gmail.com"),l.a.createElement("div",{className:"text-about"},l.a.createElement("strong",null,"Phone: "),"+52 997-121-6646")),l.a.createElement(y.a,null,l.a.createElement("button",{onClick:function(){r(!t)}},"Close"))))},I=function(){return l.a.createElement("div",{className:"text-light center-item"},l.a.createElement("h1",null,"In Proccess..."))},U=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/home",component:M}),l.a.createElement(i.b,{exact:!0,path:"/curriculum",component:B}),l.a.createElement(i.b,{exact:!0,path:"/projects",component:I}),l.a.createElement(i.b,{exact:!0,path:"/blog",component:P}))),l.a.createElement(A,null))},Y=function(){return l.a.createElement(o.a,null,l.a.createElement(i.d,null,l.a.createElement(U,null)),l.a.createElement(i.a,{to:"/home"}))},z=function(){return l.a.createElement("div",{className:"text-name"},l.a.createElement(Y,null))};c.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.21fc98a4.chunk.js.map