import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        let nome = "asd@gmail.com";
        login();
        expect(mockAlert).toHaveBeenCalledWith(`Seja bem vindo, ${nome}!`)
    })
})