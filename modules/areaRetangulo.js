function areaRetangulo(lado, altura){
    const quadrado = lado == altura ? true:false
    const objeto = {
        area: lado*altura,
        quadrado: quadrado
    }

    return `A área do objeto é: ${objeto.area}\nO objeto é um ${objeto.quadrado ? 'Quadrado':'Retangulo'}`
}

export{ areaRetangulo }
