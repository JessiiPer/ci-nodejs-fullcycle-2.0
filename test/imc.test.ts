import { getImc } from '../src/imc';

describe('testando IMC function', () => {
    test('testando IMC com peso normal function', () => {
        expect(getImc(60, 1.64)).toBe('IMC: 22.31 - Peso Normal')
    })

    test('testando IMC com peso abaixo function', () => {
        expect(getImc(45, 1.75)).toBe('IMC: 14.69 - Abaixo do peso')
    })

    test('testando IMC com peso obeso function', () => {
        expect(getImc(90, 1.65)).toBe('IMC: 33.06 - Obesidade')
    })

});