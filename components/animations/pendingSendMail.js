import { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/assets/animations/pendingSendMail.json'

const PendingSendMail = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Lottie
      options={defaultOptions}
      height={30}
      width={400}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />
  )
}

export default PendingSendMail
