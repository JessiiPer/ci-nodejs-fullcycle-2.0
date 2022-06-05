export function getImc(peso: number, altura: number): string {
    let imc = calcImc(peso, altura)
    let imcFormatted = imc.toFixed(2)

    if (imc < 18) {
        return 'IMC: '+ imcFormatted +  ' - Abaixo do peso'
    }

    if (imc > 18.5 && imc <= 24.9) {
        return 'IMC: '+ imcFormatted +  ' - Peso Normal'
    }

    if (imc > 25 && imc <= 29.9) {
        return 'IMC: '+ imcFormatted +  ' - Acima do peso'
    }

    if (imc > 30) {
        return 'IMC: '+ imcFormatted +  ' - Obesidade'
    }

}

function calcImc(peso: number, altura: number): number {
    return peso/Math.pow(altura, 2)
}
