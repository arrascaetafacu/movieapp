const sizes = {
  'sm': 'px-3 py-1',
  'md': 'px-4 py-2',
  'lg': 'px-5 py-3'
}

const colors = {
  'purple': 'bg-purple-500 hover:bg-purple-400 hover:shadow-purple-400',
  'emerald': 'bg-emerald-500 hover:bg-emerald-400 hover:shadow-emerald-400',
  'orange': 'bg-orange-400 hover:bg-orange-500 hover:shadow-orange-500'
}

const Button = ({
  size = 'md',
  color = 'orange',
  ...props
}) => {
  return (
    <button 
      className={
        `rounded text-white font-semibold hover:shadow
        ${colors[color]} 
        ${sizes[size]}`}
        {...props}
      >
      {props.children}
    </button>
  )
}

export default Button