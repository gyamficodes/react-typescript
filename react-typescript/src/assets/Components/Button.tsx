

// type propsColor = 'red'| 'yellow' | 'black'
// type propsTextColor = 'red' | '#fff' | 'blue'

// Define the interface for ButtonProps
type ButtonProps = {
  style: {
    backgroundColor: string;
    fontSize: number;
    color: string;
  }
}

// Define the Button component
function Button( {style}: ButtonProps){
  return (
    <button style={style}>
      Click
    </button>
  );
}

export default Button;
