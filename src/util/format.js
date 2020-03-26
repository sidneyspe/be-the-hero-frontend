export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR', {
  month: '2-digit',
  day: '2-digit',
  year: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});
