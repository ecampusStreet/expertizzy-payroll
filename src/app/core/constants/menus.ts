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
    key:'dashboard',
    permissionKey:'dashboard',
    permissions:{}
  },

  {
    name: 'Administrator',
    icon: 'description',
    hide:false,
    permissionKey:'administrator',
    permissions:{},
    children: [
      {
        name: 'Settings',
        icon: 'settings_applications',
        routeLink: 'settings',
        hide:false,
        permissionKey:'manage',
        permissions:{},
      },
      {
        name: 'Manage branch',
        icon: 'emergency_share',
        routeLink: 'branch',
        hide:false,
        permissionKey:'manage',
        permissions:{},
        key:'branch'
      },
      {
        name: 'Gateway',
        icon: 'hub',
        hide:false,
        routeLink: '',
        permissionKey:'mane',
        permissions:{},
      },
      {
        name: 'Financial year',
        icon: 'edit_calendar',
        routeLink: 'financialyear',
        hide:false,
        permissionKey:'manage',
        permissions:{}
      },
      {
        name: 'User role',
        icon: 'contact_emergency',
        routeLink: 'roles',
        hide:false,
        permissionKey:'manage',
        permissions:{},
      },
      // {
      //   name: 'Role permission',
      //   icon: 'person_search',
      //   routeLink: '',
      //   hide:false,
      // },
    ],
  },
  {
    name: 'Employees',
    icon: 'group',
    hide:false,
    key:'employee',
    permissionKey:'employee',
    permissions:{},
    children: [
      // {
      //   name: 'Overview',
      //   icon: 'engineering',
      //   routeLink: 'employee/overview',
      //   hide:false,
      //   key:'manage',
      //   permissionKey:'manage',
      //   permissions:{},
      // },
      {
        name: 'Employee master data',
        icon: 'groups',
        routeLink: 'employee/list',
        hide:false,
        key:'manage',
        permissionKey:'manage',
        permissions:{},
      },
      {
        name: 'Attendance',
        icon: 'list_alt',
        routeLink: 'attendance',
        hide:false,
        key:'attendance',
        permissionKey:'view',
        permissions:{},
      },
      {
        name: 'Reshuffle',
        icon: 'shuffle',
        hide:false,
        key:'manage',
        routeLink: 'reshuffle',
        permissionKey:'manage',
        permissions:{},
      },
    
    ],
  },
  {
    name: 'Calendar',
    icon: 'calendar_month',
    routeLink: '',
    hide:false,
    permissionKey:'calendar',
    permissions:{},
    children:[
      {
        name: 'Notice',
        icon: 'notification_important',
        routeLink: 'notice',
        permissionKey:'view',
        permissions:{},
      },
      {
        name: 'Events',
        icon: 'event',
        routeLink: 'event',
        permissionKey:'view',
        permissions:{},
      },
      {
        name: 'Holidays',
        icon: 'festival',
        routeLink: 'holiday',
        permissionKey:'view',
        permissions:{},
      },
    ],
  },
  // {
  //   name: 'Gallery',
  //   icon: 'collections_bookmark',
  //   routeLink: '',
  //   hide:false,
  //   permissionKey:'gallery',
  //   permissions:{},
  // },
  {
    name: 'Leave management',
    icon: 'fact_check',
    hide:false,
    key:'leaveApplication',
    permissionKey:'leaveApplication',
    permissions:{},
    children: [
      {
        name: 'Leave balance',
        icon: 'account_balance_wallet',
        routeLink: 'leave/balance',
        hide:false,
        key:'view',
        permissionKey:'view',
        permissions:{},
      },
      {
        name: 'Apply',
        icon: 'done',
        routeLink: 'leave/apply',
        hide:false,
        key:'add',
        permissionKey:'add',
        permissions:{},
      },
      {
        name: 'History',
        icon: 'history',
        routeLink: 'leave/history',
        hide:false,
        key:'view',
        permissionKey:'view',
        permissions:{},
      },
      {
        name: 'Manage leave',
        icon: 'manage_history',
        routeLink: 'leave/manage',
        hide:false,
        key:'manage',
        permissionKey:'manage',
        permissions:{},
      },
      {
        name: 'Leave type',
        icon: 'add',
        routeLink: 'leave/leavetype',
        hide:false,
        key:'leaveType',
        permissionKey:'manage',
        permissions:{},
      },
    ],
  },
  {
    name: 'Human resource',
    icon: 'diversity_3',
    permissionKey:'humanResource',
    permissions:{}, 
    children: [
      {
        name: 'Manage department',
        icon: 'badge',
        routeLink: 'department',
        key:'department',
        hide:false,
        permissionKey:'manage',
        permissions:{}, 
      },
      {
        name: 'Manage designastion',
        icon: 'work',
        routeLink: 'designation',
        key:'designation',
        hide:false,
        permissionKey:'manage',
        permissions:{}, 
      },
      // {
      //   name: 'Off bording',
      //   icon: '',
      //   routeLink: '',
      //   permissionKey:'manage',
      //   permissions:{}, 
      // },
      // {
      //   name: ' Manage refferals',
      //   icon: 'manage_accounts',
      //   routeLink: '',
      //   permissionKey:'manage',
      //   permissions:{}, 
      // },
    ],
  },
  {
      name: 'Documents',
      icon: 'picture_as_pdf',
      routeLink: 'document',
      permissionKey:'documents',
      permissions:{}, 
    },
  // {
  //   name: ' Employee activity',
  //   icon: 'local_activity',
  //   routeLink: '',
  // },
  {
        name: 'Shifts',
        icon: 'punch_clock',
        routeLink: 'shifts/list',
        permissionKey:'shift',
        permissions:{}, 
  },
  // {
  //   name: ' Assets management',
  //   icon: 'web_asset',
  //   routeLink: '',
  //   permissionKey:'assets',
  //   permissions:{},  // {
  //   name: ' Assets management',
  //   icon: 'web_asset',
  //   routeLink: '',
  //   permissionKey:'assets',
  //   permissions:{}, 
  // },
  // },
  // {
  //   name: ' Remainder notes',
  //   icon: 'note_alt',
  //   routeLink: '',
  // },
  // {
  //   name: ' My refferals ',
  //   icon: 'transcribe',
  //   routeLink: '',
  // },
  // {
  //   name: ' Help desk',
  //   icon: 'live_help',
  //   routeLink: '',
  //   permissionKey:'helpDesk',
  //   permissions:{}, 
  // },
  {
    name: ' Payroll',
    icon: 'receipt_long',
    permissionKey:'payroll',
    permissions:{}, 
    children: [
      {
        name: 'Salary grade',
        icon: 'grade',
        routeLink: 'payroll',
        permissionKey:'manage',
        permissions:{}, 
      },
      {
        name: 'Make payment ',
        icon: 'payments',
        routeLink: 'payroll/payments',
        permissionKey:'manage',
        permissions:{}, 
      },
      // {
      //   name: 'Payment history',
      //   icon: 'account_balance_wallet',
      //   routeLink: '',
      //   permissionKey:'manage',
      //   permissions:{}, 
      // },
    ],
  },
];

export const holiDays =[
  {name:'January',data:[]},
  {name:'February',data:[]},
  {name:'March',data:[]},
  {name:'April',data:[]},
  {name:'May',data:[]},
  {name:'June',data:[]},
  {name:'July',data:[]},
  {name:'August',data:[]},
  {name:'September',data:[]},
  {name:'October',data:[]},
  {name:'November',data:[]},
  {name:'December',data:[]},
]

// export const EventData =[]
