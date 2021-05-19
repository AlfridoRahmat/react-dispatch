import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle
  } from '@coreui/react'

  import { DocsLink } from 'src/reusable'
  
  import usersData from '../../users/UsersData'
  
  

  const fields = ['Provinsi','UREA', 'SP36', 'ZA', 'NPK', 'NPK Formula Khusus', 'Organik Granul']
  const Kecamatan = ['umbi','tolol']
    
  const Provinsi = () => {
    return (
       <>
 
 <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
      Data Distribusi Pupuk Provinsi

      <CDropdown className="m-3 d-inline-block">
              <CDropdownToggle color="secondary">
                Nama Kabupaten
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem 
                 >
                {Kecamatan}
                 
                
                  </CDropdownItem>
                
                
                </CDropdownMenu>
            </CDropdown>

            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              color={'dark'}
              border
              size="9px"
             />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
       </>
    )
}

export default Provinsi;
