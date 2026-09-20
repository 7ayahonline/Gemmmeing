import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'NEXUS ARENA — Enter the Nexus',description:'A living 3D gaming universe in your browser.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
