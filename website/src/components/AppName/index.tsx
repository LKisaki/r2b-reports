import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AppName() {
    const {siteConfig} = useDocusaurusContext();
    const {title} = siteConfig;
    
    return <span >{title}</span>;
}