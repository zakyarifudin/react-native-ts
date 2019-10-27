/**
 * ini untuk deklarasi tipe aksi
 */

export enum calculatorTypes {
    INCREMENT = '@calculator/INCREMENT',
    DECREMENT = '@calculator/DECREMENT',
    RESET = '@calculator/RESET'
} 

/**
 * ini untuk deklarasi tipe data
 */

export interface calculatorState {
    readonly count: number
}


