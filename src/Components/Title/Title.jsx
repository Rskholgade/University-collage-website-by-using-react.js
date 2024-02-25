
import './Title.css'
// eslint-disable-next-line react/prop-types
const Title = ({subTitle,title}) => {
  return (
    <div className='Title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
