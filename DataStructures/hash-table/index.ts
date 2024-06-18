import { HashTable } from './implementation'

const table = new HashTable<any>(20)

table.set("name", "Vihanga")
table.set("mane", "Rashan")
table.set("lastName", "Silva")

// console.log(table.display())

// console.log(table.get("name"))
// console.log(table.get("mane"))

// table.remove("name")

console.log(table.display())