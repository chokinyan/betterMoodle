var depliment = document.getElementById("collapsesections").cloneNode(true); // variable pour stocker le clone du bouton de depliement des sections
depliment.className += " nav-link";

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
//    var DivCours = []; // tableau contenant les divs des cours
//    var Cours = []; // tableau contenant les liens des cours et le nom des fichiers
//    for (let i = 0; i < nombreCours; i++) {
//        DivCours[i] = document.getElementById(`coursecontentcollapse${i}`);
//    }
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
    
    li.appendChild(depliment);
    li.className = "nav-item";
    li.setAttribute("data-forceintomoremenu", "false");
    li.setAttribute("data-key", "ByChokinyan");
    li.role = "none";
    
    document.getElementsByClassName("secondary-navigation")[0].firstElementChild.firstElementChild.appendChild(li);
}

document.getElementById("page-header").firstElementChild.id = "page-header__name";

chrome.runtime.sendMessage({ action: "EditCSS" });