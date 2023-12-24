type Category = string

type Expense = {
  id: string
  name: string
  amount: number
  category: Category | "Other"
  date: string
}

type Income = {
  id: string
  name: string
  amount: number
  date: string
}

export type Month = {
  name:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December"
  days: number
  expectedIncome: string
  expenses: Expense[]
}

export type Budget = {
  year: number
  months: Month[]
  categories: Category[]
}
