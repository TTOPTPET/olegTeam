import React, {useState} from "react"

import VisibilitySensor from "react-visibility-sensor"

import "./style.sass"

import FirstScreen from "../components/firstScreen/FirstScreen"
import CommonScreen from "../components/commonScreen/CommonScreen"
import Tabs from "../components/tabs/Tabs"
import CardList from "../components/cardList/CardList"

const projects = [
  {title: "Принтер", descr: "Краткое описание проекта", link: "Перейти на сайт сервиса >>>", adress: "https://www.youtube.com/"},
  {title: "Букинг", descr: "Краткое описание проекта", link: "Перейти на сайт сервиса >>>", adress: "https://www.youtube.com/"},
  {title: "хз", descr: "Краткое описание проекта", link: "Перейти на сайт сервиса >>>", adress: "https://www.youtube.com/"}
]

const competencies = [
  {title: ".сайты", descr: "Интернет-магазины, специализированные сервисы, интерактивные сайты", tech: "# Vue.js, React, Redux, MobX, Flask, Asp.Net, Fast Api, Redis, Mongo Db, Celery, PostgreSQL, MySQL"},
  {title: ".сборка", descr: "Сборка и публикация проектов, организация работы", tech: "# Docker Compose, Nginx, CI CD"},
  {title: ".приложения", descr: "Мультиплатформленные, кроссплатформленные приложения специализированного назначения", tech: "# React Native, .Net Core, MAUI, Avalonia UI, Aiogram"},
  {title: ".компьютерное зрение", descr: "Приложения с применением AR-, CV-, DNN-технологий", tech: "# OpenCV, Tensorflow, Vuforia, Keras"},
  {title: ".интернет вещей", descr: "Iot-приложения в мобильной, веб, десктоп разработке", tech: "# Kaspersky OS, MQTT"}
]



export default function Home() {

  const [tabsClassName, setTabsClassName] = useState("tabs")

  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  
  let tabs = [
    {name: "Проекты", active: first},
    {name: "Компетенции", active: second},
    {name: "Команда", active: third}  
  ]

  return (
  <>
  <Tabs data={tabs} tabsClassName={tabsClassName}/>

  <VisibilitySensor
    partialVisibility={true}
    offset={{top:100}}
    onChange={(isVisible) => {
      isVisible ? setTabsClassName("tabs") : setTabsClassName("tabs__active")
    }}>
    <FirstScreen/>
  </VisibilitySensor>

  <VisibilitySensor
    partialVisibility={true}
    minTopValue={550}
    offset={{top:350}}
    onChange={(isVisible) => {
      isVisible ? setFirst(true) : setFirst(false)
    }}>
      <CommonScreen title="/проекты">
        <CardList data={projects}/>
      </CommonScreen>
  </VisibilitySensor>
        
  <VisibilitySensor
    partialVisibility={true}
    minTopValue={550}
    offset={{top: 350}}
    onChange={(isVisible) => {
      isVisible ? setSecond(true) : setSecond(false)
    }}>
      <CommonScreen title="/компетенции">
          <CardList data={competencies}/>
      </CommonScreen>
  </VisibilitySensor>
        
  <VisibilitySensor
    partialVisibility={true}
    minTopValue={550}
    offset={{top: 350}}
    onChange={(isVisible) => {
      isVisible ? setThird(true) : setThird(false)
    }}>
      <CommonScreen title="/команда">
      </CommonScreen>
  </VisibilitySensor>

  <CommonScreen title="/связаться">
  </CommonScreen>

  </>
  
  )}
