class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau = 1){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }

    evoluer() {
        this.niveau++;
        console.log(`${this.pseudo} passe au niveau ${this.niveau} !`)
    }
    VerifierSante() {
        if(this.sante <= 0){
            this.sante = 0
            console.log(`${this.pseudo} a perdu !`)
        }
    }
    get information() {
        console.log(`${this.pseudo} (${this.classe}) a ${this.sante} points de vie et est au niveau ${this.niveau}`)
    }
}

class Magicien extends Personnage{
    constructor(pseudo, classe = "Magicien", sante = 170, attaque = 90){
        super(pseudo, classe, sante, attaque)
    }
    attaquer(ennemie){
        ennemie.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${ennemie.pseudo} en lançant un sort (${this.attaque} dégât).`);
        this.evoluer();
        ennemie.VerifierSante();
    }
    coupSpecial(ennemie){
        ennemie.sante -= (this.attaque*5);
        console.log(`${this.pseudo} attaque avec son noup spécial puissance des arcanes ${ennemie.pseudo} (${this.attaque*5} dégât).`);
        this.evoluer();
        ennemie.VerifierSante();
    }
   
    
}

class Guerrier extends Personnage{
    constructor(pseudo, classe = "guerrier", sante = 350, attaque = 50){
        super(pseudo, classe, sante, attaque)
    }
    attaquer(ennemie){
        ennemie.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${ennemie.pseudo} avec son épée (${this.attaque} dégât).`);
        this.evoluer();
        ennemie.VerifierSante();
    }
    coupSpecial(ennemie){
        ennemie.sante -= (this.attaque*5);
        console.log(`${this.pseudo} attaque avec son noup spécial haches de guerre ${ennemie.pseudo} (${this.attaque*5} dégât).`);
        this.evoluer();
        ennemie.VerifierSante();
    }
}

var gandalf = new Magicien("Gandalf le blanc")
console.log(gandalf.information);

 var thor = new Guerrier("Thor")
console.log(thor.information);

gandalf.attaquer(thor);
console.log(thor.information);
thor.attaquer(gandalf);
console.log(gandalf.information);
gandalf.coupSpecial(thor); 