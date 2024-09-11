import React from 'react';
import UserManagement from '../../components/admin/UserManagement';
import PermissionSettings from '../../components/admin/PermissionSettings';
import SystemStatusMonitor from '../../components/admin/SystemStatusMonitor';

const AdminPage = () => {
  return (
    <div className='h-screen overflow-y-auto'>
        <div className='flex-grow-1 p-5'>
            <div className="grid grid-cols-2 gap-4">
                <UserManagement />
                <PermissionSettings />
            </div>
            <div className='mt-3'>
                <SystemStatusMonitor />
            </div>
        </div>
    </div>
  );
};

export default AdminPage;
