
let url = "https://newsapi.org/v2/everything?q=pakistan&apiKey=1eb50baee2054995ace0070b86e9289d"

const getData = new Promise((resolve, reject) => {
  fetch(url)
    .then((res) =>  res.json())
    .then((res) => {
      resolve(res)
      data = res;
      // console.log(data.articles)
    })
    .catch((err) => reject(err));
});

getData.then((res) => console.log(data));


// console.log("https://newsapi.org/v2/everything?q=Apple&from=2022-09-20&sortBy=popularity&apiKey=1eb50baee2054995ace0070b86e9289d")



// async function getData() {
//   const data = await fetch(
//     "https://newsapi.org/v2/everything?q=Apple&from=2022-09-20&sortBy=popularity&apiKey=1eb50baee2054995ace0070b86e9289d"
//   );
//   const jsonRes = await data.json();

//   return data;
// }
// console.log(getData)

// getData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));




// async function getData() {
//   const data = await fetch(
//     `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1eb50baee2054995ace0070b86e9289d`
//   );
//   const jsonRes = await data.json();

//   return jsonRes;
// }

// getData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));