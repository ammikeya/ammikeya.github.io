import{o as t,c as e,a as n,b as a}from"./app.fa98a2f6.js";const l='{"title":"Map","description":"","frontmatter":{},"headers":[{"level":3,"title":"Map","slug":"map"}],"relativePath":"js/Map.md","lastUpdated":1631366346330}',s={},o=[n("h3",{id:"map",tabindex:"-1"},[a("Map "),n("a",{class:"header-anchor",href:"#map","aria-hidden":"true"},"#")],-1),n("p",null,"与对象不同之处：对象是字符串键-任意类型值，Map是任意类型键-任意类值值",-1),n("div",{class:"language-"},[n("pre",null,[n("code",null,'\tconst m = new Map();\n\tconst o = {p: \'Hello World\'}\n\n\tm.set(o, "content")\n\tm.get(o) // "content"\n\n\tm.has(o) // true\n\tm.delete(o) // true\n\tm.has(o) // false\n\tm.delete(o) // undefined\n\n\tconst p = {name: \'小明\'}\n\tm.set(p, "content")\n\t// 清空所有值\n\tm.clear()\n\tm.get(p) // undefined\n\n\tconst q = {name: \'蘑菇\'}\n\tm.set(q, "content")\n\t// 返回所有键名的迭代器（Object.keys返回的所有键名的数组）\n\tm.keys() //MapIterator\n\tm.values() //MapIterator\n\tm.entries() //MapIterator [key,value]\n')])],-1),n("p",null,"用一个二维数组初始化，里层的数组是一个长度为2的数组，第一个元素会被初始化为key，第二个元素会被初始化为value",-1),n("div",{class:"language-"},[n("pre",null,[n("code",null,"\tconst m = new Map([\n\t\t['name', '张三'],\n\t\t['title', 'Author']\n\t])\n\t//使用ES6的展开运算符...和keys，values可以方便将Map转为数组\n\t[...m.keys()] // ['name','title']\n\t[...m.values()] // ['张三','Author']\n")])],-1)];s.render=function(n,a,l,s,r,m){return t(),e("div",null,o)};export{l as __pageData,s as default};
