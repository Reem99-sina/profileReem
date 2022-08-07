import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9zzddx', 'template_8pdmrep', form.current, 'cJX8lyV0BZa4XmtIL')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <article className='contact__option'>

            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>
              reemsina2@gmail.com
            </h5>
            <a href='mailto:reemsina2@gmail.com'>send a message</a>
          </article>
          <article className='contact__option'>

            <BsMessenger className='contact__option-icon' />
            <h4>messenger</h4>
            <h5>
              entertutorials
            </h5>
            <a href='https://m.me/remo.ebrahim'>send a message</a>
          </article>
          <article className='contact__option'>

            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>whatsapp</h4>
            <h5>
              +123456789
            </h5>
            <a href='https://api.whatsapp.com/send?phone=+201129134700'>send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name='message' rows='7' placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'> send a message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact