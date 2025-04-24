$(() => {
    //console.log("ok"); // affichage de "ok" dans la console
    var $depliment = $("#collapsesections").clone(true); // variable pour stocker le clone du bouton de depliement des sections
    $depliment[0].classList.add("nav-link"); // ajout de la class nav-link pour le style
    var DivCours = []; // tableau contenant les divs des cours

    const navBarre = document.getElementsByClassName("secondary-navigation")[0].firstElementChild.firstElementChild; // recuperation de la barre de navigation
    const barreSerpator = document.createElement("span"); // creation d'un separateur
    barreSerpator.classList.add("separator"); // ajout de la class nav-separator pour le style

    const downloadCheck = document.createElement("input"); // creation d'un input pour le telechargement
    downloadCheck.type = "checkbox"; // ajout du type checkbox
    downloadCheck.classList.add("downloadCheck"); // ajout de l'id downloadCheck
    downloadCheck.name = "downloadCheck"; // ajout du nom downloadCheck

    //$depliment.first().attr("aria-controls").split(" ").forEach((value,_index,_array)=>{
    //    DivCours.push(document.getElementById(value)); // ajout de la div du cours dans le tableau
    //}); // tableau contenant les divs des cours

    /* Collapse = rentré */

    //console.log(DivCours); // affichage des divs des cours dans la console

    // Reload all event listeners of the first element with class "stateready" using jQuery

    /* 
        Telechargement de tout les fichier d'un cours moodle
    */

    //(async () => {
    //
    //    const getFileName = (url) => {
    //        const urlParts = url.split('/');
    //        return urlParts[urlParts.length - 1];
    //    }
    //
    //    const GetFiles = (url) => {
    //        return new Promise(async (resolve, reject) => {
    //            await fetch(url) //https://0680034t.moodle.monbureaunumerique.fr/pluginfile.php/205253/mod_resource/content/0/TP6%20Etude%20dun%20filtre%20passe%20bas.doc
    //                .then(response => response.text().then(html => {
    //                    const parser = new DOMParser();
    //                    const doc = parser.parseFromString(html, 'text/html');
    //                    const a = doc.getElementById('region-main').querySelectorAll('a');
    //                    for (let i = 0; i < a.length; i++) {
    //                        if (a[i].href.includes('assign') && !a[i].href.includes('moodle')) continue;
    //                        Cours.push({ url: `${a[i].href}`, name: decodeURIComponent(getFileName(a[i].href)) });
    //                    }
    //                    console.log("ok");
    //                    resolve("ok");
    //                }))
    //                .catch(error => {
    //                    console.error('Error fetching the page:', error)
    //                    reject(error);
    //                });
    //        })
    //    };
    //    
    //    var Cours = []; // tableau contenant les liens des cours et le nom des fichiers
    //BIG INFO
    //aria-controls
    //
    //    for (let cours of DivCours) {
    //        for (let a of cours.querySelectorAll('a')) {
    //            if (a.href.includes('assign')) continue;
    //            await GetFiles(`${a.href}`);
    //        }
    //        //DEAR MY WAKER by Yonekura Chihiro
    //    }
    //
    //    chrome.runtime.sendMessage({ action: "downloadFiles", cours: Cours });
    //})();
    //

    /*
        Changement graphique de la page moodle
    */

    /*Suppression inutile*/

    if (document.getElementsByClassName("drawer-left-toggle")[0] !== undefined) {
        document.getElementsByClassName("drawer-left-toggle")[0].remove();
    }

    if (document.getElementById("page-header").firstElementChild.firstChild !== undefined && document.getElementById("page-header").firstElementChild.childElementCount !== 1) {
        document.getElementById("page-header").firstElementChild.firstElementChild.remove();
    }

    navBarre.appendChild(barreSerpator); // ajout d'un separateur dans la barre de navigation

    /* Ajout du bouton télécharger dans la barre de navigation */

    const li = document.createElement('li');
    li.classList.add("nav-item"); // ajout de la class nav-item pour le style
    li.setAttribute("data-forceintomoremenu", "false");
    li.setAttribute("data-key", "ByChokinyan");
    li.role = "none";

    li.innerHTML = `<a class="nav-link" href="#">Télécharger</a>`;

    navBarre.appendChild(li); // ajout du li dans la barre de navigation

    if (document.getElementById("collapsesections") !== undefined) {

        document.getElementById("collapsesections").remove();

        const li = document.createElement('li');

        $depliment.appendTo(li); // ajout du bouton depliement dans le li
        li.classList.add("nav-item"); // ajout de la class nav-item pour le style
        li.setAttribute("data-forceintomoremenu", "false");
        li.setAttribute("data-key", "ByChokinyan");
        li.role = "none";

        navBarre.appendChild(li);
    }

    document.getElementById("page-header").firstElementChild.id = "page-header__name";

    //$(".activity-information").each((element,_index) => {
    //    //const element = $(this).clone(true); // clone de l'element
    //    //const parent = $(this).parent().parent().parent(); // recuperation du parent de l'element
    //    //element.prependTo(parent); // ajout du clone dans le parent de l'element
    //    //$(this).remove(); // suppression de l'element
    //    //parent.last().remove(); // suppression de l'element
    //    console.log($(this));
    //});

    [...document.getElementsByClassName("activity-information")].forEach((element, _index,_array) => {
        const parent = element.parentElement.parentElement; // recuperation du parent de l'element
        const clone = element.cloneNode(true); // clone de l'element
        const firstChild = parent.firstElementChild; // recuperation du premier enfant du parent
        element.remove(); // suppression de l'element
        parent.lastElementChild.remove();
        parent.insertBefore(clone, firstChild); // ajout du clone dans le parent de l'element

        const downloadButton = downloadCheck.cloneNode(true); // creation d'un bouton de telechargement

        parent.appendChild(downloadButton); // ajout du bouton de telechargement dans le parent de l'element

        parent.classList.add("Cours-container"); // ajout de la class Cours-container pour le style
    });


    chrome.runtime.sendMessage({ action: "EditCSS" });
});