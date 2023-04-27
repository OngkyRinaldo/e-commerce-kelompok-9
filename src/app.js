// Manipulasi Search box pada header

const searchTrigger = document.getElementById("search-trigger");
const searchBox = document.getElementById("search");
const searchTriggerLi = document.getElementById("search-trigger-li");

searchTrigger.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
  searchTriggerLi.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !searchBox.contains(event.target) &&
    !searchTrigger.contains(event.target)
  ) {
    searchBox.classList.add("hidden");
    searchTriggerLi.classList.remove("hidden");
  }
});
