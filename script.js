const heroes = [
    ['Batman', 'batman.jpg', 'Super riche'],
    ['Superman', 'superman.jpg', 'Super riche'],
    ['Catwoman', 'catwoman.jpg', 'Super belle']
]
const container = document.getElementById('container')

for (let i = 0; i <= 2; i++) {
    container.innerHTML += `<h2 class="text-primary col-4">${heroes[i]}</h2>`
    `<p $Batman</p>`
    `<img src="batman.jpg" alt="Image de Batman">`
    `<p>Super riche</p>`
}