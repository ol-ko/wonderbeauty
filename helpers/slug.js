export default function slug(str) {
  const regex = /[^a-zA-Z0-9]/gm;
  return str.replace(regex, `-`).toLowerCase();
}
