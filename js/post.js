let postWrapper = document.querySelector('.post-holder');
let postForm = document.querySelector('#post-form')
let title = document.querySelector('#title')
let body = document.querySelector('#body')


 let postBox= [];
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            // console.log(postBox)
            //    console.log(data)
            postBox = data
            let postHolder = '';
            postBox.forEach(post => {
                postHolder += `
                <div class="col ">
                <div class="card h-50 bg-white">
                  <img src="image/2002.i515.001_modern_students_flat_icons-13.jpg" class="card-img-top" alt="...">
                  <div class="card-body bg-white">
                  <p>${post.id}</p>
                    <h5 class="card-title" id="post-title">${post.title}</h5>
                    <p class="card-text" id="post-body">${post.body} </p>
                    <div class="d-flex justify-content-between">
                        
                        <button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
                `
            });
            postWrapper.innerHTML = postHolder;
        })

        
}
  getPosts();

postForm.addEventListener('submit', createPost)
function createPost(e) {
    e.preventDefault();
    // console.log(title.value, body.value)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: 2
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data)=> {
        console.log(data)
        postBox.unshift(data);
        console.log(postBox)
        let postHolder = '';
        postBox.forEach(post => {
            postHolder += `
            <div class="col ">
            <div class="card h-50 bg-white">
              <img src="image/2002.i515.001_modern_students_flat_icons-13.jpg" class="card-img-top" alt="...">
              <div class="card-body bg-white">
              <p>${post.id}</p>
                <h5 class="card-title" id="post-title">${post.title}</h5>
                <p class="card-text" id="post-body">${post.body} </p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" onclick="updatePost
                    (${post.id})">Update</button>
                    <button class="btn btn-danger " onclick="deletePost(${post.id})">Delete</button>
                </div>
              </div>
            </div>
          </div>
            `
        });
        postWrapper.innerHTML = postHolder;
    })
}

function deletePost(postId)
   { console.log(postId)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
        
    }) .then((response) => response.json())
    .then((json) => {
    console.log(json)
    postBox  = postBox.filter((element)=> element.id !== postId)
    let postHolder = '';
        postBox.forEach(post => {
            postHolder += `
            <div class="col ">
            <div class="card h-50 bg-white">
              <img src="image/2002.i515.001_modern_students_flat_icons-13.jpg" class="card-img-top" alt="...">
              <div class="card-body bg-white">
              <p>${post.id}</p>
                <h5 class="card-title" id="post-title">${post.title}</h5>
                <p class="card-text" id="post-body">${post.body} </p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" onclick=
                    "updatePost(${post.id})">Update</button>
                    <button class="btn btn-danger " onclick="
                    deletePost(${post.id})"> Delete</button>
                </div>
              </div>
            </div>
          </div>
            `
        });
        postWrapper.innerHTML = postHolder;
    
     
})
}
   
// function updatePost(postId){
  // console.log(postId)


// }













// 






