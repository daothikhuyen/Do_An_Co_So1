var courseApi = "http://localhost:3000/Contents";

function start(){
    getCouses(renderContent);

    SendComment();
}

start();

// function
function getCouses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
        
}

function createContent(data, callback){
    var options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(courseApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

function renderContent(Contents){
    var listComment = document.querySelector('#Comment-left');
    console.log(listComment)

    var htmls = Contents.map(function(Content){
        return `
            <div class="comment-item comment-${Content.id} d-flex justify-content-between align-item-center">
                <div class="d-flex align-items-center">
                    <div class="comment-img m-2" style="background-image: url(image/anhDN.jpg);" >
                    </div>
                    <h6 class="mt-2">${Content.name}</h6>
                </div>
                <div  class= "icon me-3">
                    <button id="delete-comment-icon" class="border-0 bg-white" onclick="deleteComment(${Content.id})"><i class="fa-solid fa-x fa-2xs" style="color: #b9bec6;"></i></button>
                </div>
            </div>
            <div class="comment-body">
                <div class="assess">
                    <h6 class="ps-4"><small>
                        <i class="fa-solid fa-star" style="color: #c3be22;"></i>
                        <i class="fa-solid fa-star" style="color: #c3be22;"></i>
                        <i class="fa-solid fa-star" style="color: #c3be22;"></i>
                        <i class="fa-solid fa-star" style="color: #c3be22;"></i>
                        <i class="fa-solid fa-star" style="color: #c3be22;"></i>
                    </small></h6>
                </div>
                <div class="description ps-4">
                    <a class="fs-6"><small>${Content.description}</small></a>
                </div>
            </div>
            <hr>
        `
    });
    listComment.innerHTML = htmls.join('')
}

function deleteComment(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(courseApi + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var commentItem = document.querySelector('.comment-${Content.id}');
            if(commentItem){
                commentItem.remove();
            }
        })
}

function SendComment(){
    var sendComment = document.querySelector("#btn");

    sendComment.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('textarea[name="content"]').value;

        var formData = {
            name: name,
            description: description
        };

        createContent(formData)
    }
}

