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
    sidebar.style.display = 'none';
    
    sidebar.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <div class="sidebar-header">Ai Checker</div>
      
        <div>&nbsp;</div>
        <form class="was-validated">

        <div class="mb-3">
        <select class="form-select" required aria-label="select example">
          <option value="">Select Ai Check</option>
          <option value="1">Grammar Check</option>
          <option value="2">Connotation Check</option>
          <option value="3">Get a response</option>
        </select>
        <div class="invalid-feedback">Example invalid select feedback</div>
      </div>

          <div class="mb-3">
            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required text here" required style="height: 150px;"></textarea>
          </div>
        </form>
        
        <button type="button" class="btn btn-primary">Submit</button>

        <div>&nbsp;</div>
        <div>&nbsp;</div>
        
        <input class="form-control" type="text" value="..." aria-label="readonly input example" readonly>
        
        <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    `;
    document.body.appendChild(sidebar);
  }
  