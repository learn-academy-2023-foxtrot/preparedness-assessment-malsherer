import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


const ModalComponent = ({isOpen, closeModal, userName}) => {
  return( 
  <>
  <Modal isOpen={isOpen}>
      <ModalHeader>Hello there, {userName}!</ModalHeader>
      <ModalBody>
      Trick-or-treat jack-o-lantern blood haunted candy spooky afraid. Spooky jack-o-lantern monster monster mummy spooky chainsaw. Abomination chainsaw scare drive-in scare boo monster. Boo spooky chainsaw monster boo haunted scare. Boo black cat pumpkin haunted black cat vampire mummy.
      </ModalBody>
      <ModalFooter>
        <Button onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  </>
  )
}

export default ModalComponent