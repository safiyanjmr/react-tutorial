function ListItem() {
  return (
    <div>
      <ul>
        {listData.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}

const listData = [
  {
    name: "musa",
    id: 1,
  },
  {
    name: "isah",
    id: 2,
  },
  {
    name: "tanko",
    id: 3,
  },
  {
    name: "zubairu",
    id: 4,
  },
];

export default ListItem;
