import React, { useState, useEffect, useRef } from "react"
import { Budget, Category } from "@/types/budget"
import CategoryCard from "./CategoryCard"

type Page_Props = {
  budget: Budget
  setBudget: (budget: Budget) => void
}

function Page2_SetCategories({ budget, setBudget }: Page_Props) {
  const [cateogyrName, setCategoryName] = useState("")
  const [categoryList, setCategoryList] = useState<string[]>(budget.categories)

  const dragCategory = useRef<number>(-1)
  const dragOverCategory = useRef<number>(-1)

  function handleAddCategory() {
    if (cateogyrName === "") return

    let newBudget = { ...budget }
    newBudget.categories.push(cateogyrName)
    setBudget(newBudget)
    setCategoryName("")
  }

  function handleRemoveCategory(index: number) {
    let newBudget = { ...budget }
    newBudget.categories.splice(index, 1)
    setBudget(newBudget)
  }

  function handleDragEnd() {
    let newBudget = { ...budget }
    let temp = newBudget.categories[dragCategory.current]
    newBudget.categories[dragCategory.current] =
      newBudget.categories[dragOverCategory.current]
    newBudget.categories[dragOverCategory.current] = temp

    dragCategory.current = -1
    dragOverCategory.current = -1

    console.log(newBudget.categories)
    setBudget(newBudget)
  }

  useEffect(() => {
    setCategoryList(budget.categories)
  }, [budget.categories])

  return (
    <div>
      <p className="mb-5 font-motivaRegular text-secondary_white-100">
        Now, let&apos;s add all the categorires you&apos;ll need for your budget
        for.
      </p>

      {/* Category Input Box */}
      <div className="flex justify-around">
        <div>
          <input
            type="text"
            value={cateogyrName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="bg-secondary_white-100 px-2 py-1 rounded-lg w-full"
          />
        </div>

        <button
          className="h-8 px-2 rounded-lg bg-secondary_pink font-motivaRegular text-sm text-secondary_white hover:shadow-lg 
                     hover:shadow-secondary_pink/25 hover:cursor-pointer"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>

      {/* Category List */}
      <ul className="mt-5 max-h-80 overflow-y-scroll rounded-lg p-2">
        {/*Message that only shows if there are one or more categories*/}
        {categoryList.length !== 0 ? (
          <div className="mb-5 font-motivaRegular text-secondary_white-100">
            Rearrange them by dragging and dropping them.
          </div>
        ) : null}

        {categoryList.map((category: Category, index: number) => (
          <li key={index} className="flex justify-center">
            <CategoryCard
              category={category}
              index={index}
              dragCategory={dragCategory}
              dragOverCategory={dragOverCategory}
              handleDragEnd={handleDragEnd}
              handleRemoveCategory={handleRemoveCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page2_SetCategories
