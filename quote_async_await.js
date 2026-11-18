const btn = document.getElementById('btn');
const quote = document.getElementById('quote');

async function getQuote(){
    btn.disabled = true;
    try{
        const res = await fetch('https://v1.hitokoto.cn/');
        const data = await res.json();
        quote.textContent = data.hitokoto;
    }catch(err){
        quote.textContent = '加载失败';
    }
    btn.disabled = false;
}

btn.addEventListener('click',getQuote);