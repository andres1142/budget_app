type CurrentPageFooter_Props = {
  currentPage: number
}

function CurrentPageFooter({ currentPage }: CurrentPageFooter_Props) {
  return (
    <div className="flex justify-center items-center gap-3">
      <div
        className={`bg-secondary_pink rounded-full ${
          currentPage === 1 ? "w-3 h-3" : "w-2 h-2"
        }`}
      />
      <div
        className={`bg-secondary_pink rounded-full ${
          currentPage === 2 ? "w-3 h-3" : "w-2 h-2"
        }`}
      />
      <div
        className={`bg-secondary_pink rounded-full ${
          currentPage === 3 ? "w-3 h-3" : "w-2 h-2"
        }`}
      />
    </div>
  )
}

export default CurrentPageFooter
