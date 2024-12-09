const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolveddd')
  })

  rejectBtn.addEventListener('click', () => {
    reject('Promise Rejected')
  })
})

p.then((data) => {
  console.log(data);
  return 155
}).then((data) => {
  console.log(data);
  return 'Rajkumar'
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
// .finally(() => {
//   console.log("finally");
// })

// const p=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("hello");
//   },5000)
// })
