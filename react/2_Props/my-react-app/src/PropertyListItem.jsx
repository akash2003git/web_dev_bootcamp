function PropertyListItem({ name, rating, price }) {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "1px solid white",
    borderRadius: "1rem",
    padding: "1rem",
  };

  return (
    <div style={styles}>
      <h2>{name}</h2>
      <h3>{price}$ a night</h3>
      <h4>{rating}⭐</h4>
    </div>
  );
}

export default PropertyListItem;
