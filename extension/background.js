chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: toggleSidebar,
    });
  });
  
  function toggleSidebar() {
    const sidebar = document.getElementById('extension-custom-sidebar');
    if (sidebar) {
      sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    } else {
      const script = document.createElement('script');
      script.src = chrome.runtime.getURL('sidebar.js');
      document.body.appendChild(script);
    }
  }
  