import React, {useState} from 'react';
import axios from 'axios';
import { Input, Textarea, Button } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    useToast  } from '@chakra-ui/react'

import './feedForm.sass';

export default function FeedForm() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast()

    const [file, setFile] = useState(undefined)

    const [serverState, setServerState] = useState({
            submitting: false,
            status: null
        });
        const handleServerResponse = (ok, msg, form) => {
            setServerState({
            submitting: false,
            status: { ok, msg }
            });
            if (ok) {
            onOpen()
            form.reset();
            setFile();
            } else {
                form.reset();
                toast({
                    title: 'Ошибка!',
                    description: "Что-то пошло не так, повторите попытку позже.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/d18d2adc-2e31-4ad7-a661-6219adb46764",
            data: new FormData(form)
        })
            .then(r => {
            handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
            handleServerResponse(false, "Error", form);
            });
    };

    function updateSize(e) {
        let file = e?.target?.files[0];
        if (file.size >= 5000000) {
            document.getElementById("uploadInput").value = "";
            return (
                toast({
                    title: 'Ошибка!',
                    description: "Размер файла не должен превышать 5 мб!",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            )
        }
        setFile(file);
      }

    return (
        <>
        <form className="feedForm" method='POST' onSubmit={handleOnSubmit} encType="multipart/form-data">
            <Input 
                placeholder='Имя' 
                w="100%" 
                h="80px" 
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }}
                fontSize="36px"
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="36px" 
                type="text" 
                name="Имя" 
                id="name" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>
            <Input 
                placeholder='Электропочта' 
                w="100%" 
                h="80px" 
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }}
                fontSize="36px"
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="36px" 
                type="email" 
                name="Электропочта" 
                id="email" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>
            <Input 
                type="tel" 
                placeholder='Телефон' 
                w="100%" 
                h="80px" 
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }} 
                fontSize="36px"
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="36px" 
                name="Телефон" 
                id="phone" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>

            <Textarea 
                placeholder='Пара слов о проекте' 
                w="100%" 
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }}
                fontSize="36px"
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="36px" 
                id="textarea" 
                h="120px" 
                type="text"     
                name="Сообщение" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>

            <label class="input-file" >
                <input type="file" name="file" id="uploadInput" onChange={(e) => e?.target?.value && updateSize(e)}/>
                <span class="input-file-btn">{file ? file.name : "Прикрепить файл (до 5 мб)"}</span>           
            </label>

            <div id="e-fileinfo"></div>

            <Button 
                colorScheme='blue' 
                w="100%" 
                h="80px" 
                bg="#2B6CB0" 
                fontSize="32px" 
                type="submit"
                fontFamily="Steppe Medium"
                onClick={onOpen}
                >
                    Отправить {`>`}
            </Button>
        </form>

        <Modal isOpen={isOpen} onClose={onClose} closeOnEsc="true" motionPreset="slideInBottom" isCentered="true" >

            <ModalOverlay/>

            <ModalContent p="126px 100px 106px" h="630px" minW="1024px" bg="#2D3748">

            <ModalHeader p="0px" color="#F7FAFC" fontSize="56px" lineHeight="56px" fontFamily="Steppe Black" letterSpacing="0.01em">Месседж отправлен!</ModalHeader>

            <ModalBody p="0" mt="82px" color="#F7FAFC" fontFamily="Steppe Regular" fontSize="40px" lineHeight="48px" letterSpacing="0.01em">
            Ваша заявка успешно отправлена, с Вами скоро свяжутся!
            </ModalBody>

            <Button colorScheme='blue' h="80px" bg="blue.600" color="#F7FAFC" fontSize="32px" fontFamily="Steppe Medium" onClick={onClose}>
                Хорошая работа, Олег!
            </Button>

            </ModalContent>

        </Modal>
        </>
    )
}


// https://getform.io/f/bcfa04bc-cad5-4c75-85ff-54d688401d79





// https://getform.io/f/d18d2adc-2e31-4ad7-a661-6219adb46764
