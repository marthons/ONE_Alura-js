// let botao = document.querySelector('.tecla_pom');
// let pom = document.querySelector('#som_tecla_pom');

// document.querySelector('button');

// botao.addEventListener('click', function() {
//     pom.play();
// });

function tocaSom (selectAudio) {

   const elemento = document.querySelector(selectAudio);

    if (elemento && elemento.localName === 'audio'){


            elemento.play();

    }else {

        console.log('Elemento não encontrado')

    }
}

const listaTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {

        if(e.code === "Space" || e.code === "Enter"){
        
        tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function () {
    
        tecla.classList.remove('ativa');
    }

}





// for (const tecla of listaTeclas) {
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;

//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     };

   
// }

// const listaDeTeclas = document.querySelectorAll('input[type=button]');
// const inputTel = document.querySelector('input[type=tel]');

// for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
//   const tecla = listaDeTeclas[indice];
  
//   tecla.onclick = function () {
//     inputTel.value = inputTel.value + tecla.value;
//   }
// }
