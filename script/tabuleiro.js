(
    () => {
        const tabuleiroDOM = document.querySelector("#tabuleiro")
        var tabuleiro = [] 
        const dadoDOM = document.querySelector("#dado")
        var dado = [6]
        var valorDado;

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                let quadrado = document.createElement('div')
                quadrado.setAttribute("id", `i${i}j${j}`)
                quadrado.setAttribute("class", "quadrado")
                tabuleiroDOM.appendChild(quadrado)

                /*
                if(i%2 == 0){
                    if(j%2 == 0){
                        quadrado.style.backgroundColor = "white"
                        quadrado.style.color = "black"
                    }else{
                        quadrado.style.backgroundColor = "black"
                        quadrado.style.color = "white"
                    }
                }else{
                    if(j%2 == 0){
                        quadrado.style.backgroundColor = "black"
                        quadrado.style.color = "white"
                    }else{
                        quadrado.style.backgroundColor = "white"
                        quadrado.style.color = "black"
                    }
                }
                quadrado.innerHTML = `i${i}j${j}`
                */
                if(j == 0 || i == 8){
                    quadrado.style.backgroundColor = "grey"
                    quadrado.style.color = "black"
                    if(j == 0){
                        quadrado.innerHTML = `${i}`
                    }
                    if(i == 8){
                        quadrado.innerHTML = `${j + 8}`
                    }
                }
                if(i == 0 && j == i){
                    quadrado.style.background = "blue"
                }
                if(i == 8 && j == i){
                    quadrado.style.background = "green"
                }
            }
        }

        Math.floor(Math.random()* 8)

    }

)()