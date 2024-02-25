// const delay = setTimeout(function(){
//     console.log("ten")
// },3000)

// console.log("one")
// console.log("two")
// console.log("three")
// console.log("four")
//console.log(delay)
// console.log("five")
// console.log("six")
// console.log("seven")
window.onload = function () {
  var product = document.getElementById('product');
  fetch("https://fakestoreapi.com/products",{ method: 'GET' })
    .then(function (res) {
      //console.log(res.json())
      return (res.json())
    })
    .then(function (data) {
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
        //console.log(data[i])
        let pdata = data[i]
        //console.log(pdata.image);
        let pcard = `<div class="col-md-3">
                     <div class="card">
                       <img src="${pdata.image}" class="card-img-top img-fluid">
                     <div class="card-body">
                       <h5 class="card-title">${pdata.title}</h5>
                       <p class="card-text">${pdata.description}</p>
                       <a href="#" class="btn btn-success me-1">BY NOW</a>
                       <a href="#" class="btn btn-warning">ADD TO CART</a>
                      </div>
                      </div>
                      </div>`
        product.innerHTML += pcard;
      }
    })
    .catch(function (err) {
      console.log(err.msg);
    })
}