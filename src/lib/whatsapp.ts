// TODO: Replace with the official WJIH WhatsApp number before launch.
export const WJIH_WHATSAPP_NUMBER = '966500000000'

export const createWhatsAppUrl = (message?: string): string => {
  const baseUrl = `https://wa.me/${WJIH_WHATSAPP_NUMBER}`

  if (!message) {
    return baseUrl
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}
