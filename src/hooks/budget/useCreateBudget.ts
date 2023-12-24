import { Budget, Month } from "@/types/budget"

function useCreateBudget(year: number): Budget {
  const months: Month[] = [
    {
      name: "January",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "February",
      days: 28,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "March",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "April",
      days: 30,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "May",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "June",
      days: 30,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "July",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "August",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "September",
      days: 30,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "October",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "November",
      days: 30,
      expectedIncome: 0,
      expenses: [],
    },
    {
      name: "December",
      days: 31,
      expectedIncome: 0,
      expenses: [],
    },
  ]

  return {
    year,
    months,
    categories: [],
  }
}

export { useCreateBudget }
