function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

function NumberList(props){
    const numbers = props.numbers;

    return (
      <ul>
        {numbers.map((number) =>
            <ListItem key={number.toString()}
                        value={number} />
        )}
      </ul>
    );
  }

  export { NumberList };