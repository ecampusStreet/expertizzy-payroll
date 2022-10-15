  // Side menus
  export const adminMenu = [
      {
          name:'Dashboard',
          icon:' dashboard',
          routeLink:"dashboard"    
        },
        {
          name:'Employees',
          icon:'groups',
          routeLink:"employee/list"
        },
        {
          name:'Attendance',
          icon:'groups',
          routeLink:"attendance"
        },
        
        {
          name:'Departments',
          icon:'badge',
          routeLink:"department/list"
        },
        {
          name:'Events',
          icon:'event_note',
          routeLink:"events"
        },
        {
          name:'Leaves',
          icon:'edit_calendar',
          routeLink:"leave"
        },
        {
          name:'Settings',
          icon:'settings',
          routeLink:"settings"
        },
  ];

  export const userMenu = [
          {
              name:'Dashboard',
              icon:' dashboard',
              routeLink:"dashboard"    
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
              name:'Departments',
              icon:'badge',
              routeLink:"departments"
            },
            {
              name:'Events',
              icon:'event_note',
              routeLink:"events"
            },
            {
              name:'Leaves',
              icon:'edit_calendar',
              routeLink:"leaves"
            },
      ];

     export const adminDashboard =[
      {
        lable: 'Total employees',
        count: 200,
        icon: 'groups',
        url:'admin/employee/list'
      },
      {
        lable: 'Total present employees',
        count: 100,
        icon: 'groups',
        url:'',
      },
      {
        lable: 'Employees activity',
        count: '',
        icon: 'hub',
        url:'',
  
      },
      {
        lable: 'Total leaves request',
        count: 200,
        icon: ' holiday_village',
        url:'',
      },
      
     ];
     export const userDashboard =[
      {
        lable: ' Today Attendence',
        // count: ,
        icon: 'groups',
        url:'/user/employee-list'
      },
      {
        lable: 'My Leaves',
        count: 100,
        icon: 'fact_check',
        url:'/user/leaves',
      },
      {
        lable: 'Salary Slips',
        icon: 'payments',
        url:'/salary-slips',
    
      },
      {
        lable: 'Documents',
        icon: 'article',
        url:'/documents',
      },
     ];