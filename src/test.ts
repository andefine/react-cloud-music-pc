function one<T>(a: T): T{
  return a
}

let a1 = one<number>(1)
let a2 = one(520)

function two<T>(a: T[]): T{
  return a[0]
}

function three<T>(a: Array<T>): T{
  return a[0]
}

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

interface Dictionary<T> {
  [key: string]: T;
}
let keys: keyof Dictionary<string>

export default one
