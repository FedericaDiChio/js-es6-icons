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
const renderIcons = (icons, targetElement) => {
    let iconsTemplate = "";
    icons.forEach((icon, index) => {        
    // 3. Facciamo in modo che abbia anche l'Offset;
    const hasOffset = index % 5 === 0 ? `offset-md-1` : " ";
    iconsTemplate += `
    <div class="col col-sm-4 col-md-2 ${hasOffset}">
        <div class="card">
            <div class="card-body">
                <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
                <div class="h6">${icon.name.toUpperCase()}</div>
            </div>
        </div>
    </div>`
})
// Elemento HTML 
targetElement.innerHTML = iconsTemplate;
}

// 3.Recuperiamo l'elemento HTML;
const cardIcons = document.querySelector(".row");
// 4. Chiamiamo la funzione;
renderIcons(icons, cardIcons);
