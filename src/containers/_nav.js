import React from 'react'
import CIcon from '@coreui/icons-react'
import { Route } from 'react-router';

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Data pupuk',
    route: '/datapupuk',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Provinsi',
        to: '/datapupuk/provinsi',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Kecamatan',
        to: '/datapupuk/kecamatan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Desa',
        to: '/datapupuk/desa',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Stok pupuk',
        to: '/datapupuk/stok',
      },
    ],
  },
];

export default _nav
