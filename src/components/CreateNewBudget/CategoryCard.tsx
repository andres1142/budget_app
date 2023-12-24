import { useState } from "react"
import { set } from "react-hook-form"

type CategoryCard_Props = {
  category: string
  index: any
  dragCategory: any
  dragOverCategory: any
  handleDragEnd: () => void
  handleRemoveCategory: (index: number) => void
}

function CategoryCard({
  category,
  index,
  dragCategory,
  dragOverCategory,
  handleDragEnd,
}: CategoryCard_Props) {
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className={` ${
        !isDragging
          ? "relative bg-secondary_white-200 h-10 w-3/5 flex items-center justify-center rounded-xl mb-2" // Normal State
          : "relative bg-secondary_white-100/20 h-10 w-3/5 flex items-center justify-center rounded-xl mb-2 opacity-70 border-2 border-double border-secondary_white-200" // Dragging State
      }`}
      draggable
      onDragStart={() => {
        setIsHovering(false)
        dragCategory.current = index
        setIsDragging(true)
      }}
      onDragEnter={() => {
        dragOverCategory.current = index
      }}
      onDragEnd={() => {
        handleDragEnd()
        setIsDragging(false)
      }}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      // Sets Hovering State
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <button className="absolute -top-2 -right-2 bg-red-400 rounded-full w-5 h-5 flex items-center justify-center text-secondary_white-200 font-motivaBold text-xl">
          -
        </button>
      )}
      <p className="font-motivaRegular text-secondary_gray-100 overflow-hidden">
        {category}
      </p>
    </div>
  )
}

export default CategoryCard
