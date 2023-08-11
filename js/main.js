let grille1 = [
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","T","S","S","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","MO","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","m","m","m","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","m","m","m","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","MO","S","S","S","T","m","m","m","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","T","S","S","S","m","m","m","m","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","MO","S","S","T","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","J","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
];

let grille2 = [
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","S","m","m","m","m","m","m","T","S","S","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","S","S","m","m","m","m","m","S","S","S","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","S","S","MO","S","S","T","m","m","m","m","m","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","S","S","S","S","m","m","m","m","m","m","m","MO","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","S","S","S","m","m","m","m","S","m","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","S","MO","S","S","T","m","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","S","S","S","S","m","m","m","m","S","S","m","m","m","MO","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","S","S","S","S","S","m","m","S","S","m","m","T","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","T","S","S","S","S","MO","S","S","S","T","m","m","m","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","S","S","S","S","S","S","m","m","m","m","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","MO","S","S","S","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","J","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
];
let grille3 = [
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","S","S","m","T","m","T","m","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","S","MO","S","S","S","S","S","S","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","S","S","S","S","S","MO","S","S","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","MO","S","S","S","S","S","S","S","S","S","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","S","S","S","S","T","S","S","S","S","S","S","S","S","S","S","m","m","m","m"],
    ["m","m","m","m","m","S","S","S","T","S","S","S","S","S","MO","S","S","S","S","S","S","T","m","m","m"],
    ["m","m","m","m","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","m","m","m","m"],
    ["m","m","m","m","MO","S","S","S","S","S","MO","S","S","S","S","S","S","S","S","S","m","m","m","m","m"],
    ["m","m","m","T","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","S","S","S","S","S","S","S","m","S","S","S","MO","S","S","m","m","m","m","m","m","m"],
    ["m","m","m","m","J","S","S","S","S","m","m","m","m","m","m","S","S","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","S","S","m","m","m","m","m","m","m","m","T","m","m","m","m","m","","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
];
let grille4 = [
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
    ["m","m","T","S","S","S","S","S","T","S","m","m","m","T","S","S","S","S","m","m","S","S","S","T","m"],
    ["m","m","S","S","S","S","m","m","m","m","S","S","S","S","S","S","S","S","m","T","S","S","S","m","m"],
    ["m","m","S","MO","S","S","S","m","m","m","T","S","MO","m","m","m","S","S","S","m","S","S","m","m","m"],
    ["m","m","S","S","S","S","S","S","m","m","S","S","S","m","m","m","MO","S","m","S","S","m","m","m","m"],
    ["m","m","S","S","S","S","S","MO","m","m","S","J","S","S","S","S","S","S","MO","S","m","m","m","m","m"],
    ["m","m","m","T","MO","S","S","S","S","m","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","S","S","S","S","S","m","m","m","S","S","MO","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","S","S","MO","S","S","S","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","S","S","S","S","T","S","S","S","S","S","S","m","S","S","m","m","m","m","m","m"],
    ["m","m","m","m","m","m","S","S","S","S","S","S","MO","S","S","m","m","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","S","S","S","S","S","S","S","m","m","m","S","S","S","m","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","S","S","S","S","S","m","m","m","m","m","MO","S","S","T","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","T","m","T","m","m","m","m","m","m","S","S","S","m","m","m","m"],
    ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
];



function choixgrille() {

    const randomNumber = Math.floor(Math.random() * 4) + 1;
  
    let grille;
  
   
  
    switch (randomNumber) {
  
      case 1:
  
      grille = grille1;
  
        break;
  
      case 2:
  
      grille = grille2;
  
        break;
  
      case 3:
  
      grille = grille3;
        break;
  
      case 4:
  
        grille = grille4;
  
        break;     
  
      default:
  
        console.error("Erreur : numéro invalide");
  
    }
  
  
    return grille;
  
  }

  let grille=choixgrille();

    

          //Fonction pour créer la grille
         
          function genererGrille(lignes, colonnes){

          let grilleDeJeu = document.getElementById('grilleDeJeu');

         //Création de la table.
         let table = document.createElement('table');
         grilleDeJeu.innerHTML='';
         
         //Boucle pour parcourir les lignes.
         for (let i = 0; i < lignes; i++) {
              let ligne = document.createElement('tr');

              //Boucle pour parcourir les colonnes.
         for (let j = 0; j< colonnes; j++) {
              let colonne  = document.createElement('td'); 

              //On définit les caractéristiques des cellules.
              colonne.style.width = '30px' ;
              colonne.style.height = '30px' ;
              colonne.style.borderStyle = 'solid' ;
              colonne.style.borderColor= 'white';

              //On place le joueur, les monstres,le sol, les trésors et les murs.
              if(grille [i][j] == "J"){          
                   colonne.classList.add("j")
              }
              else if(grille [i][j] == "MO"){                   
                   colonne.classList.add("monstre") 
              }
              else if(grille [i][j] == "S"){
                   colonne.style.backgroundColor = "white";
              }
              else if(grille [i][j] == "T"){
                  colonne.classList.add("tresor")
              }
              else{
                   
                   colonne.classList.add("mur")  
              }
             
              //Ajout des colonnes pour chaque ligne.
              ligne.appendChild(colonne);
              
         }
         
         //Ajout des lignes à la table.
         table.appendChild(ligne);
         
         }

         //Ajout de la table à la grille de jeu
         grilleDeJeu.appendChild(table);  

       }
      
//Appel de la grille de jeu
genererGrille(15,25);



let bouton_haut = document.getElementById("btnH");
bouton_haut.addEventListener("click", monter);


let bouton_bas = document.getElementById("btnB");
bouton_bas.addEventListener("click", descendre);


let bouton_droit = document.getElementById("btnD");
bouton_droit.addEventListener("click", deplacerDroite);


let bouton_gauche = document.getElementById("btnG");
bouton_gauche.addEventListener("click", deplacerGauche);


let reinitialisation=document.getElementById("reinitialisation");
reinitialisation.addEventListener("click", reinitialiserJeu);
console.log("bonjour");

// Fonction pour réinitialiser le jeu
function reinitialiserJeu() {
    location.reload();
    /*
    // Remettre le score à zéro
    score = 0;
    // Réactiver les boutons de déplacement.
    document.getElementById("btnH").disabled = false;
    document.getElementById("btnB").disabled = false;
    document.getElementById("btnD").disabled = false;
    document.getElementById("btnG").disabled = false;

    // Désactiver le bouton de réinitialisation
    document.getElementById("reinitialisation").disabled = true;

    // Réinitialiser la grille
    grille = [
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","T","S","S","S","S","m","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","S","S","m","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","m","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","MO","S","m","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","S","S","S","S","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","m","m","m","S","S","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","S","S","m","m","m","S","S","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","MO","S","S","S","T","m","m","m","S","S","m","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","T","S","S","S","m","m","m","m","S","S","S","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","m","m","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","MO","S","S","T","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","S","S","S","J","m","m","m"],
       ["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
   ];;

    // Regénérer la grille avec la position mise à jour
    genererGrille(15, 25);
    */
}



//Création de la fonction permettant au joueur de se déplacer vers le haut.
function monter() {

     // Rechercher la position actuelle du joueur.
     let abscisseJoueur;
     let ordonneeJoueur;
     for (let i = 0; i < grille.length; i++) {
         for (let j = 0; j < grille[0].length; j++) {
             if (grille[i][j] === 'J') {
                 abscisseJoueur = i;
                 ordonneeJoueur = j;
             }
         }
     }
 
     // Différents cas de figures si le joueur se déplace vers le haut.
     if (abscisseJoueur > 0 //(Vérifier si le déplacement vers le haut est valide) 
     && grille[abscisseJoueur - 1][ordonneeJoueur] == "S") {    //Et s'il rencontre le sol, il se déplace vers le haut sans problème.
         
        // Déplacement du joueur vers le haut.
         grille[abscisseJoueur - 1][ordonneeJoueur] = "J";
         grille[abscisseJoueur][ordonneeJoueur] = "S";
         deplacerMonstresAleatoire(); //Appel de la fonction pour déplacer aléatoirement le monstre quand le joeur monte.
         genererGrille(15, 25); //Regénération de la grille.
        }

        
 
         // Et si le joueur, en se déplaçant vers le haut, recontre un monstre.
          else if ( abscisseJoueur > 0 && grille[abscisseJoueur - 1][ordonneeJoueur] === "MO") {
             // La partie est terminée, afficher un message et désactiver les boutons de déplacement
             alert("La partie est terminée ! Vous avez été capturé par un monstre.");
             document.getElementById("btnH").disabled = true;
             document.getElementById("btnB").disabled = true;
             document.getElementById("btnD").disabled = true;
             document.getElementById("btnG").disabled = true;
             document.getElementById("reinitialisation").disabled = false; // Activer le bouton de réinitialisation
         } 
         // Vérifier le score et la victoire

         //deplacerMonstresAleatoire();
         //verifierScoreEtVictoire();

         // Et si le joueur, en se déplaçant vers le haut, recontre un trésor.
         else if(abscisseJoueur > 0 && grille[abscisseJoueur -  1][ordonneeJoueur] === "T"){
            grille[abscisseJoueur - 1][ordonneeJoueur] = "J";
            grille[abscisseJoueur][ordonneeJoueur] = "S";
            mettreAJourAffichageScore ();//Son score augmente de +1.
            genererGrille(15, 25);
        
        }

        // Autrement,  le joueur, en se déplaçant vers le haut, recontre un mur: Un message d'alerte s'affiche.
        else{
            alert("Il y a un mur, vous ne pouvez pas monter !");  
        }

    }

    //Création de la fonction permettant au joueur de se déplacer vers le bas.
    function descendre() {

        // Rechercher la position actuelle du joueur
        let abscisseJoueur;
        let ordonneeJoueur;
        for (let i = 0; i < grille.length; i++) {
            for (let j = 0; j < grille[0].length; j++) {
                if (grille[i][j] === 'J') {
                    abscisseJoueur = i;
                    ordonneeJoueur = j;
                }
            }
        }
    
        // Différents cas de figures si le joueur se déplace vers le bas.

        if (abscisseJoueur > 0 //(Vérifier si le déplacement vers le bas est valide) 
            && grille[abscisseJoueur + 1][ordonneeJoueur] == "S") {  //Et s'il rencontre le sol, il se déplace vers le bas sans problème.
            
                 // Déplacement du joueur vers le bas.
            grille[abscisseJoueur + 1][ordonneeJoueur] = "J";
            grille[abscisseJoueur][ordonneeJoueur] = "S";
            deplacerMonstresAleatoire();
            genererGrille(15, 25);
           }
   
   
            //deplacerMonstresAleatoire();
    
           // Et si le joueur, en se déplaçant vers le bas, recontre un monstre.
             else if ( abscisseJoueur > 0 && grille[abscisseJoueur - 1][ordonneeJoueur] === "MO") {
                // La partie est terminée, afficher un message et désactiver les boutons de déplacement
                alert("La partie est terminée ! Vous avez été capturé par un monstre.");
                document.getElementById("btnH").disabled = true;
                document.getElementById("btnB").disabled = true;
                document.getElementById("btnD").disabled = true;
                document.getElementById("btnG").disabled = true;
                document.getElementById("reinitialisation").disabled = false; // Activer le bouton de réinitialisation
            } 
    
            // Vérifier le score et la victoire
   
            //deplacerMonstresAleatoire();
            //verifierScoreEtVictoire();
   
            // Et si le joueur, en se déplaçant vers le bas, recontre un trésor.
            else if(abscisseJoueur > 0 && grille[abscisseJoueur +  1][ordonneeJoueur] === "T"){
               grille[abscisseJoueur + 1][ordonneeJoueur] = "J";
               grille[abscisseJoueur][ordonneeJoueur] = "S";
               mettreAJourAffichageScore();//Son score augmente de +1.
               genererGrille(15, 25);
               // Et si le joueur, en se déplaçant vers le haut, recontre un monstre.
           }
   
           // Autrement,  le joueur, en se déplaçant vers le bas, recontre un mur: Un message d'alerte s'affiche.
           else{
               alert("Il y a un mur, vous ne pouvez pas descendre !");  
           }
   
       }

       //Création de la fonction permettant au joueur de se déplacer vers la droite.
       function deplacerDroite() {

        // Rechercher la position actuelle du joueur
        let abscisseJoueur;
         let ordonneeJoueur;
     for (let i = 0; i < grille.length; i++) {
         for (let j = 0; j < grille[0].length; j++) {
             if (grille[i][j] === 'J') {
                 abscisseJoueur = i;
                 ordonneeJoueur = j;
             }
         }
     }
    
        // Différents cas de figures si le joueur se déplace vers la droite.
        if (ordonneeJoueur < grille[0].length - 1 //(Vérifier si le déplacement vers le droite est valide) 
            && grille[abscisseJoueur][ordonneeJoueur + 1] == "S") { //Et s'il rencontre le sol, il se déplace vers la droite sans problème.
            
                // Déplacement du joueur vers la droite
            grille[abscisseJoueur ][ordonneeJoueur + 1] = "J";
            grille[abscisseJoueur][ordonneeJoueur] = "S";
            deplacerMonstresAleatoire();
            genererGrille(15, 25);
           }
   
   
            //deplacerMonstresAleatoire();
    
           // Et si le joueur, en se déplaçant vers la droite, recontre un monstre.
             else if ( ordonneeJoueur < grille[0].length - 1 && grille[abscisseJoueur][ordonneeJoueur + 1] === "MO") {
                // La partie est terminée, afficher un message et désactiver les boutons de déplacement.
                alert("La partie est terminée ! Vous avez été capturé par un monstre.");
                document.getElementById("btnH").disabled = true;
                document.getElementById("btnB").disabled = true;
                document.getElementById("btnD").disabled = true;
                document.getElementById("btnG").disabled = true;
                document.getElementById("reinitialisation").disabled = false; // Activer le bouton de réinitialisation
            } 
    
            // Vérifier le score et la victoire
   
            //deplacerMonstresAleatoire();
            //verifierScoreEtVictoire();
   
            // Et si le joueur, en se déplaçant vers la droite, recontre un trésor.
            else if(ordonneeJoueur < grille[0].length - 1 && grille[abscisseJoueur][ordonneeJoueur + 1] === "T"){
               grille[abscisseJoueur][ordonneeJoueur + 1] = "J";
               grille[abscisseJoueur][ordonneeJoueur] = "S";
               mettreAJourAffichageScore();//Son score augmente de +1.
               genererGrille(15, 25);
               
           }
   
           else{ // Autrement,  le joueur, en se déplaçant vers la droite, recontre un mur: Un message d'alerte s'affiche.
               alert("Il y a un mur, vous ne pouvez pas aller à droite !");  
           }
   
       }

    //Création de la fonction permettant au joueur de se déplacer vers la gauche.
       function deplacerGauche() {

        // Rechercher la position actuelle du joueur
        let abscisseJoueur;
        let ordonneeJoueur;
     for (let i = 0; i < grille.length; i++) {
         for (let j = 0; j < grille[0].length; j++) {
             if (grille[i][j] === 'J') {
                 abscisseJoueur = i;
                 ordonneeJoueur = j;
             }
         }
     }
    
        // Différents cas de figures si le joueur se déplace vers la gauche.
        if (ordonneeJoueur < grille[0].length - 1 && //(Vérifier si le déplacement vers le gauche est valide) 
            grille[abscisseJoueur][ordonneeJoueur - 1] == "S") { //Et s'il rencontre le sol, il se déplace vers la gauche sans problème.
            // Déplacer J vers le haut
            grille[abscisseJoueur ][ordonneeJoueur - 1] = "J";
            grille[abscisseJoueur][ordonneeJoueur] = "S";
            deplacerMonstresAleatoire();
            genererGrille(15, 25);
           }
   
   
            //deplacerMonstresAleatoire();
    
            // Et si le joueur, en se déplaçant vers la gauche, recontre un monstre.
             else if ( ordonneeJoueur < grille[0].length - 1 && grille[abscisseJoueur][ordonneeJoueur - 1] === "MO") {
                // La partie est terminée, afficher un message et désactiver les boutons de déplacement
                alert("La partie est terminée ! Vous avez été capturé par un monstre.");
                document.getElementById("btnH").disabled = true;
                document.getElementById("btnB").disabled = true;
                document.getElementById("btnD").disabled = true;
                document.getElementById("btnG").disabled = true;
                document.getElementById("reinitialisation").disabled = false; // Activer le bouton de réinitialisation
            } 
    
            // Vérifier le score et la victoire
   
            //deplacerMonstresAleatoire();
            //verifierScoreEtVictoire();

    // Et si le joueur, en se déplaçant vers la gauche, recontre un trésor.
            else if(ordonneeJoueur < grille[0].length - 1 && grille[abscisseJoueur][ordonneeJoueur - 1] === "T"){
               grille[abscisseJoueur][ordonneeJoueur - 1] = "J";
               grille[abscisseJoueur][ordonneeJoueur] = "S";
               mettreAJourAffichageScore();//Son score augmente de +1.
               genererGrille(15, 25);
           }
   
           else{// Autrement, le joueur en se déplaçant vers la gauche, recontre un mur: Un message d'alerte s'affiche.
               alert("Il y a un mur, vous ne pouvez pas aller à gauche !");  
           }
   
       }
                 
  
 // Fonction permettant un déplacement aléatoire du monstre lorsque le joueur de déplace. 
 function deplacerMonstresAleatoire() {
    for (let i = 0; i < grille.length; i++) {
      for (let j = 0; j < grille[0].length; j++) {
        if (grille[i][j] === "MO") {

            //On crée un variable appellée direction qui génère un nombre aléatoire: 0,1,2 ou 3 correspondant au déplacement aléatoire du monstre
            //dans la grille.
          let direction = Math.floor(Math.random() * 4); // 0: Le monstre va vers le haut, 1: Le monstre va vers le bas, 2: Le monstre va vers la droite, 3: Le monstre va vers la gauche
          
          switch (direction) {
            case 0: // Montée
              if (i > 0 && grille[i - 1][j] === "S") {
                grille[i][j] = "S";
                grille[i - 1][j] = "MO";
              }
              break;
            case 1: // Descente
              if (i < grille.length - 1 && grille[i + 1][j] === "S") {
                grille[i][j] = "S";
                grille[i + 1][j] = "MO";
              }
              break;
            case 2: // À droite
              if (j < grille[0].length - 1 && grille[i][j + 1] === "S") {
                grille[i][j] = "S";
                grille[i][j + 1] = "MO";
              }
              break;
            case 3: // À gauche
              if (j > 0 && grille[i][j - 1] === "S") {
                grille[i][j] = "S";
                grille[i][j - 1] = "MO";
              }
              break;
          }
        }
      }
    }
    genererGrille(15, 25); // Regénération de la grille après le déplacement du monstre.
  }

 
let score = 0; //Déclaration d'une variable globale pour le score.
let  nombreDeTresors = document.getElementsByClassName("tresor").length; //Variable contenant le nombre de trésors dans la grille.

// Fonction pour mettre à jour l'affichage du score
function mettreAJourAffichageScore() {
    score++;
    // Mettre à jour l'affichage du score dans votre interface utilisateur, par exemple :
    document.getElementById("score").textContent = "Score: " + score;

    if(score === nombreDeTresors){
        verifierScoreEtVictoire(); 
    }
}

// Fonction pour vérifier le score et la victoire
function verifierScoreEtVictoire() {

     // Rechercher la position actuelle du joueur
     let abscisseJoueur;
     let ordonneeJoueur;
     for (let i = 0; i < grille.length; i++) {
         for (let j = 0; j < grille[0].length; j++) {
             if (grille[i][j] === 'J') {
                 abscisseJoueur = i;
                 ordonneeJoueur = j;
             }
         }
     }
 
     // Vérifier si le joueur a collecté un trésor
     if (grille[abscisseJoueur][ordonneeJoueur] === "T") {
         
        // Remolacer le trésor par le joueur
         grille[abscisseJoueur][ordonneeJoueur] = "J";
     }
 
         
    // La partie est gagnée, afficher un message de victoire et désactiver les boutons de déplacement    
         document.getElementById("btnH").disabled = true;
         document.getElementById("btnB").disabled = true;
         document.getElementById("btnD").disabled = true;
         document.getElementById("btnG").disabled = true;
         alert("Félicitations ! Vous avez obtenu tous les trésors. Partie gagnée !");

         // Regénérer la grille avec la position mise à jour
            genererGrille(15, 25);
            reinitialiserJeu();
 
 
     
}  









 
 
 
 
