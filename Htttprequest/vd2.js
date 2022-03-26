var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4){
        //typical action to be performed when the document is ready:
        console.log('>>> check res:', xhttp.responseText);
    }
};
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhttp.send();