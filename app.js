 

/*
Make http requests to getting data from another server 
 

*/ 
// const getData = () => {

//     const request = new XMLHttpRequest();
    
//      request.addEventListener('readystatechange', () => {
    
//         // console.log(request, request.readyState);
    
//         if(request.readyState === 4 && request.status === 200) {
//             console.log(request, request.responseText);
//         } else if (request.readyState === 4) {
//             console.log('Could not fetch data');
//         }
    
//      });
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/' );
//     request.send();

// }

//With a callback funct as an argum


const getData = (resource) => {
    

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        
         request.addEventListener('readystatechange', () => {
        
            // console.log(request, request.readyState);
    
            
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                // console.log(request, request.responseText);
    
                resolve(data);
            
            } else if (request.readyState === 4) {
            
                // console.log('Could not fetch data');
    
                reject('Failed to getting resource');
    
            }
        
         });
        
        request.open('GET', resource );
        request.send();

    });


};

getData('data/data.json').then(data => {
    console.log('Promise resolved :', data);
}).catch((err) => {
    console.log('Promise rejected:', err);
});



//Callback Hell Funct

// getData( 'data/data.json',(err, data) => {
//     // console.log('Callback funct fired');

//     console.log(data);

//     getData('data/data2.json', (err, data) => {

//         console.log(data);

//         getData('data/data2.json', (err, data) => {
            
//             console.log(data);

//         });

//     });

//     //Or with a checking 
//     // if (err) {
//     //     console.log(err);
//     // } else {
//     //     console.log(data);
//     // }
// });



//Promises init 
// See on the first line 33

// const getSomeData = () => {

//     return new Promise( (resolve, reject) => {
//         //Fetch Something 

//         resolve('some data ');
//         // reject('some error ');

//     });

// };


//Method1

// getSomeData().then((data) => {

//     console.log(data);

// }, (data) => {

//     console.log(data);

// });



//Or this method

// getSomeData().then(data => {
//     console.log(data);
// }).catch(data => {
//     console.log(data);
// })