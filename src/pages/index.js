import React, {useState} from "react"

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

import laptop from '../images/laptop.png'
import ipad from '../images/ipad.svg'
import iphone from '../images/iphone.svg'

import photo from "../images/photo.png"

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

const about = "блаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблабла"


const projects = [
  {title: "Booking", descr: `Онлайн-сервис для автоматизации записи на события. Создавай свои ивенты и записывайся на события, созданные другими пользователями`, link: "olegbooking.ru", adress: "https://www.olegbooking.ru/", image: laptop, right:"-160px", bottom:"40px", side:"left"},
  {title: "Printer", descr: "Система дистанционной печати с контролем доступа. Отслеживай использование принтера, отправляй файлы дистанционно, получай копии по прибытии", link: "olegbooking.ru", adress: "https://www.olegbooking.ru/", image: ipad, left:"-270px", bottom:"-150px", side:"right"},
  {title: "Экспорт расписаний", descr: "Расписание университета в любом календаре. Используй без интернета и сайта университета. Практично и удобно", link: "olegbooking.ru", adress: "https://www.olegbooking.ru/", image: iphone, right:"-330px", bottom:"-20px", side:"left"}
]

const competencies = [
  {title: "Сайты", descr: "Интернет-магазины, специализированные сервисы, интерактивные сайты", tech: "Vue.js, React, Redux, MobX, Flask, Asp.Net, Fast Api, Redis, Mongo Db, Celery, PostgreSQL", zIndex: 10},
  {title: "Сборка", descr: "Сборка и публикация проектов, организация работы", tech: "Docker Compose, Nginx, CI CD"},
  {title: "Приложения", descr: "Мульти-, кросcплатформенные, специализированного назначения", tech: "React Native, .NET Core, MAUI, Avalonia UI, Aiogram"},
  {title: "Интернет вещей", descr: "Iot-приложения в мобильной, веб, десктоп разработке", tech: "Kaspersky OS, MQTT"}
]

const managers = [
  {name: "Илья Елисеев", image: photo},
  {name: "Вадим Петров", image: photo},
  {name: "Владимир Исаев", image: photo}
]

const programmers = [
  {name: "Федор Родин", image: photo},
  {name: "Дмитрий Попов", image: photo},
  {name: "Игорь Малыш", image: photo},
  {name: "Артемий Зимин", image: photo},
  {name: "Григорий Смехов", image: photo},
  {name: "Злата Жёлудева", image: photo},
  {name: "Максим Рыжов", image: photo},
  {name: "Никита Рогов", image: photo}
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
 
  autosize(document.querySelector("textarea"))

  return (
  <>

  <Image src={vector1} alt="image" pos="absolute" left="0" top="-100px" zIndex="-1"></Image>
  <Image src={vector2} alt="image" pos="absolute" right="0" top="200px" zIndex="-1"></Image>
  <Image src={vector3} alt="image" pos="absolute" left="0" top="1000px" zIndex="-1"></Image>
  <Image src={vector4} alt="image" pos="absolute" right="0" top="2200px" zIndex="-1"></Image>
  <Image src={vector5} alt="image" pos="absolute" left="0" top="3450px" zIndex="-1"></Image>
  <Image src={vector6} alt="image" pos="absolute" right="0" top="4600px" zIndex="-1"></Image>
  <Image src={vector7} alt="image" pos="absolute" left="0" bottom="1950px" zIndex="-1"></Image>
  <Image src={vector8} alt="image" pos="absolute" right="0" bottom="1200px" zIndex="-1"></Image>
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

  </>
  
  )}
