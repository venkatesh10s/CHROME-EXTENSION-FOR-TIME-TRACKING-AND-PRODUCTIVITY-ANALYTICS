
fetch('http://localhost:3501/api/usage')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('usage-list');
    list.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.domain}: ${Math.round(item.timeSpent / 60)} minutes`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById('usage-list').textContent = 'Failed to load data';
  });
