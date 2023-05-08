const clientId = "ae46f54c86c85c3";

var defaultAlbumId = '';

function requestAlbumXHR() {
    let albumId = document.getElementById("albumIdField").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            //processAlbumRequest(req.responseText);
            let response = JSON.parse(req.responseText)
            for(item of response.data){
                let imgElem = document.createElement("img");
                imgElem.src = item.link;

                resultDiv.appendChild(imgElem);
            }
        }
        else if (req.readyState == 4 && req.status != 200) {
            console.log(req.status + " Error with the imgur API: ", req.responseText);
        }
    }
    req.open('GET', 'https://bandar2996.imgur.com/all/?third_party=1#_=_' + albumId + '/images', true); // true for asynchronous     
    req.setRequestHeader('Authorization', 'Client-ID ' + clientId);
    req.send();
}



let btnFetch = document.getElementById('fetchSearch');
let searchText = document.querySelector('header input[type="text"]');
let searchResults = document.getElementById("searchResults");

btnFetch.addEventListener("click", function (){
        // clear previous search results
        searchResults.innerHTML = "";
        fetchGiphyAPI_UsingFetch(searchText.value);
});

function fetchGiphyAPI_UsingFetch(keyword) {
    if (!keyword) {
        return;
    }
    var url = "https://bandar2996.imgur.com/all/?third_party=1#_=_";
    var apiKey = "????????????????";
    var params = "api_key=" + apiKey + "&limit=5&q=" + encodeURIComponent(keyword);
    var requestOptions = {
        method: 'GET'
      };
    fetch(url + "?" + params, requestOptions)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        processResponse(JSON.parse(data))
    })
    .catch((e) => {
        console.error(e);
    })
}

function processResponse(resp) {
    for (item of resp.data) {
        let imgElement = document.createElement("img");
        imgElement.src = item.images.downsized_medium.url;
        imgElement.alt = item.title;
        searchResults.appendChild(imgElement);
    }
}




let btnFetchAsyncAwait = document.getElementById('fetchAsyncAwaitSearch');
let searchText1 = document.querySelector('header input[type="text"]');
let searchResults1 = document.getElementById("searchResults1");

btnFetchAsyncAwait.addEventListener("click", function (){
    // clear previous search results
    searchResults1.innerHTML = "";
    fetchGiphyAPI_UsingFetchAsyncAwait(searchText1.value)
    .catch((e) => {
        console.error(e);
    });
});

async function fetchGiphyAPI_UsingFetchAsyncAwait(keyword) {
    var url = "https://bandar2996.imgur.com/all/?third_party=1#_=_";
    var apiKey = "????????????????";
    var params = "api_key=" + apiKey + "&limit=5&q=" + encodeURIComponent(keyword);
    if (!keyword) {
        return;
    }
    var requestOptions = {
        method: 'GET'
    };
    
    const response = await fetch(url + "?" + params, requestOptions); // Wait until the request completes.
    const data = await response.json(); // waits until the response completes
    processResponse(data);
}

function processResponse(resp) {
    for (item of resp.data) {
        let imgElement = document.createElement("img");
        imgElement.src = item.images.downsized_medium.url;
        imgElement.alt = item.title;
        searchResults.appendChild(imgElement);
    }
}