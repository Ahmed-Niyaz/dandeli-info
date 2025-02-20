import Image from "next/image";
import bankData from "../../../../data/banksData.json";

const BankTable = () => {
  return (
    <div className="p-4 mt-8 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-8 underline text-center">Banks</h1>

      {/* Desktop/Table view for medium and larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-gray-400 ">
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Logo
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Branch
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                IFSC
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Address
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Contact
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bankData.map((bank, index) => (
              <tr key={index}>
                <td className="px-2 py-2 md:px-4 md:py-3">
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                    <Image
                      src={"https://imgs.search.brave.com/semj0l48CuSRAuCy-5pyHuarj0VffguQwFblXUQJ5nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2Nob29sLXBp/Y3R1cmUtYmFja2dy/b3VuZC1rYngzd2tx/dWYwbGJsc3g3Lmpw/Zw"}
                      alt={bank.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-sm break-words">{bank.name}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-sm break-words">{bank.branch}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-sm break-words">{bank.ifsc}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-sm break-words max-w-[200px]">{bank.address}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-sm break-words">{bank.contact_number}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-sm break-words">{bank.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view: card layout */}
      <div className="block md:hidden space-y-3">
        {bankData.map((bank, index) => (
          <div
            key={index}
            className="shadow-sm rounded-lg p-3 border border-gray-200"
          >
            <div className="flex items-start">
              <div className="relative w-8 h-8 mr-3 shrink-0">
                <Image
                  src={"https://imgs.search.brave.com/semj0l48CuSRAuCy-5pyHuarj0VffguQwFblXUQJ5nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2Nob29sLXBp/Y3R1cmUtYmFja2dy/b3VuZC1rYngzd2tx/dWYwbGJsc3g3Lmpw/Zw"}
                  alt={bank.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold mb-1">{bank.name}</h2>
                <div className="space-y-1 text-xs text-gray-500">
                  <p className="break-words">
                    <span className="font-medium">Branch:</span> {bank.branch}
                  </p>
                  <p className="break-words">
                    <span className="font-medium">IFSC:</span> {bank.ifsc}
                  </p>
                  <p className="break-words">
                    <span className="font-medium">Address:</span> {bank.address}
                  </p>
                  <p className="break-words">
                    <span className="font-medium">Contact:</span> {bank.contact_number}
                  </p>
                  <p className="break-words">
                    <span className="font-medium">Email:</span> {bank.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankTable;