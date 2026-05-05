import { fazerLogin } from '../src/gestaoSite.js';
import assert from 'node:assert';

describe('Testando Funções de Gestão de Site', function() {
    it('Deve realizar login com sucesso', function() {
        // Arrange
        const email = 'joao.silva@hotmail.com';
        const senha = 'senhaDificil123';

        // Act  
        const resultado = fazerLogin(email, senha);

        // Assert
        assert.equal(resultado, 'Login realizado com sucesso');
    });

    it('Deve informar que as credenciais expiraram', function() {
        // Arrange
        const email = 'maria.oliveira@gmail.com';
        const senha = 'senhaFacil321';

        // Act
        const resultado = fazerLogin(email, senha);

        // Assert
        assert.equal(resultado, 'Renove suas credenciais');
    }); 

    it('Deve informar que as credenciais estão incorretas - usuário não encontrado', function() {
        // Arrange
        const email = 'usuario.inexistente@gmail.com';
        const senha = 'senhaQualquer123';

        // Act
        const resultado = fazerLogin(email, senha);

        // Assert
        assert.equal(resultado, 'Credenciais estão incorretas');
    });
    it('Deve informar que as credenciais estão incorretas - senha incorreta', function() {
        // Arrange
        const email = 'carlos.santos@gmail.com';
        const senha = 'senhaCerta112';

        // Act
        const resultado = fazerLogin(email, senha);

        // Assert
        assert.equal(resultado, 'Credenciais estão incorretas');
    });
});