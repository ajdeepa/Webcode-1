//To create the heading Ice and fire 
document.body.innerHTML=`<div class="heading-container">
<h1>Ice and Fire<h1>
</div>

<div id="mainContainer" class="main-container"></div>`;

let Data=async() => {
    try{
    
        let data1=await fetch("https://www.anapioficeandfire.com/api/books")
    let books= await data1.json()
    mainContainer.innerHTML="";
    books.forEach(book => {
        displayData1(book)
        
    });
}catch(error) {
    console.log(error)
}
};
Data();


let displayData1=(res)=> {
    mainContainer.innerHTML+=`
    <div class="container">
    <h1 class="1">Book:${res.name}</h1>
    <h1 class="2">Name:${res.name}, ISBN:${res.isbn}</h1>
    <h2 class="3"> Authors:${res.authors}</h2>
    <h3 class="4"> Number of Pages:${res.numberOfPages}<h3>
    <h3 class="5">Publisher Name:${res.publisher} , Release Date:${res.released}</h3>
    <h4 class="6">Characters:${res.characters}</h4>
     </div>`
     console.log(res);
         
}
