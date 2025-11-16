// super-light CSV parser (handles commas, quotes, newlines)
export async function fetchCsv(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const text = await res.text();
  return parseCsv(text);
}

function parseCsv(text) {
  const rows = [];
  let cur = '', inQuotes = false, row = [];
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i+1];
    if (c === '"' && inQuotes && n === '"') { cur += '"'; i++; continue; }
    if (c === '"') { inQuotes = !inQuotes; continue; }
    if (c === ',' && !inQuotes) { row.push(cur.trim()); cur = ''; continue; }
    if ((c === '\n' || c === '\r') && !inQuotes) {
      if (cur.length || row.length) { row.push(cur.trim()); rows.push(row); row = []; cur = ''; }
      continue;
    }
    cur += c;
  }
  if (cur.length || row.length) { row.push(cur.trim()); rows.push(row); }
  const [header, ...data] = rows;
  return data.filter(r => r.length && r.some(x => x?.length)).map(r => {
    const o = {};
    header.forEach((h, i) => { o[slug(h)] = r[i] ?? ''; });
    return o;
  });
}

const slug = s => String(s || '')
  .toLowerCase()
  .replace(/\s+/g,'_')
  .replace(/[^\w]/g,'')
  .replace(/_{2,}/g,'_');
