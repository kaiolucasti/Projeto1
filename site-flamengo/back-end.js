/*SOBRE*/
function sobre(){

 $("#text").toggle();

}

/*PERGUNTAS*/
function pergunta(){
    $("#perguntas").show();
}
let pontuacao = 0;
let contador = 0;

let questoes = [
    {
        pergunta : '1 - O qual a cor do primeiro escudo do Flamengo? (Vale 1,0)'+"<hr color=black><br>",
        alternativas : ["(a) - "+['azul e'+' dourado'+ "<br>"],
                        ["(b) - "+'vermelho e'+' preto'+"<br>"],
                        ["(c) - "+'azul e'+' amarelo'+"<br>"],
                        ["(d) - "+'branco e'+' preto'+"<hr color=red>"]],
        correta : 0
    },
    {
        pergunta : '2 - Em qual ano foi a primeira libertadores do Flamengo?(Vale 1,0)'+"<hr color=black><br>",
        alternativas : ["(a) - "+'1980'+"<br>",
                        "(b) - "+'1969'+"<br>",
                        "(c) - "+'1981'+"<br>",
                        "(d) - "+'1991'+"<hr color=red>"],
        correta : 2
    },
    {
        pergunta: '3 - Quantas libertadores o Flamengo tem? (Vale 1,0) '+"<hr color=black>",
        alternativas: ["(a) - "+ '1'+"<br>",
                       "(b) - "+'2'+"<br>",
                       "(c) - "+'5'+"<br>",
                       "(d) - "+'Nenhuma'+"<hr color=red>"],
        correta: 1

    },
    
    {
        pergunta: '4 - Quantos Brasileiros o Flamengo possui? (Vale 1,0) '+"<hr color=black>",
        alternativas: [ "(a) - "+'8'+"<br>",
                        "(b) - "+'6'+"<br>",
                        "(c) - "+'7'+"<br>",
                        "(d) - "+'11'+"<hr color=red>"],
        correta: 2

    },
    
    {
        pergunta: '5 - Qual o número estimado de torcedores do Flamengo? (Vale 1,0) '+"<hr color=black>",
        alternativas: [ "(a) - "+'42 Milhões'+"<br>",
                        "(b) - "+'51 Milhões'+"<br>",
                        "(c) - "+'12 Milhões'+"<br>",
                        "(d) - "+'100 Milhões'+"<hr color=red>"],
        correta: 0

    },
    {
        pergunta: '<hr color=red></hr>'+'VOCÊ CONCLUIU O QUESTIONÁRIO, VEJA A SUA PONTUAÇÃO NA SEÇÃO RESULTADO!' ,
        alternativas: []
        
    }
    

    
];
function perguntas(){
    $('#perg').append(questoes[contador].pergunta);

    let i = 0;
    for(let alternativa of questoes[contador].alternativas){
        $('#perg').append('<input type="radio" id="Alternativa' + i + '" name=A'+contador+'" >');
    
        $('#perg').append(alternativa+ '<br>')
        i++;
    
    }
    contador++;
    if(alternativa.unchecked){
        $('#perg').append('erro')

    }
    
}
   
    

function confirmacao(){

    let alt = document.querySelectorAll('#Alternativa0')[contador-1];
    let alt1 = document.querySelectorAll('#Alternativa1')[contador-1];
    let alt2 = document.querySelectorAll('#Alternativa2')[contador-1];
    let alt3 = document.querySelectorAll('#Alternativa3')[contador-1];


    let alts = [alt,alt1,alt2,alt3];
    
    

    let i = 0;
    for(alt of alts){
        
        if(alt.checked){
        
            if(i == questoes[contador-1].correta){
                $('#perg').append("Parabéns! A alternativa está correta !!!" + '<br>'+'<br>'+"<hr color=red>");
                pontuacao++;
                    
            }else{
                $('#perg').append("Que pena, a alternativa está incorreta!" + '<br>' +'<br>'+"<hr color=red>");
            }
                
        }i++;
        
    }
    
}
  

function pontos () {
    if(pontuacao <= 3){
    $('#resultado').append(`A sua pontuação final foi de: ${pontuacao} pontos!`+"<br>"+ 
    `Você não é um Flamenguista raiz, leia nosso artigo e saiba mais!`);

    }else if (pontuacao == 4) {
    $('#resultado').append(`A sua pontuação final foi de: ${pontuacao} pontos!`+"<br>"+ ` Parabéns, 
    você quase acertou todas, leia nosso artigo para saber mais!`);

    }else {
        $('#resultado').append(`A sua pontuação final foi de: ${pontuacao} pontos!`+"<br>"+ 
        `Você gabaritou o questionário! Parabéns,
         você realmente conhece seu time!!!!`);    
    }
}

function reiniciar () {
    $('#perg').empty();
    contador = 0;
    pontuacao = 0;
}

/*RESULTADO */
function reiniciar2 () {
    $('#resultado').empty();
    contador = 0;
    pontuacao = 0;
}
function resultado(){

    $('#result').toggle();

}

/*CONTATO*/
function contato(){

    $('#contatos').toggle();
}