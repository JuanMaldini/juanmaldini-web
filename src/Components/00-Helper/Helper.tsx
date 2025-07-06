export const Email = () => {
  const email = "juan.maldini@outlook.com";
  const subject = encodeURIComponent("Contact");
  const body = encodeURIComponent("Hello Juan,");
  return `mailto:${email}?subject=${subject}&body=${body}`;
};


export const Github = "https://github.com/Juanmaldini";
export const LinkedIn = "https://www.linkedin.com/in/juan-augusto-maldini/";
export const OnedriveLink = "https://1drv.ms/f/s!Ar8ey5uaisekpYhIykoMKDQu1EiUAg";
export const Whatsapp = "https://wa.me/5493576474180";