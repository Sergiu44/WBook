function init() {
    if(!localStorage.getItem('email')) {
        window.location.href = 'http://localhost:6969/login';
        return;
    } else {
        setInterval(() => {
            localStorage.removeItem('email');
            window.location.reload();
        }, [180000]);
    }
    document.querySelectorAll('.seeMore').forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault();
            const text = element.previousSibling.previousSibling;
            console.log(text);
            text.style.textOverflow = 'unset';
            text.style.overflow = 'unset';
            text.style.whiteSpace = 'unset';
            element.style.display = 'none'
        })
    })

    const listItems = document.querySelectorAll('.navigation > ul > li');
    for(let i = 0; i< listItems.length - 1; ++i) {
        listItems[i].addEventListener('click', () => {
            window.scrollTo({
                top: i === 0 ? 0 : 350*(i+1) + (i === listItems.length - 2 ? 300 : 0),
                behavior: "smooth"
            });
        })
    }

//    Dropdown functionality
    let click = document.querySelector('.click');
    let list = document.querySelector('.list');

    click.addEventListener("click",()=>{

        list.classList.toggle('newlist');

    });

    // Logout session
    document.getElementById('logOutBtn').addEventListener('click', e => {
        e.preventDefault();
        localStorage.removeItem('email');
        window.location.href = 'http://localhost:6969/login';
    })
}

function appearElement() {
    let elements = document.querySelectorAll(".display");
    for (const element of elements) {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    }
}

window.addEventListener('load', init);
window.addEventListener('scroll', appearElement);

// Sending data from form to server
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const dataToBeSent = {
        fromEmail: document.getElementById('email').value,
        name: document.getElementById('name').value,
        text: document.getElementById('message').value,
    };
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/', false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`fromEmail=${dataToBeSent.fromEmail}&name=${dataToBeSent.name}&text=${dataToBeSent.text}`);

})

