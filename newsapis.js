console.log('Hi this News Head lines');
// initialize the veriable

let newsAccordian = document.getElementById('newsAccordian');
let source = 'in';
let apikeys = 'ef50d0f4eaa14742b9e9bc23825a4267';

// create ajax to get news
const xhr = new XMLHttpRequest()
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apikeys}`, true);

// what to do when responce is ready
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = '';
        console.log(articles);
        articles.forEach(function(element, index) {

            let news = ` <div class="card">
            <div class="card-header" id="headin${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                     <h5>Breaking News${index+1}: ${element["title"]}</h5> <br> <img src="${element["urlToImage"]}" class="img-fluid" alt="${index+1}" max-width: 50%;> 
                     </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
            <div class="card-body">
            
                ${element["content"]}.  <a href="${element["url"]}" target="_blank">Read more</a>
            </div>
        </div>
     </div>`;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    } else {
        console.log('some errors occourd')
    }
}
xhr.send()
