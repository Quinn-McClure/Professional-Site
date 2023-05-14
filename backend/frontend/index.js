//About me page rendering
// Using fetch
const contentContainer = document.getElementById('content-container');
fetch('/second-page')
  .then(response => response.text())
  .then(htmlContent => {
    contentContainer.innerHTML = htmlContent;
  })
  .catch(error => {
    // Handle error
  });