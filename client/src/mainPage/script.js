function init() {
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
    let click = document.querySelector('.dropdown-btn');
    let list = document.querySelector('.dropdown-list');

    click.addEventListener("click",()=>{

        list.classList.toggle('newlist');

    });
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
