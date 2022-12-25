import { PencilSimpleLine } from 'phosphor-react'

const AddEntryButton = ({ onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <PencilSimpleLine />
    </button>
  )
}

export default AddEntryButton