const errorDiv = document.getElementById("error");
const searchField = () => {
  const searchInput = document.getElementById("search-input");
  searchText = searchInput.value;
  const url = `http://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayResult(data.docs))
    .finally(() => {
      searchInput.value === "";
    });
  if (searchText === "") {
    errorDiv.innerText = "Search Field cannot be Empty";
    return;
  } else if (searchText.innerText === "") {
    errorDiv.innerHTML = "NO Result Found";
  } else if ((errorDiv.innerText = "")) {
    return;
  } else {
    searchText.innerText === "";
    errorDiv.style.display = "none";
  }
};
// searchField();
const displayResult = (results) => {
  const searchTotal = document.getElementById("total-count");
  searchTotal.innerText = results.length;
  searchTotal.style.display = "block";
  //   results.forEach((number) => {
  //     console.log(number);
  //   });
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  //   const resultCount = data.results;
  //   const resultCountDiv = document.getElementById("total-count");
  //   resultCount.forEach((resultValue) => {
  //     const p = document.createElement("p");
  //     p.innerText = `Search result: ${resultValue.text.lenght}`;
  //     resultCountDiv.appendChild(p);
  //   });

  results.forEach((result) => {
    console.log(result);

    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
   
    <div class="row my-3 rounded">
        <div class="col-md-4">
            <img src="https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg" class="img-fluid rounded-start my-3">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Title: ${result.title}</h5>
                <p class="card-text">Author Name:${result.author_name}</p>
                <p class="card-text"><small class="text-muted">First Publish Year: ${result.first_publish_year}</small></p>
            </div>
        </div>
    </div>
    
          `;

    searchResult.appendChild(div);
  });
};
