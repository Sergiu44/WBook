function init() {
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
}

window.addEventListener('load', () => init());