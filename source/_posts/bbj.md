---
title: 面试-bbj
date: 2022-07-09
tags: [Javascript]
categories: [FE]
---

# bbj

1. vue和react的区别以及diff算法的差异

```
vue中的diff是采用双端比较法，用新旧节点的开始和结束下标进行对比
react中的diff是采用顺序比较，用新旧节点的开始下标进行对比
```

3. 小程序的授权过程

4. 怎样在对forEach中断

```javascript
return 效果只能相当于 continue
可以用 throw 中断，外部 try catch 捕获
最好用for循环即可
```

5. img图片403错误怎么解决

```html
<!-- 隐藏发送请求时请求头表示来源的referrer字段。 -->
<meta name="referrer" content="no-referrer">
```

4. 数组中查过一半的数字，要求On时间复杂度 O1 空间复杂度

https://www.cnblogs.com/hirampeng/p/9613336.html

```
1.排序  nlogn 然后找出中间位置的数字
2.定义map 遍历数组然后统计次数key为数子 value为次数  空间复杂度 n 时间复杂 n
3.定义快慢指针
如果相邻元素不同则同时删除 如果不同则保留，最后剩下的一个或两个则是超过一般的数字
但是比如 [5，5，5，5，1] 则无法实现
4.利用线性特点，num为遍历到数组 count 则为出现的次数
	1.如果下一个数字和我们之前保存的数字相同，则次数加1；
	2.如果下一个数字和我们之前保存的数字不同，则次数减1，如果减1之后为0则我们需要保存下一个数字，并把次数重新设为1。
	最后返回的num即为超过一半的数字
```