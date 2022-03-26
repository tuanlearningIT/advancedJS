//...

let arr1 = [1, 2, 3, 4, 5]
let state = {
    name: 'Tuan',
    address: 'Ha Noi', 
    chanel: 'tuan hoc It'
}
console.log('>>>check data arr1: ', arr1)


// let arr2 = [0, ...arr1, 6]
// let arr3 = { ...state, chanel: 'tuan hoc IT' }
// console.log('check data arr1: ', arr2)
// console.log('check data arr3: ', arr3)

// let name = state.name;
// let address = state.address;
// let chane = state.chanel;

// let {name, address, chanel}  = state;
// const [ name, setName] = useState(' ')

let arr = ['Tuan', 'hoi dan IT']
let [name, chanel] = arr;

console.log(' check hey: ', name, chanel)
