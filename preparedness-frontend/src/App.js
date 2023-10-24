import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState("")
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }
  const resetNameChange = () => {
    setUserName("")
   
  }
  return (
    <div className="body">
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div>
          <Label for="name" className="label">Enter your name</Label>
          <Input 
          className="input-field" 
          placeholder="enter name here"
          value={userName} 
          onChange={handleNameChange}
          />
        </div>
        <div className="buttons">
        <Button className="button1" onClick={openModal}>Click Me</Button>
        <Button className="button1" onClick={resetNameChange}>Reset</Button>
        </div>
        {isModalOpen && (
          <ModalComponent isOpen={isModalOpen} closeModal={closeModal} userName={userName} />
          )}
      </div>
    </div>
  )
}

export default App
