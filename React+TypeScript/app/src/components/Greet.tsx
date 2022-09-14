type GreetProps = {
    name: string;
    children?: React.ReactNode;
    fullName: {
        firstName: string;
        lastName: string;
    }[];
    status: "married" | "single";
    job: boolean;
}

export default function Greet(props: GreetProps) {
  return (
    <div>Greeting {props.name} {props.children}</div>
  )
}
