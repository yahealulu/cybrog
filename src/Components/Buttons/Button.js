import './Button.css'
const PrimaryButton = (props) => {
  return (
    <div className='button'>

        <a href='#/'>{props.children}</a>
    </div>
  )
}
const SecondaryButton = (props) => {
  return (
    <div className='button'>

        <a href='#/'>{props.children}</a>
    </div>
  )
}

export default PrimaryButton;
export {SecondaryButton};