RequireJS-Dojo-AngularJS
========================

Just use requireJS to load dojo and angularjs example

#### 目的

主要是想实践一下，如何通过requireJS管理angularjs和其他库，另外，项目如果以
angularjs为主框架，angularjs本身的UI控件相对较弱，引入强大的dojo（将dojo中
的UI控件封装成angularjs指令）来弥补这个弱势。


#### 目录结构
```shell
├── bower_components
│   ├── angular
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
│   └── main.js
├── node_modules
│   ├── bower
│   └── http-server
├── package.json
└── README.md
```
#### 如何使用

- git clone https://github.com/hjzheng/RequireJS-Dojo-AngularJS 
- npm start

#### 参考资料

- http://jsfiddle.net/sfoster/ztfdZ/
- http://www.startersquad.com/blog/angularjs-requirejs/
