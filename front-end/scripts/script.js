


/**
 * criando um useEffect no node. 
 */
document.addEventListener('DOMContentLoaded', () => {
  updatePosts();
})


function updatePosts() {
  fetch("http://192.168.2.15:3333/api/all").then((res) => {
    return res.json();
  }).then(json => {
    console.log(json);

    let postElements = '';

    let posts = JSON.parse(json);

    posts.forEach((post) => {
      let postElement = `
        <div id=${post.id} class="card mb-4">
          <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
          </div>
          <div class="card-body">
            <div class="card-text">${post.description}</div>
          </div>
        </div>
      `
      postElements += postElement; //concatenando a lista.
    })

    document.getElementById("posts").innerHTML = postElements
  })
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  //criando objeto
  let post = { title, description };

  console.log({ post });

  const options = {
    method: "POST",
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(post)
  }

  fetch("http://192.168.2.15:3333/api/new", options).then(res => {
    console.log(res);
    updatePosts();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  })

}