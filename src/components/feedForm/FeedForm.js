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
                w={{xl: "600px", lg: '640px', md: '320px', sm: '300px'}} 
                h={{xl: "60px", lg: '60px', md: '50px', sm: '50px'}}
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }}
                fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}}
                lineHeight={{xl: "36px", lg: '29px', md: '22px', sm: '19px'}}
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="20px" 
                type="text" 
                name="Имя" 
                id="name" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>
            <Input 
                placeholder='Электропочта' 
                w={{xl: "600px", lg: '640px', md: '320px', sm: '300px'}} 
                h={{xl: "60px", lg: '60px', md: '50px', sm: '50px'}}
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }}
                fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}}
                lineHeight={{xl: "36px", lg: '29px', md: '22px', sm: '19px'}}
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="20px" 
                type="email" 
                name="Электропочта" 
                id="email" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>
            <Input 
                type="tel" 
                placeholder='Телефон' 
                w={{xl: "600px", lg: '640px', md: '320px', sm: '300px'}} 
                h={{xl: "60px", lg: '60px', md: '50px', sm: '50px'}}
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }} 
                fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}}
                lineHeight={{xl: "36px", lg: '29px', md: '22px', sm: '19px'}}
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="20px" 
                name="Телефон" 
                id="phone" 
                boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)"
                border="none"
                isRequired={true}/>

            <Textarea 
                placeholder='Пара слов о проекте' 
                w={{xl: "600px", lg: '640px', md: '320px', sm: '300px'}}  
                bg="#2D3748"
                _placeholder={{ color:"#F7FAFC" }}
                fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}}
                lineHeight={{xl: "36px", lg: '29px', md: '22px', sm: '19px'}}
                color="#F7FAFC"
                fontFamily="Steppe Medium" 
                mb="20px" 
                id="textarea"
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
                w={{xl: "600px", lg: '640px', md: '320px', sm: '300px'}} 
                h={{xl: "60px", lg: '60px', md: '50px', sm: '50px'}}
                bg="#2B6CB0" 
                fontSize={{xl: "32px", lg: '24px', md: '18px', sm: '16px'}}
                type="submit"
                fontFamily="Steppe Light"
                onClick={onOpen}
                >
                    Отправить {`>`}
            </Button>
        </form>

        <Modal isOpen={isOpen} onClose={onClose} closeOnEsc="true" motionPreset="slideInBottom" isCentered="true" >

            <ModalOverlay bg="rgba(0, 0, 0, 0.56)"/>

            <ModalContent p={{xl: "100px 84px", lg: '82px 60px', md: '75px 20px', sm: '75px 20px'}} h={{xl: "600px", lg: '460px', md: '420px', sm: '420px'}} minW={{xl: "768px", lg: '640px'}} w={{md: '320px', sm: '300px'}} bg="#2D3748">

            <ModalHeader p="0px" color="#F7FAFC" fontSize={{xl: "42px", lg: '40px', md: '24px', sm: '22px'}} lineHeight="100%" fontFamily="Steppe Black" letterSpacing="0.01em">Отлично!</ModalHeader>

            <ModalBody p="0" mt={{xl: "60px", lg: '40px', md: '35px', sm: '35px'}} color="#F7FAFC" fontFamily="Steppe Regular" fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}} lineHeight={{xl: "36px", lg: '29px', md: '22px', sm: '19px'}} letterSpacing="0.01em">
            Ваша заявка успешно отправлена, с Вами скоро свяжутся!
            </ModalBody>

            <Button colorScheme='blue' h={{xl: "60px", lg: '60px', md: '50px', sm: '50px'}} bg="blue.600" color="#F7FAFC" fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}} fontFamily="Steppe Light" onClick={onClose}>
                Хорошая работа, Олег!
            </Button>

            </ModalContent>

        </Modal>
        </>
    )
}


// https://getform.io/f/bcfa04bc-cad5-4c75-85ff-54d688401d79





// https://getform.io/f/d18d2adc-2e31-4ad7-a661-6219adb46764
