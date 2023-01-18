const prompt = require("prompt-sync")({ sigint: true });
class TodoConsoleApp {

    constructor(){
        this.dataBase = []
    }

    currentDate(){
        const options = {  weekday: 'short', day: 'numeric', month: 'long'};
        const prnDt = new Date().toLocaleDateString('en-uk', options);
        return prnDt
    }

    entrance(){}
    
    addItem(){
        console.log("Add your daily activity: ");
        let input = prompt()
        this.dataBase.push(input)
        this.display()
    }
    
    updateItem(){}
    
    deleteItem(){}

    display(){
        this.dataBase.forEach((element,index) => {
            console.log(this.currentDate());
            console.log(`| ${index} | ${element} |`);
        });
    }
}

todo = new TodoConsoleApp();
todo.addItem()