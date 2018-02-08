// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

	var myGame = {
		// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
		// Names inside the object may be either strings or identifiers that are followed by a colon.
 		// object literals can contain properties and methods:
        
        playerChoiceDisplay: document.getElementById("player_choice"),
        computerChoiceDisplay: document.getElementById("computer_choice"),
        resultDisplay: document.getElementById("result"),
        userChoice: "",
        computerChoice: "",
        result: "",
        
        computerInput: function() {
            switch(Math.floor(Math.random() * 3)) {
            case 0:
                this.computerChoice = "Rock";
                break;
            case 1:
                this.computerChoice = "Paper";
                break;
            case 2:
                this.computerChoice = "Scissors";
                break;
            default:
                this.computerChoice = "Paper";
            }
        },
        
        compare: function() {
            if((this.userChoice == "Rock" && this.computerChoice == "Scissors") || (this.userChoice == "Paper" && this.computerChoice == "Rock") || (this.userChoice == "Scissors" && this.computerChoice == "Paper")){
               this.result = "You win... Well done!";
            } else if(this.userChoice == this.computerChoice){
                this.result = "It's a draw";
            } else {
                this.result = "Computer wins... Bad luck";
            }
        },
        
        display: function() {
            this.computerChoiceDisplay.innerHTML = this.computerChoice;
            this.playerChoiceDisplay.innerHTML = this.userChoice;
            this.resultDisplay.innerHTML = this.result;
        }

        ///// module end /////
	};

// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}

function play(){
    myGame.userChoice = this.id; // registering the buttons id!
    myGame.computerInput();
    myGame.compare();
    myGame.display();
}