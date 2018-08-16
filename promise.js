const request = require('request')
const api = 'https://rickandmortyapi.com/api/character/'

const getData = (inputName) => {
    return new Promise((resolve, reject) =>{
        request(`${api}?name = ${inputName}`,(error,response,body) => {
            
            // if (error){
            //     reject(error)
            // }
            // const res = JSON.parse(body)
            // resolve(body)
            const res = JSON.parse(body)
            const vot = (error) ? reject(error) : resolve(body);
        })
    })
}
getData ("13221")
    .then((data) => console.log("then"))
    .catch((err) => console.log("catch"))


    // `${api}?name = ${inputName}`
    // api + '?name = ' + inputName