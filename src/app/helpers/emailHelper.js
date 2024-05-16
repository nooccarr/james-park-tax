import emailjs from 'emailjs-com';

export const emailHelper = (formRef) => {
  const serviceId = 'service_tw8y4ed';
  const templateId = 'template_6gij2vn';
  const publicKey = import.meta.env.VITE_EMAILJS_API_KEY;

  emailjs.sendForm(serviceId, templateId, formRef, publicKey).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
};
