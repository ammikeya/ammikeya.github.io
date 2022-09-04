import{o as n,c as s,b as a}from"./app.37666d6b.js";const p='{"title":"","description":"","frontmatter":{},"relativePath":"interview/dh.md","lastUpdated":1642304724335}',t={},o=[a('<ol><li><p>项目中的难点和取得的成绩</p></li><li><p>Event Loop</p></li><li><p>vue的更新是在微任务还是宏任务之后? nextTick 是promise</p></li><li><p>Http1.0 http1.1 http2.0 和 https</p><p>Http2 多路复用的具体实现原理</p><p>https 具体的过程</p></li><li><p>vue-router的原理以及自己实现的话怎么实现</p></li><li><p>怎样判断两个对象是否相等</p><div class="language-javascript"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>name1<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">shallowEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> keysA <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> keysB <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>keysA<span class="token punctuation">.</span>length <span class="token operator">!==</span> keysB<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keysA<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>b<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>keysA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>keysA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>b<span class="token punctuation">[</span>keysA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div></li></ol>',1)];t.render=function(a,p,t,e,c,l){return n(),s("div",null,o)};export{p as __pageData,t as default};