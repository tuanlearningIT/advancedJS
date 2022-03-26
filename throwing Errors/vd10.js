const callback = (error, data) => {
    if(error){
     console.log('calling callback with error:', error)
 }
    if(data){
     console.log('calling callback with data:', data)
 }
    }
     
 
 
 function getTodos (id, callback) {

       return new Promise((resolve, reject) =>{
           var request = new XMLHttpRequest();
 request.onreadystatechange = function () {
     if (this.readyState === 4 && request.status === 200){
         //typical action to be performed when the document is ready:
         const data = JSON.parse(request.responseText);
         const dataString = JSON.stringify(data)
        //  callback(undefined, data);
        resolve(data);
         
     }
     if(this.readyState === 4 && request.status !== 200){
        //  callback('something wrong', undefined);
        reject('something wrongs with id:' + id);
     }
         
     
     // else {
     //     console.log('status: ', request.status)
     // }
 };
 request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true);
 request.withCredentials = true;
 request.send();
 })  
        }


        // const getNewTodo = async (id) =>{
        //   let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
          
        //   if(response && response.status !==200){
        //       throw new Error('something wrongs with status' + response.status)
        //    //reject
        //     }
        //   let data = await response.json();
        //   return data;//resolve
        // }

        const getNewTodo = async (id) =>{
            try{
                let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
                if(response && response.status !==200){
                          throw new Error('something wrongs with status: ' + response.status)
                       //reject
                        }
            
                let data = await response.json();
                return data;//resolve
            }catch(e){
                 console.log('>>>>.check catch err:', e.message)
            }
          }

          
        getNewTodo('dfasa').then(data =>{
            console.log('>>>> get check data:', data)
        })
        .catch(err =>{
            console.log('>>>check err:', err.message)
        })


        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(Response =>{
        //     return Response.json();
        // })
        // .then(data =>{
        //     console.log('>>>>fetch data:', data)
        // })
     
//         getTodos(1).then(data1 =>{
//             console.log(data1);
//             return getTodos('dadad');
//         }).then(data2 =>{
//             console.log(data2);
//             return getTodos(3);
//         }).then(data3 =>{
//             console.log(data3)
//         })
        
//         .catch(err =>{
//             console.log('>>>', err)
//         })




// // getTodos(1)
// //      .then(data =>{
// //          console.log(data)
// //          getTodos(2).then(data =>{
// //             console.log(data)
// //          })
// //      }).catch(err =>{
// //          console.log('>>>', err)
// //      })

// //  getTodos(1, (error, data) => {
// //     if(error){
// //         console.log('calling callback with error:', error)
// //     }
// //        if(data){
// //         console.log('calling callback with data:', data)

// //         getTodos(2, (error, data) => {
// //             if(error){
// //                 console.log('calling callback with error:', error)
// //             }
// //                if(data){
// //                 console.log('calling callback with data:', data)

// //                 getTodos(3, (error, data) =>{
// //                     if(error){
// //                         console.log('calling callback with error:', error)
// //                     }
// //                        if(data){
// //                         console.log('calling callback with data:', data)
// //                     }
// //                 });
// //         }
// //     });
// //     }
// //  });
 
//  // promise example

//  const promiseExp = () =>{

//     return new Promise((resolve, reject)  =>{
//     //    resolve('get some data');
//        reject('something wrongs');
//     });

   
//  } 
 
    // promiseExp()
    //             .then((data) =>{
    //              console.log(data);
    // })        
    //             .catch(error =>{
    //                 console.log(error);
    //             })