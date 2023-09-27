const { validarSenha2 } = require("../test/register")

describe("Este teste irá validar o registro das senhas e email ", () => {
    it("Este teste irá validar a senha se está correto", () => {
        expect(validarSenha2("2905De@!")).toBe(true)
    }) 
    it("Este teste irá validar se a senha não contém numero", () => {
        expect(validarSenha2("De@!jdi")).toBe(true)
    })
    it("Este teste irá validar se a senha não contém caracteres especiais", () => {
        expect(validarSenha2("2905De286")).toBe(true)
    }) 
    it("Este teste irá validar se a senha não contém letras maiusculas", () => {
        expect(validarSenha2("2905de12")).toBe(true)
    })
    it("Este teste irá validar se a senha não contém letras minusculas ", () => {
        expect(validarSenha2("2905DEAMOR")).toBe(true)
    }) 
    
})