import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const RecitersScreen = ({ reciters, reciterHandler }) => {
  const [activeId, setActiveId] = useState('')
  let name='AbdiRashiid Xafsa'
  return (
    <div className='min-vh-100 shadow-lg p-3 bg-red '>
      <h1 className='fs-5 fw-bold text-center'>Reciters</h1> <hr />
          <div>
            <div
              onClick={(e) => {
                reciterHandler(name)
                setActiveId(name)
              }}
              className={`d-flex align-items-center py-0 curser fs-6 ${
                name === activeId && 'active'
              }`}
            >
              <FaUserCircle className='fs-3' />
              {/* <span className='ps-3'>{reciter.name}</span> <br /> */}
              <span className='ps-3'>{name}</span> <br />
            </div>
            <hr />
          </div>       
    </div>
  )
}

export default RecitersScreen