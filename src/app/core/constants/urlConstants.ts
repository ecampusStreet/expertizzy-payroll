export const urls = {
  login: 'api/login',
  profile: 'auth/profile/',
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
    apply: 'api/leave/apply',
    list: 'api/leave/list',
  },
  designation: {
    list: 'api/designation/list',
    create:'api/designation/create',
    update:'api/designation/update/',
    delete: 'api/designation/delete/',
    getById:'api/designation/',
  },

  files:{
    upload:'api/file-upload',
    getFileById:'api/fileUpload/file', //+id
    getFiles:'api/file-upload/list',
    deleteFileById:'api/file-upload/delete/',// +id
    updateFile:'api/file-upload/' //+id
  },
  shifts:{
    list:'api/shift/list'
  },
  financialYear:{
    create:'api/year',
    list:'api/year/list',
  },
  branch:{
    create:'api/branch/create',
    list:'api/branch/list',
    update:'api/branch/update/',
    delete: 'api/branch/delete/',
    getById:'api/branch/',
  },
  attendance:{
    create:'api/attendance/entry/'
  }
};
    

