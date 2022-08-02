enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Helen',
    idade: 19,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Robbie',
    idade: 49,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Luana',
    idade: 22,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Junior",
    idade: 29,
    profissao: Trabalho.Padeiro
}