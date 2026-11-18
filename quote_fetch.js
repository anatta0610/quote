const btn = document.getElementById('btn');
const quote = document.getElementById('quote');

btn.addEventListener('click', ()=>{
    fetch('https://v1.hitokoto.cn/')
    .then(res=>res.json())//解析响应壳子
    .then(data=>{
        quote.textContent = data.hitokoto;
    })
    .catch(err=>{
        quote.textContent = '加载失败';
    });
});