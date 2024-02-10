import { Helmet } from 'react-helmet-async';

import { InboxView } from 'src/sections/inbox/view';

// ----------------------------------------------------------------------

export default function InboxPage() {
  return (
    <>
      <Helmet>
        <title> Inbox | Minimal UI </title>
      </Helmet>

      <InboxView />
    </>
  );
}
