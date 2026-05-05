# PGATS - Desafio de Programação para Automação de Testes

Projeto do Desafio de Programação para Automação de Testes referente ao **Módulo 03** da **Pós-Graduação em Automação de Testes (PGATS)**.

## 📋 Sobre o Desafio

### Objetivo
Implementar uma função de autenticação de usuários com validação de credenciais e status de expiração, aplicando boas práticas de testes automatizados.

### Requisitos

#### Pré-requisitos
- Declarar um array contendo informações sobre usuários com as propriedades:
  - `id` (número)
  - `nome` (string)
  - `email` (string)
  - `senha` (string)
  - `expirado` (booleano)
- Incluir pelo menos um usuário com credenciais expiradas

#### Funcionalidade
Construir uma função `fazerLogin(email, senha)` que:
- ✅ Retorna `'Login realizado com sucesso'` quando email e senha existem e correspondem
- ✅ Retorna `'Renove suas credenciais'` quando o usuário existe, senha está correta, mas credenciais estão expiradas
- ✅ Retorna `'Credenciais estão incorretas'` quando email não existe OU senha está incorreta
- ✅ Utiliza loop `for` com `usuarios.length` para iterar pelos usuários

#### Testes
Implementar 4 casos de teste cobrindo:
1. Login realizado com sucesso
2. Credenciais expiradas
3. Usuário não encontrado
4. Senha incorreta para o usuário encontrado

## 🎯 Solução Implementada

### Função `fazerLogin()`
```javascript
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
```

**Características principais:**
- Itera através do array de usuários usando loop `for`
- Valida simultaneamente email e senha na mesma condição
- Differencia entre credenciais expiradas e incorretas
- Mensagens de retorno claras e informativas

### Base de Dados de Teste
Três usuários de contexto para testes:
- **João Silva** - usuário válido com credenciais ativas
- **Maria Oliveira** - usuário com credenciais expiradas
- **Carlos Santos** - usuário válido com credenciais ativas

## 🚀 Como Usar

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/nikollasfs/pgats-desafio-programacao-para-automacao.git

# Entre no diretório
cd pgats-desafio-programacao-para-automacao

# Instale as dependências
npm install
```

### Executando os Testes

```bash
# Rodar os testes com relatório HTML
npm test
```

O comando acima executa os testes usando **Mocha** e gera um relatório com **Mochawesome**.

### Visualizando o Relatório

Após executar `npm test`, um relatório HTML é gerado em:
```
mochawesome-report/mochawesome.html
```

Para visualizar o relatório:
1. Abra o arquivo `mochawesome-report/mochawesome.html` em seu navegador

## 📁 Estrutura do Projeto

```
pgats-desafio-programacao-para-automacao/
├── src/
│   └── gestaoSite.js          # Implementação da função fazerLogin()
├── test/
│   └── gestaoSite.test.js     # Suite de testes
├── package.json               # Configuração do projeto e dependências
├── README.md                  # Este arquivo
└── mochawesome-report/        # Relatórios de teste (gerado automaticamente)
```

## 🧪 Testes

Os testes estão implementados usando **Mocha** e **Node Assert**:

| Teste | Descrição | Email | Senha | Resultado Esperado |
|-------|-----------|-------|-------|-------------------|
| 1️⃣ Sucesso | Login realizado com sucesso | joao.silva@hotmail.com | senhaDificil123 | Login realizado com sucesso |
| 2️⃣ Expirado | Credenciais expiradas | maria.oliveira@gmail.com | senhaFacil321 | Renove suas credenciais |
| 3️⃣ Não encontrado | Email não existe | usuario.inexistente@gmail.com | senhaQualquer123 | Credenciais estão incorretas |
| 4️⃣ Senha incorreta | Senha incorreta para o email | carlos.santos@gmail.com | senhaCerta112 | Credenciais estão incorretas |

## 📦 Dependências

- **mocha** (^11.7.5) - Framework de testes
- **mochawesome** (^7.1.4) - Reporter HTML para testes

## 👨‍🎓 Contexto Educacional

Este projeto foi desenvolvido como desafio do **Módulo 03 - Programação para Automação de Testes** da **Pós-Graduação em Automação de Testes (PGATS)**.

### Objetivos de Aprendizado
✓ Praticar estruturas de controle (loops, condicionais)
✓ Trabalhar com arrays e objetos
✓ Implementar lógica de autenticação
✓ Escrever testes automatizados com Mocha
✓ Gerar relatórios de teste profissionais

## 📝 Exemplo de Uso

```javascript
import { fazerLogin } from './src/gestaoSite.js';

// Cenários de sucesso
console.log(fazerLogin('joao.silva@hotmail.com', 'senhaDificil123'));
// Output: 'Login realizado com sucesso'

// Credenciais expiradas
console.log(fazerLogin('maria.oliveira@gmail.com', 'senhaFacil321'));
// Output: 'Renove suas credenciais'

// Email não encontrado
console.log(fazerLogin('invalido@email.com', 'qualquersenha'));
// Output: 'Credenciais estão incorretas'

// Senha incorreta
console.log(fazerLogin('joao.silva@hotmail.com', 'senhaErrada'));
// Output: 'Credenciais estão incorretas'
```
---

**Desenvolvido como desafio da PGATS - T3**
