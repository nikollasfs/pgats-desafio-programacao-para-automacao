const usuarios = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao.silva@hotmail.com',
        senha: 'senhaDificil123',
        expirado: false
    },
    {
        id: 2,
        nome: 'Maria Oliveira',
        email: 'maria.oliveira@gmail.com',
        senha: 'senhaFacil321',
        expirado: true
    },
    {
        id: 3,
        nome: 'Carlos Santos',
        email: 'carlos.santos@gmail.com',
        senha: 'senhaCerta111',
        expirado: false
    }
];

export function fazerLogin(email, senha) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].senha === senha) {
            if (usuarios[i].expirado) {
                return 'Renove suas credenciais';
            }
            return 'Login realizado com sucesso';
        }
    }
    // Se email não existe OU a senha está incorreta
    return 'Credenciais estão incorretas';
}
