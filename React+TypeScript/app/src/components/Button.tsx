import { useState } from "react";

type ButtonProps = {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
// type user = {
//     firstName: string;
//     lastName: string;
// }

// type firstName= "Ramesh" | "Ritvik" | "Ritwik";
// type lastName = "Saharan" | "Shah";

// type TemplateLiterals = {
//     fullName: `${firstName}-${lastName}`;
// }

// type ExcludeTypes = {
//     fullName: Exclude<TemplateLiterals["fullName"], "Ramesh"> | "Ritvik";
// }

export default function Button(props: ButtonProps) {
  const [count, setCount] = useState(0);
  // const [obj, setObj] = useState<user>({} as user)
  return (
    <div>
        <button onClick={props.clickHandler}>Click Me</button>
        <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Clicked {count} times</button>
    </div>
  )
}
