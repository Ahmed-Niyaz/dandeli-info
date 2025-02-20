import { FaCity, FaBriefcase, FaHeartbeat, FaAmbulance, FaFireExtinguisher } from "react-icons/fa";

const helplineData = [
  {
    name: "CMC Dandeli",
    helpline: "08284-233472",
    icon: <FaCity />
  },
  {
    name: "Labour Department",
    helpline: "155214",
    icon: <FaBriefcase />
  },
  {
    name: "Health and Family Welfare Services",
    helpline: "104",
    icon: <FaHeartbeat />
  },
  {
    name: "Ambulance Service",
    helpline: "108",
    icon: <FaAmbulance />
  },
  {
    name: "Karnataka State Fire and Emergency Services",
    helpline: "101/112",
    icon: <FaFireExtinguisher />
  }
];

export default function HelplineList() {
  return (
    <div className="p-4 mt-8 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-8 underline text-center">Helpline Numbers</h1>

      {/* Desktop/Table view for medium and larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-gray-400">
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Icon
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-2 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">
                Helpline
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {helplineData.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-2 md:px-4 md:py-3">
                  <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                    <span className="text-blue-600 text-xl">{item.icon}</span>
                  </div>
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-lg break-words">{item.name}</td>
                <td className="px-2 py-2 md:px-4 md:py-3 text-lg break-words">{item.helpline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view: card layout */}
      <div className="block md:hidden space-y-3">
        {helplineData.map((item, index) => (
          <div
            key={index}
            className="shadow-sm rounded-lg p-3 border border-gray-200"
          >
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 mr-3 shrink-0">
                <span className="text-blue-600 text-xl">{item.icon}</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold mb-1">{item.name}</h2>
                <div className="space-y-1 text-sm">
                  <p className="break-words">
                    <span className="font-medium">Helpline:</span> {item.helpline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
