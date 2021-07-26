/*  
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout;
Milestone 2
Coloriamo le icone per tipo;
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone;
*/


// 1. Creiamo il template delle card;
// 2. Creiamo una funzione che ci permetta di stampare il template; 
// 3. Facciamo in modo che abbia anche l'Offset;
const renderIcons = (icons, targetElement) => {
let iconsTemplate = "";
icons.forEach((icon) => {
    iconsTemplate += `
    <div class="col-2 text-center">
        <div class="card">
            <div class="card-body">
                <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
                <div class="h6">${icon.name}</div>
            </div>
        </div>
    </div>`
})
// Elemento HTML 
targetElement.innerHTML = iconsTemplate;
}

// 3.Recuperiamo l'elemento HTML;
const cardSection = document.querySelector("#icons, .row");
// 4. Chiamiamo la funzione;
renderIcons(icons, cardSection);
