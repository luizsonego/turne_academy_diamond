import { useRouter } from 'next/router'
import Workshop from '../../components/Workshop'

const WorkshopPage = () => {
  const router = useRouter()
  const {workshopId} = router.query

  return <Workshop id={workshopId} pathname={pathname} />

}

export default WorkshopPage