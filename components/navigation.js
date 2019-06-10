import React from 'react';
import Link from 'next/link';

import ExternalLink from './link';

const Navigation = () => <p style={{margin: '2px'}}><Link prefetch href="/"><ExternalLink>[Home]</ExternalLink></Link> &bull; <Link prefetch href="/about"><ExternalLink>[About]</ExternalLink></Link></p>;

export default Navigation;
