(function(){    
    //Variaveis
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    //Teclas
    var LEFT = 37;
    var UP = 38;
    var RIGTH = 39;
    var DOWN = 40;
    //Movimentos 
    var mvLeft = mvUp = mvRigth = mvDown = false;
    //Arrays
    var sprites = [];
    var blocks = []; 
    //Objetos
    var character = new Sprites(50, 175, 50, 50, "#00f");
    sprites.push(character);

    //funcão que atualiza a po jogo
    function loop(){
        window.requestAnimationFrame(loop, cnv);
        render();    
    }  
    
    //Fucnção para Renderizar
    function render(){
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        for(i=0; i < sprites.length; i++){
            var spr = sprites[i];
            if (spr.visible){
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);                
            }
        }
    } 
    loop();
}());
