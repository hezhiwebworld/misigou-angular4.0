# Misigou

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 项目中遇到的问题点

1. 兄弟组件之间的通讯问题
> 共享服务

2. 当子组建参数发生改变，视图重新渲染的问题
> 已经解决，以分页组件为实例，当当前页数发生改变的时候,子组件触发相应的函数，在函数里面重新渲染组件的样式

3. 如何主动触发点击事件
> 已经解决，通过直接调用---共享服务需要，手动调用点击事件，和服务的发射事件两次

4.  通过http请求，拿到数据，但是函数返回值拿不到
> 已经解决，问题是es6的箭头函数添加{}的时候需要显式return返回值

5. angular参数的形式
> 已经解决。第一种方案可以手动拼接字符串，第二种通过UrlSerachParams.set()
> 注意这里不能通过，对象形式，angular的参数必须是固定类型的---这个地方比较坑爹-希望
> 未来官网能优化一下

6. 如果在angular中输入标签文本
> [innerHTML] ===== 这个操作不安全，尽量不要使用，xss

7. 父子组建之间的通讯问题
> @input   || @output

8. 竖向选项卡，每个选项对应内容不一样，如何在对应的标题放入对应的内容
> 通过数组的形式，数组有缩影值，每组数据都id

9. 限制文字的长度
>{{ name | limitTo : 10 : 1 }} 10 长度为10,从第一位开始截取
