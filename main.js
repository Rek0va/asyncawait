// const data = new Promise((resolve, reject) => {
//     let user = {
//         name: 'Mauve',
//         age: 25
//     }
//     setTimeout(() => {
//         console.log('Загрузка данных сервера...')
//         resolve(user)
//     }, 2000);
// }).then((data) => {
//     console.log(data)
// })
// console.log(data)
// console.log(navigator)

document.querySelector('button').addEventListener('click', () => getProducts())

// function getPosts() {
//     fetch('https://dummyjson.com/products')
//     .then((res) => res.json())
//     .then((products) => console.log(products))
//     .catch(() => console.error('Запрос не сработал...'))
// }

async function getProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const products = await res.json()
        const results = products.products
        let div = document.createElement('div')
        div.classList.add('container')
        results.forEach(prod => {
            div.innerHTML += `
            <div class="card">    
            <img src="${prod.thumbnail}" alt="${prod.title}"/>
            <h2>${prod.title}</h2>
            <p>${prod.description}</p>
            <span>${prod.price}</span>
            </div>
            `
        });    
        document.body.appendChild(div)
    }catch (err) {
        console.error('Запрос не сработал...', err)
    }
}