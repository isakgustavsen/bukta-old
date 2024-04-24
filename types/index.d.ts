export type ContentPost = {
  title: string,
  content: array,
  video?: Video,
  gallery?: Array<Image>
}

interface Image{
  _type: String,
  label: String,
  _key: String,
  asset: Asset
}

interface Video{
  _type: String,
  asset: Asset
}

type Asset = {
  _type: String,
  _ref: String
}