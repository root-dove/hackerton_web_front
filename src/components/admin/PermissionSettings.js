import React, { useState } from 'react';
import user from "../../data/users/users.json"

const PermissionSettings = () => {
  const [users, setUsers] = useState(user);

  const [permissions] = useState(['읽기', '쓰기', '수정', '삭제']);

  const [selectedPermissions, setSelectedPermissions] = useState({});

  const handleUserSelect = (userId) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [userId]: prev[userId] || [],
    }));
  };

  const handlePermissionChange = (userId, permission) => {
    setSelectedPermissions((prev) => {
      const userPermissions = prev[userId] || [];
      const updatedPermissions = userPermissions.includes(permission)
        ? userPermissions.filter((perm) => perm !== permission)
        : [...userPermissions, permission];
      return { ...prev, [userId]: updatedPermissions };
    });
  };

  const handleSavePermissions = (userId) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, permissions: selectedPermissions[userId] || [] }
          : user
      )
    );
  };

  return (
    <>
        <div className="p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">권한 설정</h1>

        {users.map((user) => (
            <div key={user.id} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{user.name} ({user.email})</h2>

            <div className="flex gap-4 mb-4">
                {permissions.map((permission) => (
                <label key={permission} className="inline-flex items-center">
                    <input
                    type="checkbox"
                    checked={(selectedPermissions[user.id] || []).includes(permission)}
                    onChange={() => handlePermissionChange(user.id, permission)}
                    className="form-checkbox"
                    />
                    <span className="ml-2">{permission}</span>
                </label>
                ))}
            </div>

            <button
                onClick={() => handleSavePermissions(user.id)}
                className="bg-blue-500 text-white p-2 rounded"
            >
                권한 저장
            </button>
            </div>
        ))}
        </div>
    </>
  );
};

export default PermissionSettings;
