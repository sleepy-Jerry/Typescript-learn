// let str:string = '1234'

// let arr: number[] = [1]

// let n:void = null;
// let m:void = undefined;

// function fnVoid():void{
//     return null
// }

// interface A {
//     readonly name:string
// }
// interface A {
//     age:number,
//     hob?:string,
//     [propName: string]: string | number
// }

// let obj:A = {
//     name: '123',
//     age: 18,
//     abc: 123
// }

// // obj.name = 'readonly 换个名字会报错'

// interface B extends A {
//     school: string
// }

// let obj2:B = {
//     name: 'obj2',
//     age: 20,
//     school: '学校'
// }


// 定义数组
// let arr:number[] = [1,3,4]
// let arr:Array<number> = [1,2,3,4]
// let arr:Array<string> = ['2', '4']

// 定义二维数组
// let arr:number[][] = [[],[]]
// let arr:Array<Array<number>> = [[],[]]
// let arr:Array<Array<number | string>> = [[1],['str']]

// 定义类数组
// 内置了类数组的接口： IArguments
function Arr(...args):void{
    console.log(arguments)
    // let arr:number[] = arguments  可以查看这里的报错内容
    let arr:IArguments = arguments   //IArguments是内置接口
}