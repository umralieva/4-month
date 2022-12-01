export function UserList({userList}) {
    return (
        <ul>
            {userList.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
    );
}
