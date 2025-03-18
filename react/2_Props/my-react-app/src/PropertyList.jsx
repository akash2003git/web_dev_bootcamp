import PropertyListItem from "./PropertyListItem";

const styles = {
  display: "flex",
  gap: "1rem",
};

function PropertyList({ properties }) {
  return (
    <div style={styles}>
      {properties.map((p) => (
        <PropertyListItem key={p.id} {...p} />
      ))}
    </div>
  );
}

export default PropertyList;
