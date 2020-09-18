
//Model View Controller ( design pattern)

//Model ( variabler med informasjon man trenger for å tegne view(hva varierer?) )
// Null = faktisk ingen verdi, '' = blank tekst


show();
function newFunction() {
    return null;
}

function show() {
    return 'login';
}

function show(){
    if (screen ==='login') {showLoginForm();}
    else if (screen === 'main') {showMainAppScreen();}
}


//View
//errormessage kan også skrives sånn : ${errorMessage === null ? '': errorMessage} error message er en logsik verdi som viser true om den har verdi
    
//eller false om den ikke har verdi, så om den er true viser den errorMessage men om den er false viser den blank ('')
    
//Username = this.value: Hver gang det er en endring


showLoginForm();
function showLoginForm() { 
    
     document.getElementById('app').innerHTML = `

     <div id="error" style ="color: red">${errorMessage ||''} </div>

    Brukernavn:<br/>
    <input placeholder="Brukernavn"
        id="username"
        type="text"
        oninput="username = this.value"
         /><br/>
    Passord:
        <br/>
    <input placeholder="Passord" 
        id="password" 
        
        type="password"
        oninput="password = this.value"
        />
       
        <br/>
    <button onclick="logIn()">Logg inn</button>
    
    `

}


function showMainAppScreen() {
    document.getElementById('app').innerHTML = `
    <small> Du er logget inn som ${username}</small>
    <h1> Velkommen </h1>`;
}






   