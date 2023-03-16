export const withDollarSing = (amount: string): string => {
  if (amount.startsWith('-')) return `-$${amount.slice(1)}`
  return `$${amount}`
}
