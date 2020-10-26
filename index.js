const express = require('express');

const app = new express();
const port = 9986;
// 静态文件
app.use('/sanUi', express.static('public'));

app.listen(port, () => {
    console.log(`server start on 127.0.0.1:${port}`);
});