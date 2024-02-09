import { Helmet } from 'react-helmet-async';

import { PurchaseView } from 'src/sections/purchase/view';

// ----------------------------------------------------------------------

export default function purchasePage() {
  return (
    <>
      <Helmet>
        <title> Purchase | Minimal UI </title>
      </Helmet>

      <PurchaseView />
    </>
  );
}
