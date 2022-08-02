
interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObjEx1 = {} as Funcionario;
funcionarioObjEx1.codigo = 101;
funcionarioObjEx1.nome = 'Felipe';

const funcionarioObjEx2: Funcionario = {
    codigo: 101,
    nome: 'Felipe'
}