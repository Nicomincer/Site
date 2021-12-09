var botao = window.document.getElementById('square')
botao.addEventListener("mouseenter", clicar)
botao.addEventListener("mouseleave", clica)

function clicar(){
    botao.style.backgroundColor = 'red'
}

function clica(){
    botao.style.backgroundColor = 'gray'
}