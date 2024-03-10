import { Helmet } from 'react-helmet-async';

import { SettingsView } from 'src/sections/settings/view';

// import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function SettingsPage() {
    return (
        <>
            <Helmet>
                <title> Settings | GetRite PT </title>
            </Helmet>

            <SettingsView />
        </>
    );
}
