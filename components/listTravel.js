import { Popover, Transition } from '@headlessui/react'
import { PaperClipIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import Image from 'next/image'

export default function ListTravel({ detail }) {
  console.log(detail)
  return (
    <>
      <div className="flex justify-center items-center bg-blue-lightest">
        <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
          <img className="w-1/2 h-full rounded-l-sm" src={detail?.image || 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} alt={detail.hotel} title={detail.hotel} />
          <div className="w-full flex flex-col">
            <div className="p-4 pb-0 flex-1">
              <h3 className="font-light mb-1 text-grey-darkest">{detail.hotel}</h3>
              <div className="text-xs flex items-center mb-4">
                <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                {detail.citie}, {detail.state}
              </div>
              <span className="text-5xl text-grey-darkest">{detail.eventHour}<span className="text-lg">Horas</span></span>
              <div className="flex items-center mt-4">
                <div className="pr-2 text-xs">
                  <i className="fas fa-wifi text-green"></i> 11/11/2021
                </div>
                <div className="px-2 text-xs">
                  <i className="text-grey-darker far fa-building"></i> Quinta feira
                </div>
              </div>
            </div>
            <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                    ${open ? 'text-indigo-500' : 'text-opacity-90 text-indigo-700 '}
                    text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      Mais Informações
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="fixed z-50 left-0 top-0 w-4/5   mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                              <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{detail.eventTitle}</h3>
                                <p className="mt-1  text-sm text-gray-500">{detail.description}</p>
                              </div>
                              <div className="border-t border-gray-200">
                                <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Tipo de evento</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.type}</dd>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Palestrante</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.palestrante}</dd>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Local</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                      {detail.hotel} <br />
                                      {detail.citie}, {detail.state} <br />
                                      {detail.hotel} <br />
                                    </dd>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Horario</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                      {detail.eventHour}
                                    </dd>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Lider responsável</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                      {detail.lider}
                                    </dd>
                                  </div>
                                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Fechamento</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                      {detail.fechamento}
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <div className={`${open ? 'backdrop-filter backdrop-blur-sm fixed w-screen h-screen z-30 left-0 top-0' : 'close'}`}></div>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
