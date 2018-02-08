<<<<<<< HEAD
    var number1 = 1;
    var number2 = 11;
    var trigger = document.getElementById("trigger");
    var output = document.getElementById("output");
    
    // regular funtion with a return value
    function Math() {
        var result = number1 + number2; 
        return result;
    }
    
    console.log(Math());
    
    //ECMA6 arrow function, with multiple statements you need to include bracket (funtion body)
    var result = () => number1 + number2;
    console.log(result());
    
    //function with user input
    
    function userInput(){
        // let is restricting the scope to the actual code block, statement, or expression
        let number1_string = prompt('Type a number: ', '');
        let number2_string = prompt('Type another number: ', '');
        let number1_int = parseInt(number1_string);
        let number2_int = parseInt(number2_string);
        let result = number1_int + number2_int;
        document.getElementById("output").innerHTML = result;
    }
    
   // userInput();

    // constructor function
    function player (name, score){
        this.name = name;
        this.score = score;
        
        this.greeting = function(){
            alert('Hi '+ this.name + ': Your score is '+ this.score);
        };
    }

    var p1 = new player('Morten', 200);
    //p1.greeting();
    
    //creating a m dimensional array using literal notation
    var playerScore = [
        ['Peter', 100],
        ['Christine', 300],
        ['Jacob', 200],
        ['Steve', 400]
    ];

   // playerScore.push(['Peter', 100]);

    console.log(playerScore);
    function listPlayer(){
        var result = '';
            for(var x = 0 ; x < playerScore.length ; x++){
                result += result + playerScore[x] + '<br>';
            }
        
        output.innerHTML = result;
    }

    trigger.addEventListener('click', listPlayer);
        
        
        
        
=======
   
    var number1 = 1;
    var number2 = 11;
    
    // regular funtion with a return value
    function Math() {
        var result = number1 + number2; 
        return result;
    }
    
    console.log(Math());
    
    //ECMA6 arrow function, with multiple statements you need to include bracket (funtion body)
    var result = () => number1 + number2;
    console.log(result());
    
    //function with user input
    
    function userInput(){
        // let is restricting the scope to the actual code block, statement, or expression
        let number1_string = prompt('Type a number: ', '');
        let number2_string = prompt('Type another number: ', '');
        let number1_int = parseInt(number1_string);
        let number2_int = parseInt(number2_string);
        let result = number1_int + number2_int;
        document.getElementById("output").innerHTML = result;
    }
    
   // userInput();

    // constructor function
    function player (name, score){
        this.name = name;
        this.score = score;
        
        this.greeting = function(){
            alert('Hi '+ this.name + ': Your score is '+ this.score);
        };
    }

    var p1 = new player('Morten', 200);
    p1.greeting();
    
    
>>>>>>> d9bef59f0c8226b8ce3393ffc3793643e25ed479
