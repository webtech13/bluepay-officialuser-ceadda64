
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Transaction } from "../../types/transaction";

// Define a custom color for bluepay, you might want to add this to your tailwind.config.js
// For demonstration, I'm defining it here or you can assume it's already in your Tailwind config.
const bluepayColors = {
  bluepay: {
    blue: '#3B82F6', // A shade of blue, you can adjust this
  },
};


// Component to display the "Important Information" from the image
const ImportantInformation = () => {
  return (
    <div className="bg-blue-600 rounded-xl p-6 shadow-md text-white mb-6"> {/* Changed background to blue */}
      <h2 className="text-xl font-bold mb-4">Important Information</h2>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">How to Buy BPC Code</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Click "Buy BPC" from dashboard</li>
          <li>Fill details and amount</li>
          <li>Complete payment for BPC code</li>
          <li>Use code for airtime & withdrawals</li>
        </ul>
      </div>
    </div>
  );
};

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Recent Transactions</h3>
        {/* Using a custom bluepay-blue color */}
        <Button variant="ghost" className="h-8 px-2 text-blue-600"> 
          View All <ArrowRight size={16} />
        </Button>
      </div>
      
      <div className="space-y-3">
        {transactions.slice(0, 5).map(transaction => (
          <div key={transaction.id} className="flex justify-between py-2 border-b border-gray-100">
            <div>
              <p className="font-medium">{transaction.type}</p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
              {transaction.recipient && (
                <p className="text-xs text-gray-500">{transaction.recipient}</p>
              )}
            </div>
            <div className="text-right">
              <p className="font-semibold">{transaction.amount}</p>
              <p className={`text-xs ${transaction.status === "Completed" ? "text-green-500" : "text-orange-500"}`}>
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage of both components (you would render this in your main App or Dashboard component)
const App = () => {
  // Dummy transaction data for demonstration
  const dummyTransactions: Transaction[] = [
    { id: '1', type: 'Payment Sent', date: '2025-05-28', amount: '-₦5,000', status: 'Completed', recipient: 'John Doe' },
    { id: '2', type: 'Airtime Top-up', date: '2025-05-27', amount: '-₦1,000', status: 'Completed' },
    { id: '3', type: 'Withdrawal', date: '2025-05-26', amount: '-₦10,000', status: 'Pending' },
    { id: '4', type: 'Payment Received', date: '2025-05-25', amount: '+₦7,500', status: 'Completed', recipient: 'Jane Smith' },
    { id: '5', type: 'Electricity Bill', date: '2025-05-24', amount: '-₦3,000', status: 'Completed' },
  ];

  return (
    <div className="p-4">
      {/* Important Information section (mimicking the image) */}
      <ImportantInformation />

      {/* Recent Transactions section */}
      <RecentTransactions transactions={dummyTransactions} />
    </div>
  );
};

export default App;
