export type Page = {
    id: string,
    url: string,
}
export type Section = {
    img?: string,
    text?: string,
    type?: string
    author?: string
}
export type PageProps = Page & {
    sections: Section[]
}