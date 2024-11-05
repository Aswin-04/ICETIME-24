const BankDetailsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full md:max-w-3xl table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Bank Name</td>
            <td className="border border-gray-300 px-4 py-2">City Union Bank</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Account Holder Name</td>
            <td className="border border-gray-300 px-4 py-2">Sai Mech</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Account Number</td>
            <td className="border border-gray-300 px-4 py-2">500101012193114</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Account Type</td>
            <td className="border border-gray-300 px-4 py-2">Savings Account</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Branch Name</td>
            <td className="border border-gray-300 px-4 py-2">Poonthandalam Branch</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">City</td>
            <td className="border border-gray-300 px-4 py-2">Chennai</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Branch Code</td>
            <td className="border border-gray-300 px-4 py-2">634</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Bank Address</td>
            <td className="border border-gray-300 px-4 py-2">
              City Union Bank, Sri Sairam Engineering College Campus, Sai Leo Nagar, Poonthandalam, Chennai-600044
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">IFSC Code</td>
            <td className="border border-gray-300 px-4 py-2">CIUB0000634</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BankDetailsTable;
