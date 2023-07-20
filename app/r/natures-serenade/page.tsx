import { redirect } from 'next/navigation';
import React from 'react';
import { headers } from 'next/headers';

const RedirectNaturesSerenadeChannel = () => {
    const headersList = headers();
    const userAgent = headersList.get('user-agent');

    let link = 'https://youtube.com/@NaturesSerenadeYt';
    if( /Android|iPhone|iPad|iPod/i.test(userAgent || "") ) {
        link = 'vnd.youtube://channel/UCIQovvh_jJJowjlD8hpzY0w';
    }
    redirect(link);
};

export default RedirectNaturesSerenadeChannel;
