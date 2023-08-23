import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../users/usersSlice';

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [getUsers()]);

  return (
    <>
      { isLoading === true ? (
        <p>The users list is loading!</p>
      ) : error ? (
        <p>Something went wrong!</p>
      ) : (
        <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            { `${user.name.first} ${user.name.last}` }
          </li>
        ))}
      </ul>
      )}
    </>
  );
};

export default DisplayUsers;