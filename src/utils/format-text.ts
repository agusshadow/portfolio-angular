export function formatText(text: string): string {
  text = text.replace(/[^a-zA-Z0-9]/g, ' ');
  text = text.replace(/\b\w/g, (letra) => letra.toUpperCase());
  return text;
}
