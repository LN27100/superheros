         class heros {
        constructor(image, nom, photo, lieu, superPouvoir, identité, équipe) { 
            this.image = image 
            this.nom = nom
            this.photo = photo 
            this.lieu = lieu
            this.superPouvoir = superPouvoir
            this.identité = identité
            this.équipe = équipe
        }
    }
    
    let wonderWoman = new heros('logoDC.png','Wonderwoman', 'wonderwoman.jpg','Themyscira','Surhumaine','Diane de Themyscira','La ligue des Justiciers')
    let looseCannon = new heros('logoDC.png','Loose Cannon', 'looseCanon.jpg', 'Metropolis','Méga force','Eddie Walker','Inconnue')
    let blackWidow = new heros('logoMarvel.png','Black Widow', 'blackwidow.jpg','Washington', 'Maitrise des arts martiaux','Natasha Romanoff','S.H.I.E.L.D')
    let deadPool = new heros('logoMarvel.png','Deadpool', 'deadpool.jpg', 'San Francisco', 'Super-guérison et Immortalité', 'Wade Wilson', 'Mercenaire')
    let wolverine = new heros('logoMarvel.png','Wolverine', 'wolverine.jpg','New York', 'Super tranchant et SUper-guérison', 'James Howlett(Logan)', 'X-Men')
    let captainMarvel = new heros('logoMarvel.png','Captain Marvel', 'captainmarvel.jpg','New York', 'Surhumaine et projection énergie absorbée', 'Carol Danvers', 'Les Vengeurs et Les gardiens de la galaxie')
    let greenArrow = new heros('logoDC.png','Green Arrow', 'greenArrow.jpg', 'Star City', 'Super précis', 'Oliver Queen', 'Team Arrow')
    let jeanGrey = new heros('logoMarvel.png','Jean Grey','phoenix.jpg', 'Salem Center', 'Pyrokinésie et Télépathie', 'Jean Elaine Grey-Summers', 'X-Men')
    let flash = new heros('logoDC.jpg','Flash', 'flash.jpg', 'Central City', 'Ultra vitesse', 'Barry Allen', 'La ligue de Justiciers')
    let cyborg = new heros('logoDC','Cyborg', 'cyborg.jpg', 'New York', 'Super robotisé', 'Victor Stone', 'La ligue des Justiciers')
    let donnaTroy = new heros('logoDC.png','Wonder girl', 'donnaTroy.jpg', 'Brésil', 'Super force ', 'Donna Troy', 'Teen Titans')
    let missHulk = new heros('logoMarvel.png','Miss Hulk', 'missHulk.jpg', 'Los Angeles', 'Surhumaine', 'Jennifer Sue Walters', 'Goodman, Lieber, Kurtzberg & Holliway')

    
    //stocker les objets dans un tableau et les afficher dans le html
    const heros1 = [wonderWoman, looseCannon, blackWidow, deadPool, wolverine, captainMarvel, greenArrow, jeanGrey, flash, cyborg, donnaTroy, missHulk]
    
    // Boucle à travers le tableau et crée un élément <p> pour chaque valeur.
    for (let i = 0; i < heros1.length; i++) { // on défini en premier par quoi on commence et on dit que si i est inférieur à la longueur du tableau, on ajoute un i
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML += `
        <img src="${heros1[i].image}" alt="image">
        <p><b>Nom:</b> ${heros1[i].nom}</p>
        <img src="${heros1[i].photo}" alt="photo">
        <p><b>Lieu: </b> ${heros1[i].lieu}</p>
        <p><b>Super pouvoir: </b> ${heros1[i].superPouvoir}</p>
        <p><b>Identité: </b> ${heros1[i].identité}</p>
        <p><b>Equipe: </b> ${heros1[i].équipe} </p>`
        infos.appendChild(card);
    }
    
     