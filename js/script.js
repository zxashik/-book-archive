let outputDiv = document.getElementById("output");
let searchField = document.getElementById("input");

const getbooks = () => {
    outputDiv.innerHTML = "";
    let searchText = searchField.value;
    searchField.value = "";

    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then((res) => res.json())

        .then((data) => {
            for (let i = 0; i < 10; i++) {
                const div = document.createElement("div");
                div.classList = "book";
                div.innerHTML +=
                    "<h2> Book Name: " +
                    data.docs[i].title +
                    "</h2>" +
                    "<h4> Author Name: " +
                    data.docs[i].author_name[0] +
                    "</h4>" +
                    "<h4> First publish: " +
                    data.docs[i].first_publish_year +
                    "</h4>" +
                    "<h6> publisher: " +
                    data.docs[i].publisher[0] +
                    "</h6>" +
                    "<br><img src='https://covers.openlibrary.org/b/isbn/" +
                    data.docs[i].isbn[0] +
                    "-M.jpg'>";
                outputDiv.appendChild(div);
            }
        });
}