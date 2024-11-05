// реализация консольного приложения на TypeScript, в котором
// реализован класс "Калькулятор"

// Код Калькулятора на TypeScript
class Calculator {
    private memory: number | null;
    private history: string[];

    constructor(initialValue: number = 0) {
        this.memory = initialValue;
        this.history = [];
        this.logOperation('Установить', initialValue);
    }

    private logOperation(operation: string, result: number | null) {
        const memoryStatus = this.memory === null ? '[нет]' : this.memory.toString();
        const operationLog = `Память: [${memoryStatus}]. Операция: [${operation}]. Результат: [${result}]`;
        console.log(operationLog);
        this.history.push(operationLog);
    }

    public set(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        this.memory = value;
        this.logOperation('Установить', value);
    }

    public clear() {
        this.memory = null;
        this.logOperation('Очистить', null);
    }

    public plus(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = this.memory! + value;
        this.logOperation(`+${value}`, result);
        this.memory = result;
        return result;
    }

    public minus(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = this.memory! - value;
        this.logOperation(`-${value}`, result);
        this.memory = result;
        return result;
    }

    public multiply(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = this.memory! * value;
        this.logOperation(`*${value}`, result);
        this.memory = result;
        return result;
    }

    public divide(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        if (value === 0) {
            throw new Error('Деление на ноль невозможно');
        }
        const result = this.memory! / value;
        this.logOperation(`/${value}`, result);
        this.memory = result;
        return result;
    }

    public pow(value: number) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');

        }
        const result = Math.pow(this.memory!, value);
        this.logOperation(`^${value}`, result);
        this.memory = result;
        return result;
    }

    public getHistory() {
        return this.history;
    }
}

// Пример использования калькулятора
const calc = new Calculator(10); // Установили 10
calc.plus(5); // (10) + 5
calc.multiply(3); // (15) * 3
calc.divide(45); // (45) : 45
calc.clear(); // (1) Очистка
calc.set(3); // Установили 3
calc.pow(2); // (3) ^ 2
calc.minus(4); // (9) - 4
calc.clear(); // (5) Очистка



