export type ChUnit = {
  id: string
  name: string
  copyright_owner: string
  header_image: ChUnitHeaderImage | null
  profile_image: ChUnitProfileImage | null
  language: string
  timezone: string
  header_type: string
  signature_color: string
  default_post_expire_days: number
  ga_tracking_id: string
  website_url: string
  twitter_url: string
  facebook_url: string
  instagram_url: string
  youtube_url: string
}

export type ChUnitHeaderImage = {
  url: string
  thumb_360: string
}

export type ChUnitProfileImage = {
  url: string
  square_200: string
}
export type CuUnit = {
  id: string
  name: string
  timezone: string
  profile_image: CuUnitProfileImage | null
}

export type CuUnitProfileImage = {
  url: string
  thumb_360: string
}

export type Curation = {
  id: string
  content: CurationContent
  published_at: string
  unit: CuUnit
}

export type CurationContent = {
  url: string
  ch_post_id: string
  title: string
  description: string
  image_url: string | undefined
  image_thumb_360: string | undefined
  published_at: string
  deleted: boolean
  unit: ChUnit | null
}
