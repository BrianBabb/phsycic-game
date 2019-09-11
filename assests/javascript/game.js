

<!DOCTYPE html>

<html lang="en-us">
    <head>
<a  href="javascript/index.html" />
    <body>


<div id="game">
                    <h2>The Psychic-Game</h2>

                    <p>Guess what letter I'm thinking of</p>
                    <p>Wins - </p>
                    <p>Losses - </p>
                    <p> Your guesses Left - </p>
                    <p> Your Guesses - </p>
                </div>
          

      <script src="assest/javascrpt/index.html" type="text/javascript">
        
         {

         // score board   
        var wins = 0;
        var losses = 0;
        var numberGuessLeft = 9;
        var guessChoices = [];    
                 
       
    //   computer choices available 
        var randomChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    // user choices allowed.      
        var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
         
       }
  

        
        document.onkeyup = function(event) {
            var userGuess = event.key;

            var computerGuess = randomChoices[Math.floor(Math.random() * randomChoices.length)];

            if(randomChoices.indexOf(userChoices) >-1 ) {
// if user pics correct letter
                if( userChoices === randomChoices) {
                    wins++
                    numberGuessLeft = 9;
                    guessChoices = [];
                }
 // if user pics wrong letter                    
        
                 if ( userChoices != randomChoices) {
                   numberGuessleft --;
                     guessChoices.push(userChoices);
     

//  if user runs out of turns .
                if (userChoices === 0){
                    losses ++;
                    userChoices = [];
                }
            }

         }

    



    </script>

            </body>
        </head>
    </html>