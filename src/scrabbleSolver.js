const scrabblePoints = [
  { 
    letters: 'aeioulnrst',
    points: 1 
  },
  { 
    letters : 'dg',
    points : 2 
  },
  { 
    letters : 'bcmp',
    points : 3 
  },
  { 
    letters : 'fhvwy',
    points : 4
   },
  { 
    letters : 'k',
    points : 5
   },
  { 
    letters : 'jx',
    points : 8 
  },
  { 
    letters : 'qz',
    points : 10
  }
]

const scrabbleSolver = (word) => {
  const total = [];

  if (word === " \t\n" || word === null || word === '') {
    return 0;
  } else {
    const eachLetter = word.toLowerCase().split("");
    eachLetter.forEach(letter => scrabblePoints.forEach(group => group.letters.includes(letter) ? total.push(group.points) : null ));
    return total.reduce((a,b) => a + b);
  }
}

