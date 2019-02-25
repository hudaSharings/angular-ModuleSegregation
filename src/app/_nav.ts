export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'   
  },   
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-shield',
    children: [
      {
        name: 'Users',
        url: '/admin/users',
        icon: 'icon-people'
      },
      {
        name: 'Companies',
        url: '/admin/Companies',
        icon: 'icon-layers'
      },
      {
        name: 'Plans',
        url: '/admin/plans',
        icon: 'icon-directions'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Inventory',
    url: '/inventory',
    icon: 'icon-grid',
    children: [
      {
        name: 'Items',
        url: '/inventory/items',
        icon: 'icon-cursor ',
        data:{

        }
      },
      {
        name: 'Categories',
        url: '/inventory/categories',
        icon: 'icon-cursor '
      },
      {
        name: 'Groups',
        url: '/inventory/groups',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Purchase',
    url: '/purchase',
    icon: 'icon-note',
    children: [
      {
        name: 'Orders',
        url: '/purchase/orders',
        icon: 'icon-cursor'
      },
      {
        name: 'Invices',
        url: '/purchase/invoices',
        icon: 'icon-cursor'
      },
      {
        name: 'Returns',
        url: '/purchase/returns',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Sales',
    url: '/sales',
    icon: 'icon-star',
    children: [
      {
        name: 'Orders',
        url: '/sales/orders',
        icon: 'icon-cursor'
      },
      {
        name: 'Invices',
        url: '/sales/invoices',
        icon: 'icon-cursor'
      },
      {
        name: 'Returns',
        url: '/sales/returns',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  }
 
  
];
