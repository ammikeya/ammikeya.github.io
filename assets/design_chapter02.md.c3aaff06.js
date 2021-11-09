import{o as n,c as s,b as a}from"./app.ce5cd593.js";const t='{"title":"观察者模式","description":"","frontmatter":{},"headers":[{"level":3,"title":"观察者模式","slug":"观察者模式"},{"level":3,"title":"设计原则","slug":"设计原则"},{"level":3,"title":"笔记","slug":"笔记"}],"relativePath":"design/chapter02.md","lastUpdated":1636036565732}',p={},e=[a('<h3 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a></h3><div class="language-"><pre><code>定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新\n</code></pre></div><h3 id="设计原则" tabindex="-1">设计原则 <a class="header-anchor" href="#设计原则" aria-hidden="true">#</a></h3><div class="language-"><pre><code>为交互对象之间的松耦合设计而努力\n</code></pre></div><p>定义一个订阅者类</p><p>订阅者需要在构造方法中将自己添加进发布者的属性中。并且要实现Observer接口中的update方法。同时还需要实现DisplayElement类中的display方法。这两个简单接口定义略。</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CurrentConditionDisplay</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span><span class="token punctuation">,</span> <span class="token class-name">DisplayElement</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>\n\t<span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>\n\t<span class="token keyword">private</span> <span class="token class-name">Subject</span> weatherData<span class="token punctuation">;</span>\n\t<span class="token keyword">public</span> <span class="token class-name">CurrentConditionDisplay</span><span class="token punctuation">(</span><span class="token class-name">Subject</span> weatherData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>weatherData <span class="token operator">=</span> weatherData<span class="token punctuation">;</span>\n\t\tweatherData<span class="token punctuation">.</span><span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Current Condition: &quot;</span> <span class="token operator">+</span> temperature <span class="token operator">+</span> <span class="token string">&quot;F degress and &quot;</span> <span class="token operator">+</span> humidity <span class="token operator">+</span> <span class="token string">&quot;% humidity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>\n\t\t<span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个发布者类</p><div class="language-java"><pre><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherData</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>\n\t<span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> observers<span class="token punctuation">;</span>\n\t<span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>\n\t<span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>\n\t<span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>\n\n\t<span class="token keyword">public</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tobservers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tobservers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n \t\t<span class="token keyword">int</span> i <span class="token operator">=</span> observers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\tobservers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t <span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Observer</span> observer <span class="token operator">:</span> observers<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tobserver<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span>humidity<span class="token punctuation">,</span>pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">measurementsChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span><span class="token keyword">float</span> pressure<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>\n\t\t<span class="token function">measurementsChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><p>发布者需要实现Subject方法。接口定义如下</p><p>发布者在状态更新的时候需要调用notifyObservers方法。里面需要遍历订阅者数组中的订阅者然后调用订阅者的update方法。实现一对多对象的通知，完成观察者模式。</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>测试类。（只测试了一个订阅者，多个类似）</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token class-name">WeatherData</span> weatherData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\t<span class="token class-name">CurrentConditionDisplay</span> currentConditionDisplay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CurrentConditionDisplay</span><span class="token punctuation">(</span>weatherData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token class-name">CurrentConditionDisplay</span> currentConditionDisplay1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CurrentConditionDisplay</span><span class="token punctuation">(</span>weatherData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n\t\tweatherData<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">30.4f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tweatherData<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">31.4f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tweatherData<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">32.4f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Current Condition: 80.0F degress and 65.0% humidity</span>\n<span class="token comment">// Current Condition: 80.0F degress and 65.0% humidity</span>\n<span class="token comment">// Current Condition: 81.0F degress and 66.0% humidity</span>\n<span class="token comment">// Current Condition: 81.0F degress and 66.0% humidity</span>\n<span class="token comment">// Current Condition: 82.0F degress and 67.0% humidity</span>\n<span class="token comment">// Current Condition: 82.0F degress and 67.0% humidity</span>\n</code></pre></div><h3 id="笔记" tabindex="-1">笔记 <a class="header-anchor" href="#笔记" aria-hidden="true">#</a></h3><p>1.其实道理很简单就是定义一个发布者对象，定义多个订阅者对象。</p><p>2.定义订阅者对象的时候将发布者对象传进去，以便发布者对象能够收集依赖（观察者/订阅者）</p><p>3.发布者状态更新的时候，遍历依赖（观察者/订阅者）数组。调用发布者的更新方法。发出通知</p>',18)];p.render=function(a,t,p,o,c,u){return n(),s("div",null,e)};export{t as __pageData,p as default};
