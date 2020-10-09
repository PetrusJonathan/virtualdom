
//tangkap element inang
let app = document.querySelector('.app')

let brandName = 'Ruang Guru'
let textColor = 'red'
let bgColor = 'grey'
let imgNumber = 586

const back = function () {
    let hero = document.querySelector('.hero')
    hero.style.backgroundImage = `url(https://picsum.photos/seed/${imgNumber -= 1}/600)`


}

const next = function () {
    let hero = document.querySelector('.hero')
    hero.style.backgroundImage = `url(https://picsum.photos/seed/${imgNumber += 1}/700)`


}
// BUAT COMPONENT NAVBAR
const navbar = `
<nav class='navbar' style="background-color : ${bgColor};">
        <h3 class='brand' style="color : ${textColor};">
            
            ${brandName}
            
            </h3>

         
    
    </nav>
    

`
// BUAT COMPONENT HEADER
const header = `
<header class="hero" style="
    background-image : url(https://picsum.photos/seed/${imgNumber}/900);
    background-size : cover;
    background-position : center;
    width : 100vw;
    height: 40vh;
    display : flex;
    align-items : center;
    padding : 0 10%;
">

<span class="material-icons al"
onclick="back()"
>navigate_before</span>
<span class="material-icons ar"
onclick="next()"
>navigate_next</span>

</header>


`

//BUAT KOMPONEN FOOTER
const footer = `
<footer style="
    width : 100vw;
    height : 10vh;
    display : flex;
    justify-content : center;
    align-items : center;
    color : blue;
    background-color : white;
    ">

        <h3>copyright RuangGuru@2020</h3>
    </footer>

    


`
const about = (title, color) => {
    return `
    
    <section class ='about' style="
        width :100vw;
        height : 100vh;
        display : flex;
        justify-content : center;
        align-items : center;
        background-color : black;
        color : ${color};
        ">

            <h1>${title}</h1>
        </section>
    
    `
}

//render string ke elemnt tersebut 
//string yang terdapat syntax HTML
app.innerHTML += `

        ${navbar}    
        ${header}
        ${about('About Page', 'pink')}
        ${footer}
        



</header>



`