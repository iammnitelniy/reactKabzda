
const axios = {}
const findUserInDB = (id) => {}



const promise1 = axios.get('http://google.com')



promise1.then(  (data) => {
console.log(promise1)

} )
const promise2 = findUserInDB(1)
console.log('finish')



const otherPromise = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise
    .then((result)=> {console.log(result)})
    .catch(() => {
        console.log('failed, try later')})

otherPromise2
    .then((results)=> {console.log(results)})

    // const dataFromGoogle = results[1].status = 'fulfilled' ? results[0].value : {}
    //     cons  t userFromDB = results

const resolvedPromise = Promise.resolve(100)