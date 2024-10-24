const RegistrationFeeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full md:max-w-3xl table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
            <th className="border border-gray-300 px-4 py-2 text-left">India</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Foreign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Industry (without Journal Publication)</td>
            <td className="border border-gray-300 px-4 py-2">Rs. 3000</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Govt./Academic/Research Institutions (without Journal Publication)</td>
            <td className="border border-gray-300 px-4 py-2">Rs. 1500</td>
            <td className="border border-gray-300 px-4 py-2">USD xxx</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Students/Research Scholars (without Journal Publication)</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
            <td className="border border-gray-300 px-4 py-2">USD xxx</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Listeners and Accompanying Persons</td>
            <td className="border border-gray-300 px-4 py-2">Rs. 1000</td>
            <td className="border border-gray-300 px-4 py-2">USD xxx</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Scopus Journal Publication</td>
            <td className="border border-gray-300 px-4 py-2">Rs. 6500</td>
            <td className="border border-gray-300 px-4 py-2">USD xxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFeeTable;
