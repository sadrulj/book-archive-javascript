// global
const searchInputText = document.getElementById("error");
const searchResult = document.getElementById("search-result");
const searchTotal = document.getElementById("total-count");
const spinner = document.getElementById("spinner");
// call search field
const searchField = () => {
  const searchInput = document.getElementById("search-input");
  searchText = searchInput.value;
  // Api fetch
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayResult(data.docs, data));
  // input field Clear and no result found
  searchInput.value = "";
  if (searchText === "") {
    searchInputText.innerText = "Search Field cannot be Empty";
  } else {
    searchInputText.innerText = "";
  }

  // loading display
  spinner.style.display = "block";
};
// Output display
const displayResult = (results, resultData) => {
  // number of search result
  searchTotal.innerText = `Search Result: ${results.length} out of ${resultData.num_found}`;
  searchTotal.style.display = "block";
  searchResult.textContent = "";
  results?.forEach((result) => {
    // getting info from api
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
                <p class="card-text">Publisher:${result.publisher}</p>
                <p class="card-text"><small class="text-muted">First Publish Year: ${result.first_publish_year}</small></p>
            </div>
        </div>
    </div>
    
          `;
    // append
    searchResult.appendChild(div);
  });
  //loading off
  spinner.style.display = "none";
};
