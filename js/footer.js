// Load the footer dynamically
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;

    // Now that the footer is loaded, update the page editor name
    updatePageEditor();
  })
  .catch((error) => console.error("Error loading the footer:", error));

// Function to update the page editor
function updatePageEditor() {
  // Define editors for different pages
  const pageEditors = {
    "home.html": { name: "Jonathan Gomesz", link: "pageEditor_ST2.html" },
    "volunteer.html": { name: "Kaushi Kavindaya", link: "pageEditor_ST1.html" },
    "feedback.html": { name: "Mena Fernando", link: "pageEditor_ST3.html" },
    "sitemap.html": { name: "Riviru Bandara", link: "pageEditor_ST4.html" },
    "profile.html": { name: "Riviru Bandara", link: "pageEditor_ST4.html" },
    "team.html": { name: "Mena Fernando", link: "pageEditor_ST3.html" },
    "table.html": { name: "Jonathan Gomesz", link: "pageEditor_ST2.html" },
    "content_ST1.html": { name: "Kaushi Kavindaya", link: "pageEditor_ST1.html" },
    "content_ST2.html": { name: "Jonathan Gomesz", link: "pageEditor_ST2.html" },
    "content_ST3.html": { name: "Mena Fernando", link: "pageEditor_ST3.html" },
    "content_ST4.html": { name: "Riviru Bandara", link: "pageEditor_ST4.html" },
    default: { name: "Kaushi Kavindaya", link: "pageEditor_ST2.html" }, 
  };

  // Get the current page filename
  let page = window.location.pathname.split("/").pop();

  // Get editor details (fallback to default)
  let editor = pageEditors[page] || pageEditors["default"];

  // Check if elements exist before updating them
  let editorNameElement = document.getElementById("page-editor-name");
  let editorLinkElement = document.getElementById("page-editor-link");

  if (editorNameElement && editorLinkElement) {
    editorNameElement.textContent = editor.name;
    editorLinkElement.href = editor.link;
  }
}
