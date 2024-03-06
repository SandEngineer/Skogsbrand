// Read the JSON data from localStorage
const jsonData = localStorage.getItem('formData');

// Parse the JSON data
const formData = JSON.parse(jsonData);

// Display the data on the page
const displayDiv = document.getElementById('displayData');
if (formData) {
  displayDiv.innerHTML = `<p>Datum: ${formData.date}</p><p>Antal biljetter: ${formData.tickets}</p>
                          <p>Förnamn: ${formData.name}</p><p>Efternamn: ${formData.lastname}</p>
                          <p>Email: ${formData.email}</p><p>Telefonnummer: ${formData.phone}</p>
                          <p>Betalningsalternativ: ${formData.paymentOption}</p>`;
} else {
  displayDiv.innerHTML = '<p>No data available</p>';
}
