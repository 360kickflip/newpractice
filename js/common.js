const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    window.location.href = 'index.html'; 
} else {
    document.getElementById('userLogin').textContent = user.login;
}

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user'); 
    localStorage.removeItem('testScore'); 
    window.location.href = 'index.html'; 
});