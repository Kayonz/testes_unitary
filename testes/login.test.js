const { validarLogin } = require("../test/login")

describe("Este teste irá testar o login", () => {
    it("Este teste irá validar o login se está correto", () => {
        expect(validarLogin("vitor@hotmail.com", "2905De@!")).toBe(true)
    }) 
    it("Este teste irá validar o login se está errado", () => {
        expect(validarLogin("nome@gmail.com", "N12@3458")).toBe(false)
    })
    
} )


