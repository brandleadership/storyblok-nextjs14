import { ReactNode } from 'react';

export default function ContentWidth({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-12 px-6 lg:px-20 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-20">
            <div className="col-span-12 max-w-full">{children}</div>
        </div>
    );
}
