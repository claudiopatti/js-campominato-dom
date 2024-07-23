const generatedButton = document.getElementById('generateButton');



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


        for (let i = 1; i <= numberCells; i++) {
            const element = document.createElement('div');
            element.innerHTML = (i);

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

            element.addEventListener('click',
                function () {
                    element.classList.add('active');
                }
            )
        }
});
    
