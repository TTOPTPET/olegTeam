import React, {useState} from "react"

import VisibilitySensor from "react-visibility-sensor"

import "./style.sass"

import FirstScreen from "../components/firstScreen/FirstScreen"
import CommonScreen from "../components/commonScreen/CommonScreen"
import Tabs from "../components/tabs/Tabs"
import CardList from "../components/cardList/CardList"
import FeedForm from "../components/feedForm/FeedForm"
import autosize from "autosize"

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
  
  const height = window.screen.height;

  const [tabsClassName, setTabsClassName] = useState("tabs")

  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  let tabs = [
    {title: "Проекты", active: first, name: "projects"},
    {title: "Компетенции", active: second, name: "competencies"},
    {title: "Команда", active: third, name: "teams"}  
  ]

  autosize(document.querySelector("textarea"))

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
    minTopValue={height-250}
    offset={{top:110}}
    onChange={(isVisible) => {
      isVisible ? setFirst(true) : setFirst(false)
    }}>
      <CommonScreen title="/проекты" name="projects">
        <CardList data={projects}/>
      </CommonScreen>
  </VisibilitySensor>
        
  <VisibilitySensor
    partialVisibility={true}
    minTopValue={height-250}
    offset={{top:110}}
    onChange={(isVisible) => {
      isVisible ? setSecond(true) : setSecond(false)
    }}>
      <CommonScreen title="/компетенции" name="competencies">
          <CardList data={competencies}/>
      </CommonScreen>
  </VisibilitySensor>
        
  <VisibilitySensor
    partialVisibility={true}
    minTopValue={height-250}
    offset={{top:110}}
    onChange={(isVisible) => {
      isVisible ? setThird(true) : setThird(false)
    }}>
      <CommonScreen title="/команда" name="teams">
      </CommonScreen>
  </VisibilitySensor>

  <CommonScreen title="/заказать проект">
    <FeedForm/>
  </CommonScreen>

  </>
  
  )}
