import React from 'react'
import PageHeader from '../../../components/common/page-header';
import Spacer from '../../../components/common/spacer';
import AdminCategoryList from '../../../components/dashboard/admin/categories/admin-category-list';
import AdminCategoryNew from '../../../components/dashboard/admin/categories/admin-category-new';

const AdminCategoryNewPage = () => {
  return (
    <>
    {/*<PageHeader title="ADMİN CATEGORY NEW" />*/}
    <Spacer minHeight={50} />
    <AdminCategoryNew/>
    <Spacer />
  </>
  )
}

export default AdminCategoryNewPage