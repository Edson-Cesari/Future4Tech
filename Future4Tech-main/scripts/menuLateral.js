let menuLateral = document.querySelector("nav > ul");
let botaoMenu = document.getElementById("menuRetratil");
let tamanhoTela = window.screen.width;

function menuOpen(){
    menuLateral.style.width="250px";
    menuLateral.style.marginRight ="250px"
}

function menuClose(){
    menuLateral.style.width="0px";
    menuLateral.style.marginRight ="0px"
}

//correcao menu lateral
function abrirMenu(){
    if(botaoMenu.checked){
        menuOpen();
        
    }else{
        menuClose();
        botaoMenu.checked=false;
    }
}

function fecharMenuRedirect(caminho){
    if(botaoMenu.checked){
        
        botaoMenu.checked=false;  
        setTimeout(() => {
            redirecionar(caminho);
        }, 1000);
    }else{
        redirecionar(caminho);
    }
}
function redirecionar(caminho){
    window.location.href=caminho;
}
