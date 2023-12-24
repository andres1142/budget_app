import React, { useState, useEffect } from "react"
import { Budget, Category } from "@/types/budget"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import CategoryCard from "./CategoryCard"

type Page_Props = {
  budget: Budget
  setBudget: (budget: Budget) => void
}

function Page2_SetCategories({ budget, setBudget }: Page_Props) {
  const [cateogyrName, setCategoryName] = useState("")
  const [categoryList, setCategoryList] = useState<string[]>(budget.categories)

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

  function onDragEnd(event: any) {
    console.log("drag end")
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
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <div className="mt-5 bg-red-500 h-96 overflow-y-scroll rounded-lg p-2">
          <SortableContext items={categoryList}>
            {categoryList.map((category: Category, index: number) => (
              <CategoryCard
                category={category}
                index={index}
                handleRemoveCategory={handleRemoveCategory}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  )
}

export default Page2_SetCategories
