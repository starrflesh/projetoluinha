let bbotao = document.querySelector('.container-butao');
let botao = document.querySelector('.clickme');
botao.addEventListener('click', sumir);
function sumir(){
document.querySelector('.container-butao').style.display = 'none';
document.querySelector('.conteudo-homenagem').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function(){
    const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,

    },
    effect: 'slide',
    speed: 600,
});
});
function atualizarContador(){
    const datainicial = new Date("2023-05-04T00:00:00");
    const agora = new Date();

    let anos = agora.getFullYear() - datainicial.getFullYear();
    let meses = agora.getMonth() - datainicial.getMonth();
    let dias = agora.getDate() - datainicial.getDate();

    if (dias<0){
        meses--;
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0)
        dias += mesAnterior.getDate()
    }
    if (meses < 0){
        anos--;
        meses += 12;
    }

    const texto = `Eu te amo há: ${anos} anos, ${meses} mês(es) e ${dias} dia(s).`
    document.querySelector(".contador").textContent = texto;
}
atualizarContador();

setInterval(atualizarContador, 1000 * 60 * 60);

