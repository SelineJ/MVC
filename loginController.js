function logIn() {
            
    if(username === 'seline' && password === 'hemmelig'
    || username === 'pål' && password === 'heihei') {
        screen = 'main';
        errorMessage = null;
        isLoggedIn = true;
      
    } else {
      errorMessage = 'Feil brukernavn og/eller passord. Prøv igjen.';
      screen = 'login';
      isLoggedIn = false;
     
    }
show();

    }