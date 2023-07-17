export async function getData(url:string) {
        const res = await fetch(url, {
        headers: new Headers({
            "Authorization": `Basic ${btoa('adchitects:jsrulezzz')}`
        }),
    })
    const data = await res.json()
    return data
}

