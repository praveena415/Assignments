import UserCard from "./UserCard";

export default function UserList({ users }) {
  return (
    <div>
      {users.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}