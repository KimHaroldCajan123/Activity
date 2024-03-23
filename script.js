document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const dataTable = document.getElementById("dataTable");
  const tableBody = document.getElementById("tableBody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  document.getElementById("btnSubmit").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    if (username && address && email && number) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${username}</td>
                <td>${address}</td>
                <td>${email}</td>
                <td>${number}</td>
                <td><button class="btnUpdate">Update</button> <button class="btnDelete">Delete</button></td>
            `;
      tableBody.appendChild(newRow);

      // Clear form fields
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Event delegation for update and delete buttons
  dataTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("btnUpdate")) {
      // Handle update button click
      const row = event.target.closest("tr");
      const cells = row.querySelectorAll("td");

      // Populate form with row data
      document.getElementById("username").value = cells[0].textContent;
      document.getElementById("address").value = cells[1].textContent;
      document.getElementById("email").value = cells[2].textContent;
      document.getElementById("number").value = cells[3].textContent;

      // Remove the row
      row.remove();
    } else if (event.target.classList.contains("btnDelete")) {
      // Handle delete button click
      event.target.closest("tr").remove();
    }
  });
});
