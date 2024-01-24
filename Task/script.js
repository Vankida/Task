function searchTable() {
  var table = document.getElementById("dataTable");
  var rows = table.getElementsByTagName("tr");

  var matchesCount = 0;
  var matchesInfo = document.getElementById("matchesInfo");

  // Get input value and convert to lowercase for case-insensitive search
  var searchText = document.getElementById("searchInput").value.toLowerCase();
  if (searchText === "") {
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      for (var j = 0; j < row.cells.length; j++) {
        var cell = row.cells[j];
        cell.style.backgroundColor = "";
      }
    }
    matchesInfo.textContent = `Matches found: `;
    return;
  }

  for (var i = 1; i < rows.length; i++) {
    // Start from index 1 to skip the header row
    var row = rows[i];
    var matchFound = false;

    // Loop through each cell in the row
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      var cellText = cell.textContent.toLowerCase();

      // Check if the cell text contains the search text
      if (cellText.includes(searchText)) {
        // Highlight the cell in red
        cell.style.backgroundColor = "rgba(255, 62, 62, 0.6)";
        matchFound = true;
        matchesCount++;
      } else {
        // Reset background color if not a match
        cell.style.backgroundColor = "";
      }
    }
  }

  if (matchesCount > 0) {
    matchesInfo.textContent = `Matches found: ${matchesCount}`;
  } else {
    matchesInfo.textContent = "Nothing found";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function addHeadingParagraphs() {
    var tableRows = document.querySelectorAll("#dataTable tbody tr");

    tableRows.forEach(function (row, rowIndex) {
      var cells = row.querySelectorAll("td");
      cells.forEach(function (cell, cellIndex) {
        var headingNumber = cellIndex + 1;
        var headingText = "Heading " + headingNumber;
        var paragraph = document.createElement("h4");
        paragraph.textContent = headingText;
        paragraph.classList.add("invisible");
        cell.insertBefore(paragraph, cell.firstChild);
      });
    });
  }

  // Initial call to addHeadingParagraphs when the page loads
  addHeadingParagraphs();
});
