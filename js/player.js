class Player{
    constructor(){

    }
    getCount(){
        var dba=database.ref('playerCount');
        dba.on("value",function(data){
           playerCount=data.val();
        });

    }
    updateCount(count)
    {
        database.ref('/').update({
            'playerCount':count
        })
    }

 update(name){
     var plIndex="player"+playerCount;
    database.ref(plIndex).set({
        'name':name
    })
 }   
    
}