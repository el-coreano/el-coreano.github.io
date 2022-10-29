import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Link {
  path: string;
  label: string;
}
const links: Array<Link> = [{ path: '/about', label: 'about' }];

const NavList = () => {
  return (
    <nav>
      {links.map((link) => (
        <Link href={link.path} key={link.path}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

interface PageLayoutProps {
  metaData: metaData;
  children: React.ReactNode;
}
const PageLayout = ({ metaData, children }: PageLayoutProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <header>
        <NavList />
      </header>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default PageLayout;
