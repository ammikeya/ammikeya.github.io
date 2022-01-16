import{o as n,c as a,b as s}from"./app.37666d6b.js";const t='{"title":"vue组件传值下","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue组件传值下","slug":"vue组件传值下"}],"relativePath":"vue/PROP2.md","lastUpdated":1632190813858}',p={},o=[s('<h3 id="vue组件传值下" tabindex="-1">vue组件传值下 <a class="header-anchor" href="#vue组件传值下" aria-hidden="true">#</a></h3><ol><li>$parent/$childern &amp; ref</li></ol><h5 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h5><div class="language-vue"><pre><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n data(){\n    return {\n       title:&quot;Hello World&quot;\n    }\n }\n //访问\n this.refs.a.title = &quot;Hello Vue&quot;\n</code></pre></div><h5 id="parent-childern" tabindex="-1">$parent/$childern <a class="header-anchor" href="#parent-childern" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code> <span class="token comment">// Son.vue</span>\n <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n       sonTitle<span class="token operator">:</span><span class="token string">&quot;Son Title&quot;</span>\n    <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n <span class="token comment">// 访问父组件属性</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>fartherTitle <span class="token operator">=</span> <span class="token string">&quot;Son Change Title&quot;</span>\n Farther<span class="token punctuation">.</span>vue\n <span class="token operator">&lt;</span>Son<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Son<span class="token operator">&gt;</span>\n <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n       fartherTitle<span class="token operator">:</span><span class="token string">&quot;Farther Title&quot;</span>\n    <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n <span class="token comment">//访问子组件属性</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>sonTitle <span class="token operator">=</span> <span class="token string">&#39;Farther Change Title&#39;</span>\n</code></pre></div><ol start="2"><li>$attrs、$listeners ----父向子通讯</li></ol><div class="language-"><pre><code>\n</code></pre></div><ol start="3"><li>provide / inject这对选项需要一起使用</li></ol><pre><code>vuejs 官网解释\n</code></pre><div class="language-"><pre><code> provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。\n 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。\n</code></pre></div><pre><code>官网demo,具体见官网。\n</code></pre><div class="language-javascript"><pre><code><span class="token comment">// 父级组件提供 &#39;foo&#39;</span>\n<span class="token keyword">var</span> Provider <span class="token operator">=</span> <span class="token punctuation">{</span>\n      provide<span class="token operator">:</span> <span class="token punctuation">{</span>\n         foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>\n      <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 子组件注入 &#39;foo&#39;</span>\n<span class="token keyword">var</span> Child <span class="token operator">=</span> <span class="token punctuation">{</span>\n      inject<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// =&gt; &quot;bar&quot;</span>\n      <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>provide与inject 怎么实现数据响应式</p><div class="language-"><pre><code>provide祖先组件的实例，然后在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，\n不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如props，methods\n</code></pre></div><div class="language-"><pre><code>使用2.6最新API Vue.observable 优化响应式 provide(推荐) 我们来看个例子：\n孙组件E 和 获取A组件传递过来的color值，并能实现数据响应式变化，\n即A组件的color变化后，组件E、F会跟着变（核心代码如下：）\n</code></pre></div><ol start="4"><li>broadcast / dispatch Vue1.0有$boardcast(通知所有子组件触发方法)与$diapatch(通知所有父组件触发方法)，vue2.0就删掉了。但是在一些组价库中，还是有这个方法，比如ElementUI</li></ol><div class="language-javascript"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$diapatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">$diapatch</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent\n      <span class="token keyword">while</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         parent<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span>data<span class="token punctuation">)</span>\n         parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent\n      <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-javascript"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$broadcast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">$broadcast</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token function-variable function">broadcast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n         child<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>$children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">broadcast</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>$children<span class="token punctuation">)</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="5"><li>model和.sync</li></ol><div class="language-"><pre><code>\n</code></pre></div><ol start="6"><li>发布/订阅模式、rxjs等</li></ol>',22)];p.render=function(s,t,p,e,c,l){return n(),a("div",null,o)};export{t as __pageData,p as default};
