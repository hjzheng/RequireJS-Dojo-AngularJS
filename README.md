RequireJS-Dojo-AngularJS
========================

Just use requireJS to load dojo and angularjs example

#### 目的

主要是想实践一下，如何通过requireJS管理angularjs和其他库，另外，为了充分利用angularjs
的优势(MVC,数据双向绑定,指令系统)，项目需要以angularjs为主框架，但是其本身的UI控件相对较弱，
为此引入强大的dojo（将dojo中的UI控件封装成angularjs指令）来弥补这个弱势。

#### DOJO控件转化AngularJS指令的方式

```javascript
//1. 配置参数一对一方式 （需配置多个参数，这里只配置了label）
//<my-button label="{{label}}"></my-button>
directives.directive('myButton', function () {
    return {
        restrict: 'EA',
        template: '<div></div>',
        replace: true,
        scope: {
            label: "@"
        },
        link: function ($scope, iElm, iAttrs, controller) {
            new Button({
                label: $scope.label,
                onClick: function () {
                    console.log("click dojo button");
                }
            }, iElm[0]).startup();
        }
    };
});
//2. 全配置参数对应对象方式 （Button的所有配置通过config对象参数）
//<my-complicated-button config="buttonConfig"></my-complicated-button>
directives.directive('myComplicatedButton', function () {
    return {
        restrict: 'EA',
        template: '<div></div>',
        replace: true,
        scope: {
            config: "="
        },
        link: function ($scope, iElm, iAttrs, controller) {
            new Button($scope.config, iElm[0]).startup();
        }
    };
});
//3. 使用parse方式初始化后，再进行参数配置（分为一对一配置和全配置）
//<my-parsed-button label="{{label}}" click="click"></my-parsed-button>
directives.directive('myParsedButton', function () {
    return {
        restrict: 'EA',
        template: '<div><button data-dojo-type="dijit/form/Button" type="button"></button></div>',
        replace: true,
        scope: {
            label: "@",
            click: "&"
        },
        link: function ($scope, iElm, iAttrs, controller) {
            parser.parse(iElm[0].parentNode).then(function(instances){
                var myParsedButton = instances[0];
                myParsedButton.on("click", $scope.click());
                myParsedButton.set("label", $scope.label);
            });
        }
    };
});
//4. 直接使用parse解析，参数配置参考 dojo声明式编程
/*
<my-dojo-parse>
    <button data-dojo-type="dijit/form/Button"  
        data-dojo-props="iconClass:'dijitEditorIcon dijitEditorIconCut'" type="button">
        Click me!
    </button>
</my-dojo-parse>
*/
directives.directive('myDojoParse', function () {
    return {
        restrict: 'E',
        template: '<div ng-transclude></div>',
        replace: true,
        transclude: true,
        link: function ($scope, iElm, iAttrs, controller) {
            parser.parse(iElm[0].parentNode).then(function(instances){
                console.log(instances);
            });
        }
    };
});
```


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
#### 使用前提

- 需要Nodejs

#### 如何使用

- git clone https://github.com/hjzheng/RequireJS-Dojo-AngularJS 
- npm start

#### 参考资料

- http://jsfiddle.net/sfoster/ztfdZ/
- http://www.startersquad.com/blog/angularjs-requirejs/
