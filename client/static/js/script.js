let counter = 0

function sendPost(e) {
    e.preventDefault();
    counter =+ 1
        const entryData = {
            title: e.target.title.value,
            name: e.target.name.value,
            story: e.target.content.value
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(entryData),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch('http://localhost:3000/posts', options)
            .then(r => r.json())
            .then(window.location.replace('view.html?=' + counter))
            .catch(console.warn)

};

const form = document.querySelector('form')

form.addEventListener('submit', sendPost)