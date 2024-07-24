const generatedButton = document.getElementById('generateButton');

const numberBomb = [];

let numberCells = 100

let element = '';

let breakPoint = false

generatedButton.addEventListener('click', 
    function () {
        const gridContainer = document.getElementById('grid-container');

        const levelDifficulty = document.getElementById('difficulty');

        // let numberCells = levelDifficulty.value

        if(levelDifficulty.value == 1) {
            numberCells = 100
        }
        else if (levelDifficulty.value == 2) {
            numberCells = 81
        }
        else if (levelDifficulty.value == 3) {
            numberCells = 49
        }

        

        
        gridContainer.innerHTML = '';
        
        // array bomba
        const numberBomb = [];

        for (i = 1; i <= 16; i++) {
            // const randomNumberBomb = getRndInteger(1,numberCells);

            // numberBomb.push(randomNumberBomb);

            let randomNumberBomb;
            do {
                randomNumberBomb = getRndInteger(1,numberCells);
                console.log(randomNumberBomb);
            } while (numberBomb.includes(randomNumberBomb))

            numberBomb.push(randomNumberBomb);
        }
        console.log('numberBomb', numberBomb, typeof numberBomb);

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        let clickCells = numberCells - 16
            console.log('clickCells', clickCells)

        let numberCellsClick = 0

        // let i = 0;
        // while (i <= clickCells) {
        //     console.log('numberCellsClick', numberCellsClick, typeof numberCellsClick)
        //     i++;
        // }

        for (let i = 1; i <= numberCells; i++) {
            let element = document.createElement('div');
            element.innerHTML = (i);

            let numberCell = parseInt(element.innerHTML);
            console.log('numberCell', numberCell)


            

            if (numberCells == 100) {
                element.classList.add('easy');   
            }
            else if (numberCells == 81) {
                element.classList.add('medium');   
            }
            else if (numberCells == 49) {
                element.classList.add('hard');   
            }

            

            

            gridContainer.append(element);

            // const resultWinOrLos = document.getElementById('result');

           let cliccati = [];

            element.addEventListener('click',
                function () {
                    // cliccati.push(element.innerHTML)
                    // console.log('element.value', element.innerHTML, typeof element.value);
                    if (breakPoint == false) {
                        if  (numberBomb.includes(numberCell)){
                            element.classList.add('bomb');
                            element.innerHTML = '';
                            element.innerHTML = '<i class="fa-solid fa-bomb"></i>';
                            alert('Hai colpito la bomba!!!! hai cliccato:'+ numberCellsClick + 'volte prima di finire' )
                            breakPoint = true;
                            console.log('numberBomb' , numberBomb)
                            
                        }
                        if (!cliccati.includes(element.innerHTML) )  {
                            cliccati.push(element.innerHTML)
                            console.log('element.value', element.innerHTML, typeof element.value);
                            element.classList.add('active');
                            
                            numberCellsClick = numberCellsClick + 1;
                            console.log('numberCellsClick',numberCellsClick, typeof numberCellsClick)
    
                            // if (numberCellsClick == clickCells) {
                            //     breakPoint = true;
                            //    alert('Hai vinto, a culo ma hai vintooooo!!!!! hai cliccato:'+ numberCellsClick);
                            // }
                        }
                        if  (numberCellsClick == clickCells) {
                            breakPoint = true;
                           alert('Hai vinto, a culo ma hai vintooooo!!!!! hai cliccato:'+ numberCellsClick);
                        }
                    }
                }
            )
        }
        
});

 // array bomba
 

//  for (i = 1; i <= 16; i++) {
//      // const randomNumberBomb = getRndInteger(1,numberCells);

//      // numberBomb.push(randomNumberBomb);

//      let randomNumberBomb;
//      do {
//          randomNumberBomb = getRndInteger(1,numberCells);
//          console.log(randomNumberBomb);
//      } while (numberBomb.includes(randomNumberBomb))

//      numberBomb.push(randomNumberBomb);
//  }
//  console.log('numberBomb', numberBomb, typeof numberBomb);

//  function getRndInteger(min, max) {
//      return Math.floor(Math.random() * (max - min + 1) ) + min;
//  }
    

//  element.addEventListener('click',
//     function () {
        
//         if  (numberBomb.includes(element.innerHTML)){
//             element.classList.add('bomb');
//             console.log('numberBomb' , numberBomb)
//         }
//         else {
//             element.classList.add('active');
//         }
        
//         console.log('element.innerHTML' , element.innerHTML)
        
//     }
// )
