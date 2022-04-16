document.addEventListener('DOMContentLoaded', getQuote)

const newQuote = document.getElementById('new-quote')
newQuote.addEventListener('click', getQuote)


async function getQuote() {
    const response = await fetch('https://adiah-api.herokuapp.com/api/quotes/random/')
    const data = await response.json()

    currentQuote = data['quote_body']
    currentAuthor = data['author']['first_name'] + ' ' + data['author']['last_name']

    $('.quote-body').animate({opacity: 0}, 500, function () {
        $(this).animate({ opacity: 1}, 500);
        $('#quote-text').html(currentQuote);
    });

    $('.quote-author').animate({opacity: 0}, 500, function () {
        $(this).animate({opacity: 1 }, 500);
        $('#quote-author').html('- ' + currentAuthor);
    });

    $('.tweet-btn').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote + ' ' + currentAuthor);

}