import React from 'react';

const TABLE_HEAD = ["Name", "Job", "Employed", "Actions"];
const TABLE_ROWS = [
  { name: "John Michael", job: "Manager", date: "23/04/18" },
  { name: "Alexa Liras", job: "Developer", date: "23/04/18" },
  { name: "Laurent Perrier", job: "Executive", date: "19/09/17" },
  { name: "Michael Levi", job: "Developer", date: "24/12/08" },
  { name: "Richard Gran", job: "Manager", date: "04/10/21" },
];

const Plan = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto text-left bg-white border-collapse border border-gray-300 shadow-lg">
          {/* Table Header */}
          <thead className="bg-gray-100">
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
              const { name, job, date } = row;
              const isLast = index === TABLE_ROWS.length - 1;
              const rowClasses = isLast ? "p-4" : "p-4 border-b border-gray-200";

              return (
                <tr key={name} className="hover:bg-gray-50">
                  <td className={rowClasses}>
                    <span className="text-sm font-medium text-gray-700">{name}</span>
                  </td>
                  <td className={rowClasses}>
                    <span className="text-sm text-gray-600">{job}</span>
                  </td>
                  <td className={rowClasses}>
                    <span className="text-sm text-gray-600">{date}</span>
                  </td>
                  <td className={rowClasses}>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plan;
