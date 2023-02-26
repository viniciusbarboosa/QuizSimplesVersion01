//VAR INICIAIS
let questaoAtual = 0;
let questoesCorretas = 0;
mostrarQuestao();

//EVENTOS CLICK
document.querySelector("#resetarQuiz").addEventListener("click",resetarQuiz);


//FUNÇOES
function mostrarQuestao(){
   if(questoes[questaoAtual]){
        let q = questoes[questaoAtual];

        //BARRA PROGRESSO
        let barraProgresso = Math.floor((questaoAtual /questoes.length)*100);
        document.querySelector(".progressoBarra").style.width = `${barraProgresso}%`
        
        document.querySelector(".pontuacaoArea").style.display = 'none';
        document.querySelector(".questaoArea").style.display = 'block';

        document.querySelector(".questao").innerHTML = q.questao;
        let optionsHtml = '';

        for (let i in q.opcoes) {
          optionsHtml += `<div class="opcao" alternativa="${i}" class="option"><span>${parseInt(i)+1}-</span> ${q.opcoes[i]}</div><br>`;
        }
        document.querySelector(".options").innerHTML = optionsHtml;

        document.querySelectorAll(".options .opcao").forEach(item =>{
            item.addEventListener("click", botaoClicar);
        } )
   }else{
     //acabou as questoes
     finalizarQuiz();
     console.log("ACABOU");
   } 
}

//CLICKS DO BOTAO DE QUESTOES
function botaoClicar(e){
    let opcaoClicada = e.target.getAttribute("alternativa");

    if(questoes[questaoAtual].correta == opcaoClicada){
        //VERIFICANDO SE ACERTOU QUESTOES
       // console.log("ACERTOU");
       questoesCorretas ++;
    }

    questaoAtual++;
    mostrarQuestao()
}

//FINLIZANDO O QUIZ
function finalizarQuiz(){
    document.querySelector(".pontuacaoArea").style.display = 'block';
    document.querySelector(".questaoArea").style.display = 'none';
    document.querySelector(".progressoBarra").style.width = `100%`
    document.querySelector(".pontuacaoPontos").innerHTML = `Acertou ${questoesCorretas} de ${questaoAtual} questoes`;

}

function resetarQuiz(){
    questaoAtual = 0;
    questoesCorretas = 0;
    mostrarQuestao();
}