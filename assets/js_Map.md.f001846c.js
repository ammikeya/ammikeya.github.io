import{o as n,c as s,b as a}from"./app.ce5cd593.js";const t='{"title":"Map","description":"","frontmatter":{},"headers":[{"level":3,"title":"Map","slug":"map"}],"relativePath":"js/Map.md","lastUpdated":1632190698039}',p={},o=[a('<h3 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h3><p>与对象不同之处：对象是字符串键-任意类型值，Map是任意类型键-任意类值值</p><div class="language-javascript"><pre><code>\t<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>p<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">}</span>\n\n\tm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span>\n\tm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// &quot;content&quot;</span>\n\n\tm<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// true</span>\n\tm<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// true</span>\n\tm<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// false</span>\n\tm<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// undefined</span>\n\n\t<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">}</span>\n\tm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span>\n\t<span class="token comment">// 清空所有值</span>\n\tm<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\tm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// undefined</span>\n\n\t<span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;蘑菇&#39;</span><span class="token punctuation">}</span>\n\tm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span>\n\t<span class="token comment">// 返回所有键名的迭代器（Object.keys返回的所有键名的数组）</span>\n\tm<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//MapIterator</span>\n\tm<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//MapIterator</span>\n\tm<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//MapIterator [key,value]</span>\n</code></pre></div><p>用一个二维数组初始化，里层的数组是一个长度为2的数组，第一个元素会被初始化为key，第二个元素会被初始化为value</p><div class="language-javascript"><pre><code>\t<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\t\t<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Author&#39;</span><span class="token punctuation">]</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\t<span class="token comment">//使用ES6的展开运算符...和keys，values可以方便将Map转为数组</span>\n\t<span class="token punctuation">[</span><span class="token operator">...</span>m<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// [&#39;name&#39;,&#39;title&#39;]</span>\n\t<span class="token punctuation">[</span><span class="token operator">...</span>m<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// [&#39;张三&#39;,&#39;Author&#39;]</span>\n</code></pre></div>',5)];p.render=function(a,t,p,c,e,u){return n(),s("div",null,o)};export{t as __pageData,p as default};
