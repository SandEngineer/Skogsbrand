// Read the JSON data from localStorage
const jsonData = localStorage.getItem('formData');

// Parse the JSON data
const formData = JSON.parse(jsonData);

// Display the data on the page
const displayDiv = document.getElementById('displayData');
if (formData) {
  displayDiv.innerHTML = `            <div class="rubrik row row-cols-1 text-center">
  <p class="col rubrik fs-3">Hej ${formData.name}</p>
  <p class="brodtext fs-6 col">
    Tack för din beställning. En orderbekräftelse är skickad till
    ${formData.email}
  </p>
</div>
<ul class="list-group offset-md-1 offset-lg-2 pt-3 fs-6">
  <li class="list-group-item rubrik">Bokningsinformation:</li>
  <li class="list-group-item">
    <span class="brodtext">Antal biljetter: </span
    >${formData.tickets}
  </li>
  <li class="list-group-item">
    <span class="brodtext">Datum: </span>${formData.date}
  </li>
  <li class="list-group-item">
    <span class="brodtext">Förnamn: </span>${formData.name}
  </li>
  <li class="list-group-item">
    <span class="brodtext">Efternamn: </span>${formData.lastname}
  </li>
  <li class="list-group-item">
    <span class="brodtext">Telefonnummer: </span>${formData.phone}
  </li>
  <li class="list-group-item">
    <span class="brodtext">Email: </span>${formData.email}
  </li>
</ul>`;
} else {
  displayDiv.innerHTML = '<p>No data available</p>';
}
