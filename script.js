const search = document.getElementById('search-btn');
const remove = document.getElementById('remove-btn');
const resPage = document.getElementById('res-page');

search.addEventListener('click', async function() {
    let input = document.getElementById('input');
    const key = 'Na6vxWCQDaJC781bQYtDyh30q8rFzypt';
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {
        api_key: key,
        q: input.value,
    }});

    if (res !== null && res !== undefined) {
        const randomNum = Math.floor(Math.random() * 50);

        const img = document.createElement('img')
        img.setAttribute('src', res.data.data[randomNum].images.downsized.url)

        const div = document.createElement('div');
        div.className = 'imgDiv';
        div.appendChild(img);

        resPage.append(div);
    };

    input.value = '';
});

remove.addEventListener('click', function() {
    resPage.innerHTML = '';
});