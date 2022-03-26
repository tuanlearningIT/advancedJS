const callback = (error, data) => {
   if(error){
    console.log('calling callback with error:', error)
}
   if(data){
    console.log('calling callback with data:', data)
}
   }
    


function getTodos (callback) {
    var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState === 4 && request.status === 200){
        //typical action to be performed when the document is ready:
        const data = request.responseText;
        callback(undefined, data);
    }
    if(this.readyState === 4 && request.status !== 200){
        callback('something wrong', undefined);
    }
        
    
    // else {
    //     console.log('status: ', request.status)
    // }
};
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.send();
}
console.log(1);
getTodos(callback);
console.log(2);
console.log(3);
console.log(4);

