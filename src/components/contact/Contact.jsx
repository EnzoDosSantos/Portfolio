import './Contact.css'
import { useState, useEffect } from 'react'
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';
import validate from './validate'

const Contact = ({ innerRef }) => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [errors, setErrors] = useState({})
    console.log(errors)

    useEffect(() => {
        setErrors(validate(input))
    }, [])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault()
        if (Object.keys(errors).length > 0) {
           return toast.error("Por favor complete todos los campos.")
        }
        toast(
            `¡Gracias por escribirme, ${input.name}! Te responderé lo más pronto posible.`,
            {
              icon: "😁",
            }
          )
        emailjs.sendForm('service_lx6nkoo', 'template_h5q99uw', e.target, 'bNXGT0sYRezR-bTZJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section ref={innerRef} className="contact">
            <div className="c-top">
                <span>¿Quieres contactarme?</span>
                <span>No lo dudes más, escribeme aqui</span>
            </div>
            <div className="c-buttom">
                <form onSubmit={sendEmail}>
                    <div className="c-input">
                        <input type="text" autoComplete="off" name="email" value={input.email} placeholder="Email" onChange={(e) => handleChange(e)} />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <input type="text" autoComplete="off" name="subject" value={input.subject} placeholder="Asunto (opcional)" onChange={(e) => handleChange(e)} />
                        {errors.subject && <span className="error">{errors.subject}</span>}
                        <input type="text" autoComplete="off" name="name" value={input.name} placeholder="Nombre" onChange={(e) => handleChange(e)} />
                        {errors.name && <span className="error">{errors.name}</span>}
                        <textarea name="message" autoComplete="off" value={input.message} placeholder="Mensaje" onChange={(e) => handleChange(e)} />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Enviar</button>
                 </form>
            </div>
            <Toaster position='rigth'/>
        </section>
    )
}

export default Contact;