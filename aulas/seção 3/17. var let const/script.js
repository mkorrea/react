//  VAR

    function exemploVar() {
        if (true) {
            var x = 10;
            console.log(x); // Saída: 10
        }
        console.log(x); // Saída: 10
    }

//  LET

    function exemploLet() {
        if (true) {
            let y = 20;
            console.log(y); // Saída: 20
        }
        // console.log(y); // Gera erro, pois y não está definida neste escopo
    }

//  CONST

    function exemploConst() {
        const z = 30;
        console.log(z); // Saída: 30
    
        // z = 40; // Gera erro, pois const não pode ser atualizada
    }
  