// Side menus
export const adminMenu = [
  {
    name: 'Dashboard',
    icon: ' dashboard',
    routeLink: 'dashboard',
  },
  {
    name: 'Employee master data',
    icon: 'groups',
    routeLink: 'employee/list',
  },
  {
    name: 'Attendance',
    icon: 'groups',
    routeLink: 'attendance',
  },

  {
    name: 'Departments',
    icon: 'badge',
    routeLink: 'department/list',
  },
  {
    name: 'Designation',
    icon: 'badge',
    routeLink: 'designation/list',
  },
  {
    name: 'Events',
    icon: 'event_note',
    routeLink: 'events',
  },
  {
    name: 'Leaves',
    icon: 'edit_calendar',
    routeLink: 'leave',
  },
  {
    name: 'Settings',
    icon: 'settings',
    routeLink: 'settings',
  },
  //
];

export const userMenu = [
  {
    name: 'Dashboard',
    icon: ' dashboard',
    routeLink: 'dashboard',
  },
  // {
  //   name:'Employees',
  //   icon:'groups',
  //   routeLink:"employees"
  // },
  // {
  //   name:'Attendance',
  //   icon:'groups',
  //   routeLink:"attendance"
  // },
  {
    name: 'Departments',
    icon: 'badge',
    routeLink: 'departments',
  },
  {
    name: 'Events',
    icon: 'event_note',
    routeLink: 'events',
  },
  {
    name: 'Leaves',
    icon: 'edit_calendar',
    routeLink: 'leaves',
  },
];

export const employeeOverview = [
  {
    lable: 'Total employees',
    count: 200,
    icon: 'groups',
    url: 'expertizzy/employee/list',
  },
  {
    lable: 'Total female employees',
    count: 100,
    icon: 'woman',
    url: 'expertizzy/employee/list',
    paramQuery: { type: 'female' },
  },
  {
    lable: 'Total male employees',
    count: 100,
    icon: 'man',
    url: 'expertizzy/employee/list',
    paramQuery: { type: 'male' },
  },
];

export const adminDashboard = [
  {
    lable: 'Total employees',
    count: 200,
    icon: 'groups',
    url: 'expertizzy/employee/list',
  },
  {
    lable: 'Total present employees',
    count: 100,
    icon: 'groups',
    url: '',
  },
  {
    lable: 'Employees activity',
    count: '',
    icon: 'hub',
    url: '',
  },
  {
    lable: 'Total leaves request',
    count: 200,
    icon: ' holiday_village',
    url: '',
  },
];
export const userDashboard = [
  {
    lable: ' Today Attendence',
    // count: ,
    icon: 'groups',
    url: '/user/employee-list',
  },
  {
    lable: 'My Leaves',
    count: 100,
    icon: 'fact_check',
    url: '/user/leaves',
  },
  {
    lable: 'Salary Slips',
    icon: 'payments',
    url: '/salary-slips',
  },
  {
    lable: 'Documents',
    icon: 'article',
    url: '/documents',
  },
];

export const menu = [
  {
    name: 'Dashboard',
    icon: ' dashboard',
    routeLink: 'dashboard',
    hide:false,
    key:'dashboard'
  },

  {
    name: 'Administrator',
    icon: 'description',
    hide:false,
    children: [
      {
        name: 'Settings',
        icon: 'settings_applications',
        routeLink: 'settings',
        hide:false,
      },
      {
        name: 'Manage branch',
        icon: 'emergency_share',
        routeLink: 'branch',
        hide:false,
        key:'branch'
      },
      {
        name: 'Gateway',
        icon: 'hub',
        hide:false,
        routeLink: '',
      },
      {
        name: 'Financial year',
        icon: 'edit_calendar',
        routeLink: 'financialyear',
        hide:false,
      },
      {
        name: 'User role',
        icon: 'contact_emergency',
        routeLink: 'roles',
        hide:false,
      },
      {
        name: 'Role permission',
        icon: 'person_search',
        routeLink: '',
        hide:false,
      },
    ],
  },
  {
    name: 'Employees',
    icon: 'group',
    hide:false,
    key:'employee',
    children: [
      {
        name: 'Overview',
        icon: 'engineering',
        routeLink: 'employee/overview',
        hide:false,
        key:'manage'
      },
      {
        name: 'Employee master data',
        icon: 'groups',
        routeLink: 'employee/list',
        hide:false,
        key:'manage'
      },
      {
        name: 'Attendance',
        icon: 'list_alt',
        routeLink: 'attendance',
        hide:false,
        key:'attendance'
      },
      {
        name: 'Reshuffle',
        icon: 'shuffle',
        hide:false,
        key:'manage',
        routeLink: 'reshuffle',
      },
    
    ],
  },
  {
    name: 'Calendar',
    icon: 'calendar_month',
    routeLink: '',
    hide:false,
  },
  {
    name: 'Event',
    icon: 'event',
    routeLink: 'event',
    hide:false,
    children:[
      {
        name: 'Notice',
        icon: 'notification_important',
        routeLink: '',
      },
      {
        name: 'Event',
        icon: 'event',
        routeLink: 'event',
      },
      {
        name: 'Holidays',
        icon: 'festival',
        routeLink: 'holiday',
      },
    ],
  },
  {
    name: 'Gallery',
    icon: 'collections_bookmark',
    routeLink: '',
    hide:false,
  },
  {
    name: 'Leave management',
    icon: 'fact_check',
    hide:false,
    key:'leaveApplication',
    children: [
      {
        name: 'Leave balance',
        icon: 'account_balance_wallet',
        routeLink: 'leave/balance',
        hide:false,
        key:'view'
      },
      {
        name: 'Apply',
        icon: 'done',
        routeLink: 'leave/apply',
        hide:false,
        key:'add'
      },
      {
        name: 'History',
        icon: 'history',
        routeLink: 'leave/history',
        hide:false,
        key:'view'
      },
      {
        name: 'Manage leave',
        icon: 'manage_history',
        routeLink: 'leave/manage',
        hide:false,
        key:'manage'
      },
      {
        name: 'Leave type',
        icon: 'add',
        routeLink: 'leave/leavetype',
        hide:false,
        key:'leaveType'
      },
    ],
  },
  {
    name: 'Human resource',
    icon: 'diversity_3',
    children: [
      {
        name: 'Manage department',
        icon: 'badge',
        routeLink: 'department',
        key:'department',
        hide:false
      },
      {
        name: 'Manage designastion',
        icon: 'work',
        routeLink: 'designation',
        key:'designation',
        hide:false
      },
     
      {
        name: 'Offer letter',
        icon: 'drafts',
        routeLink: '',
      },
      {
        name: 'Appointment letter',
        icon: 'post_add',
        routeLink: '',
      },
      {
        name: 'Off bording',
        icon: '',
        routeLink: '',
      },
      {
        name: 'Relieving letter',
        icon: 'mail',
        routeLink: '',
      },
      {
        name: 'Experience letter',
        icon: 'mail',
        routeLink: '',
      },
      {
        name: ' Manage refferals',
        icon: 'manage_accounts',
        routeLink: '',
      },
    ],
  },
  {
    name: ' Employee activity',
    icon: 'local_activity',
    routeLink: '',
  },
  {
    name: 'Work timings',
    icon: 'timer',
    children: [
      {
        name: 'Shifts',
        icon: 'punch_clock',
        routeLink: 'shifts/list',
      },
    ],
  },
  {
    name: ' Assets management',
    icon: 'web_asset',
    routeLink: '',
  },
  {
    name: ' Remainder notes',
    icon: 'note_alt',
    routeLink: '',
  },
  {
    name: ' My refferals ',
    icon: 'transcribe',
    routeLink: '',
  },
  {
    name: ' Help desk',
    icon: 'live_help',
    routeLink: '',
  },
  {
    name: ' Payroll',
    icon: 'receipt_long',
    children: [
      {
        name: 'Salary grade',
        icon: 'grade',
        routeLink: 'payroll',
      },
      {
        name: 'Make payment ',
        icon: 'payments',
        routeLink: '',
      },
      {
        name: 'Payment history',
        icon: 'account_balance_wallet',
        routeLink: '',
      },
    ],
  },
];



export const permissions={
activity:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
announcement:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
assetdetail:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
assets:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
attendance:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
dashboard:{
    accessible:false,
    view:false,
    manage:false
},

department:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false, 
    manage:false
},
designation:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
employee:{
  accessible:true,
  view:true,
  add:false,
  update:false,
  delete:false,
  manage:false
},
event:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
fileUpload:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
gallery:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
helpdesk:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
holiday:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
leaveApplication:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
leaveBalance:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false, 
    manage:false      
},
leaveType:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,  
    manage:false     
},
branch:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,  
    manage:false     
},
myreferral:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,  
    manage:false     
},

notice:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,  
    manage:false     
},
remindernote:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false, 
    manage:false      
},
role:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
salarybreakups:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
setting:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
shift:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
},
financialYear:{
    accessible:false,
    view:false,
    add:false,
    update:false,
    delete:false,
    manage:false
}}
