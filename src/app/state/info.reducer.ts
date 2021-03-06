const initialState = {
    accounts: [
        {
            name: 'American Express',
            balance: 1000
        },
        {
            name: 'John Savings',
            balance: 200
        }
    ],
    budget: [
        {
            title: 'Food',
            items: [
              {
                name: 'Groceries',
                budgeted: 100,
                received: 200
              },
              {
                name: 'Dining Out',
                budgeted: 100,
                received: 200
              },
              {
                name: 'Snacks',
                budgeted: 300,
                received: 200
              }
            ],
            total_budgeted: 500,
            total_received: 600
          },
          {
            title: 'Debts',
            items: [
              {
                name: 'Student Loan',
                budgeted: 100,
                received: 200
              },
              {
                name: 'Mortgage',
                budgeted: 100,
                received: 200
              }
            ],
            total_budgeted: 200,
            total_received: 400
          }
    ],
    transactions: [
        {
            account: 'John Savings',
            date: new Date(),
            category: 'Food',
            description: 'First Transaction',
            outflow: 10.20,
            inflow: 0.00
          },
          {
            account: 'American Express',
            date: new Date(),
            category: 'Debts',
            description: 'Second Transaction',
            outflow: 500.00,
            inflow: 0.00
          },
          {
            account: 'John Savings',
            date: new Date(),
            category: 'Savings',
            description: 'Third Transaction',
            outflow: 0.00,
            inflow: 1000.00
          }
    ]
}

export function infoReducer(state = initialState, action: any) {
    switch(action.type) {
        case "LOAD_ALL": {
            return state;
        }
        case "LOAD_TRANSACTIONS": {
            return state.transactions;
        }
        case "LOAD_ACCOUNTS": {
            return state.accounts;
        }
        case "LOAD_BUDGET": {
            return state.budget;
        }
        case "CHANGE_TRANSACTIONS": {
            return state;
        }
        case "CHANGE_ACCOUNTS": {
            return state;
        }
        case "CHANGE_BUDGET": {
            return state;
        }
        default: {
            return state;
        }
    }
}