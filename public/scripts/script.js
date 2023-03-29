document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://192.168.0.29:3000/api/all").then(res => {
        return res.json();
    }).then(json => {
        console.log(json);

        let postElements = '';

        let posts = JSON.parse(json.toString());
        posts.forEach((post) => {
            let postElement = `
                <div id=${post.id} class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${post.content}</p>
                    </div>
                </div>
            `
            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    let post = {title, content};

    const options = {
        method: 'POST',
        headers: new Headers({ "Content-Type": "application/json"}),
        body: JSON.stringify(post)
    }

    if (title == "" || content == "") {
        alert("Preencha todos os campos!");
        return;
    }

    fetch("http://192.168.0.29:3000/api/new", options).then(res => {
        console.log(res);
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("content").value= "";
    })
}
