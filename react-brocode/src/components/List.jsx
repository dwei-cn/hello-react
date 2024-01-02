import PropTypes from "prop-types";

export default function List(props) {
  const category = props.category;
  const itemList = props.items; // 不像python全部声明在括号里，js则是全部声明在props里面

  //fruits.sort((a, b) => b.name.localeCompare(a.name));    // 根据name进行sort
  itemList.sort((a, b) => a.calories - b.calories); // 根据calories进行sort

  const lowCalFruits = itemList.filter((item) => item.calories > 50); // filter掉calories小于100的item

  const listItems = lowCalFruits.map((item) => (
    // li中必须指定key， 可以是id，可以是别的
    <li key={item.id}>
      {item.name}:&nbsp;<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  ); // ul里面包裹li
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};
