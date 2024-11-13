if (!document.getElementById('custom-sidebar')) {
  const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/5.0.2/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);  
  
  const sidebar = document.createElement('div');
    sidebar.id = 'custom-sidebar';
    sidebar.className = 'p-3 bg-light border-left shadow'; // Bootstrap classes for styling
    sidebar.style.position = 'fixed';
    sidebar.style.right = '0';
    sidebar.style.top = '0';
    sidebar.style.width = '300px';
    sidebar.style.height = '100%';
    sidebar.style.zIndex = '2147483647';
    sidebar.style.display = 'block';
    
    sidebar.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <div class="sidebar-header">Ai Grammer Check</div>
      <form id="sidebar-form">

        <form class="was-validated">
          <div class="mb-3">
            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required text here" required></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
            <div class="valid-tooltip">
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </form>
      </form>
      <ul class="sidebar-menu">
        <li><a href="https://www.example.com" target="_blank">Help</a></li>
        <li><a href="https://www.example2.com" target="_blank">Check for updates</a></li>
      </ul>
    `;
    document.body.appendChild(sidebar);
  }
  