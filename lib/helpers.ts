export async function getData(url: string) {
  const res = await fetch(url, {
    headers: new Headers({
      Authorization: `Basic ${btoa("adchitects:jsrulezzz")}`,
    }),
  });
  const data = await res.json();
  return data;
}

export async function getAllPages() {
  const data = await getData("https://adchitects-cms.herokuapp.com/pages");
  return data;
}

export async function getPageById(id: string) {
  const data = await getData(`https://adchitects-cms.herokuapp.com/page/${id}`);
  return data;
}
