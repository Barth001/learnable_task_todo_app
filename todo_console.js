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

    entrance(){}
    
    addItem(){
        console.log("Add your daily activity: ");
        let input = prompt()
        this.dataBase.push(input)
        this.display()
    }
    
    updateItem(){}
    
    deleteItem(index){
        var len = this.dataBase.length - 1;
        if (len == 0){
            console.log("You have no activity");
            return
        } else if (len < index || index < 0){
            console.log("Wrong index");
        } else{
            this.dataBase.splice(index, 1);
            this.display()
        }
    }

    display(){
        console.log(this.currentDate());
        console.log("--------------------");
        this.dataBase.forEach((element,index) => {
            console.log(`| ${index} | ${element} |`);
        });
        console.log("--------------------");
    }
}

todo = new TodoConsoleApp();
todo.deleteItem(1)