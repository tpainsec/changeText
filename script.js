document.addEventListener("DOMContentLoaded",function(){
    // tout le code javaScripr doit être écrit ici
    
    //variables

    var buttonA = document.getElementById("buttonA");
    var buttonB = document.getElementById("buttonB");
    var buttonC = document.getElementById("buttonC");
    var frameA = document.getElementById("frameA");
    var frameB = document.getElementById("frameB");
    var frameC = document.getElementById("frameC");
    // je stock mes elements HTML Frame dans un tableau afin de les 
    // utiliser sous forme de valeurs numérique dans mes fonctions
    // d'affichage (frameNumber)
    var tbFrame = [frameA,frameB,frameC];
    // je crée un tableau qui va contenir l'état de mes fenetre ABC :
    // false = diplay : none
    // true = display : block
    var switchFrame = [false,false,false];
    
    
    // functions

    // un première fonction est utilisée pour "ouvrir" une
    // fenetre (display : block) qui correspond à frameNumber
    // si frameNumber = 0 alors tbFrame[frameNumber] = frameA
    // etc...
    function openFrame(frameNumber){
        tbFrame[frameNumber].classList.remove("invisible");
        tbFrame[frameNumber].classList.add("visible");
        switchFrame[frameNumber] = true;
    }
    // une seconde pour "fermer" ma fenetre
    function closeFrame(frameNumber) {
        tbFrame[frameNumber].classList.remove("visible");
        tbFrame[frameNumber].classList.add("invisible");
        switchFrame[frameNumber] = false;
    }
    // ma fonction suivante va gérer :
    // - le click sur mon bouton
    // - la gestion des fenetres ouvertes ou pas
    function clickButton(button , target){
        button.addEventListener("click", function(){
            // exemple click sur A
            // une boucle va parcourie mon tableau switchFrame
            // pour determiner si une fenetre est ouverte
            for(var i=0;i<switchFrame.length;i++){
                // 1er cas une fenetre est ouverte : switchFrame[i] == true
                if(switchFrame[i]){
                    // si target correspond à A et i == 0 il s'agit de la même fenetre frameA
                    if(i == target){
                        // Je ferme ma fenetre A
                        closeFrame(target);
                    } else {
                        // une autre fenetre que A est ouverte (B ou C peu importe):
                        // je ferme cette fenetre 
                        closeFrame(i);
                        // j'ouvre A
                        openFrame(target);
                    }
                    // j'arrete ma boucle : l'action voulue est effectuée
                    break;
                } else {
                    // 2e cas de figure la fenetre n'est pas ouverte : switchFrame[i] == false 
                    // je n'effectue aucune action avant d'être arrivé à la fin de mon tableau/boucle :
                    // i === switchFrame.length - 1
                    if(i === switchFrame.length - 1){
                        // je suis à la fin de ma boucle et toutes les fenetres sont fermées
                        // j'ouvre ma fenetre A
                        openFrame(target);
                    }
                }
            }
        });
    }
    
    // partie script

    // j'applique ma fonction clickButton() à tous mes bouton
    // avec en argement le bouton lui-meme (buttonA) , le clé swichFrame qui lui est associé (0)
    clickButton(buttonA, 0);
    clickButton(buttonB, 1);
    clickButton(buttonC, 2);


    // fin de mon code javascript
});