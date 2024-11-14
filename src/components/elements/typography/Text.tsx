'use client';

const Text = ({ children }: { children: string | React.ReactElement }) => {
    return <p className="text-base">{children}</p>;
};

export default Text;
