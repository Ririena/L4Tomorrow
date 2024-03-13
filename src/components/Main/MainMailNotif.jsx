import { Card, Button} from "@nextui-org/react";
import {AnimatePresence} from "framer-motion"
import {useNavigate} from "react-router-dom"
export default function MainMailNotif() {
  const navigate = useNavigate()
  return (
    <>
    <main className="bg-white relative">
    <div className="flex justify-center items-center">
      <AnimatePresence>
      </AnimatePresence>
    </div>
  
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        color="secondary"
        type=""
        onClick={() => navigate("/me/mail")}
      >
        Back
      </Button>
    </div>
  </main>
  
    </>
  );
}
