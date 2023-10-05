const heroes = [
    ['Wonderwoman', 'wonderwoman.jpg', 'Super sexy'],
    ['Hulk', 'hulk.jpg', 'Super fort'],
    ['Black Widow', 'blackwidow.jpg', 'Super classe'],
    ['Deadpool', 'deadpool.jpg', 'Super fun'],
    ['Wolverine', 'wolverine.jpg', 'Super tranchant'],
    ['Captain Marvel', 'captainmarvel.jpg', 'Super autoritaire'],
    ['Spiderman', 'spiderman.jpg', 'Super aggripant'],
    ['Phoenix', 'phoenix.jpg', 'Super brûlante'],
    ['Flash', 'flash.jpg', 'Super rapide'],
]
const container = document.getElementById('container')

    
    for (let i = 0; i<= 9; i++){
        console.log(heroes[i])
        container.innerHTML+= ` <div class ='col-4 border rounded shadow'>
        <p>${heroes[i][0]}</p>
        <img src= ${heroes[i][1]} alt="image de ${heroes[i][0]}">
        <p>${heroes[i][2]}</p>
       </div>`
    }
    
     
    
     