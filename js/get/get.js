    function getData() {
      fetch('https://jsonplaceholder.typicode.com/users/1')  // Example API
        .then(response => response.json())
        .then(data => {
          document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }



    document.getElementById('myForm').addEventListener('submit', function (e) {
      e.preventDefault(); // prevent page reload

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
    });