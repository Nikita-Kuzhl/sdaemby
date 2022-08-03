export interface INews {
  totalItems: number
  news: INewsItem[]
  totalPages: number
  currentPage: number
}
export interface INewsItem {
  id: number
  name: string
  text: string
  img: string
  date: string
}
