export const urls = {
  login: 'api/login',
  profile: 'auth/profile/',
  dashboard:{
    list:'api/admin/dashboard'},
  employee: {
    list: 'api/emp/list',
    byId: 'api/emp/',
    update: 'api/emp/update/',
    create: 'api/emp/create',
    delete: 'api/emp/delete/',
    overview:'api/emp/overview'
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

  files:{
    upload:'api/file-upload',
    getFileById:'api/fileUpload/file', //+id
    getFiles:'api/file-upload/list',
    deleteFileById:'api/file-upload/delete/',// +id
    updateFile:'api/file-upload/' //+id
  },
  shifts:{
    list:'api/shift/list',
    update:'api/shift/update/',
    delete:'api/shift/delete/',
    getById:'api/shift/',
    create:'api/shift/create'
  },
  financialYear:{
    create:'api/year',
    list:'api/year/list',
  },
  branch: {
    create: 'api/branch/create',
    list: 'api/branch/list',
    update: 'api/branch/update/',
    delete: 'api/branch/delete/',
    getById: 'api/branch/',
  },
  attendance: {
    create: 'api/attendance/emp/',
  },
  setting: {
    create:'api/setting/create',
    list:'api/setting/list/',
    update:'api/setting/update/'
  },
  holiday:{
    create:'api/holiday/add',
    list:'api/holiday/list',
    delete:'api/holiday/delete/',
    update:'api/holiday/update/',
    getById:'api/holiday/'
  },
  payroll:{
    create:'api/salarybreakups/create',
    list:'api/salarybreakups/list',
    update:'api/salarybreakups/update/',
    delete:'api/salarybreakups/delete/',
    getById:'api/salarybreakups/'
  },
  roles:{
    list:'api/role/list',
    create:'api/role',
    getId:'api/role/',
    delete:'',
},
reshuffle:{
  designation:'api/designationRotation/emp/',
  department:'api/departmentRotation/emp/ ',
  branch:'api/branchRotation/emp/',
  shift:'api/shiftRotation/emp/',
  grade:'api/salaryGradeRotation/emp/'
},
shift:{
  list:'api/shift/list'
}
}
