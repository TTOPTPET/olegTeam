import React, {useState} from 'react';
import axios from 'axios';
import { Input, Textarea, Button } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure } from '@chakra-ui/react'

import './feedForm.sass';

export default function FeedForm() {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
            form.reset();
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
            handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (
        <>
        <form className="feedForm" method='POST' onSubmit={handleOnSubmit} encType="multipart/form-data">
            <Input 
                placeholder='Имя' 
                w="100%" 
                h="80px" 
                bg="#FFFFFF"
                fontSize="25px" 
                mb="36px" 
                type="text" 
                name="Имя" 
                id="name" 
                isRequired={true}/>
            <Input 
                placeholder='Электропочта' 
                w="100%" 
                h="80px" 
                bg="#FFFFFF" 
                fontSize="25px" 
                mb="36px" 
                type="email" 
                name="Электропочта" 
                id="email" 
                isRequired={true}/>
            <Input 
                type="tel" 
                placeholder='Телефон' 
                w="100%" 
                h="80px" 
                bg="#FFFFFF" 
                fontSize="25px" 
                mb="36px" 
                name="Телефон" 
                id="phone" 
                isRequired={true}/>

            <Input type="file" name="file" id="file"/>

            <Textarea 
                placeholder='Пара слов о проекте' 
                w="100%" 
                bg="#FFFFFF" 
                fontSize="25px" 
                mb="36px" 
                id="textarea" 
                h="120px" 
                type="text"     
                name="Сообщение" 
                isRequired={true}/>
            
            <Button 
                colorScheme='blue' 
                w="100%" 
                h="80px" 
                bg="#2B6CB0" 
                fontSize="25px" 
                type="submit">
                    Отправить {`>`}
            </Button>
        </form>

        <Modal isOpen={isOpen} onClose={onClose} closeOnEsc="true" motionPreset="slideInBottom" isCentered="true">
            <ModalOverlay />

            <ModalContent>

            <ModalHeader>Хорошая работа, Олег!</ModalHeader>

            <ModalCloseButton />

            <ModalBody mb="30px">
                Спасибо за заявку, наш менеджер свяжется с вами в ближайшее время.
            </ModalBody>

            </ModalContent>
        </Modal>
        </>
    )
}

// https://getform.io/f/d18d2adc-2e31-4ad7-a661-6219adb46764
