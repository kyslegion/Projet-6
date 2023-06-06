const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json',
  createProxyMiddleware({ 
    target: 'https://s3-eu-west-1.amazonaws.com',
    changeOrigin: true 
  })
);

app.listen(4000);
