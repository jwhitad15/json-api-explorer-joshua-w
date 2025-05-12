const fetchData = fetch("https://jsonplaceholder.typicode.com/posts");

fetchData.then(function(response){
    const jsonData = response.json();
    jsonData.then(function(json){
        console.log("Data:", json.title);
    });
});

const div = document.getElementById("postList");
    div.innerHTML = `
        <ul>
            <li>Title: ${json.title}</li>
            <li>Body: ${json.body} </li>
        </ul> `;
