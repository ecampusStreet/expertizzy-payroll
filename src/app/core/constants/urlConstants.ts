export const urls = {
  login: 'auth/login',
  profile: 'auth/profile/',
  dashboard:{
    list:'api/admin/dashboard'},
  employee: {
    list: 'api/emp/list',
    byId: 'api/emp/',
    update: 'api/emp/update/',
    create: 'api/emp/create',
    delete: 'api/emp/delete/',
  },
  departments: {
    list: 'api/department/list',
    create: 'api/department/create',
    delete: 'api/department/delete/',
    update: 'api/department/update/',
    getById: 'api/department/',
  },
  leaves: {
    apply: 'api/leave/create/',
    list: 'api/leaveApplication/submitted/',
    balance: 'api/leave/emp/',
    delete: '/api/leaveApplication/delete/',
    approve: 'api/leave/approve/',
    reject: 'api/leave/reject/',
    manage: 'api/leaveList',
    type: 'api/leaveType',
    leaveTypeList: 'api/leaveType/list',
    leaveUpdate: 'api/leaveType/update/',
    leaveDelete:'api/leaveType/delete/'
  },
  designation: {
    list: 'api/designation/list',
    create: 'api/designation/create',
    update: 'api/designation/update/',
    delete: 'api/designation/delete/',
    getById: 'api/designation/',
  },
  financialYear: {
    create: 'api/year',
    list: 'api/year/list',
  },
  branch: {
    create: 'api/branch/create',
    list: 'api/branch/list',
    update: 'api/branch/update/',
    delete: 'api/branch/delete/',
    getById: 'api/branch/',
  },
  attendance: {
    create: 'api/attendance/entry/',
  },
  setting: {
    create:'api/setting/create',
    list:'api/setting/list/',
    update:'api/setting/update/'
  },
  payroll:{
    create:'api/salarybreakups/create',
    list:'api/salarybreakups/list',
    update:'api/salarybreakups/update/',
    delete:'api/salarybreakups/delete/',
    getById:'api/salarybreakups/'
  }
};
