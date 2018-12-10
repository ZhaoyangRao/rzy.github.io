 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('sw.js') // 注册sw.js 文件中变成的服务对象，返回注册成功的对象
         .then(function (swReg) {
             swRegistration = swReg;
         }).catch(function (error) {
             console.error('Service Worker Error', error);
         });
 } else {
     console.warn('Push messaging is not supported');
 }

 // fetch('./main.json')
