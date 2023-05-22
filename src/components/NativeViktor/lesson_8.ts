// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...amountOfMoneys: Array<number>): number {
    console.log(amountOfMoneys)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let count = 0
    for (let i = 0; i < amountOfMoneys.length; i++) {
        count += amountOfMoneys[i]
    }

    return count
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.


export function getTriangleType(a: number, b: number, c: number): string {
    let sum = a + b + c
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (a + b <= c || b + c <= a || a + c <= b) return "00";
    else {
        if (a === b && a === c) {
            return "10"
        }
        if (a === b || b === c || a === c) {
            return "01"
        }

        return "11"

    }


}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(amountOfMoneyber: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let amountOfMoneys = String(amountOfMoneyber).split("");
    // if (amountOfMoneys[0] === "-") {
    //     amountOfMoneys.shift();
    // }
    return sum(...amountOfMoneys.map((el) => Number(el)));

}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let evenCount = 0
    let oddCount = 0

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            evenCount += arr[i]
        } else {
            oddCount += arr[i]
        }


    }


    return evenCount > oddCount
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let filteredArray = array.filter(amountOfMoney => Number.isInteger(amountOfMoney) && amountOfMoney > 0)
    return filteredArray.map(el => Number(Math.pow(el, 2)))

}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    return (N / 2) * (2 + (N - 1));


}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let newArray = []
   let counter = 0
    while (amountOfMoney >= 1000) {
        newArray.push(1000)
        amountOfMoney = amountOfMoney - 1000
    }

    while (amountOfMoney >= 500) {
        newArray.push(500)
        amountOfMoney = amountOfMoney - 500
    }
    while (amountOfMoney >= 100) {
        newArray.push(100)
        amountOfMoney = amountOfMoney - 100
    }
    while (amountOfMoney >= 50) {
        newArray.push(50)
        amountOfMoney = amountOfMoney - 50
    } while (amountOfMoney >= 20) {
        newArray.push(20)
        amountOfMoney = amountOfMoney - 20
    } while (amountOfMoney >= 10) {
        newArray.push(10)
        amountOfMoney = amountOfMoney - 10
    } while (amountOfMoney >= 5) {
        newArray.push(5)
        amountOfMoney = amountOfMoney - 5
    } while (amountOfMoney >= 2) {
        newArray.push(2)
        amountOfMoney = amountOfMoney - 2
    } while (amountOfMoney >= 1) {
        newArray.push(1)
        amountOfMoney = amountOfMoney - 1
    }

    return newArray
}