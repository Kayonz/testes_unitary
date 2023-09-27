const { validarSenha2 } = require("../test/register")

describe("Este teste irá validar o registro das senhas e email ", () => {
    it("Este teste irá validar a senha se está correto", () => {
        expect(validarSenha2("2905De@!")).toBe(true)
    }) 
    it("Este teste irá validar a senha não contém numero", () => {
        expect(validarSenha2("De@!jdi")).toBe(true)
    }) 
    
})