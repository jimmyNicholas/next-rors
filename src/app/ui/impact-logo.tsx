import { inter } from './fonts';
import Image from 'next/image';
import impactLogo from '/public/images/logo-impact-english-college.png';

export default function ImpactLogo() {
    return (
        <Image 
            src={impactLogo}
            width={'200'}
            height={'80'}
            alt="Impact English College Pty Ltd"
        />
    );
}