const gameGrid = document.querySelector('.game-grid');
const gridSize = 20;

let grid = [];
for (let i = 0; i < gridSize; i++) {
  grid[i] = [];
  for (let j = 0; j < gridSize; j++) {
    grid[i][j] = '';
  }
}


function validateSpawnPointHorizontal(row, column, word){
    if(column + word.length > grid[row].length){
        return false;
    }

    for(let i = 0; i < word.length; i++){
        if(grid[row][column + i] !== ''){
            return false;
        }
    }

    return true;
}

function validateSpawnPointVertical(row, column, word) {
    if (row + word.length > grid.length) {
      return false;
    }


    for (let i = 0; i < word.length; i++) {
      if (grid[row + i][column] !== '') {
        return false;
      }
    }
  
    return true;
  }


function placeWord(word){
    
    const directions = ['horizontal', 'vertical', 'diagonal'];

    let placed = false;

    while(!placed){
        const direction = directions[Math.floor(Math.random() * directions.length)];

        let row = 0;
        let column = 0;
        let isSpawnPointValid = false;

        if(direction === 'horizontal'){
            row = Math.floor(Math.random() * gridSize);
            // math.random() will produce a number between 0 (incl) and 1 (excl)
            // subtract the length the lngth of the word from the grid size to ensure 
            // that the generated "spawn point" will be able to accomodate the word to its full length
            // i.e for a table with size N, the possible starting point of a word of length L will be between
            // 0 and (N - L)
            column = Math.floor(Math.random() * (gridSize - word.length));
            isSpawnPointValid = validateSpawnPointHorizontal(row, column, word);

            if(isSpawnPointValid){
                for(let i = 0; i < word.length; i++){
                    grid[row][column + i] = word.charAt(i);
                }
                placed = true;
            }
        }
        else if(direction === 'vertical'){
            row = Math.floor(Math.random() * (gridSize - word.length));
            column = Math.floor(Math.random() * gridSize);
            isSpawnPointValid = validateSpawnPointVertical(row, column, word);

            if(isSpawnPointValid){
                for(let i = 0; i < word.length; i++){
                    grid[row + i][column] = word.charAt(i);
                }
                placed = true;
            }
        }
        else if(direction === 'diagonal'){
            row = Math.floor(Math.random() * (gridSize - word.length));
            column = Math.floor(Math.random() * (gridSize - word.length));
            isSpawnPointValid = true;

            for(let i = 0; i < word.length; i++){
                if(grid[row + i][column + i] !== ''){
                    isSpawnPointValid = false;
                    break;
                }
            }

            if(isSpawnPointValid){
                for(let i = 0; i < word.length; i++){
                    grid[row + i][column + i] = word.charAt(i);
                }
                placed = true;
            }

        }
    }

}


document.addEventListener('DOMContentLoaded', function(){
    const words = [
        'REPOSITORY', 'DATABASE', 'TURING', 'UCTGSB', 'VERSION', 'FUNCTION', 'DEBUGGING', 
        'SHAPER', 'SOFTWARE', 'ALGORITHM', 'BACKEND', 'DEPLOYMENT', 'API', 'FRONTEND', 
        'TURING', 'PROGRAMMING', 'SYNTAX', 'GOLANG', 'JAVASCRIPT', 
        'AYOBA', 'FRAMEWORK'
    ];

    const wordList = document.getElementById('word-list');
    for(let i = 0; i < words.length; i++){
        const item = document.createElement('p');
        item.textContent = words[i];
        wordList.appendChild(item);
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i = 0; i < words.length; i++){
        placeWord(words[i]);
    }

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === '') {
                grid[row][col] = letters.charAt(Math.floor(Math.random() * letters.length));
            }
        }
    }

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('game-cell');
            cell.textContent = grid[row][col];
            cell.addEventListener('click', function(){
                cell.style.color = 'red';
            });
            gameGrid.appendChild(cell);
        }
    }
});

