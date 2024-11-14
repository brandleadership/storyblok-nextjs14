'use client';

const Lead = ({ children }: { children: string | React.ReactElement }) => {
    return <p className="text-lg">{children}</p>;
};

export default Lead;
