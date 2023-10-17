export function html(strings: TemplateStringsArray, ...placeholders: any[]) {
  return String.raw(strings, ...placeholders);
}