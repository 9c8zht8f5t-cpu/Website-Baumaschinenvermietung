export const fmtEUR = (n: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n);
export const withMwst = (netto: number, mwst: number) => netto * (1 + mwst/100);
export const telHref = (tel: string) => "tel:" + tel.replace(/\s+/g, '');
