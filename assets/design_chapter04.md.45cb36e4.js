import{o as n,c as s,b as a}from"./app.ce5cd593.js";const p='{"title":"简单工厂模式","description":"","frontmatter":{},"headers":[{"level":3,"title":"简单工厂模式","slug":"简单工厂模式"},{"level":3,"title":"笔记","slug":"笔记"}],"relativePath":"design/chapter04.md","lastUpdated":1636194185825}',t={},o=[a('<h3 id="简单工厂模式" tabindex="-1">简单工厂模式 <a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a></h3><p>简单工厂模式实际不是一个设计模式，而是实现创建子类过程中的一个方法。为抽象工厂方法做铺垫。</p><p>定义一个简单工厂方法类，其实定义一个创建子类的方法</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimplePizzaFactory</span> <span class="token punctuation">{</span>\n   <span class="token keyword">public</span>  <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n      \n      <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;greek&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token comment">//       pizza = new GreekPizza();</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;pepperoni&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token comment">//       pizza = new pepperoniPizza();</span>\n      <span class="token punctuation">}</span>\n      \n      <span class="token keyword">return</span>  pizza<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个披萨父类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;prepare&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bake&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cut&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   \n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义个中式比萨子类,重写父类的name方法</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>\n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Cheese Pizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个商店类。用于接收订单，发货</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>\n   \n   <span class="token class-name">SimplePizzaFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimplePizzaFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   \n   <span class="token keyword">public</span> <span class="token class-name">PizzaStore</span><span class="token punctuation">(</span><span class="token class-name">SimplePizzaFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>factory <span class="token operator">=</span> factory<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token class-name">Pizza</span> <span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Pizza</span> pizza<span class="token punctuation">;</span>\n      pizza <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createPizza</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n<span class="token punctuation">}</span>\n</code></pre></div><p>测试类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token class-name">SimplePizzaFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimplePizzaFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">PizzaStore</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PizzaStore</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="笔记" tabindex="-1">笔记 <a class="header-anchor" href="#笔记" aria-hidden="true">#</a></h3><ol><li><p>定义简单工厂类，定义创建子类的方法</p></li><li><p>定义父类，定义子类</p></li><li><p>定义客户端或者说门店。定义一个简单工厂对象属性，在构造方法中接收。在下单方法中调用简单工厂对象属性的创建对象方法。</p><p>初始化抽象工厂对象，初始化门店对象将工厂对象传进去。调用下单方法，然后根据具体类型调用简单工厂方法构造具体子类</p></li></ol>',14)];t.render=function(a,p,t,c,e,u){return n(),s("div",null,o)};export{p as __pageData,t as default};
