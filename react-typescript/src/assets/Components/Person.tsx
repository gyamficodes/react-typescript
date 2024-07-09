  export interface Person{
    prof: string;
    isMarried:boolean;
    Year:number;
}

const  Person = (props : Person) => {
    return (<>Person
    <h1>Profession: {props.prof}</h1>
    <h1>isMarried: {props.isMarried ? "isMarried" : "Single"}</h1>
    <h1>Year: {props.Year}</h1>
    </>)
}

export default Person;