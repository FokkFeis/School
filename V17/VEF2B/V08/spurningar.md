# VEF2B3U
## Verkefni 8 - Events – 7% Spurninga hluti

### 1. Það eru til þrjár leiðir að binda event við element, hver þeirra leiða er best og af hverju? Komdu með kóðasýnidæmi. (0.5%)
`Event Listeners` er eflaust besta leiðin til þess að binda event við element, það er nýlegasta leiðin og hægt er að binda fleirri en eina function við event-inn.
Ókosturinn er hins vegar að það er ekki stuðningur við eldri vafra með þessari aðferð.

#### Dæmi
```javascript
  function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
      elMsg.TextContent = 'Username must be 5 characters or more';
    } else {
      elMsg.TextContent = '';
    }
    }
    var elUsername = document.getElementById('username');
    elUsername.addEventListener('blur',checkUsername, false);
```
`elUsername.addEventListener('blur',checkUsername, false);` skoðar þegar event er triggered, Blur í þessu tilviki, keyrir checkUsername function setur síðan bool eftir því hvernig eventinn flæðir, yfirleitt er þetta sett í false.
Síðan er líka hægt að keyra nýja function í `EventListener`, sem keyrir bara þegar það er trigger-að event listener-inn.
#### Dæmi 2
```javascript
  el.addEventListener('blur',function(){
    checkUsername(5);
  }, false);
```
### 2. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi. (0.5%)
callback er hugtak yfir það þegar functions eru taka við frá öðrum functions
#### Dæmi
```javascript
  $("#btn_1").click(function() { // Click tekur við function sem arguement í stað objects
    alert("btn 1 Clicked");
  });
```
### 3. Hvað er EventLoop? Úrskýrðu með eigin orðum. (0.5%)
EventLoop gerir hluti á meðan kallari(caller) bíður eftir að asynchronous verkefni klárast og callbacks keyri
### 4. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa). (1%)

```javascript
  //Broken
  function checkUsername() {
  var target = e.target;
  }
  var el = document.getElementById('username');
  el.addEventlistener('blur', checkUsername, false);


  //Fixed
  function checkUsername() {
    var e = e.target // þurfti að breyta target í e
  }
  var el = document.getElementById('username');
  el.addEventListener('blur', checkUsername, false);
```

### 5. Event flow, Hvað þýðir false í Event Listener? (0.5%)
```javascript
elUsername.addEventListener('blur' , function() {
checkUsername(5);
}, false)
```
flase í flow setur EventListener í bubbling phase
### 6. Hvað gera eftirfarandi aðferðir? Komdu með dæmi um notkun (1%)
#### a. stopPropagation()
Stöðvar event á því að bubbla eða capture-a
#### b. preventDefault()
Hættir við sjálfgefna hegðun á event ef að það er hægt
### 7. Quiz
#### Þegar notandi hefur smellt á einhvern svarmöguleika þá á viðkomandi svarmöguleiki að fá rauðan
#### bakgrunnslit. Notaðu Event object og Event Delegation til að ná þessu fram. (3%)
