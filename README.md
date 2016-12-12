# webpack-config
webpack配置，支持es6，react，本地服务器热刷新，单页面路由跳转，sass编译<br/>

git@github.com:linxiaotao1987/webpack-config.git //clone地址<br/>

你需要安装node.js，然后使用npm安装依赖。<br/>

进入根目录，使用cmd或者git等命令行输入窗<br/>

npm install<br/>

这个命令会根据package.json里配置的依赖下载loader。<br/>

或者下载node_modules.zip然后解压到根目录，建议你用这个，比npm快百倍<br/>

下载完成后才可以正常执行一下命令：<br/>

npm run build //编译当前文件<br/>

npm run dev //开启一个服务器，监听的端口是3000，ip是192.168.201.210,你需要改成你本机的ip，这样就能在局域网访问到；<br/>

访问的地址类似：http://192.168.201.210:3000;<br/>

如果你的手机和电脑是同一个网络，手机是可以访问这个地址的，而且是热刷新哦。<br/>

打开webpack.config.js，找到devServer，port这个属性是端口，host是ip，根据需要改。<br/>


关于node-sass，使用的是3.13.0版本，4.0.0版本会报错<br/>

另外页面会根据屏幕大小设置html的font-size，还会根据屏幕分辨率设置meta的scale，用于移动端的自适应，如果不需要,去掉index.js里的这句：<br/>
```
import './setScaleFontsize';
```
 
