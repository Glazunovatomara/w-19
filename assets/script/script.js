
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => {
    //JSON.stringify(data)
    //console.log(data)
    data.forEach(item => {
        let main = document.querySelector('.main')
        let div = document.createElement('div')
        div.innerHTML = `<h2 class="subtitle">заголовок: ${item.title}</h2><p> статья: ${item.body}</p>`
        main.append(div)
    })
})
.catch((error) =>
    console.log(error)
)