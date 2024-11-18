if (!document.getElementById('extension-custom-sidebar')) {

  const sidebar = document.createElement('div');
  sidebar.id = 'extension-custom-sidebar';
  sidebar.className = 'p-3 bg-light border-left shadow'; // Bootstrap classes for styling
  sidebar.style.position = 'fixed';
  sidebar.style.right = '0';
  sidebar.style.top = '0';
  sidebar.style.width = '400px';
  sidebar.style.height = '100%';
  sidebar.style.zIndex = '2147483647';
  sidebar.style.display = 'none';

  sidebar.innerHTML = `
    <iframe src="https://finlaypatoto.github.io/ai_4140_final_project/" style="width: 100%; height: 100%; border: none;"></iframe>
  `;

  // Append sidebar to the document body
  document.body.appendChild(sidebar);
}
