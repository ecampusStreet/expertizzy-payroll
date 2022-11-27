export const urls = {
  login: 'auth/login',
  profile: 'auth/profile/',
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
    update: 'api/department/update',
    getById: 'api/department/',
  },
  leaves: {
    apply: 'api/leave/apply',
    list: 'api/leave/list',
  },
  designation: {
    list: 'api/designation/list',
    delete: 'api/designation/delete/',
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
  }
};
    

