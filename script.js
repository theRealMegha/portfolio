function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function downloadResume() {
  // Fetch the PDF file and create a download link
  fetch('./assets/Megha_Murukesh_Resume.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Megha_Murukesh_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('Error downloading the file:', error);
      // Fallback: open in new tab if download fails
      window.open('./assets/Megha_Murukesh_Resume.pdf', '_blank');
    });
}
