const input = document.querySelector('.search__input');
const button = document.querySelector('.search__button');
const select = document.querySelector('.search__select');


button.addEventListener('click', submitRequest);


let params;

function submitRequest(event) {
    event.preventDefault()

    text = input.value;
    search = select.value;

    if (search === 'google' || search === 'bing') {
        params = 'search?q='
    } else if (search === 'yandex') {
        params = 'search?text='
    } else if (search === 'duckduckgo') {
        params = '?q='
    };

    window.location.href = `https://www.${search}.com/${params}` + text;
}