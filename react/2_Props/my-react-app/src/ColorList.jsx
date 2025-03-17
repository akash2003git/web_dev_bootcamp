export default function ColorList({ colors }) {
  return (
    <div>
      <h2>Color List</h2>
      <ul>
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
