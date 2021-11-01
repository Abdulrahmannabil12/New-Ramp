export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
    },
 
    
    { section: 'Applications' },
    {
      title: 'eCommerce',
      bullet: 'dot',
      icon: 'flaticon2-list-2',
      svg: './assets/media/svg/icons/Shopping/Cart3.svg',
      root: true,
      permission: 'accessToECommerceModule',
      page: '/ecommerce',
      submenu: [
        {
          title: 'Customers',
          page: '/ecommerce/customers'
        },
        {
          title: 'Products',
          page: '/ecommerce/products'
        },
      ]
    },
   
    { section: 'Custom' },
    {
      title: 'Wizards',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-mail-1',
      svg: './assets/media/svg/icons/Shopping/Box1.svg',
      page: '/wizards',
      submenu: [
       
        {
          title: 'Wizard 4',
          page: '/wizards/wizard-4'
        },
      ]
    },
    {
      title: 'Error Pages',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-list-2',
      svg: './assets/media/svg/icons/Code/Warning-2.svg',
      page: '/error',
      submenu: [
        {
          title: 'Error 1',
          page: '/error/error-1'
        },
     
      ]
    },
  ]
};
