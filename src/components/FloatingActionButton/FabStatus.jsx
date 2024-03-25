import { Button } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Divider,
  Image,
  ModalFooter,
} from "@nextui-org/react";
import { useDisclosure, Textarea } from "@nextui-org/react";
export default function FabStatus(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="fixed bottom-4 right-4">
        <Button onClick={onOpen} color="secondary" variant="flat">
          +
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Bikin Status Text
              </ModalHeader>
              <Divider />
              <ModalBody>
                <Textarea
                  label="Status"
                  variant="bordered"
                  color="secondary"
                  id="StatusD"
                  className="hidden"
                  placeholder="Isi Status Teks Anda..."
                />
                <label htmlFor="StatusD">
                  <Image src="/violetP.jpg" />
                </label>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
