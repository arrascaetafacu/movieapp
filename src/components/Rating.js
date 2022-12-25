import { ThumbsUp, ThumbsDown, Heart, Confetti } from 'phosphor-react'

const Rating = ({ rating, className }) => {
  switch (rating) {
    case 1:
      return <ThumbsDown className={className}/>
    case 2:
      return <ThumbsUp className={className} />
    case 3:
      return <Heart weight='fill' className={`text-red-500 ${className}`} />
    case 4:
      return <Confetti weight='fill' className={`text-orange-500 ${className}`}/>
    default:
      return null
  }
}

export default Rating