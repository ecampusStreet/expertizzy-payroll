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
  },

  {
    name: 'Administrator',
    icon: 'description',
    children: [
      {
        name: 'Settings',
        icon: 'settings_applications',
        routeLink: 'settings',
      },
      {
        name: 'Manage branch',
        icon: 'emergency_share',
        routeLink: 'branch',
      },
      {
        name: 'Gateway',
        icon: 'hub',
        routeLink: '',
      },
      {
        name: 'Financial year',
        icon: 'edit_calendar',
        routeLink: 'financialyear',
      },
      {
        name: 'User role',
        icon: 'contact_emergency',
        routeLink: '',
      },
      {
        name: 'Role permission',
        icon: 'person_search',
        routeLink: '',
      },
    ],
  },
  {
    name: 'Employees',
    icon: 'group',
    children: [
      {
        name: 'Overview',
        icon: 'engineering',
        routeLink: 'employee/overview',
      },
      {
        name: 'Employee master data',
        icon: 'groups',
        routeLink: 'employee/list',
      },
      {
        name: 'Attendance',
        icon: 'list_alt',
        routeLink: 'attendance',
      },
      {
        name: 'Reshuffle',
        icon: 'shuffle',
        routeLink: '',
      },
    
    ],
  },
  {
    name: 'Calendar',
    icon: 'calendar_month',
    routeLink: '',
  },
  {
    name: 'Notice',
    icon: 'notification_important',
    routeLink: '',
  },
  {
    name: 'Event',
    icon: 'event',
    routeLink: '',
  },
  {
    name: 'Gallery',
    icon: 'collections_bookmark',
    routeLink: '',
  },
  {
    name: 'Leave management',
    icon: 'fact_check',
    children: [
      {
        name: 'Leave balance',
        icon: 'account_balance_wallet',
        routeLink: 'leave/balance',
      },
      {
        name: 'Apply',
        icon: 'done',
        routeLink: 'leave/apply',
      },
      {
        name: 'History',
        icon: 'history',
        routeLink: 'leave/history',
      },
      {
        name: 'Manage leave',
        icon: 'manage_history',
        routeLink: 'leave/manage',
      },
      {
        name: 'Leave type',
        icon: 'add',
        routeLink: 'leave/leavetype',
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
      },
      {
        name: 'Manage designastion',
        icon: 'work',
        routeLink: 'designation',
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
        routeLink: '',
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
    icon: '',
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
        routeLink: '',
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
