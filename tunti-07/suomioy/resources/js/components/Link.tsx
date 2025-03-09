import { Link as InertiaLink } from '@inertiajs/react';
import { FC, ReactNode } from 'react';

type Props = {
    href: string;
    children: ReactNode;
};

const Link: FC<Props> = ({ children, href }) => {
    return (
        <InertiaLink className="text-blue-500 underline" href={href}>
            {children}
        </InertiaLink>
    );
};

export default Link;
