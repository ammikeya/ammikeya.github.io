import{o as e,c as p,b as n}from"./app.3fe4aed4.js";const t='{"title":"","description":"","frontmatter":{},"relativePath":"interview/sy.md","lastUpdated":1649066048545}',a={},i=[n('<p>一、项目中的难点</p><p>二、项目中印象深刻的难点或者说遇到的问题解决思路</p><ol><li><p>spreadjs遇到问题解决思路</p><div class="language-"><pre><code>1. 静静思考问题产生的根本原因 60-70%时间\n2. Debugger验证自己的猜想而不是Debugger  30-40%\n3. 思考解决方法如果没有解决方法的时候思考需要换一种思路是否能解决？\n4. 谷歌或者去github issue中看是否别人遇到类似问题\n5. 去github上clone代码从代码中找解决方法\n</code></pre></div></li></ol><p>三、项目的架构怎么选型？</p><div class="language-"><pre><code> 1. 首先技术选型 vue或react\n 2. 其次业务选型-高内聚和低耦合\n 3. 代码的风格ESLint\n 4. 语言的选型 JS或者TS\n 5. 代码的性能与整洁-需要review代码\n</code></pre></div><p>四、less和sass</p><p>五、浅拷贝和深拷贝</p><p>常用的[...obj] Object.assgin(target,source,...)</p><p>怎么深拷贝 JSON序列化（function或者undefined或者Symble会直接消失） deepClone 自己实现</p><p>六、BFC的理解</p><p>Box-szing的理解</p><p>七、React的setState</p><ol><li>vue的响应式 2.x用definedProperty 3.x 用的Proxy</li></ol><p>一般情况下是异步，但是如果被setTimetout包括了就是同步</p><p>setTimeout里面是同步</p><p>拿到setState最新值-第二个参数是个回调方法可以拿到最新值 vue中的是nextTick</p><p>八、回调地狱的理解以及解决方法</p><div class="language-"><pre><code>promise解决了回调地狱但是变为链式调用，await变为同步调用\n</code></pre></div><p>九、new function和new Class的本质区别</p><p>十、哪几种立即表达式（）()</p><p>十一、React的动态组件实现方式</p><ol><li><p>config.data class export default new Config</p><p>Config[xxxxx] (ddd,xxxss)</p></li><li><p>Props.children相当于vue的插槽</p></li><li><p>hook或者函数组件直接返回组件</p></li></ol><p>十二、移动端经验</p><p>十三、Redux怎样处理异步更新</p><div class="language-"><pre><code>react-thunk框架\n</code></pre></div><p>十四、vue和react区别</p><div class="language-javascript"><pre><code>react 中 直接用render方法返回虚拟dom vue中有template但也有render\nreact 中 是调用setState主动diff渲染视图更新 vue是用的Object<span class="token punctuation">.</span>definedPrototy或者v3的Proxy实现订阅发布模式\nreact 中 自己实现了一套基于事件的异步更新事件 vue则喜欢用浏览器自带的微任务promise\nreact 中 有类组件 vue中没有\n数据是不是可变的\nreact可以通过高阶组件（Higher Order Components<span class="token operator">--</span><span class="token constant">HOC</span>）来扩展，而vue需要通过mixins来扩展\nreact diff算法是从前往后比较，vue是双端比较 用新旧节点的开始和结束下标对比\nreact 采用Fiber把树的同步更新改为链表的可中断更新（diff过程中可中断，commit中就不能中断了）vue采用静态标记的方法提高diff效率\n</code></pre></div>',27)];a.render=function(n,t,a,s,r,o){return e(),p("div",null,i)};export{t as __pageData,a as default};