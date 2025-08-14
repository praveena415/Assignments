

export default function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
      <h3>{user.name}</h3>
      <p>@{user.username}</p>
      <p>{user.email}</p>     
    </div>
  );
}