import React from 'react';
import Link from 'next/link';

// @ts-ignore
import ExternalLink from './link';

const Navigation = (): JSX.Element => <p style={{margin: '2px'}}><Link prefetch scroll={false} href="/"><ExternalLink>[Home]</ExternalLink></Link> &bull; <Link prefetch scroll={false} href="/about"><ExternalLink>[About]</ExternalLink></Link></p>;

export default Navigation;
