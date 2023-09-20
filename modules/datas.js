function calculateAge(dia_aniversario, mes_aniversario, ano_aniversario){
    var date = new Date,
        ano_atual = date.getFullYear(),
        mes_atual = date.getMonth() + 1,
        dia_atual = date.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return `Você tem ${quantos_anos < 0 ? 0 : quantos_anos} anos!`;
}

export{ calculateAge }