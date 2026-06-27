// Centralized contact / social links — single source of truth.

export const EMAIL_ADDRESS = "juan.maldini@outlook.com";

export const buildMailto = (
  subject = "Contact",
  body = "Hello Juan,"
): string =>
  `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

export const SOCIAL = {
  email: buildMailto(),
  github: "https://github.com/Juanmaldini",
  gitlab: "https://gitlab.vmoliver.cloud/juanmaldini/",
  linkedin: "https://www.linkedin.com/in/juan-augusto-maldini/",
  onedrive: "https://1drv.ms/f/s!Ar8ey5uaisekpYhIykoMKDQu1EiUAg",
  whatsapp: "https://wa.me/5493576474180",
  discord: "https://discord.com/users/406236129516322817",
} as const;

export const PORTFOLIO_URL = SOCIAL.onedrive;
