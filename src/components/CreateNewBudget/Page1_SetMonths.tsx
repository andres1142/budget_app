import { useState, useEffect } from "react"
import { Budget } from "@/types/budget"

type Page_Props = {
  budget: Budget
  setBudget: (budget: Budget) => void
}

function Page1_SetMonths({ budget, setBudget }: Page_Props) {
  const [total, setTotal] = useState(0)

  /**
   * Calculates the total expected income for the budget
   *
   * @param budget The budget to calculate the total expected income for
   * @returns The total expected income for the budget
   */
  function calculateTotal(budget: Budget) {
    let total = 0
    budget.months.forEach((month) => {
      total += Number(month.expectedIncome)
    })
    return total
  }

  useEffect(() => {
    setTotal(calculateTotal(budget))
  }, [budget])

  return (
    <div>
      <p className="mb-5 font-motivaRegular text-secondary_white-100">
        You don&apos;t have a budget for {budget.year} yet. Let&apos;s create
        one now.
      </p>

      <p className="mb-5 font-motivaRegular text-secondary_white-100">
        First, let&apos;s set your expected income for each month. So that we
        can calculate your average income.
      </p>

      <div className="mx-3">
        {/*Grid*/}
        <div className="grid grid-cols-3">
          {budget.months.map((month, i) => {
            return (
              <div key={i} className="grid grid-rows-2 gap-1 items-center mb-4">
                {/*Month Name*/}
                <span className="text-motivaLight text-secondary_white-100 text-center">
                  {month.name}
                </span>

                {/*Expected Income Input*/}
                <div className="flex justify-center items center">
                  <input
                    type="number"
                    value={month.expectedIncome}
                    className="bg-secondary_white-100 px-2 py-1 w-3/4 rounded-lg"
                    onChange={(e) => {
                      const newBudget = { ...budget }
                      newBudget.months[i].expectedIncome = String(
                        e.target.value
                      )
                      setBudget(newBudget)
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/*Total*/}
        <p className="font-motivaRegular text-secondary_white-100 text-center my-5">
          You are expected to make ${total} this year.
        </p>
      </div>
    </div>
  )
}

export default Page1_SetMonths
