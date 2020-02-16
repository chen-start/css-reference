# css-app-copy
## 技术栈
vue + electron + axios 
## 简介
通过vue框架和electron的便利性，制作桌面应用，使新手能够随时查看css参考手册。
## 
public文件夹下存放的为静态数据，如果想修改代码请到sec文件夹下修改。

# 注意事项
将public文件夹下的static文件夹复制到D盘中！！！！！
因为一些特殊原因(打包后axios请求不到打包后的本地json数据)，搞了一个折中的办法(用axios直接请求本地json数据)，实测这种方法有效果。
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run electron:build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
