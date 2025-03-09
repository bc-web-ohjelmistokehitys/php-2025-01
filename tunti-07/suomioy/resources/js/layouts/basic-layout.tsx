import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    aside?: ReactNode;
};

const BasicLayout: FC<Props> = ({ aside, children }) => {
    return (
        <div className="bg-background container mx-auto my-4 grid grid-cols-1 gap-4 rounded-2xl p-4 md:grid-cols-3">
            <header className="col-span-1 bg-amber-300 md:col-span-3">Suomen nimet 2025 PRO</header>

            <main className="col-span-1 bg-amber-500 md:col-span-2">{children}</main>

            <aside className="col-span-1 bg-blue-300 md:col-span-1">{aside}</aside>

            <footer className="col-span-1 bg-green-300 md:col-span-3">Footer</footer>
        </div>
    );
};

export default BasicLayout;
