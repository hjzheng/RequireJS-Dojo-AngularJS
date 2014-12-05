RequireJS-Dojo-AngularJS
========================

Just use requireJS to load dojo and angularjs example

#### 目的

主要是想实践一下，如何通过requireJS管理angularjs和其他库，另外，为了充分利用angularjs
的优势(MVC,数据双向绑定,指令系统)，项目需要以angularjs为主框架，但是其本身的UI控件相对较弱，
为此引入强大的dojo（将dojo中的UI控件封装成angularjs指令）来弥补这个弱势。


#### 目录结构
```shell
├── bower_components
│   ├── angular
│   ├── angular-route
│   ├── bower.md
│   ├── dijit
│   ├── dojo
│   ├── domReady
│   └── requirejs
├── bower.json
├── index.html
├── js
│   ├── app.js
│   ├── bootstrap.js
│   ├── controllers
│   ├── directives
│   ├── main.js
│   └── route.js
├── node_modules
│   ├── bower
│   └── http-server
├── package.json
├── partials
│   ├── partial1.html
│   └── partial2.html
└── README.md
```
#### 如何使用

- git clone https://github.com/hjzheng/RequireJS-Dojo-AngularJS 
- npm start

#### 参考资料

- http://jsfiddle.net/sfoster/ztfdZ/
- http://www.startersquad.com/blog/angularjs-requirejs/
