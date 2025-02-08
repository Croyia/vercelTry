import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import CustomModal from './components/customs/CustomModal'

function App() {
  const [rejectionCount, setRejectionCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const rejectMessages = [
    "U sure? We'll get chinese! 🥺",
    "Food will be good.. 🥹",
    "Dognap Macchi... 😠"
  ]

  const gifs = [
    "/pusheen-mouse.gif",
    "/pusheen-noodle.gif",
    "/pusheen-sad.gif",
    "/pusheen-mad.gif"
  ]

  const yesButtonSizes = [
    "text-lg px-8",
    "text-xl px-10",
    "text-2xl px-12",
    "text-3xl px-14"
  ]

  const handleReject = () => {
    if (rejectionCount < 3) {
      setRejectionCount(prev => prev + 1)
    }
  }

  const handleYesClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      <div className="bg-white p-8 rounded-3xl max-w-4xl w-full mx-4">
        <div className="flex h-96">
          <div className="w-1/2 flex flex-col items-center justify-center space-y-12">
            <h1 className="text-4xl font-bold text-valentine-primary text-center">
              {rejectionCount > 0 ? rejectMessages[rejectionCount - 1] : "Henlo will u be my valentine?"}
              <div className="flex justify-center mt-4">💝</div>
            </h1>
            
            <div className='flex gap-x-6 items-center'>
              <Button 
                onClick={handleYesClick}
                className={`bg-valentine-primary hover:bg-valentine-primary hover:scale-110 transition-all duration-300 text-white py-3 font-medium ${yesButtonSizes[rejectionCount]}`}
              >
                Yems 🥰
              </Button>
              {rejectionCount < 3 && (
                <Button
                  onClick={handleReject}
                  className={`bg-valentine-error hover:bg-valentine-error hover:scale-110 transition-transform duration-300 text-white px-8 py-3 text-lg font-medium opacity-${100 - (rejectionCount * 20)}`}
                >
                  Naur 😢
                </Button>
              )}
            </div>
          </div>
          
          <div className="w-1/2 p-4 flex items-center justify-center">
            <div className="w-full h-full rounded-lg flex items-center justify-center">
              <img
                src={gifs[rejectionCount]}
                alt="pusheen"
                className="w-64 scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <CustomModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
      
      {/* Subtle background blurs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200 rounded-full opacity-20 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-100 rounded-full opacity-15 blur-[200px]"></div>
      </div>
    </div>
  )
}

export default App