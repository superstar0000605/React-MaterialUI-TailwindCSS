import Overview from 'assets/images/dashboard/overview.png';
import Traffic from 'assets/images/dashboard/traffic.png';
import Demographics from 'assets/images/dashboard/demographics.png';
import Conversations from 'assets/images/dashboard/conversation.png';
import Content from 'assets/images/dashboard/content.png';
import Events from 'assets/images/dashboard/event.png';

export const data = {
    dashboard: [
        {
            title: 'Overview',
            image: Overview,
            url: '/dashboard/overview'
        },
        {
            title: 'Traffic sources',
            image: Traffic,
            url: '/dashboard/traffic-sources'
        },
        {
            title: 'User demographics',
            image: Demographics,
            url: '/dashboard/user-demographics'
        },
        {
            title: 'Conversations',
            image: Conversations,
            url: '/dashboard/conversations'
        },
        {
            title: 'Content',
            image: Content,
            url: '/dashboard/content'
        },
        {
            title: 'Events',
            image: Events,
            url: '/dashboard/events'
        }
    ]
};
