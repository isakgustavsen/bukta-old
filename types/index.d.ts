export type ContentPost = {
  title: string,
  content: array,
  video?: {
    asset: {
      _ref: string,
      _type: string
    },
    _type: string
  }
}