/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import LandingLayout from 'layout/LandingLayout';
import ApplyBeta from 'pages/landing-page/apply-beta';
import AboutUs from 'pages/landing-page/about-us/index';
import HowItWorks from 'pages/landing-page/how-it-works/index';
import ContactUs from 'pages/landing-page/contact-us/index';
import Home from 'pages/landing-page/home/index';
const LandingPage = Loadable(lazy(() => import('pages/landing-page')));

const LandingRoutes = {
    path: '',
    children: [
        {
            path: '',
            element: <LandingPage />
        },
        {
            path: 'apply-beta',
            element: <ApplyBeta />
        },
        {
            path: 'about-us',
            element: <AboutUs />
        },
        {
            path: 'how-it-works',
            element: <HowItWorks />
        },
        {
            path: 'contact-us',
            element: <ContactUs />
        }
    ]
};

export default LandingRoutes;
