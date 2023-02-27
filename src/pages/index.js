import React, {useState, useEffect} from "react"

import { Text, ChakraProvider } from "@chakra-ui/react"

import VisibilitySensor from "react-visibility-sensor"
import autosize from "autosize"

import "./style.sass"

import FirstScreen from "../components/firstScreen/FirstScreen"
import CommonScreen from "../components/commonScreen/CommonScreen"
import Tabs from "../components/tabs/Tabs"
import CompetenciesCardList from "../components/competenciesCardList/competenciesCardList"
import FeedForm from "../components/feedForm/FeedForm"
import ProjectsCardList from "../components/projectsCardList/ProjectsCardList"
import AboutContent from "../components/aboutContent/AboutContent"
import TeamCardList from "../components/teamCardList/TeamCardList"
import Footer from "../components/footer/Footer"
import theme from "../components/chakraTheme/chakraTheme"

import laptop from '../images/laptop.png'
import ipad from '../images/ipad.png'
import iphone from '../images/iphone.png'

import avatar from "../images/avatar.jpg"
import kchau from "../images/kchau.jpg"
import shafutinsky from "../images/shafutinsky.jpg"
import pants from "../images/pants.jpg"
import blyat from "../images/blyat.jpg"
import mylo from "../images/mylo.jpg"
import dinozaur from "../images/dinozaur.jpg"
import vitalya from "../images/vitalya.jpg"
import blyazdec from "../images/blyazdec.jpg"
import pizdec from "../images/pizdec.jpg"
import victor from "../images/victor.jpg"

import vector1 from "../images/vector1.png"
import vector2 from "../images/vector2.png"
import vector3 from "../images/vector3.png"
import vector4 from "../images/vector4.png"
import vector5 from "../images/vector5.png"
import vector6 from "../images/vector6.png"
import vector7 from "../images/vector7.png"
import vector8 from "../images/vector8.png"
import vector9 from "../images/vector9.png"


import { Image } from "@chakra-ui/react"

const about = <><Text display="inline" fontFamily="Steppe Bold">OLEG Team</Text> — это инициативная команда любящих своё дело людей. Наша миссия —  создание <Text display="inline" fontFamily="Steppe Bold">уникальных</Text> и <Text display="inline" fontFamily="Steppe Bold">красивых</Text> продуктов для наших клиентов. Мы не боимся сложностей и нагрузок, так что обратившись к нам Вы можете быть уверены, что ваш проект будет реализован <Text display="inline" fontFamily="Steppe Bold">в срок</Text> с использованием самых <Text display="inline" fontFamily="Steppe Bold">актуальных технологий.</Text> Своей деятельностью мы показываем, что создание крутых <Text display="inline" fontFamily="Steppe Bold">сайтов</Text> и <Text display="inline" fontFamily="Steppe Bold">сервисов</Text> в соответствии с требованиями заказчика — это <Text display="inline" fontFamily="Steppe Bold">реальность</Text>. </>

const projects = [
  {title: "Booking", descr: `Онлайн-сервис для автоматизации записи на события. Создавай свои ивенты и записывайся на события, созданные другими пользователями`, link: "olegbooking.ru", adress: "https://www.olegbooking.ru/", image: laptop, right:["-250px", '-60px', '-45px', '0px'], bottom:["20px", '0px', '15px', '15px'], width:["550px", '440px', '300px', '260px']},
  {title: "Printer", descr: "Система дистанционной печати с контролем доступа. Отслеживай использование принтера, отправляй файлы дистанционно, получай копии по прибытии", link: "olegprinter.ru", adress: null, image: ipad, left:["-230px", '-120px', '-70px', '-45px'], bottom:["-90px", '-60px', '-45px', '-55px'], side:"right", width:["470px", '362px', '250px', '266px']},
  {title: "Экспорт расписаний", descr: "Расписание университета в любом календаре. Используй без интернета и сайта университета. Практично и удобно", link: "olegtimetable.ru", adress: "https://maicalendar.github.io/#/", image: iphone, right:["-150px", '-90px', '-35px', '-15px'], bottom:["-60px", '-40px', '-25px', '-10px'], width:["260px", '220px', '150px', '140px']}
]

const competencies = [
  {title: "Сайты", descr: "Интернет-магазины, специализированные сервисы, интерактивные сайты", tech: "Vue.js, React, Redux, MobX, Flask, Asp.Net, Fast Api, Redis, Mongo Db, Celery, PostgreSQL", zIndex: 10},
  {title: "Сборка", descr: "Сборка и публикация проектов, организация работы", tech: "Docker Compose, Nginx, CI CD"},
  {title: "Приложения", descr: "Мульти-, кросcплатформенные, специализированного назначения", tech: "React Native, .NET Core, MAUI, Avalonia UI, Aiogram"},
  {title: "Интернет вещей", descr: "Iot-приложения в мобильной, веб, десктоп разработке", tech: "Kaspersky OS, MQTT"}
]

const managers = [
  {name: "Илья Елисеев", image: pants},
  {name: "Вадим Петров", image: kchau},
  {name: "Владимир Исаев", image: shafutinsky}
]

const programmers = [
  {name: "Федор Родин", image: blyat},
  {name: "Дмитрий Попов", image: blyazdec},
  {name: "Игорь Малыш", image: vitalya},
  {name: "Артемий Зимин", image: victor},
  {name: "Григорий Смехов", image: pizdec},
  {name: "Злата Жёлудева", image: avatar},
  {name: "Максим Рыжов", image: mylo},
  {name: "Никита Рогов", image: dinozaur}
]

export default function Home() {
  
  const [tabsClassName, setTabsClassName] = useState("tabs")

  const [feedBackVisible, setFeedBackVisible] = useState(false)

  let tabs = [
    {title: "О нас", name: "about"},
    {title: "Проекты", name: "projects"},
    {title: "Компетенции", name: "competencies"},
    {title: "Команда", name: "teams"}  
  ]

  useEffect(() => {
    typeof document !== "undefined" && autosize(document.querySelector("textarea"))
  }, [])

  return (
  <>
    <ChakraProvider theme={theme}>
      
      <Image src={vector1} alt="image" pos="absolute" left="0" top="-100px" zIndex="-1"></Image>
      <Image src={vector2} alt="image" pos="absolute" right="0" top="200px" zIndex="-1"></Image>
      <Image src={vector3} alt="image" pos="absolute" left="0" top="1000px" zIndex="-1"></Image>
      <Image src={vector4} alt="image" pos="absolute" right="0" top="1700px" zIndex="-1"></Image>
      <Image src={vector5} alt="image" pos="absolute" left="0" top="2400px" zIndex="-1"></Image>
      <Image src={vector6} alt="image" pos="absolute" right="0" top="3600px" zIndex="-1"></Image>
      <Image src={vector7} alt="image" pos="absolute" left="0" bottom="1700px" zIndex="-1"></Image>
      <Image src={vector8} alt="image" pos="absolute" right="0" bottom="1000px" zIndex="-1"></Image>
      <Image src={vector9} alt="image" pos="absolute" left="0" bottom="0" zIndex="-1"></Image>

      <Tabs data={tabs} tabsClassName={tabsClassName}/>

      <VisibilitySensor
        partialVisibility={true}
        offset={{top:80}}
        onChange={(isVisible) => {
          if (isVisible) {
            setTabsClassName("tabs")
          } else {
            setTabsClassName("tabs__active")
          }
        }}>
          <FirstScreen feedBackVisible={feedBackVisible} tabsClassName={tabsClassName} name="feedform"/>
      </VisibilitySensor>

      <CommonScreen title="О нас" name="about">
        <AboutContent data={about}/>
      </CommonScreen>

      <CommonScreen title="Проекты" name="projects">
        <ProjectsCardList data={projects}/>
      </CommonScreen>

      <CommonScreen title="Компетенции" name="competencies">
        <CompetenciesCardList data={competencies}/>
      </CommonScreen>

      <CommonScreen title="Команда" name="teams">
        <TeamCardList managers={managers} programmers={programmers}/>
      </CommonScreen>

      <VisibilitySensor
        partialVisibility={true}
        onChange={(isVisible) => {
          if (isVisible) {
            setFeedBackVisible(true)
          } else {
            setFeedBackVisible(false)
          }
        }}>
          <CommonScreen title="Заказать проект" name="feedform">
            <FeedForm/>
          </CommonScreen>
      </VisibilitySensor>

      <Footer/>

    </ChakraProvider>

  </>
  
  )}
