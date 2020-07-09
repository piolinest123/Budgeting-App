import { Injectable } from '@angular/core';
import { BudgetGroup } from '../shared/models/BudgetGroup';
import { Account } from '../shared/models/Account';
import { Transaction } from '../shared/models/Transaction';
import { initialInfo } from './initialInfo';

@Injectable({
  providedIn: 'root'
})

export class BudgetingInfoService {
  budget:BudgetGroup[];
  transactions:Transaction[];
  accounts:Account[];
  budgetNames:any[];
  accountNames:any[];

  constructor() {
    this.budget = initialInfo.budget;
    this.transactions = initialInfo.transactions;
    this.accounts = initialInfo.accounts;
    this.accountNames = [];
    this.budgetNames = [];
    this.budget.forEach(group => {
      let itemsNames = [];
      group.items.forEach(item => {
        itemsNames.push(item.name);
      })
      this.budgetNames.push({
        title: group.title,
        items: itemsNames
      });
    });
    this.accounts.forEach(account => {
      this.accountNames.push(account.name);
    });
   }

  getAll() {
    return {
      budget: this.budget,
      transactions: this.transactions,
      accounts: this.accounts
    };
  }

  getBudgetNames() {
    return this.budgetNames;
  }

  getAccountNames() {
    return this.accountNames;
  }
  getBudget() {
    return this.budget;
  }

  getTransactions() {
    return this.transactions;
  }

  getAccounts() {
    return this.accounts;
  }

  setBudget(newBudget:BudgetGroup[]) {
    this.budget = newBudget;
    this.changeAccountNames();
    this.changeBudgetNames();
  }

  setTransactions(newTransactions:Transaction[]) {
    this.transactions = newTransactions;
  }

  setAccounts(newAccounts:Account[]) {
    this.accounts = newAccounts;
  }

  changeAccountInfo(index, difference) {
    let oldAccount = this.accounts[index];
    let newAccount = {
      name: oldAccount.name,
      balance: oldAccount.balance
    }
    newAccount.balance += difference;
    this.accounts[index] = newAccount;
  }

  changeOldAccountInfo(index, difference) {
    let oldAccount = this.accounts[index];
    let newAccount = {
      name: oldAccount.name,
      balance: oldAccount.balance
    }
    newAccount.balance -= difference;
    this.accounts[index] = newAccount;
  }
  changeBudgetInfo(groupIndex, itemIndex, difference) {
    let trimmedDiff = Math.round(difference * 1e2) / 1e2;
    let newBudget = this.budget[groupIndex].items[itemIndex];
    newBudget.received -= trimmedDiff;
    this.budget[groupIndex].total_received -= trimmedDiff;
  }

  changeOldBudgetInfo(groupIndex, itemIndex, difference) {
    let trimmedDiff = Math.round(difference * 1e2) / 1e2;
    let newBudget = this.budget[groupIndex].items[itemIndex];
    newBudget.received += trimmedDiff;
    this.budget[groupIndex].total_received += trimmedDiff;
  }
  changeBudgetNames(): void {
    this.budgetNames = [];
    this.budget.forEach(group => {
      let itemsNames = [];
      group.items.forEach(item => {
        itemsNames.push(item.name);
      })
      this.budgetNames.push({
        title: group.title,
        items: itemsNames
      });
    });
  }

  changeAccountNames(): void {
    this.accountNames = [];
    this.accounts.forEach(account => {
      this.accountNames.push(account.name);
    });
  }

  changeTransactionsWithName(oldName:string, newName:string): void {
    let comparer = new Intl.Collator();
    this.transactions.forEach(transaction => {
      if (comparer.compare(transaction.category, oldName) === 0) {
        transaction.category = newName;
      }
    })
  }
}