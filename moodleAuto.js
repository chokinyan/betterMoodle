var $depliment = $("#collapsesections").clone(true,true); // variable pour stocker le clone du bouton de depliement des sections
$depliment[0].classList.add("nav-link"); // ajout de la class nav-link pour le style
var DivCours = []; // tableau contenant les divs des cours
$depliment[0].getAttribute("aria-controls").split(" ").forEach((value,_index,_array)=>{
    DivCours.push(document.getElementById(value)); // ajout de la div du cours dans le tableau
}); // tableau contenant les divs des cours

/* Collapse = rentré */

console.log(DivCours); // affichage des divs des cours dans la console

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
//    var nombreCours = document.querySelectorAll(".course-section").length;
//    
//    var Cours = []; // tableau contenant les liens des cours et le nom des fichiers
//    for (let i = 0; i < nombreCours; i++) {
//        DivCours[i] = document.getElementById(`coursecontentcollapse${i}`);
//    }
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

if (document.getElementById("collapsesections") !== undefined) {
    
    document.getElementById("collapsesections").remove();

    const li = document.createElement('li');
    
    $depliment.appendTo(li); // ajout du bouton depliement dans le li
    li.classList.add("nav-item"); // ajout de la class nav-item pour le style
    li.setAttribute("data-forceintomoremenu", "false");
    li.setAttribute("data-key", "ByChokinyan");
    li.role = "none";
    
    document.getElementsByClassName("secondary-navigation")[0].firstElementChild.firstElementChild.appendChild(li);
}

document.getElementById("page-header").firstElementChild.id = "page-header__name";

chrome.runtime.sendMessage({ action: "EditCSS" });