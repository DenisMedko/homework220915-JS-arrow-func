//Создайте функцию, которая принимает массив с неограниченным количеством данных, 
//и возвращает количество строк, переданных ей в этом массиве. 
//Решить с использованием стрелочных функций

const arr = ['sdgfsdg', '123', 1223, [], {}, true, null, undefined, NaN, ' jdhhfbvj ', 452];
const countOfStrings = arr => arr.filter(e => typeof e === 'string').length;
const result = countOfStrings(arr);