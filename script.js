var newQuote = function () {

    var request = new XMLHttpRequest()

    request.open('GET', 'https://type.fit/api/quotes', true)



    request.onload = function () {
        //accessing JSON data
        var data = JSON.parse(this.response);
        //append random to DOM
        var randomNum = Math.floor(Math.random() * (data.length - 1))
        document.getElementById('text').textContent = data[randomNum].text
        document.getElementById('author').textContent = data[randomNum].author
    }

    request.send()
}
document.getElementById('new-quote').onclick = newQuote;
newQuote();
