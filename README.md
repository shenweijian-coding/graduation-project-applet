### 项目准备
1. 微信小程序公众号平台账号
2. centos服务器（我买的腾讯云）
3. 备案过的域名且配有证书，小程序只支持https
### 开发时长
3月9日到3月25号左右的样子，从npm初始化到项目落地。从UI原型图到前端实现到后台功能实现并对接。个人独立开发完成。
### 使用技术栈
1. 前端：微信小程序（原生开发）、vant的UI库等
2. 后端：NodeJs、Express、MongoDB、Redis等
### 代码地址
前端地址：[https://github.com/shenweijian-coding/graduation-project-applet](https://github.com/shenweijian-coding/graduation-project-applet)

后端地址：[https://github.com/shenweijian-coding/graduation-project-nodejs](https://github.com/shenweijian-coding/graduation-project-nodejs)
只学习了不到1年，能力有限，代码结构稍差哈哈哈。
步骤：
1. 直接clone本地。
2. 运行后台服务，node app.js。
3. 打开微信小程序，在app.js中将domain修改为本地链接即可使用。
### 部分成品截图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210409171200246.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk0MDQ2Nw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021040917123558.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk0MDQ2Nw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210409171304520.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk0MDQ2Nw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210409171322124.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk0MDQ2Nw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210409171406328.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk0MDQ2Nw==,size_16,color_FFFFFF,t_70)

### 主要功能点
1. 新闻板块
使用nodejs的cheerio模块，爬取学校官网数据并整合到自己的数据库中，实现接口返回。
2. 物品交易、拼一拼、表白墙、失物招领
支持发布、浏览、图片上传，评论、点赞功能等功能
3. 库表设计
将登录用户的openid作为登录id并关联。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210409171933828.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk0MDQ2Nw==,size_16,color_FFFFFF,t_70)
个人博客：[https://yuanxiaoshen.com](https://yuanxiaoshen.com)
