function wick(day){
     if(day == 0){
         return 'sunday';
     }else if(day == 1){
         return 'monday';
     }else if(day == 2){
         return 'tuesday';
     }else if(day == 3){
         return 'wednesdy';
     }else if(day == 4){
         return 'thursday';
     }else if(day == 5){
         return 'friday';
     }else if(day == 6){
         return 'saturday';
     };
 };
 
 function zero(time){
     return time < 10 ? '0' + time : time;  
 }