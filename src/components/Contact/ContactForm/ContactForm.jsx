import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"



const ContactForm = () => {
  const [EmailInfo, setEmailInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [SendOK, setSendOk] = useState(false)
  const refForm = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_qybhjaj"
    const templateId ="template_w2m5dmf"
    const apikey ="mcwEF4gYPlwG9MIst"

    emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
      .then(res=> setSendOk(true))
      .catch(err=> console.log(err))
  }

  if(SendOK){
    return(
      <h1 className=" w-full text-4xl text-center text-complement ">Gracias! nos comunicaremos en breve</h1>
    )
  }
  return (
    <form ref={refForm} onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
      <label htmlFor="name" className="bg-white rounded-xl p-2 flex">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          className="ms-2 w-full outline-none"
          required
          onChange={(e)=> setEmailInfo({...EmailInfo, name:e.target.value})}
        />
      </label>
      <label htmlFor="email" className="bg-white rounded-xl p-2 flex">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          className="ms-2 w-full outline-none"
          required
          onChange={(e)=> setEmailInfo({...EmailInfo, email:e.target.value})}
        />
      </label>
      <label htmlFor="message" className="bg-white rounded-xl p-2 flex">
        Message:
        <textarea
          type="text"
          id="message"
          name="message"
          className="ms-2 w-full outline-none"
          cols="30"
          rows="5"
          required
          onChange={(e)=> setEmailInfo({...EmailInfo, message:e.target.value})}
        />
      </label>
      <input
        type="submit"
        className="w-[180px] h-[40px] self-center bg-primary hover:bg-secondary rounded-lg text-white font-medium"
      />
    </form>
  );
};

export default ContactForm;