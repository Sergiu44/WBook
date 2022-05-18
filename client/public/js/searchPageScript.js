function init() {
    if(!localStorage.getItem('email')) {
        window.location.href = 'http://localhost:6969/login';
        return;
    } else {
        setInterval(() => {
            localStorage.removeItem('email');
            window.location.reload();
        }, [60000]);
    }
    const portfolioItems = document.querySelectorAll('.port-item-wrapper')

    portfolioItems.forEach(portofolioItem => {
        portofolioItem.addEventListener('mouseover', () => {
            portofolioItem.childNodes[1].classList.add('img-darken');
        })

        portofolioItem.addEventListener('mouseout', () => {
            portofolioItem.childNodes[1].classList.remove('img-darken');
        })
    })

    let fadeTarget = document.querySelector(".loader-wrapper");
    setInterval(function () {
        fadeTarget.style.display = 'none';
    }, 200);

    const anchorTags = [...document.querySelectorAll('.subtitle')];
    if(anchorTags.length) {
        anchorTags.map(anchorTag =>
            anchorTag.addEventListener('click', e => {
                e.preventDefault();
                window.location.href = `http://localhost:6969/posts?category=${anchorTag.id}`;
            })
        )
    }
}

window.addEventListener('load', () => init());