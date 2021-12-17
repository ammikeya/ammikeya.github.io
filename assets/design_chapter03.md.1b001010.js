import{o as n,c as s,b as a}from"./app.f15b287e.js";const p='{"title":"装饰者模式","description":"","frontmatter":{},"headers":[{"level":3,"title":"装饰者模式","slug":"装饰者模式"},{"level":3,"title":"设计原则","slug":"设计原则"},{"level":3,"title":"笔记","slug":"笔记"}],"relativePath":"design/chapter03.md","lastUpdated":1636036437376}',t={},e=[a('<h3 id="装饰者模式" tabindex="-1">装饰者模式 <a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a></h3><div class="language-"><pre><code>动态地将责任附加到对象上。想要扩展对象， 装饰者提供有别于继承的另一种选择\n</code></pre></div><h3 id="设计原则" tabindex="-1">设计原则 <a class="header-anchor" href="#设计原则" aria-hidden="true">#</a></h3><div class="language-"><pre><code>对扩展开放，对修改关闭\n</code></pre></div><p>定义一个抽象父类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>\n\t<span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">&quot;Unknown Beverage&quot;</span><span class="token punctuation">;</span>\n\t\n\t<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> description<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t\n\t<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个具体子类继承抽象父类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Espresso</span> <span class="token keyword">extends</span> <span class="token class-name">Beverage</span><span class="token punctuation">{</span>\n   \n   <span class="token keyword">public</span> <span class="token class-name">Espresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      description <span class="token operator">=</span> <span class="token string">&quot;Espresso&quot;</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token number">1.99</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HouseBlend</span> <span class="token keyword">extends</span> <span class="token class-name">Beverage</span><span class="token punctuation">{</span>\n   <span class="token keyword">public</span> <span class="token class-name">HouseBlend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      description <span class="token operator">=</span> <span class="token string">&quot;House Blend Coffee&quot;</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token number">0.89</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个抽象装饰父类。注意：抽象装饰父类需要继承抽象父类。只是将抽象父类的装饰方法定义为抽象的。</p><div class="language-"><pre><code>public abstract class CondimentDecorator extends Beverage{\n   public abstract String getDescription();\n}\n</code></pre></div><p>定义3个装饰子类继承装饰父类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mocha</span> <span class="token keyword">extends</span> <span class="token class-name">CondimentDecorator</span><span class="token punctuation">{</span>\n   <span class="token class-name">Beverage</span> beverage<span class="token punctuation">;</span>\n   \n   <span class="token keyword">public</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span><span class="token class-name">Beverage</span> beverage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>beverage <span class="token operator">=</span> beverage<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token number">.50</span> <span class="token operator">+</span> beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> beverage<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; , Mocha&quot;</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Soy</span> <span class="token keyword">extends</span> <span class="token class-name">CondimentDecorator</span><span class="token punctuation">{</span>\n   <span class="token class-name">Beverage</span> beverage<span class="token punctuation">;</span>\n   \n   <span class="token keyword">public</span> <span class="token class-name">Soy</span><span class="token punctuation">(</span><span class="token class-name">Beverage</span> beverage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>beverage <span class="token operator">=</span> beverage<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token number">.80</span> <span class="token operator">+</span> beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> beverage<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; , Soy&quot;</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Whip</span> <span class="token keyword">extends</span> <span class="token class-name">CondimentDecorator</span><span class="token punctuation">{</span>\n   <span class="token class-name">Beverage</span> beverage<span class="token punctuation">;</span>\n   \n   <span class="token keyword">public</span> <span class="token class-name">Whip</span><span class="token punctuation">(</span><span class="token class-name">Beverage</span> beverage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>beverage <span class="token operator">=</span> beverage<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token number">.80</span> <span class="token operator">+</span> beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> beverage<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; , Whip&quot;</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>测试类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Beverage</span> beverage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Espresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beverage<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; $&quot;</span> <span class="token operator">+</span> beverage<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      <span class="token class-name">Beverage</span> beverage2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Espresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      beverage2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span>beverage2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      beverage2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span>beverage2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      beverage2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Whip</span><span class="token punctuation">(</span>beverage2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beverage2<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; $&quot;</span> <span class="token operator">+</span> beverage2<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      <span class="token class-name">Beverage</span> beverage3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HouseBlend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      beverage3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Soy</span><span class="token punctuation">(</span>beverage3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      beverage3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mocha</span><span class="token punctuation">(</span>beverage3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      beverage3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Whip</span><span class="token punctuation">(</span>beverage3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beverage3<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; $&quot;</span> <span class="token operator">+</span> beverage3<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   \n   <span class="token punctuation">}</span>\n   \n   <span class="token comment">// Espresso $1.99</span>\n   <span class="token comment">// Espresso , Mocha , Mocha , Whip $3.79</span>\n   <span class="token comment">// House Blend Coffee , Soy , Mocha , Whip $2.99</span>\n   \n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="笔记" tabindex="-1">笔记 <a class="header-anchor" href="#笔记" aria-hidden="true">#</a></h3><p>其实装饰者模式可以理解为包装者模式，包装者可以简单的理解为俄罗斯套娃。小娃是基础对象，外面的对象是装饰者对象，初始化装饰者对象的时候需要将基础对象或者子装饰者对象传进去。当调用装饰者对象的方法时候方法内部会先调用子装饰者的方法然后加上本装饰者的属性。调用的时候就像递归。</p><p>1.定义的时候要像俄罗斯套娃，将子装饰者传给父装饰者。</p><p>2.调用的时候要像递归或者说拆俄罗斯套娃，大的俄罗斯娃拿出来同时要递归调小俄罗斯娃。</p>',21)];t.render=function(a,p,t,o,c,l){return n(),s("div",null,e)};export{p as __pageData,t as default};
