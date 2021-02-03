class Player{
    constructor(){


    }
    
    getCount(){
        // ref = refers to the location of the database we want to read
        var playeCountRef = database.ref('playeCount');
        //on = creates a listener , any change happens function is called
        playeCountRef.on('value' , function(data){
            // read positions of value in data base
            playeCount = data.val()
        })
    }
    update(name){
        var playerIndex = 'player'+playerCount
        // to write value into the database
        database.ref(playerIndex).set ({
            name:name
        })  
    }
    updateCount(count){
        database.ref('/').update({
         playerCount:count
        })
    }

    
}