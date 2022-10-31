export const urls = {
    login:'auth/login',
    profile :'auth/profile/',
    employee:{
        list:'api/emp/list',
        byId:'api/emp/',
        create:'api/emp/create',
        delete:'api/emp/delete/',
        update:'api/emp/update/'
    },
    departments :{
        list:'api/department/list',
        create:'api/department/create',
        delete:'api/department/delete/',
        update:'api/department/update',
        getById : 'api/department/'
    },
    leaves:{
        apply:'api/leave/apply',
        list:'api/leave/list'
    }
}