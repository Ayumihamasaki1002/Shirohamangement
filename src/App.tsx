import { useRoutes } from 'react-router-dom'
import router from './router'
const App: React.FC = () => {
const Outlet = useRoutes(router)
  return(
    <div className="APP">
        {Outlet}
    </div>
  )
}
  
export default App
