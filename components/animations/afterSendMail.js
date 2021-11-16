import { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/assets/animations/afterSendMail.json'

const AfterSendMail = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })


  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />
  )
}

export default AfterSendMail