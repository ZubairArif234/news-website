


// function search
function search (){
  event.preventDefault()
  let searchValue = document.getElementById("search");
  console.log(searchValue.value)
  if(searchValue.value == ""){
    Swal.fire(
      'Error',
      'Search News',
      'error'
    )
  }else{
  let url1 = `https://newsapi.org/v2/everything?q=${searchValue.value}&apiKey=8d22648ba0fe465d863292b59e5e9aef`

const getData = new Promise((resolve, reject) => {
  fetch(url1)
    .then((res) =>  res.json())
    .then((res) => {
      resolve(res)
      let newscont = document.getElementById("newscont")
      newscont.innerHTML=""

      for (var i = 0; i<=res.articles.length; i++){

      let timenews = res.articles[i].publishedAt
      let timenew = timenews.split("").slice(0,10).join("")
      // console.log(timenew)
      let homenews = `
      <div class="row" id="newsrow">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 firstcol">
          <div class="img">
            <img class = "newsimg" src="${res.articles[i].urlToImage}" alt="">
            <button class = "more" id = "readMe"><a href = ${res.articles[i].url}>Read More</a></button>
          </div>
          <div class="contanr">
          <h3 class = "h3news"> ${res.articles[i].title}</h3>
          <p class = "pnews" >${res.articles[i].description}</p>
          
            <p class = "time">${timenew}</p>
          </div>
        </div>
        
      </div>
      <br />
      `
    //   console.log(res.length)
   newscont.innerHTML += homenews

      }

    })
    .catch((err) => reject(err));
});

getData.then((res) => console.log(res.articles[1].url));
}
}

// search()




















function first (){
let url = "https://newsapi.org/v2/everything?q=pakistan&apiKey=8d22648ba0fe465d863292b59e5e9aef"

const getData = new Promise((resolve, reject) => {
  fetch(url)
    .then((res) =>  res.json())
    .then((res) => {
      resolve(res)
      let newscont = document.getElementById("newscont")

      for (var i = 0; i<=res.articles.length; i++){

      let timenews = res.articles[i].publishedAt
      let timenew = timenews.split("").slice(0,10).join("")
      // console.log(timenew)
      let homenews = `
      <div class="row" id="newsrow">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 firstcol">
          <div class="img">
            <img class = "newsimg" src="${res.articles[i].urlToImage}" alt="">
            <button class = "more" id = "readMe"><a href = ${res.articles[i].url}>Read More</a></button>
          </div>
          <div class="contanr">
          <h3 class = "h3news"> ${res.articles[i].title}</h3>
          <p class = "pnews" >${res.articles[i].description}</p>
          
            <p class = "time">${timenew}</p>
          </div>
        </div>
        
      </div>
      <br />
      `
    //   console.log(res.length)
   newscont.innerHTML += homenews

      }

    })
    .catch((err) => reject(err));
});

getData.then((res) => console.log(res.articles[1].url));


}
first()