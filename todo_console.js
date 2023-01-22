const prompt = require("prompt-sync")({ sigint: true });

class TodoConsoleApp {

    constructor(){
        this.dataBase = [1,2,3]
    }

    currentDate(){
        const options = {  weekday: 'short', day: 'numeric', month: 'long'};
        const prnDt = new Date().toLocaleDateString('en-uk', options);
        return prnDt
    }

    entrance(){   
        console.log("TODO LIST\n Press 1 to add...\n Press 2 to update\n Press 3 to delete\n Press 4 to exit");
        let choice = parseInt(prompt("Enter..: "))
        switch (choice) {
            case 1:
                this.addItem()
                break;
            case 2:
                this.updateItem()
                break;
            case 3:
                this.deleteItem()
                break;
            case 4:
                this.exist(choice)
                break;
        
            default:
                break;
        }
    }
    
    addItem(){
        console.log("Add your daily activity: ");
        let input = prompt()
        this.dataBase.push(input)
        this.entrance()
    }
    
    updateItem(index){
        var len = this.dataBase.length - 1;
        if (len == 0){
            console.log("You have no activity");
            return
        } else if (len < index || index < 0){
            console.log("Wrong index");
            return
        } else {
            console.log(this.dataBase[index]);
            let input = prompt("Update to..: ")
            this.dataBase[index] = input
            this.entrance()
        }
    }
    
    deleteItem(index){
        var len = this.dataBase.length - 1;
        if (len == 0){
            console.log("You have no activity");
            return
        } else if (len < index || index < 0){
            console.log("Wrong index");
        } else{
            this.dataBase.splice(index, 1);
            this.entrance()
        }
    }

    display(){
        console.log(this.currentDate());
        console.log("--------------------");
        this.dataBase.forEach((element,index) => {
            console.log(`| ${index} | ${element}`);
        });
        console.log("--------------------");
        this.entrance()
    }

    exist(input){
        if(input == 4)
        return;
    }

    storage(){
        this.dataBase.forEach((element,index) => {
            console.log(`| ${index} | ${element}`);
        });
        let userInput = parseInt(prompt("Select an index:..: "))
        return userInput
    }
}

todo = new TodoConsoleApp();
console.log(todo.storage())