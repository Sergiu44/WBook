window.addEventListener('load', () => {
    const checkColor = color => color.test(/#[a-zA-z0-9]{3}/g) || color.test(/#[a-zA-z0-9]{6}/g);
    const checkFontSize = font => font.test(/[0-9]+/g);
    const checkLink = link => link && link.test(/https:/g);

    document.getElementById('formPosts').addEventListener('submit', ev => {
        ev.preventDefault();

        const title = document.getElementById('title').value;
        const resume = document.getElementById('resume').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const color = document.getElementById('color').value;
        const fontSize = document.getElementById('font-size').value;
        const fontFamily = document.getElementById('font-family').value;
        const nickname = document.getElementById('nickname').value;
        const link = document.getElementById('link').value;

        if(!checkColor(color)) {
            alert('The color should start with # and contains 3 or 6 letters/numbers')
            return;
        }
        if(!checkFontSize(fontSize)) {
            alert("The font size value is not a number");
            return;
        }
        if(!checkLink(link)) {
            alert("The introduced linked is not valid or secure");
            return;
        }
        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', '/posts', false);
        xhttp.send(`title=${title}&resume=${resume}&description=${description}&category=${category}&color=${color}&fontSize=${fontSize}&fontFamily=${fontFamily}&nickname=${nickname}&link=${link}`);


    })

})