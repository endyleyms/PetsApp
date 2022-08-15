//Desarrolla un script que encuentre las cadenas de texto que sean palíndromos con más de 3 letras en el siguiente bloque de texto:
const s = "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

function palindrome (s){
    for(let i= 0; i<=s.length; i++){
        const slice =s.slice(i, i+11)
        console.log('slice 10', slice)
        let count = 0
        for (let k=0, j=slice.length-1; k<=j; k++, j--){
            if (s[k] !== s[j]){
                return false
            }
        return count = count +1
        }
    }   
    
}console.log (palindrome (s));
