const bluePalette = {
  'Sage':'#cdc392',
  'Alabaster':'#e8e5da',
  'Jordy Blue':'#9eb7e5',
  'Cornflower blue':'#648de5',
  'YInMn Blue':'#304c89',
  'text': '#000000'
}

type Palette = {
  primary: string
  secondary: string
  accent: string
  text: string
}

const {
  'Jordy Blue': primary, 
  Alabaster: secondary, 
  'YInMn Blue': accent,
  text
} = bluePalette

const colors: Palette = { primary, secondary, accent, text }

export default colors