import { Dialog, Transition } from "@headlessui/react"
import { useCreateBudget } from "@/hooks/budget/useCreateBudget"
import { useState } from "react"
import { Fragment } from "react"
import { Page1_SetMonths, Page2_SetCategories, Page3_SetCurrentMonth } from "."
import Image from "next/image"
import CurrentPageFooter from "./CurrentPageFooter"

function CreateNewBudgetModal() {
  const curYear = new Date().getFullYear()
  const [budget, setBudget] = useState(useCreateBudget(curYear))
  const [curPage, setCurPage] = useState(1)

  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" onClose={() => {}}>
          {/*Blur background*/}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-secondary_gray-100/25" />
          </Transition.Child>

          {/*Modal*/}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="h-full flex items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg h-5/6 max-h-3xl transform overflow-hidden rounded-2xl bg-secondary_gray p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium font-motivaMedium text-secondary_white-200"
                  >
                    My New Budget:
                  </Dialog.Title>
                  <div className="mt-5">
                    {/*Pages*/}
                    {curPage === 1 ? (
                      <Page1_SetMonths budget={budget} setBudget={setBudget} />
                    ) : curPage === 2 ? (
                      <Page2_SetCategories
                        budget={budget}
                        setBudget={setBudget}
                      />
                    ) : (
                      <Page3_SetCurrentMonth />
                    )}

                    {/*Page Control*/}
                    <div className="absolute bottom-10 inset-x-0 grid grid-cols-3 items-center">
                      {
                        /*Left Arrow*/
                        curPage !== 1 ? (
                          <button
                            className="flex justify-center items-center"
                            onClick={() => {
                              setCurPage(curPage - 1)
                            }}
                          >
                            <Image
                              src="left_arrow.svg"
                              width={30}
                              height={30}
                              alt="arrow-left"
                            />
                          </button>
                        ) : (
                          <div />
                        )
                      }

                      <CurrentPageFooter currentPage={curPage} />
                      {
                        /*Right Arrow*/
                        curPage !== 3 ? (
                          <button
                            className="flex justify-center items-center"
                            onClick={() => {
                              setCurPage(curPage + 1)
                            }}
                          >
                            <Image
                              src="right_arrow.svg"
                              width={30}
                              height={30}
                              alt="arrow-right"
                            />
                          </button>
                        ) : (
                          <div />
                        )
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CreateNewBudgetModal
