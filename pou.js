var hambre=100;
var limpieza=100;
var felicidad=100;
var energia=100;
var monedas=1000;
var porSegundo=2;

var comida=manzana+pera+piña+chocolate;
var baño=agua+gel+champu+esponja;
var juegos= cartas+musica+tele+pelota;
var cama= almohada+pastilla+hamaca+sabana;

var manzana=0;
var pera=0;
var piña=0;
var chocolate=0;
var esponja=0;
var champu=0;
var gel=0;
var agua=0;
var pelota=0;
var tele=0;
var musica=0;
var cartas=0;
var almohada=0;
var pastilla=0;
var hamaca=0;
var sabana=0;

function dinero(){
        setInterval(function() {
            if (hambre >= 75 && limpieza >= 75 && energia >= 75 && felicidad >= 75) {
                monedas++;
                document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
            }
        }, 1000);
} 



function inicializarCosas(){
    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
    document.getElementById('energia').innerHTML='Energia: '+energia;
    document.getElementById('monedas').innerHTML='Monedas: '+monedas;
    document.getElementById('manzana1').innerHTML="Tienes "+manzana+" manzanas.";
    document.getElementById('pera1').innerHTML="Tienes "+pera+" peras.";
    document.getElementById('piña1').innerHTML="Tienes "+piña+" piñas.";
    document.getElementById('chocolate1').innerHTML="Tienes "+chocolate+" chocolates.";
    document.getElementById('esponja1').innerHTML="Tienes "+esponja+" esponjas.";
    document.getElementById('champu1').innerHTML="Tienes "+champu+" champus.";
    document.getElementById('gel1').innerHTML="Tienes "+gel+" geles.";
    document.getElementById('agua1').innerHTML="Tienes "+agua+" aguas.";
    document.getElementById('pelota1').innerHTML="Tienes "+pelota+" pelotas.";
    document.getElementById('tele1').innerHTML="Tienes "+tele+" teles.";
    document.getElementById('musica1').innerHTML="Tienes "+musica+" musicas.";
    document.getElementById('cartas1').innerHTML="Tienes "+cartas+" paquetes de cartas.";
    document.getElementById('almohada1').innerHTML="Tienes "+almohada+" almohadas.";
    document.getElementById('pastilla1').innerHTML="Tienes "+pastilla+" pastillas.";
    document.getElementById('hamaca1').innerHTML="Tienes "+hamaca+" hamacas.";
    document.getElementById('sabana1').innerHTML="Tienes "+sabana+" sabanas.";
    setInterval('incrementosPorSegundo()',10000);
    dinero();
}

function incrementosPorSegundo(){
    hambre=Math.max(0,hambre -porSegundo);
    limpieza=Math.max(0,limpieza -porSegundo);
    felicidad=Math.max(0,felicidad -porSegundo);
    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
    document.getElementById('energia').innerHTML='Energia: '+energia;
}

function comer(){

    if (hambre<100){
        if(limpieza>0){
            if(comida>0){
                if(manzana>0){
                    hambre= Math.min(100, hambre +25);
                    limpieza=Math.max(0, limpieza-5);
                    energia=Math.min(100, energia + 15);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    manzana--;
                    comida=manzana+pera+piña+chocolate;
                    if(manzana>1 || manzana==0){
                        document.getElementById('manzana1').innerHTML="Tienes "+manzana+" manzanas.";
                    }else{
                        document.getElementById('manzana1').innerHTML="Tienes "+manzana+" manzana.";
                    }
                }else if(pera>0){
                    hambre= Math.min(100, hambre +25);
                    limpieza=Math.max(0, limpieza-5);
                    energia=Math.min(100, energia + 20);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    pera--;
                    comida=manzana+pera+piña+chocolate;
                    if(pera>1 || pera==0){
                        document.getElementById('pera1').innerHTML="Tienes "+pera+" peras.";
                    }else{
                        document.getElementById('pera1').innerHTML="Tienes "+pera+" pera.";
                    }
                }else if(piña>0){
                    hambre= Math.min(100, hambre +30);
                    limpieza=Math.max(0, limpieza);
                    energia=Math.min(100, energia + 25);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    piña--;
                    comida=manzana+pera+piña+chocolate;
                    if(piña>1 || piña==0){
                        document.getElementById('piña1').innerHTML="Tienes "+piña+" piñas.";
                    }else{
                        document.getElementById('piña1').innerHTML="Tienes "+piña+" piña.";
                    }
                }else if(chocolate>0){
                    hambre= Math.min(100, hambre +35);
                    limpieza=Math.max(0, limpieza-20);
                    energia=Math.min(100, energia + 30);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    chocolate--;
                    comida=manzana+pera+piña+chocolate;
                    if(chocolate>1 || chocolate==0){
                        document.getElementById('chocolate1').innerHTML="Tienes "+chocolate+" chocolates.";
                    }else{
                        document.getElementById('chocolate1').innerHTML="Tienes "+chocolate+" chocolate.";
                    }
                }
            }else{

            
            hambre= Math.min(100, hambre +20);
            limpieza=Math.max(0, limpieza-5);
            energia=Math.min(100, energia + 10);
            document.getElementById('hambre').innerHTML='Hambre: '+hambre;
            document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
            document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
            document.getElementById('energia').innerHTML='Energia: '+energia;
            }
        }else{
            alert('Necesitas limpiarle primero, está demasiado sucio.')
        }
    }else{
        alert('Ha vomitado por exceso de comida(está gordo).')
    }
}

function limpiar(){
    if(limpieza<100){
        if(felicidad<100){
            if(baño>0){
                if(esponja>0){
                    felicidad= Math.min(100, felicidad +15);
                    limpieza=Math.min(100, limpieza+25);
                    energia=Math.min(100, energia + 10);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    esponja--;
                    baño=esponja+champu+gel+agua;
                    if(esponja>1 || esponja==0){
                        document.getElementById('esponja1').innerHTML="Tienes "+esponja+" esponjas.";
                    }else{
                        document.getElementById('esponja1').innerHTML="Tienes "+esponja+" esponja.";
                    }
                }else if(champu>0){
                    felicidad= Math.min(100, felicidad +15);
                    limpieza=Math.min(100, limpieza+25);
                    energia=Math.min(100, energia + 10);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    champu--;
                    baño=esponja+champu+gel+agua;        
                    if(champu>1 || champu==0){
                        document.getElementById('champu1').innerHTML="Tienes "+champu+" champus.";
                    }else{
                        document.getElementById('champu1').innerHTML="Tienes "+champu+" champu.";
                    }
                }else if(gel>0){
                    felicidad= Math.min(100, felicidad +15);
                    limpieza=Math.min(100, limpieza+25);
                    energia=Math.min(100, energia + 10);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    gel--;
                    baño=esponja+champu+gel+agua;
                    if(gel>1 || gel==0){
                        document.getElementById('gel1').innerHTML="Tienes "+gel+" geles.";
                    }else{
                        document.getElementById('gel1').innerHTML="Tienes "+gel+" gel.";
                    }

                }else if(agua>0){
                    felicidad= Math.min(100, felicidad +15);
                    limpieza=Math.min(100, limpieza+25);
                    energia=Math.min(100, energia + 10);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    agua--;
                    baño=esponja+champu+gel+agua;
                    if(agua>1 || agua==0){
                        document.getElementById('agua1').innerHTML="Tienes "+agua+" aguas.";
                    }else{
                        document.getElementById('agua1').innerHTML="Tienes "+agua+" agua.";
                    }
                }
            }else{
            felicidad= Math.min(100, felicidad +15);
            limpieza=Math.min(100, limpieza+25);
            energia=Math.min(100, energia + 10);
            document.getElementById('hambre').innerHTML='Hambre: '+hambre;
            document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
            document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
            document.getElementById('energia').innerHTML='Energia: '+energia;
            }
        }
    }else{
        alert('Esta demasiado limpio.')
    }
}

function jugar(){
    
    if(felicidad<100){
        if(hambre>0){
            if(limpieza>0){
                if(juegos>0){
                    if(pelota>0){
                        felicidad=Math.min(100, felicidad+30);
                        hambre=Math.max(0, hambre - 10);
                        limpieza= Math.max(0, limpieza - 15);
                        energia= Math.max(0, energia - 30);
                        document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                        document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                        document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                        document.getElementById('energia').innerHTML='Energia: '+energia;
                        pelota--;
                        juegos=pelota+tele+musica+cartas;
                        if(pelota>1 || pelota==0){
                            document.getElementById('pelota1').innerHTML="Tienes "+pelota+" pelotas.";
                        }else{
                            document.getElementById('pelota1').innerHTML="Tienes "+pelota+" pelota.";
                        }
                    }else if(tele>0){
                        felicidad=Math.min(100, felicidad+35);
                        hambre=Math.max(0, hambre - 5);
                        limpieza= Math.max(0, limpieza - 10);
                        energia= Math.max(0, energia - 25);
                        document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                        document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                        document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                        document.getElementById('energia').innerHTML='Energia: '+energia;
                        tele--;
                        juegos=pelota+tele+musica+cartas;
                        if(tele>1 || tele==0){
                            document.getElementById('tele1').innerHTML="Tienes "+tele+" teles.";
                        }else{
                            document.getElementById('tele1').innerHTML="Tienes "+tele+" tele.";
                        }
                    }else if(musica>0){
                        felicidad=Math.min(100, felicidad+40);
                        hambre=Math.max(0, hambre);
                        limpieza= Math.max(0, limpieza - 5);
                        energia= Math.max(0, energia - 50);
                        document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                        document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                        document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                        document.getElementById('energia').innerHTML='Energia: '+energia;
                        musica--;
                        juegos=pelota+tele+musica+cartas;
                        if(musica>1 || musica ==0){
                            document.getElementById('musica1').innerHTML="Tienes "+musica+" musicas.";
                        }else{
                            document.getElementById('musica1').innerHTML="Tienes "+musica+" musica.";
                        }
                    }else if(cartas>0){
                        felicidad=Math.min(100, felicidad+50);
                        hambre=Math.max(0, hambre);
                        limpieza= Math.max(0, limpieza);
                        energia= Math.max(0, energia - 50);
                        document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                        document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                        document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                        document.getElementById('energia').innerHTML='Energia: '+energia;
                        cartas--;
                        juegos=pelota+tele+musica+cartas;
                        if(cartas>1 || cartas==0){
                            document.getElementById('cartas1').innerHTML="Tienes "+cartas+" paquetes de cartas.";
                        }else{
                            document.getElementById('cartas1').innerHTML="Tienes "+cartas+" paquete de cartas.";
                        }
                    }
                }else{
                    felicidad=Math.min(100, felicidad+25);
                        hambre=Math.max(0, hambre - 20);
                        limpieza= Math.max(0, limpieza - 20);
                        energia= Math.max(0, energia - 25);
                        document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                        document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                        document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                        document.getElementById('energia').innerHTML='Energia: '+energia;
                }
            }
        }else{
            alert('Necesita comer')
        }
    }else{
        alert('No le apetece jugar')
    }
        
        
    
}

function dormir(){
  
    if(energia<100){
        if(hambre>0){
            if(cama>0){
                if(almohada>0){
                    energia= Math.min(100, energia + 100);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    almohada--;
                    if(almohada>1 || almohada==0){
                        document.getElementById('almohada1').innerHTML="Tienes "+almohada+" almohadas.";
                    }else{
                            document.getElementById('almohada1').innerHTML="Tienes "+almohada+" almohada.";
                    }
                }else if(pastilla>0){
                    energia= Math.min(100, energia + 100);
                    felicidad= Math.min(100, felicidad+10);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    pastilla--;
                    if(pastilla>1 || pastilla==0){
                        document.getElementById('pastilla1').innerHTML="Tienes "+pastilla+" pastillas.";
                        }else{
                            document.getElementById('pastilla1').innerHTML="Tienes "+pastilla+" pastilla.";
                        }

                }else if(hamaca>0){
                    energia= Math.min(100, energia + 100);
                    felicidad=Math.min(100, felicidad+15);
                    hambre=Math.min(100, hambre+5);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    hamaca--;
                    if(hamaca>1 || hamaca==0){
                        document.getElementById('hamaca1').innerHTML="Tienes "+hamaca+" hamacas.";
                        }else{
                            document.getElementById('hamaca1').innerHTML="Tienes "+hamaca+" hamaca.";
                        }
                }else if(sabana>0){
                    energia= Math.min(100, energia + 100);
                    felicidad=Math.min(100, felicidad+20);
                    hambre=Math.min(100, hambre+10);
                    limpieza=Math.min(100, limpieza+5);
                    document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                    document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                    document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                    document.getElementById('energia').innerHTML='Energia: '+energia;
                    sabana--;
                    if(sabana>1 || sabana==0){
                        document.getElementById('sabana1').innerHTML="Tienes "+sabana+" sabanas.";
                        }else{
                            document.getElementById('sabana1').innerHTML="Tienes "+sabana+" sabana.";
                        }
                }
                
            }else{
                energia= Math.min(100, energia + 100);
                hambre=Math.max(0,hambre-10);
                document.getElementById('hambre').innerHTML='Hambre: '+hambre;
                document.getElementById('limpieza').innerHTML='Limpieza: '+limpieza;
                document.getElementById('felicidad').innerHTML='Felicidad: '+felicidad;
                document.getElementById('energia').innerHTML='Energia: '+energia;
            }
        }else{
            alert('Necesita comer un poco')
        }

    }
}

    
function mostrarTienda() {
    document.getElementById('dentroTienda').style.display = 'block';
    document.getElementById('dentroTienda').style.backgroundColor='white';
    document.getElementById('dentroTienda').style.width= '300px';
    document.getElementById('dentroTienda').style.border= 'solid 1px black';
    document.getElementById('dentroTienda').style.borderRadius= '10px';
    document.getElementById('dentroTienda').style.textAlign= 'center';
    document.getElementById('dentroTienda').style.padding= '10px';


}
function ocultarTienda() {
    document.getElementById('dentroTienda').style.display = 'none';
}



function comprarManzana(){
    if(monedas>=2){
        monedas-=2;
        manzana++;
        comida=manzana+pera+piña+chocolate;
        if(manzana>1 || manzana==0){
        document.getElementById('manzana1').innerHTML="Tienes "+manzana+" manzanas.";
        }else{
            document.getElementById('manzana1').innerHTML="Tienes "+manzana+" manzana.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una manzana.')
    }
}
function comprarPera(){
    if(monedas>=3){
        monedas-=3;
        pera++;
        comida=manzana+pera+piña+chocolate;
        if(pera>1 || pera==0){
        document.getElementById('pera1').innerHTML="Tienes "+pera+" peras.";
        }else{
            document.getElementById('pera1').innerHTML="Tienes "+pera+" pera.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una pera.')
    }
}
function comprarPiña(){
    if(monedas>=4){
        monedas-=4;
        piña++;
        comida=manzana+pera+piña+chocolate;
        if(piña>1 || piña==0){
        document.getElementById('piña1').innerHTML="Tienes "+piña+" piñas.";
        }else{
            document.getElementById('piña1').innerHTML="Tienes "+piña+" piña.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una piña.')
    }
}
function comprarChocolate(){
    if(monedas>=5){
        monedas-=5;
        chocolate++;
        comida=manzana+pera+piña+chocolate;
        if(chocolate>1 || chocolate==0){
        document.getElementById('chocolate1').innerHTML="Tienes "+chocolate+" chocolates.";
        }else{
            document.getElementById('chocolate1').innerHTML="Tienes "+chocolate+" chocolate.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una chocolate.')
    }
}
function comprarEsponja(){
    if(monedas>=2){
        monedas-=2;
        esponja++;
        baño=agua+gel+champu+esponja;
        if(esponja>1 || esponja==0){
        document.getElementById('esponja1').innerHTML="Tienes "+esponja+" esponjas.";
        }else{
            document.getElementById('esponja1').innerHTML="Tienes "+esponja+" esponja.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una esponja.')
    }
}
function comprarChampu(){
    if(monedas>=3){
        monedas-=3;
        champu++;
        baño=agua+gel+champu+esponja;
        if(champu>1 || champu==0){
        document.getElementById('champu1').innerHTML="Tienes "+champu+" champus.";
        }else{
            document.getElementById('champu1').innerHTML="Tienes "+champu+" champu.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar un champu.')
    }
}
function comprarGel(){
    if(monedas>=4){
        monedas-=4;
        gel++;
        baño=agua+gel+champu+esponja;
        if(gel>1 || gel==0){
        document.getElementById('gel1').innerHTML="Tienes "+gel+" geles.";
        }else{
            document.getElementById('gel1').innerHTML="Tienes "+gel+" gel.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar un gel.')
    }
}
function comprarAgua(){
    if(monedas>5){
        monedas-=5;
        agua++;
        baño=agua+gel+champu+esponja;
        if(agua>1 || agua==0){
        document.getElementById('agua1').innerHTML="Tienes "+agua+" aguas.";
        }else{
            document.getElementById('agua1').innerHTML="Tienes "+agua+" agua.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una agua.')
    }
}
function comprarPelota(){
    if(monedas>2){
        monedas-=2;
        pelota++;
        juegos= cartas+musica+tele+pelota;
        if(pelota>1 || pelota==0){
        document.getElementById('pelota1').innerHTML="Tienes "+pelota+" pelotas.";
        }else{
            document.getElementById('pelota1').innerHTML="Tienes "+pelota+" pelota.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una pelota.')
    }
}
function comprarTele(){
    if(monedas>3){
        monedas-=3;
        tele++;
        juegos= cartas+musica+tele+pelota;
        if(tele>1 || tele==0){
        document.getElementById('tele1').innerHTML="Tienes "+tele+" teles.";
        }else{
            document.getElementById('tele1').innerHTML="Tienes "+tele+" tele.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una tele.')
    }
}
function comprarMusica(){
    if(monedas>4){
        monedas-=4;
        musica++;
        juegos= cartas+musica+tele+pelota;
        if(musica>1 || musica ==0){
        document.getElementById('musica1').innerHTML="Tienes "+musica+" musicas.";
        }else{
            document.getElementById('musica1').innerHTML="Tienes "+musica+" musica.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una musica.')
    }
}
function comprarCartas(){
    if(monedas>5){
        monedas-=5;
        cartas++;
        juegos= cartas+musica+tele+pelota;
        if(cartas>1 || cartas==0){
        document.getElementById('cartas1').innerHTML="Tienes "+cartas+" paquetes de cartas.";
        }else{
            document.getElementById('cartas1').innerHTML="Tienes "+cartas+" paquete de cartas.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar un paquete de cartas.')
    }
}
function comprarAlmohada(){
    if(monedas>2){
        monedas-=2;
        almohada++;
        cama= almohada+pastilla+hamaca+sabana;
        if(almohada>1 || almohada==0){
        document.getElementById('almohada1').innerHTML="Tienes "+almohada+" almohadas.";
        }else{
            document.getElementById('almohada1').innerHTML="Tienes "+almohada+" almohada.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una almohada.')
    }
}
function comprarPastilla(){
    if(monedas>3){
        monedas-=3;
        pastilla++;
        cama= almohada+pastilla+hamaca+sabana;
        if(pastilla>1 || pastilla==0){
        document.getElementById('pastilla1').innerHTML="Tienes "+pastilla+" pastillas.";
        }else{
            document.getElementById('pastilla1').innerHTML="Tienes "+pastilla+" pastilla.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una pastilla.')
    }
}
function comprarHamaca(){
    if(monedas>4){
        monedas-=4;
        hamaca++;
        cama= almohada+pastilla+hamaca+sabana;
        if(hamaca>1 || hamaca==0){
        document.getElementById('hamaca1').innerHTML="Tienes "+hamaca+" hamacas.";
        }else{
            document.getElementById('hamaca1').innerHTML="Tienes "+hamaca+" hamaca.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una hamaca.')
    }
}
function comprarSabana(){
    if(monedas>5){
        monedas-=5;
        sabana++;
        cama= almohada+pastilla+hamaca+sabana;
        if(sabana>1 || sabana==0){
        document.getElementById('sabana1').innerHTML="Tienes "+sabana+" sabanas.";
        }else{
            document.getElementById('sabana1').innerHTML="Tienes "+sabana+" sabana.";
        }
        document.getElementById('monedas').innerHTML ='Monedas: '+ monedas;
    }else{
        alert('No tienes el suficiente dinero como para comprar una sabana.')
    }
}

