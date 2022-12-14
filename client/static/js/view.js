function getOnePost(e){
    fetch('http://localhost:3000/posts/' + e)
        .then(r => r.json())
        .then(viewPost)
        .catch(console.warn)
}

function viewPost(entryData){
    const newDiv = document.createElement('div');
    newDiv.className = 'card w-100';     
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body'
    cardBody.id = "entry-card"

    const textDiv = document.createElement('div');
    
    const title = document.createElement('h5');
    title.className = 'card-title'
    title.textContent = entryData.title
    
    const text = document.createElement('p');
    text.className = 'card-text'
    text.textContent = entryData.story


    
    newDiv.appendChild(cardBody);
    cardBody.appendChild(textDiv)
    textDiv.append(title, text);

    const posts = document.querySelector('#post-entry');
    posts.append(newDiv);


}
let searchTerm = window.location.search
const postID = searchTerm.slice(searchTerm.search('=')+1)

getOnePost(postID)