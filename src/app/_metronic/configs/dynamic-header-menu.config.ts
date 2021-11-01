export const DynamicHeaderMenuConfig = {
  items: [
    {
      title: 'Dashboards',
      root: true,
      alignment: 'left',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
    },
 
    
 
    {
      title: 'Custom',
      root: true,
      alignment: 'left',
      toggle: 'click',
      page: '',
      submenu: [
        {
          title: 'eCommerce',
          bullet: 'dot',
          icon: 'flaticon-business',
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
       
        {
          title: 'Error Pages',
          bullet: 'dot',
          icon: 'flaticon2-list-2',
          page: '/error',
          submenu: [
            {
              title: 'Error 1',
              page: '/error/error-1'
            },
 
          ]
        },
        {
          title: 'Wizards',
          bullet: 'dot',
          icon: 'flaticon2-mail-1',
          page: '/wizards',
          submenu: [
 
            {
              title: 'Wizard 4',
              page: '/wizards/wizard-4'
            },
          ]
        }
      ]
    }
  ]
};
