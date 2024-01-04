

var quotes = [

     {
        quote: 'The best revenge is massive success.',
        Author: '--Frank Sinatra' 

     },
     {
        quote: "Do not take life too seriously. You will not get out alive.",
        Author: "--Elbert Hubbard"
    },
    {
        quote: "'You miss 100% of the shots you don't take.'",
        Author: "--Wayne Gretzy"
    },
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        Author: "--Nelson Mandela"  
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        Author: "--Wayne Gretzy"  
    }

]


function getQuotes(){
    var num = Math.floor(Math.random()*quotes.length)
   console.log(num)
   document.getElementById("quote").innerHTML=quotes[num].quote
   document.getElementById("author").innerHTML=quotes[num].Author
}