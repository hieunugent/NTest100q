import test from "./test.json"
console.log(test)
export default function Home() {
  return (
    <div>
      <h1> Question for N400 test</h1>
      {Object.keys(test.data).map((item, i)=> (
        <li key={i}>
          <span >Key name :{item}</span>
          
        </li>
        
      ))}
    </div>

  )
}
