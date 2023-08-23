import { useSelector } from 'react-redux/es/hooks/useSelector';

const DisplayUsers = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  return (
    <>
      { isLoading && <p>The users list is loading!</p> }
      { error && <p>Something went wrong!</p> }
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
          >
            { user }
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayUsers;