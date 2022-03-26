const callback = (error, data) => {
    if(error){
     console.log('calling callback with error:', error)
 }
    if(data){
     console.log('calling callback with data:', data)
 }
    }
     
 
 
 function getTodos (id, callback) {
     var request = new XMLHttpRequest();
 request.onreadystatechange = function () {
     if (this.readyState === 4 && request.status === 200){
         //typical action to be performed when the document is ready:
         const data = JSON.parse(request.responseText);
         const dataString = JSON.stringify(data)
         callback(undefined, data);
         
     }
     if(this.readyState === 4 && request.status !== 200){
         callback('something wrong', undefined);
     }
         
     
     // else {
     //     console.log('status: ', request.status)
     // }
 };
 request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true);
 request.send();
 }
 


 getTodos(1, (error, data) => {
    if(error){
        console.log('calling callback with error:', error)
    }
       if(data){
        console.log('calling callback with data:', data)

        getTodos(2, (error, data) => {
            if(error){
                console.log('calling callback with error:', error)
            }
               if(data){
                console.log('calling callback with data:', data)

                getTodos(3, (error, data) =>{
                    if(error){
                        console.log('calling callback with error:', error)
                    }
                       if(data){
                        console.log('calling callback with data:', data)
                    }
                });
        }
    });
    }
 });
 
