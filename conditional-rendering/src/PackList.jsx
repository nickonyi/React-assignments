function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del> {name + " ✔"} </del>;
  }
  return <li className="item"> {itemContent} </li>;
}

export default function PackList() {
  return (
    <section>
      <h1> Sally 's Ride PackList</h1>{" "}
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>{" "}
    </section>
  );
}
