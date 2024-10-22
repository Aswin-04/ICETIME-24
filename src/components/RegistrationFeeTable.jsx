
const RegistrationFeeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full  md:max-w-2xl table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
            <th className="border border-gray-300 px-4 py-2 text-left">India</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Foreign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Students</td>
            <td className="border border-gray-300 px-4 py-2">Rs. 1000</td>
            <td className="border border-gray-300 px-4 py-2">$ 20</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Industry delegates, Academicians</td>
            <td className="border border-gray-300 px-4 py-2">Rs. 2500</td>
            <td className="border border-gray-300 px-4 py-2">$ 30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFeeTable;
