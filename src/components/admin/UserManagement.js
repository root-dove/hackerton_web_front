import React, { useState } from 'react';
import initialUsers from "../../data/users/users.json";

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);

  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleAddUser = () => {
    const newUserId = users.length ? users[users.length - 1].id + 1 : 1;
    const updatedUsers = [...users, { id: newUserId, ...newUser }];
    setUsers(updatedUsers);
    setNewUser({ name: '', email: '' }); 
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">사용자 관리</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">사용자 추가</h2>
        <input
          type="text"
          placeholder="이름"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          placeholder="이메일"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white p-2 rounded"
        >
          추가
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">사용자 목록</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">이름</th>
              <th className="border p-2">이메일</th>
              <th className="border p-2">액션</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
