const RegistrationFeeTable = () => {
  return (
    <div className="w-full overflow-x-auto mx-2 md:flex md:justify-center">
      <table className="w-full md:max-w-3xl table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left" rowSpan="2">Category</th>
            <th className="border border-gray-300 px-4 py-2 text-center" colSpan="2">With Publication</th>
            <th className="border border-gray-300 px-4 py-2 text-center" colSpan="2">Without Publication</th>
          </tr>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Fee (Rs.)</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Fee ($)</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Fee (Rs.)</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Fee ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Industry</td>
            <td className="border border-gray-300 px-4 py-2">15000</td>
            <td className="border border-gray-300 px-4 py-2">180</td>
            <td className="border border-gray-300 px-4 py-2">3000</td>
            <td className="border border-gray-300 px-4 py-2">40</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Govt./Academic/Research Institutions</td>
            <td className="border border-gray-300 px-4 py-2">13500</td>
            <td className="border border-gray-300 px-4 py-2">160</td>
            <td className="border border-gray-300 px-4 py-2">1500</td>
            <td className="border border-gray-300 px-4 py-2">20</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Students/Research Scholars</td>
            <td className="border border-gray-300 px-4 py-2">13000</td>
            <td className="border border-gray-300 px-4 py-2">155</td>
            <td className="border border-gray-300 px-4 py-2">1000</td>
            <td className="border border-gray-300 px-4 py-2">12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFeeTable;
