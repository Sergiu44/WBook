if(!localStorage.getItem('email')) {
    window.location.href = 'http://localhost:6969/login';
} else {
    setInterval(() => {
        localStorage.removeItem('email');
        window.location.reload();
    }, [180000]);
}

document.getElementById('postCreate').addEventListener('click', () => {
    window.location.href = "http://localhost:6969/posts/create";
})