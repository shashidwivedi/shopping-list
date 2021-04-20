const ShoppingList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={`${item}007`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
