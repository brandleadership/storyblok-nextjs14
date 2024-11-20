import ContentWidth from '../layouts/ContentWidth';

export default function Form() {
    return (
        <ContentWidth>
            <div className="mt-8 max-w-md text-left">
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="">Full name</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=""
                        />
                    </label>
                    <label className="block">
                        <span className=" ">Email address</span>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="john@example.com"
                        />
                    </label>
                    <label className="block">
                        <span className=" ">When is your event?</span>
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </label>
                    <label className="block">
                        <span className=" ">What type of event is it?</span>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option>Corporate event</option>
                            <option>Wedding</option>
                            <option>Birthday</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className=" ">Additional details</span>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows={3}
                        ></textarea>
                    </label>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0"
                                    />
                                    <span className="ml-2">
                                        Email me news and special offers
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWidth>
    );
}
