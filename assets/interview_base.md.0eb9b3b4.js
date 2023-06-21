import{_ as s,o as a,c as n,O as l}from"./chunks/framework.1156b012.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/base.md","filePath":"interview/base.md"}'),p={name:"interview/base.md"},e=l(`<h3 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h3><p>Inline-block:间隙问题</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">inline</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">block块之间的不可见符号会被保留父层字体的1</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">3大小的空间</span></span></code></pre></div><ol><li><p>给元素增加div并且设置font-size等于0</p></li><li><p>改变书写方法写在一行或者打包到一行。</p></li><li><p>去除闭合标签</p></li><li><p>设置margin为负值</p></li><li><p>css hack</p><p>知道间隙的产生原因和间隙的大小后，动手写一个css hack也是一种很好的方法 1、将父容器的字体大小设置为0，可解决绝大多数浏览器（老版本safari不支持） 2、针对不支持上条的浏览器设置字块或字符间间隙letter-spacing／word-spacing，推荐letter-spacing，因为此属性不会产生负间隙，但需要注意，要在子元素上设置letter-spacing:0 3、如果你转化但是块对象，那需要为低版本浏览器设置inline兼容，不让样式会乱掉 总结以上几点给出以下代码</p></li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">parent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">letter-spacing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-.3333em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">child</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="浏览器最小显示12px字体的解决方法" tabindex="-1">浏览器最小显示12px字体的解决方法 <a class="header-anchor" href="#浏览器最小显示12px字体的解决方法" aria-label="Permalink to &quot;浏览器最小显示12px字体的解决方法&quot;">​</a></h3><p>谷歌浏览器上显示字体最小为12px，css设置font-size：10px，显示的时候还是12px大小</p><p>可以利用css中的transform属性来缩小：</p><p>transform:scale(0.5,1)</p><p>第一个参数是X轴比例，第二个参数是Y轴比例，第二个参数可省略，若缺省则等于第一个参数。</p><p>缩小方向：</p><p>默认是往中间缩小，可以添加 transform-origin:left ，往左侧缩</p><p>注意：</p><p>①transform只有块级元素有这属性，一开始我把这个属性设置在span上，怎么都不出效果，换div就有效果了</p><p>②如果你是因为字体太大，放div中会自动换行，想用这方法来压缩字体，去除换行，那就省省吧，我刚踩过这个坑。这种方式并不是在压缩字体，而是在压缩整个div。</p><p>举个例子：</p><p>有一个div，想写10个字，但它太窄了，写到第8个字之后，就换行了。这时想加上transform:scale(0.5,1)，来实现不换行。最终的效果是：最后2个字仍然在下面一行，整个div变窄了。</p><p>最后我的方法是，把div宽度加长，右margin设为负数，再进行压缩 ———————————————— 版权声明：本文为CSDN博主「Geoff俊」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。 原文链接：<a href="https://blog.csdn.net/weixin_40673464/article/details/79911532" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_40673464/article/details/79911532</a></p><h3 id="_4种通过iframe跨域与其他页面通信的方式" tabindex="-1">4种通过iframe跨域与其他页面通信的方式 <a class="header-anchor" href="#_4种通过iframe跨域与其他页面通信的方式" aria-label="Permalink to &quot;4种通过iframe跨域与其他页面通信的方式&quot;">​</a></h3><ol><li>Location.hash</li><li>Window.name</li><li>postMessage</li><li>document.domain降域</li></ol>`,20),o=[e];function t(i,r,c,D,C,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};