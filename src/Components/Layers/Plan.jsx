import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PLANS = [
    {
        title: "Simple (current)",
        price: "Free",
        features: [
            "Max: 3 clusters",
            "No collaboration",
            "15 products",
            "3 categories",
            "No advertisements",
        ],
        color: "from-green-400 to-blue-500",
    },
    {
        title: "Pro",
        price: "$12",
        features: [
            "Max: 7 clusters",
            "1 month collaboration",
            "30 products",
            "5 categories",
            "Max: 5 advertisements, 5 days",
        ],
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Full",
        price: "$20",
        features: [
            "Max: 10 clusters",
            "Forever collaboration",
            "Unlimited products",
            "10 categories",
            "Max: 15 advertisements, 2 weeks",
        ],
        color: "from-yellow-400 to-orange-500",
    },
];

const Plan = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col items-center py-10 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-8" data-aos="fade-down">
                Choose Your Plan
            </h1>
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5"
                data-aos="fade-up"
            >
                {PLANS.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center p-6 bg-gradient-to-br ${plan.color} rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                        <h2 className="text-2xl font-extrabold text-white mb-4">
                            {plan.title}
                        </h2>
                        <div className="text-4xl font-bold text-white mb-4">
                            {plan.price}
                        </div>
                        <ul className="text-white text-sm space-y-2 mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                    <span className="text-green-300">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/login"
                            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Choose Plan
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plan;
