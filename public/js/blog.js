const osPosts = document.querySelector('#posts')

//get posts from server
const getPosts = async () => {
    const res = await fetch('http://localhost:5000/blog')
    const data = await res.json()
    return data
}

//add videos to dom
const addPosts = async () => {
    const posts = await getPosts()

    posts.forEach((posts) => {
        const div = document.createElement('div')
        div.className = 'posts'
        div.innerHTML = `
        <img src="${posts.cover}" alt="capas">
        <h3>${posts.title}</h3>
        `
        osPosts.appendChild(div)
    })
}

addPosts()