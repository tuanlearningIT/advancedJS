var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && request.status === 200){
        //typical action to be performed when the document is ready:
        console.log('>>> check res:', request);
    }else {
        console.log('status: ', request.status)
    }
};
request.open('GET', 'https://jsonplaceholder.typicode.com/todosss', true);
request.send();