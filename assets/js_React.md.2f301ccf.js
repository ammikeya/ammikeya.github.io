import{o as e,c as t,b as a}from"./app.f15b287e.js";const r='{"title":"1、分层对比：改变时间复杂度的决定性思路","description":"","frontmatter":{},"headers":[{"level":3,"title":"1、分层对比：改变时间复杂度的决定性思路","slug":"_1、分层对比：改变时间复杂度的决定性思路"},{"level":3,"title":"2、类型一致：减少递归“一刀切”策略","slug":"_2、类型一致：减少递归“一刀切”策略"},{"level":3,"title":"3、key属性：重用节点的关键","slug":"_3、key属性：重用节点的关键"},{"level":2,"title":"二、无解的问题","slug":"二、无解的问题"},{"level":2,"title":"三、Fiber协调","slug":"三、fiber协调"},{"level":3,"title":"四、setState","slug":"四、setstate"}],"relativePath":"js/React.md","lastUpdated":1638944903829}',d={},i=[a('<h3 id="_1、分层对比：改变时间复杂度的决定性思路" tabindex="-1">1、分层对比：改变时间复杂度的决定性思路 <a class="header-anchor" href="#_1、分层对比：改变时间复杂度的决定性思路" aria-hidden="true">#</a></h3><h3 id="_2、类型一致：减少递归“一刀切”策略" tabindex="-1">2、类型一致：减少递归“一刀切”策略 <a class="header-anchor" href="#_2、类型一致：减少递归“一刀切”策略" aria-hidden="true">#</a></h3><h3 id="_3、key属性：重用节点的关键" tabindex="-1">3、<code>key</code>属性：重用节点的关键 <a class="header-anchor" href="#_3、key属性：重用节点的关键" aria-hidden="true">#</a></h3><h2 id="二、无解的问题" tabindex="-1">二、无解的问题 <a class="header-anchor" href="#二、无解的问题" aria-hidden="true">#</a></h2><p>栈协调机制下的<code>Diff</code>算法，其实是<strong>树的深度优先遍历过程</strong>，也就是一个<strong>同步的递归过程</strong>，意味着一旦更新开始，根本停不下来。当处理复杂度高、体量大的虚拟<code>DOM</code>树时，栈协调需要的调和时间会很长，意味着<strong>JavaScript 对主线程将长时间占用</strong>，进而导致渲染卡顿、无响应等问题</p><h2 id="三、fiber协调" tabindex="-1">三、Fiber协调 <a class="header-anchor" href="#三、fiber协调" aria-hidden="true">#</a></h2><p>按照<code>React</code>官方的说法，是实现<strong>增量渲染</strong>，换句话说就是把一个渲染任务分解为多个渲染任务，而后将其分散到多个帧里，是一种手段。</p><p>实现增量渲染的目的，是为了实现任务的<strong>可中断、可恢复</strong>，并给不同的任务赋予不同的<strong>优先级</strong>，最终达到快速响应的体验</p><p>可以看出，新老协调对生命周期的影响主要是 render 这个阶段，Fiber协调 通过增加 <code>Scheduler</code> 层 和 改写 <code>Reconciler</code>层 实现将一个庞大的更新任务分解为一个个的工作单元，这些工作单元有着不同的优先级，<code>React</code> 可以根据优先级的高低去实现工作单元的打断和恢复</p><h3 id="四、setstate" tabindex="-1">四、setState <a class="header-anchor" href="#四、setstate" aria-hidden="true">#</a></h3><p><code>setState</code>并不是单纯 同步／异步，它的表现会因调用场景不同而不同：</p><ul><li>在 React 钩子函数及合成事件中，它表现为异步</li><li>而在 <code>setTimeout</code> 、<code>setInterval</code> 等函数中，包括在 <code>DOM</code> 原生事件中，它都表现为同步</li></ul><p>造成这种差异的本质是：React 事务机制 和 批量更新机制 的 工作方</p>',13)];d.render=function(a,r,d,s,o,c){return e(),t("div",null,i)};export{r as __pageData,d as default};
