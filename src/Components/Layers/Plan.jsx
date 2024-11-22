import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Features", "Simple (current)", "Pro", "Full"];
const TABLE_ROWS = [
    { name: "Maximal create business cluster", job: "3", date: "7", full: "10" },
    { name: "Coollaboration duration", job: "None", date: "1 month", full: "Forever" },
    { name: "Maximum product in shop", job: "15", date: "30", full: "Unlimited" },
    { name: "Maximum categories", job: "3", date: "5", full: "10" },
    { name: "Advertices", job: "Not allowed", date: "Max: 5", full: "Max: 15" },
    { name: "Advertices duration", job: "Not allowed", date: "5 days", full: "2 weeks" },
    { name: "Price", job: "Free", date: "12 $", full: "20 $" },
];

const Plan = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animatsiya davomiyligi (ms)
          easing: 'ease-in-out', // Animatsiya xarakteri
          once: true, // Sahifada faqat bir marta bajariladi
        });
      }, []);
    return (
        <div className="w-full h-full flex justify-center p-5">
            <div className="overflow-x-auto w-full" data-aos="fade-left">
                <table className="min-w-full table-auto text-left bg-white border-collapse border border-gray-300 shadow-lg">
                    {/* Table Header */}
                    <thead className="bg-gray-100 rounded-lg">
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="px-4 py-2 border-b text-sm font-semibold text-gray-700"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {TABLE_ROWS.map((row, index) => {
                            const { name, job, date, full } = row;
                            const isLast = index === TABLE_ROWS.length - 1;
                            const rowClasses = isLast ? "p-4" : "p-4 border-b border-gray-200";

                            return (
                                <tr key={name} className="hover:bg-gray-700 bg-gray-800">
                                    <td className={rowClasses}>
                                        <span className="text-sm font-medium text-white">{name}</span>
                                    </td>
                                    <td className={rowClasses}>
                                        <span className="text-sm text-white">{job}</span>
                                    </td>
                                    <td className={rowClasses}>
                                        <span className="text-sm text-white">{date}</span>
                                    </td>
                                    <td className={rowClasses}>
                                        <span className="text-sm text-white">{full}</span>
                                    </td>
                                </tr>
                            );
                        })}
                       
                    </tbody>
                </table>
                <div className="buttons flex items-center py-5" style={{background:"transparent", justifyContent:"end", paddingRight:"200px", columnGap:"200px"}}>
                            <Link
                                to="/login"
                                className="inline-block bg-gray-600 hover:border-2 border-gray-700 text-white hover:bg-transparent  hover:border-gray-700 dark:bg-green-800 dark:text-gray-300 dark:hover:bg-green-600 py-3 px-8 rounded-lg text-lg font-semibold transition-colors"
                                style={{marginRight:"150px"}}
                            >
                                Buy
                            </Link>
                            <Link
                                to="/login"
                                className="inline-block bg-gray-600 hover:border-2 border-gray-700 text-white hover:bg-transparent  hover:border-gray-700 dark:bg-green-800 dark:text-gray-300 dark:hover:bg-green-600 py-3 px-8 rounded-lg text-lg font-semibold transition-colors"
                            >
                                Buy
                            </Link>
                            <Link
                                to="/login"
                                className="inline-block bg-gray-600 hover:border-2 border-gray-700 text-white hover:bg-transparent  hover:border-gray-700 dark:bg-green-800 dark:text-gray-300 dark:hover:bg-green-600 py-3 px-8 rounded-lg text-lg font-semibold transition-colors"
                            >
                                Buy
                            </Link>

                        </div>
            </div>
        </div>
    );
};

export default Plan;
