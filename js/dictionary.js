document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#dictionaryList li');
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementById('dictionaryList').addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        const description = e.target.getAttribute('data-description');
        document.getElementById('description').textContent = description;
    }
});