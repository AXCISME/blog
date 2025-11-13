var posts=["2025/11/13/hello-world/","2025/11/13/STM32通过读取ABZ编码器同时获取角度、速度和位置/","2025/11/13/示例文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };