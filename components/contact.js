import { Form } from "@unform/web"
import { useRef, useState } from "react"
import AfterSendMail from "./animations/afterSendMail"
import PendingSendMail from "./animations/pendingSendMail"
import Input from "./Input"
import MaskInput from "./maskInput"
import TextArea from "./textarea"

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  function handleSubmit(data) {

    console.log(data)
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: 'Email enviado!' }
    })

    fetch('api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(
        res => {
          if (res.status === 200) {
            setStatus({
              submitted: true,
              submitting: false,
              info: { error: false, msg: 'Email enviado!' }
            })
            setTimeout(() => {
              setStatus({
                submitted: false,
                submitting: false,
                info: { error: false, msg: 'Email enviado!' }
              })
            }, 10000)
          }
        },
        error => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: true, msg: 'Erro ao enviar email!' }
          })
        }
      )
  }
  return (
    <section className="pt-20 pb-28 w-full">
      <div className="container mx-auto ">
        <div className="flex flex-wrap items-center md:justify-between justify-center">

          <div className="w-11/12 md:w-4/12 mx-auto text-center">
            <div className="text-sm text-gray-100 font-semibold py-1">
              {status.submitted === true ? (
                <AfterSendMail />
              ) : (
                <Form ref={formRef} className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    className="w-80 md:w-96 bg-gray-50 text-indigo-800 rounded mx-auto border border-gray-200 focus:outline-none focus:border-indigo-500 text-base py-4 px-4 font-semibold"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-80 md:w-96 bg-gray-100 text-indigo-800 rounded mx-auto border border-gray-200 focus:outline-none focus:border-indigo-500 text-base py-4 px-4 font-semibold"
                    required
                  />
                  <MaskInput
                    name="phone"
                    type="text"
                    placeholder="Telefone/Whatsapp"
                    className="w-80 md:w-96 bg-gray-100 text-indigo-800 rounded mx-auto border border-gray-200 focus:outline-none focus:border-indigo-500 text-base py-4 px-4 font-semibold"
                    mask="(99) 9 9999 - 9999"
                    required
                  />
                  <TextArea
                    name="message"
                    type="text"
                    placeholder="Mensagem"
                    className="w-80 md:w-96 bg-gray-100 text-indigo-800 rounded mx-auto border border-gray-200 focus:outline-none focus:border-indigo-500 text-base py-4 px-4 font-semibold resize-y"
                  />

                  {status.submitting === true ?
                    (
                      <button className="w-80 md:w-96 text-gray-50 bg-blue-700 hover:bg-blue-lightest hover:ring-2  px-2 py-5 rounded mx-auto transition-cubic " type="submit"  ><PendingSendMail /></button>
                    ) :
                    (
                      <button className="w-80 md:w-96 text-gray-50 bg-blue-700 hover:bg-blue-lightest hover:ring-2 transform hover:scale-105 px-28 py-5 rounded mx-auto transition-cubic font-semibold" type="submit">Enviar</button>
                    )
                  }
                </Form>
              )}
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}