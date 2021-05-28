# traffic-report
对 centos 7.x 端口进行流量统计

### 如何使用
```javascript
  const { getTraffic } = require('./lib/traffic.js');
  
  // 传入端口数组
  const port = [23333,24444,25555]
  getTraffic(port).then(res => {
    console.log(res);
  })
```

建议直接修改 app.js 来进行下一步使用。
