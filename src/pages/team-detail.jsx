import { Helmet } from 'react-helmet-async';

import { ProductDetailView } from 'src/sections/product-detail/view';

// ----------------------------------------------------------------------

export default function TeamsPage() {
  return (
    <>
      <Helmet>
        <title> Chi tiết nhóm </title>
      </Helmet>

      <ProductDetailView />
    </>
  );
}