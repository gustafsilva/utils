/**
 * All prepositions
 * @internal
 */
export const all: string[] = [
  'about',
  'above',
  'across',
  'after',
  'against',
  'along',
  'among',
  'around',
  'at',
  'before',
  'behind',
  'below',
  'beneath',
  'beside',
  'between',
  'beyond',
  'but',
  'by',
  'despite',
  'down',
  'during',
  'except',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'like',
  'near',
  'of',
  'off',
  'on',
  'onto',
  'out',
  'outside',
  'over',
  'past',
  'per',
  'since',
  'through',
  'throughout',
  'till',
  'to',
  'toward',
  'under',
  'underneath',
  'until',
  'up',
  'upon',
  'versus',
  'via',
  'with',
  'within',
  'without'
]

/**
 * Prepositions shorter than 5 characters
 * @internal
 */
export const short: string[] = all.filter(word => word.length < 5)

export default all
