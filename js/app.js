const searchInputText = document.getElementById("error");
const searchResult = document.getElementById("search-result");
const searchTotal = document.getElementById("total-count");
const spinner = document.getElementById("spinner");

const searchField = () => {
  const searchInput = document.getElementById("search-input");
  searchText = searchInput.value;
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayResult(data.docs, data));
  searchInput.value = "";
  if (searchText === "") {
    searchInputText.innerText = "Search Field cannot be Empty";
    return;
  }
  spinner.style.display = "block";
};

const displayResult = (results, resultData) => {
  searchTotal.innerText = `Search Result: ${results.length} out of ${resultData.num_found}`;
  searchTotal.style.display = "block";
  searchResult.textContent = "";
  results?.forEach((result) => {
    // Error Handing
    if (results.message === "Not Found") {
      searchInputText.innerText = "NO Result Found";
    } else {
      searchInputText.innerText = "";
    }

    // console.log(result);
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

    searchResult.appendChild(div);
  });
  spinner.style.display = "none";
};
