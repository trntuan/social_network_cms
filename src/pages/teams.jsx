import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function TeamsPage() {
  return (
    <>
      <Helmet>
        <title> Danh sách nhóm </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
