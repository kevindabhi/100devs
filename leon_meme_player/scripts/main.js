
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = cheese
document.getElementById('welcome').onclick = welcome
document.getElementById('newscat').onclick = newscat

function welcome() {
  document.querySelector('#tvgif').style.backgroundImage =  "url('https://static.westwingnow.de/image/upload/w_1500,h_2000,pd_272_120_272_120,c_limit/simple/39/9051/1252214.jpg')"
}
function partyPurple() {
  document.querySelector('#tvgif').style.backgroundImage =  "url('https://c.tenor.com/KE3LpsG8E3EAAAAd/zoomies-crash.gif')"

}

function cheese() {
  document.querySelector('#tvgif').style.backgroundImage = "url('https://c.tenor.com/TbuJBSvnCLkAAAAd/cheese-challenge-cat.gif')"
}

function partyGreen() {
  document.querySelector('#tvgif').style.backgroundImage = "url('https://media2.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif')"
}

function newscat() {
  document.querySelector('#tvgif').style.backgroundImage = "url('http://catnetwork.org/wp-content/uploads/2017/12/catreporter.jpg')"

}


