class Game {
    constructor(){

    }
    getState(){
        // ref = refers to the location of the database we want to read
        var gameStateRef = database.ref('gameState');
        //on = creates a listener , any change happens function is called
        gameStateRef.on('value' , function(data){
            // read positions of value in data base
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })  
    }
    start(){
        if (gameState===0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

    }

}