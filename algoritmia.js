//Desarrolla un script que encuentre las cadenas de texto que sean palíndromos con más de 3 letras en el siguiente bloque de texto:
const s = "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

function isPalindrome (s){
    for (let i=0, j=s.length-1; i<=j; i++, j--){
        if (s[i] !== s[j]){
            return false
        }        
    }
    return true
}   


function countPalindromes(text){
    let count = 0
    for(let i= 0; i<text.length - 3 ; i++){
        for(let j= i+3; j<=text.length; j++){
            const temp= text.substring(i, j);
            if (isPalindrome(temp)){
                count ++
            }
        }
    }
    return count
}

countPalindromes(s)