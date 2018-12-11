module.exports = app => {
    // função para determinar se o campo foi fornecido 
    function existsOrError(value, msg) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    // função para determinar se dados que vão ser salvos já existem no banco
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return
        }
        throw msg
    }
    
    // função para conferir a senha e confirmação de senha
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}