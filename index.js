
let btn = document.querySelector("button");
btn.addEventListener("click",async () => {
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

// axios

async function getFacts() {
    try{
        let res = await axios.get(url);
        
        return res.data.fact;
    } catch (e) {
        console.log("error - ",e);
        return "No fact found";
    }
    
}


// dog image print
let btn1 = document.querySelector("#one");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn1.addEventListener("click" , async () => {
    let link = await getImage();
    let img = document.querySelector("#result2");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ",e);
        return "/";
    }
    
}









// fetch(url)  //return promise
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 = ",data.fact);
//         return fetch(url);
//     })
//     .then((res) =>{
//         return res.json();
//     })
//     .then((daa2) => {
//         console.log("data2 = ", data2.fact);
//     })

//     .catch((err) => {
//         console.log("ERROR - ", err);
//     });

//     console.log("I AM HAPPY");

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res.json();
//         console.log(data.fact);
//     } catch (e) {
//         console.log("error - ",e);
//     }
    
// }


