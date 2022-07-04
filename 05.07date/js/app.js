function time(){
    var datee = new Date();
    var hours = datee.getHours();

    if (hours <= 12 ){
        alert("Sabahınız Xeyir")
    }
    else if (hours >= 12 && hours <= 18){
        alert("Gunortavız Xeyir")
    }  
    else if (hours >= 18 && hours <= 24){
        alert("Axşamınız Xeyir")
    }    
 }
 

 var Barcelona = ['Messi','Puyol','Krkic']
 var RealMadrid = ['Ronaldo','Ramos','Bale']
 var Team = Barcelona.concat(RealMadrid);
 console.log(Team);
 