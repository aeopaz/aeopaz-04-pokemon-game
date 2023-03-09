import { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"

describe('getPokemonOptions helpers', () => {
    test('debe regresar un arreglo de números', () => {

        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })


    test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', async() => {

        const pokemons = await getPokemonNames([1, 2, 3, 4])
        console.log(pokemons);

    })

    test('getPokemonOptions debe de retornar un arreglo de mezclado', () => {

    })
})